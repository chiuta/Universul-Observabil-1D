// UO-1D 2.1.2 — Andromeda (M31) este spre albastru: z negativ afișat în panou și în tabel. Rulare: node tests/blueshift.test.mjs   (rețea blocată, file://)
import {createRequire} from "module"; const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require("playwright");
import path from "node:path"; import {fileURLToPath} from "node:url";
const HERE = path.dirname(fileURLToPath(import.meta.url)), APP = "file://" + path.join(HERE, "..", "index.html");
let fails = 0, passes = 0; const check = (n, c, x) => { c ? (passes++, console.log("  ok  " + n)) : (fails++, console.log("FAIL  " + n + (x !== undefined ? "  -> " + JSON.stringify(x).slice(0, 300) : ""))); };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ["--no-sandbox"]});
const ctx = await b.newContext({viewport: {width: 1280, height: 800}}); await ctx.route(/^https?:/, r => r.abort());
const p = await ctx.newPage(); const errs = []; p.on("pageerror", e => errs.push(String(e))); await p.goto(APP); await p.waitForTimeout(2000);
const z = await p.evaluate(() => { const i = GALAXIES.findIndex(g => /Andromeda/.test(g.n)); selectGalaxy(i); return GALAXIES[i].z; });
await p.waitForTimeout(400);
check("catalog: z(Andromeda) < 0", z < 0, z);
const lines = await p.evaluate(() => document.body.innerText.split("\n").filter(l => /^\s*[−-]0\.0010/.test(l) || /z\s*[:=]?\s*[−-]0\.0010/.test(l)));
check("panoul de detalii afișează −0.0010 (semn negativ, nu +0.0010)", lines.some(l => /[−-]0\.0010/.test(l)) && !(await p.evaluate(() => /(^|\s)\+?0\.0010 \(peculiar\)/.test(document.body.innerText))), lines);
check("fără erori JS", errs.length === 0, errs);
await b.close(); console.log(fails ? fails + " eșecuri" : "toate trecute (" + passes + ")"); process.exit(fails ? 1 : 0);
