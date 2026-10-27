# CHANGELOG

Format: SemVer (MAJOR.MINOR.PATCH). Intrările mai vechi sunt copiate din README (secțiunea „History / Changelog”), neschimbate.

## 2.1.0 — 2026-10-27 (anterior: 2.0.1)

Stare: stabil
Offline: complet

Tura 2 a recenziei:
- Notele JWST noi (JADES-GS-z14-0: ALMA [OIII] 88 µm z = 14,1793; MoM-z14: PAN-z14-1) în fr/it/es/pt/de/hu, în `GAL_TR`, ca **traduceri automate marcate** în text; cheile existente neschimbate. Test nou `tests/jwst-notes.test.mjs` (20/20).
- `docs/DISCREPANTE.md` (generat de `tools/compare-catalogs.mjs` din depozitul hub): cele 8 distanțe diferite față de 2D și semnul z al Andromedei. **Nicio valoare aleasă** (NED/SIMBAD/arXiv inaccesibile în sesiune); valorile 1D coincid cu lookback-ul calculat din z-ul din catalog (observație aritmetică, nu sursă).
- NU s-a făcut: unificarea cataloagelor într-un fișier comun; adăugarea PAN-z14-1 ca intrare (coordonate neverificate).
- Versiune 2.1.0 în `index.html`, `sw.js`, `app.json`.

---

## 2.0.1 — 2026-10-27 (anterior: 2.0.0)

Stare: stabil
Offline: complet

Recenzie (doar texte):
- **JWST** (verificat pe web la 27.10.2026, surse în README): MoM-z14 z=14,44 rămâne cel mai îndepărtat confirmat spectroscopic; JADES-GS-z14-0: ALMA [OIII] 88 µm z=14,1793 ± 0,0007 (Schouws et al. 2025, arXiv:2409.20549) notat în descriere, catalogul păstrează valoarea NIRSpec 14,32; PAN-z14-1 z=13,53 (Donnan et al., arXiv:2601.11515, ian. 2026), a patra ca distanță, menționată în nota MoM-z14, neadăugată în catalog (coordonate neverificate).
- **Cataloage**: documentate (nu unificate) diferențele hub 112 / 1D 112 / 2D 112 (111 galaxii + CMB) / 3D 118 și conflictul 1D ↔ 2D (8 distanțe, semnul z al Andromedei), de verificat de autor.
- README (8 limbi): secțiuni noi „Mărimea cataloagelor în serie” și „Recorduri JWST reverificate”.
- Versiune în `index.html`, `sw.js`, `app.json`; CSP rehash.

---

## Istoric anterior (din README.md)

#### 2.0.0 — 2026-10-26
- Light journey (photon on the axis, both directions) and a column of links to the 2D map in the data table.

#### 1.3.10 — 2026-10-23
- Robustness: corrupted preferences in `localStorage` (e.g. `null`) are ignored instead of breaking start-up; the version shown in the title, the Guide and the self-test is the real one again.

#### 1.3.9 — 2026-10-23
- fff-kit 1.2.0: the preferences key is now `universul-observabil-1d.prefs`; the old `uv1d_prefs_v1` is migrated automatically at start-up, also after importing an old .fff.json backup. The “copy link / copy details” fallback no longer uses the native browser prompt but an accessible dialog.

#### 1.3.6 — 2026-10-22
- fff-kit 1.1.4: touch targets and minimum text size; touch targets/text fixed

#### 1.3.5 — 2026-10-22
- fff-kit 1.1.2: PBKDF2 600,000 iterations, anti-clickjacking protection.

#### 1.3.4 — 2026-10-22
- Accessibility: the page now has exactly one H1 (the title bar), and the galaxy search field has a name announced by screen readers (8 languages).
- Mobile: the reset button and the Hubble-constant slider have larger touch targets.
- The details drawer is hidden from keyboard and screen readers while closed (no more off-screen content).

- **1.3.3 — 2026-10-22:** the data-table filter field (placeholder and accessibility label) is now translated from the start, not only after opening the table.
- 1.3.2 — 2026-10-22: localized names of the galaxies and objects in all 8 languages (Milky Way, Pinwheel, Whirlpool, etc. no longer stay in Romanian); page title and meta descriptions follow the interface language.

- 1.3.1 — 2026-10-19: guide, guided tour, quiz (all 12 question types, options and explanations) and the 112 galaxy descriptions translated into fr, it, es, pt, de, hu; the statement that the long texts "remain in ro/en" was removed.
- 1.2.0 — 2026-10-19: "🗺️ 2D MAP ↗" button in the galaxy panel (same galaxy, current language); the `#s=` permalink accepts the `gn` guard.

- 1.1.0 — 2026-10-14: Backup and data labelling (fff-kit).

- 1.0.4 — 2026-10-12: the version and the last-updated date are shown in the app.

v1.0.3 (11 October 2026):
- Fixed: `Esc` did not close the quiz (now it does; the quiz can also be played from the keyboard: `1`–`4`, Tab + Enter, focus moved correctly); the data table and the details panel kept the old H₀ after moving the slider (now they update immediately); in RO mode the details panel also showed the description in English (now a single language, with an RO fallback for entries without EN text); "CMB · cosmological horizon" translated.
- Catalogue distances brought into line with z, same method as in v1.0.2: IC 4296 (130 → ≈ 180 Mly), 3C 48 (5,200 → ≈ 4,150 Mly), Abell 370 (5,900 → ≈ 4,200 Mly), CL 0024+1654 (5,500 → ≈ 4,400 Mly). Other entries with smaller deviations (e.g. 3C 273) remain at the catalogue values.
- CSP hash recalculated; axe-core = 0 violations at 1280 and 360 px.

v1.0.2 (11 October 2026):
- New: sortable/filterable data table with CSV export (see "Features").
- Catalogue distances brought into line with the published redshift for four entries with inconsistent values: NGC 1132 (z = 0.0232: 1,020 → ≈ 330 Mly), Perseus / IC 310 (z = 0.0189: 780 → ≈ 270 Mly), Abell 1689 (z = 0.183: 7,200 → ≈ 2,330 Mly), SDSS J1004+4112 (z = 1.734: 7,000 → ≈ 10,050 Mly). The values are the lookback time at z in the application's ΛCDM cosmology (H₀ = 67.4); the z values were confirmed on 11.10.2026 (Wikipedia for NGC 1132 and Abell 1689, Inada et al. 2003 for SDSS J1004+4112). Other entries (e.g. Abell 370, 3C 48) have distances that differ from the lookback at z by 20–40%, but remain between the lookback and the comoving distance, so they were not changed.
- CSP: the script is now allowed by hash (`script-src 'sha256-…'`), without `'unsafe-inline'`; the application has no inline handlers.

v1.0.1 (11 October 2026):
- Correct derived values for nearby galaxies (d < 100 Mly): Andromeda now shows lookback ≈ 2.5 Myr and comoving ≈ 2.5 Mly (previously 14 Myr / 15 Mly, derived from z); z = −0.001 (blueshift), not +0.001. Positions on the axis use the same values.
- Type label in Romanian: "Spirală galaxie" instead of "SPIRALĂ GALAXY".
- Axis labels have an outline; the header and the donations widget no longer cover the controls at 360 px. axe-core = 0 violations (including `region`).
- The redshift records remain those "as of the catalogue date (May 2026)"; a web search on 11.10.2026 found no spectroscopic record newer than MoM-z14 (z = 14.44), but the catalogue was not systematically rechecked.
