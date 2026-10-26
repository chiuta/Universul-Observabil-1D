// UO-1D 1.3.11 — preferințe corupte și permalink extrem. Rulare: node robustness.test.mjs <dir1D>   (rețea blocată, file://)
import {createRequire} from "module"; const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require("playwright");
let fails = 0; const check = (n, c, x) => { c ? console.log("  ok  " + n) : (fails++, console.log("FAIL  " + n + (x !== undefined ? "  -> " + JSON.stringify(x) : ""))); };
const d1 = process.argv[2] || process.cwd();
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
async function run(ls, hash) {
  const ctx = await b.newContext({viewport: {width: 1280, height: 800}}); await ctx.route(/^https?:/, r => r.abort());
  await ctx.addInitScript(o => { for (const k in o) localStorage.setItem(k, o[k]); }, ls);
  const p = await ctx.newPage(); const errs = []; p.on("pageerror", e => errs.push(String(e)));
  await p.goto("file://" + d1 + "/index.html" + hash); await p.waitForTimeout(2000);
  return {p, errs, ctx};
}
for (const v of ["null", "5", "[1]"]) { const r = await run({"universul-observabil-1d.prefs": v}, ""); check("fără erori: prefs=" + v, r.errs.length === 0, r.errs); await r.ctx.close(); }
for (const [n, o] of [["extrem", {m: "comoving", z: 1e999, p: -1e999, h: 1e999}], ["null", null], ["tipuri greșite", {m: 5, z: "x", s: {}, gn: 7, l: [], cvd: 1}]]) {
  const h = "#s=" + Buffer.from(unescape(encodeURIComponent(JSON.stringify(o).replace(/1e\+?999/g, "1e999"))), "binary").toString("base64");
  const r = await run({}, h); check("permalink " + n + ": fără erori", r.errs.length === 0, r.errs);
  check("permalink " + n + ": zoom/pan finite", await r.p.evaluate(() => Number.isFinite(state.zoom) && Number.isFinite(state.pan)));
  await r.ctx.close();
}
let r = await run({}, "#s=%%%"); check("permalink invalid: fără erori", r.errs.length === 0, r.errs);
r = await run({}, ""); check("VERSION == application-version", await r.p.evaluate(() => VERSION === document.querySelector('meta[name="application-version"]').content), await r.p.evaluate(() => VERSION));
await b.close(); console.log(fails ? fails + " eșecuri" : "toate trecute"); process.exit(fails ? 1 : 0);
