// 51c: exportul CSV al tabelului spune H₀ și modelul (valorile sunt dependente de model, fără incertitudini per obiect).
// Rulare: node tests/csv-model.test.mjs   (Playwright, rețea blocată)
import path from 'node:path'; import {fileURLToPath} from 'node:url'; import {createRequire} from 'node:module';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require('playwright');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x === undefined ? '' : JSON.stringify(x).slice(0, 300)); } };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const ctx = await b.newContext({viewport: {width: 1280, height: 900}}); await ctx.route(/^https?:/, r => r.abort());
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto('file://' + path.join(HERE, '..', 'index.html')); await p.waitForTimeout(1200);
const csv = await p.evaluate(async () => {
  let blob = null; const o = URL.createObjectURL; URL.createObjectURL = x => { blob = x; return o.call(URL, x); };
  tblExportCsv(); return blob ? await blob.text() : null;
});
const lines = (csv || '').replace(/^﻿/, '').split(/\r\n/);
t('antet cu h0_km_s_mpc și model', /,h0_km_s_mpc,model$/.test(lines[0]), lines[0]);
t('fiecare rând are H₀ numeric și modelul', lines.slice(1).filter(Boolean).length >= 100 && lines.slice(1).filter(Boolean).every(l => /,\d+(\.\d)?,flat LCDM/.test(l)));
t('fără erori JS', errs.length === 0, errs);
await b.close(); console.log(`${bad} eșecuri, ${ok} reușite`); process.exit(bad ? 1 : 0);
