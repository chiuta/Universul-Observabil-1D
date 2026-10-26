// UO-1D 2.0.0 — Călătoria luminii (foton pe axă). Rulare: node tests/light.test.mjs   (rețea blocată, file://)
import {createRequire} from "module"; const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require("playwright");
import path from "node:path"; import {fileURLToPath} from "node:url";
const HERE = path.dirname(fileURLToPath(import.meta.url)), APP = "file://" + path.join(HERE, "..", "index.html");
let fails = 0, passes = 0; const check = (n, c, x) => { c ? (passes++, console.log("  ok  " + n)) : (fails++, console.log("FAIL  " + n + (x !== undefined ? "  -> " + JSON.stringify(x).slice(0, 300) : ""))); };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ["--no-sandbox"]});
async function open(hash = "", w = 1280, h = 800, opts = {}) {
  const ctx = await b.newContext({viewport: {width: w, height: h}, ...opts}); await ctx.route(/^https?:/, r => r.abort());
  const p = await ctx.newPage(); p.errs = []; p.on("pageerror", e => p.errs.push(String(e))); p.on("console", m => { if (/Content Security Policy|Refused to/i.test(m.text())) p.errs.push(m.text()); });
  await p.goto(APP + hash); await p.waitForTimeout(1200); p.ctx = ctx; return p;
}
console.log("UO-1D — Călătoria luminii");
let p = await open();
check("butonul 💡 există și panoul e ascuns", await p.evaluate(() => !!document.getElementById("btnLight") && document.getElementById("ljBox").hidden));
// fizică
const phys = await p.evaluate(() => {
  const chi = ljChiInf(), t1 = ljTimeOfA(1), age = universeAge();
  const gi = GALAXIES.findIndex(g => /GN-z11/.test(g.n)), I0 = ljIn(gi, 0), I1 = ljIn(gi, 1), Im = ljIn(gi, .5);
  const am = GALAXIES.findIndex(g => /Andromeda/.test(g.n)), A = ljIn(am, .5);
  const o0 = ljOut(0), o1 = ljOut(1), om = ljOut(.5);
  return {chi, t1, age, I0z: I0.z, I0L: I0.L, I1z: I1.z, I1co: I1.co, mono: I0.L > Im.L && Im.L > I1.L, Imz: Im.z, zlb: GALAXIES[gi].z, startAge: I0.start.age, pdStart: I0.start.pd, coStart: I0.start.co,
          Aco: A.co, Aloc: A.a, o0chi: o0.chi, o1chi: o1.chi, omchi: om.chi, o1a: o1.aFut, reach: ljReach(chi)};
});
check("orizont de evenimente ≈ 16,3–17,0 Gly (ΛCDM Planck, fără radiație)", phys.chi > 16000 && phys.chi < 17000, phys.chi);
check("vârsta ljTimeOfA(1) ≈ universeAge() (±0,5 %)", Math.abs(phys.t1 / phys.age - 1) < 0.005, [phys.t1, phys.age]);
check("foton incoming: la start z = z-ul galaxiei, la sosire z = 0", Math.abs(phys.I0z - phys.zlb) < 1e-9 && phys.I1z === 0 && phys.I1co === 0, phys);
check("foton incoming: timpul rămas scade monoton", phys.mono);
check("GN-z11: la emisie Universul avea sub 1 Gyr, distanța proprie la plecare mult mai mică decât cea comobilă", phys.startAge > 0 && phys.startAge < 1000 && phys.pdStart < phys.coStart / 10, [phys.startAge, phys.pdStart, phys.coStart]);
check("obiect local (Andromeda): a = 1, distanță în scădere liniară", phys.Aloc === 1 && phys.Aco > 0, phys);
check("foton outgoing: 0 la start, crește monoton, saturează sub orizont", phys.o0chi === 0 && phys.omchi > 0 && phys.o1chi > phys.omchi && phys.o1chi < phys.chi && phys.o1chi > 0.9 * phys.chi, phys);
check("a viitor mare la 10^6 Myr", phys.o1a > 1e5, phys.o1a);
check("obiecte accesibile: unele da, unele nu", phys.reach.n > 10 && phys.reach.n < phys.reach.m, phys.reach);
// UI incoming
await p.keyboard.press("j"); await p.waitForTimeout(200);
check("tasta J deschide panoul", await p.evaluate(() => !document.getElementById("ljBox").hidden && document.getElementById("btnLight").getAttribute("aria-expanded") === "true"));
let txt = await p.textContent("#ljOut");
check("rezumat incoming: vârsta Universului la emisie + evenimente Pământ", /Universului|Universe/.test(txt) && /Gyr|Myr/.test(txt), txt.slice(0, 200));
await p.evaluate(() => { const s = document.getElementById("ljPos"); s.value = 1000; s.dispatchEvent(new Event("input", {bubbles: true})); });
txt = await p.textContent("#ljOut");
check("la 100 % progresul = durata totală", /Travel time so far|Timp de călătorie|călătorie/.test(txt) || /Gyr/.test(txt), txt.slice(0, 160));
// canvas: pixel galben în dreptul fotonului după mutarea sliderului la 50 %
await p.evaluate(() => { const s = document.getElementById("ljPos"); s.value = 500; s.dispatchEvent(new Event("input", {bubbles: true})); });
const painted = await p.evaluate(() => { const c = ljCurrent(), W = state.W, cv = document.getElementById("rayCanvas"); const x = Math.round(fracToX(projectAxis(c.v, state.mode), W)), y = Math.round(state.H / 2); const d = cv.getContext("2d").getImageData(x * state.dpr, y * state.dpr, 1, 1).data; return [x, d[0], d[1], d[2]]; });
check("fotonul e desenat pe axă (pixel luminos)", painted[1] > 200 && painted[2] > 200, painted);
// moduri de axă
for (const m of ["comoving", "redshift", "scale", "lookback"]) {
  await p.selectOption("#modeSel", m);
  const ok = await p.evaluate(() => { const c = ljCurrent(); return Number.isFinite(c.v) && Number.isFinite(c.v0); });
  check("mod axă " + m + ": poziție finită", ok);
}
// play/pause
await p.evaluate(() => { const s = document.getElementById("ljPos"); s.value = 0; s.dispatchEvent(new Event("input", {bubbles: true})); });
await p.click("#ljPlay"); await p.waitForTimeout(600);
const q1 = await p.evaluate(() => LJ.q); check("play avansează fotonul", q1 > 0.02 && q1 < 1, q1);
await p.click("#ljPlay"); const q2 = await p.evaluate(() => LJ.q); await p.waitForTimeout(300);
check("pauza oprește fotonul", (await p.evaluate(() => LJ.q)) === q2);
// outgoing
await p.click("#ljModeOut"); await p.waitForTimeout(100);
check("mod outgoing: galaxia ascunsă, text cu orizont", await p.evaluate(() => document.getElementById("ljGalRow").style.display === "none") && /Gly/.test(await p.textContent("#ljOut")), await p.textContent("#ljOut"));
await p.evaluate(() => { const s = document.getElementById("ljPos"); s.value = 1000; s.dispatchEvent(new Event("input", {bubbles: true})); });
check("outgoing la 100 %: ≈100 % din limită", /9\d[.,]?\d* ?%|100/.test(await p.textContent("#ljOut")), await p.textContent("#ljOut"));
// tastele din panou nu mută galaxia
await p.click("#ljModeIn"); await p.focus("#ljGal"); const sel0 = await p.evaluate(() => state.selected); await p.keyboard.press("ArrowRight");
check("săgeată în panou nu schimbă galaxia selectată", (await p.evaluate(() => state.selected)) === sel0);
await p.keyboard.press("Escape"); check("Escape închide panoul", await p.evaluate(() => document.getElementById("ljBox").hidden));
// buton din panoul galaxiei
await p.evaluate(() => selectGalaxy(GALAXIES.findIndex(g => /Andromeda/.test(g.n)))); await p.waitForTimeout(200);
await p.click("#actLight"); check("butonul din panoul galaxiei deschide călătoria pentru galaxia selectată", await p.evaluate(() => !document.getElementById("ljBox").hidden && LJ.gi === state.selected));
// Calea Lactee: fără călătorie
await p.evaluate(() => { ljSelectGalaxy(0); LJ.q = 0; ljRedraw(); });
check("Calea Lactee: mesaj fără călătorie", /origine|origin/.test(await p.textContent("#ljOut")), await p.textContent("#ljOut"));
// tabel cu coloana 2D
await p.evaluate(() => { ljClose(); openTable(); });
const lk = await p.evaluate(() => { const a = document.querySelector("#tblBody td.lnk a"); return {n: document.querySelectorAll("#tblBody td.lnk a").length, h: a.href, rel: a.rel, t: a.target}; });
check("tabel: 112 linkuri 2D, noopener+_blank, spre 2D", lk.n === 112 && /^https:\/\/chiuta\.github\.io\/Universul-Observabil-2D\/#g=\d+&z=3&gn=/.test(lk.h) && /noopener/.test(lk.rel) && lk.t === "_blank", lk);
check("fără erori JS/CSP", p.errs.length === 0, p.errs);
await p.ctx.close();
// limbi
for (const l of ["ro", "fr", "it", "es", "pt", "de", "hu", "en"]) {
  const q = await open("", 1280, 800); await q.evaluate(l => setLang(l), l); await q.keyboard.press("j"); await q.waitForTimeout(150);
  const r = await q.evaluate(() => ({t: document.getElementById("ljTitle").textContent, o: document.getElementById("ljOut").textContent, miss: /\{[a-zA-Z]+\}/.test(document.getElementById("ljOut").textContent)}));
  const tr = l === "en" || r.t !== "💡 LIGHT JOURNEY";
  check("limba " + l + ": titlu tradus, fără {variabile} rămase", tr && !r.miss && r.o.length > 30, r);
  await q.evaluate(() => ljSetMode("out")); const o2 = await q.textContent("#ljOut"); check("limba " + l + ": outgoing fără {variabile}", !/\{[a-zA-Z]+\}/.test(o2) && o2.length > 30, o2);
  await q.ctx.close();
}
// reduced motion: play sare la final, fără animație
p = await open("", 1280, 800, {reducedMotion: "reduce"}); await p.keyboard.press("j"); await p.click("#ljPlay");
check("prefers-reduced-motion: fără animație (sare la final)", await p.evaluate(() => LJ.q === 1 && !LJ.playing)); await p.ctx.close();
// mobil
p = await open("", 360, 640); await p.keyboard.press("j"); await p.waitForTimeout(150);
const mob = await p.evaluate(() => { const r = document.getElementById("ljBox").getBoundingClientRect(); return {l: r.left, r: r.right, w: innerWidth, sw: document.documentElement.scrollWidth}; });
check("360 px: panoul încape în ecran, fără defilare orizontală", mob.l >= 0 && mob.r <= mob.w + 1 && mob.sw <= mob.w + 1, mob);
await p.ctx.close();
await b.close(); console.log(fails ? fails + " eșecuri, " + passes + " reușite" : passes + " reușite, toate trecute"); process.exit(fails ? 1 : 0);
