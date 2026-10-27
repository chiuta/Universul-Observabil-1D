# Observable Universe 1D · The Cosmic Ray™

**English** · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version:** 2.1.1 · **Last updated:** 2026-10-28

**Status:** stable · **Offline:** fully offline

Interface languages: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

A 1D map of the observable universe: 112 galaxies projected onto a single radial axis.

**Live app:** https://chiuta.github.io/Universul-Observabil-1D/

![Screenshot](screenshot.en.png)

## What it is

A visualization in a single HTML file (v1.3.1) that places 112 galaxies on one axis according to distance, "the most honest" projection of the universe: no angular distortion, but with galaxies lying in the same direction superimposed at the same point. It is the 1D version, a companion to the 2D and 3D versions. The data use the Planck 2018 ΛCDM cosmology (H₀ = 67.4 km/s/Mpc); the application describes itself as "educational", with an ironic tone in some texts (it is not a scientific publication); values are rounded or approximate, according to the sources in the Credits. The interface has 8 languages (RO, EN, FR, IT, ES, PT, DE, HU); the page starts in the browser language, otherwise in English.

**Languages:** all the text (guide, guided tour with its 8 stops, quiz with options and explanations, descriptions of the 112 galaxies) is available in the 8 languages; only proper names, cited sources and export formats are left as they are. The translations are automatic; a native review is recommended, especially for astronomical terminology.

## Features

- Four axis modes: lookback time, comoving distance, redshift (z) and scale factor (a = 1/(1+z)).
- Logarithmic histogram of galaxy density.
- Zoom on the axis, hover tooltip, details panel on clicking a galaxy.
- **Data table** (📊 or the `D` key): all 112 galaxies with distance, z, lookback and comoving computed with the current H₀; sortable columns, filter by name/type, CSV export (`observable-universe-1d-h0-<H₀>.csv`). It is also the accessible alternative to the map (screen readers, keyboard navigation).
- **Light journey** (💡 or the `J` key, v2.0): a photon starts along the axis, either from a galaxy to us with the timeline of the trip (age of the Universe at emission, travel time, proper and comoving distance, Earth events in between) or from us, today, into the future up to the cosmic event horizon (≈16.5 Gly comoving in ΛCDM with constant dark energy). The “💡 JOURNEY” button in the galaxy panel opens it directly; the data table now also has “2D ↗” links.
- Galaxy search (🔍), guided tour (🚀), 10-question cosmic quiz with a score (🧩), guide with the sections Intro, Navigation, Axis Modes, Why 1D?, Terms, Limits, Changelog, Credits (📖).
- Language selector and ⌂ for resetting the view.
- "SHARE" generates a permanent link with the view state in the URL fragment (`#s=`); "COPY" copies the text to the clipboard.
- Accessibility declared in the page: respects `prefers-reduced-motion`, colour-blind mode, keyboard navigation.

## User guide

1. Open the page; choose the axis mode from the map header (lookback time, comoving distance, redshift, scale factor) — the `M` key cycles through them.
2. Navigate: mouse wheel or `+` / `-` to zoom, left/right arrows to move from one galaxy to another, click a galaxy for details.
3. Search: press 🔍, the `/` key or `Ctrl/Cmd+K`; the up/down arrows pick the result, `Enter` selects it.
4. The keys `G` (guide), `T` (tour), `Q` (quiz), `D` (data table), `L` (language), `Esc` (close panels).
5. In a galaxy's panel press "SHARE" for a link or "COPY" for text.
6. The ⌂ button resets the view.

## Privacy and network

- Local: preferences are kept in `localStorage` (key `universul-observabil-1d.prefs`). The share link stores the state only in the URL.
- Network: I found no `fetch` calls and no external scripts or fonts; the galaxy data is included in the file. The support and credit links (alexio.tf, Buy Me a Coffee) open only if you click them.
- In the guide, the credits section lists as data sources: Planck 2018, NASA/IPAC NED, SIMBAD, JWST/JADES and Naidu et al. 2025. They are not queried at runtime.

## Running locally / offline

Download `index.html` and open it in a browser; it works without internet.

## License

MIT — see the LICENSE file

## Catalogue sizes across the series (2.0.1)

- **Counts.** Hub: 112 entries (a copy of the 1D catalogue, identical). 1D: 112. 2D: 112 (111 galaxies + the CMB horizon; some texts say 111). 3D: 118 ("over 115" in the descriptions). The numbers differ because the catalogues are separate, not because of a counting error.
- **Not unified.** 3D has its own catalogue in a different structure (RA in hours, other names and spellings), so its names only partly match 1D/2D. Merging into one shared file was not done: each app is a single offline file with no shared build step, and merging would change data in three apps without a way to validate it here. Flagged for the author.
- **1D ↔ 2D conflict (resolved on 2026-10-28; sources and formulas in `docs/DISCREPANTE.md` of the hub).** The 8 distances (NGC 1132, IC 310, 3C 48, Abell 370, CL 0024+1654, SDSS J1004+4112, IC 4296, Abell 1689) now follow one convention in both apps: d = lb = lookback(z), in Mly, flat ΛCDM Planck 2018 (H₀ = 67.4, Ωm = 0.315), with z confirmed by at least 2 sources; 2D adopted the 1D values (330, 270, 4150, 4200, 4400, 10050, 180, 2330). The redshift of Andromeda (M31) is −0.001 in both (M31 is blueshifted, −301 km/s). The label "Perseus (BCG IC 310)" became "IC 310 (Perseus)": IC 310 is not the brightest cluster galaxy (that is NGC 1275, a separate entry).

## JWST records re-verified (27.10.2026)

- **MoM-z14:** z = 14.44, still the most distant spectroscopically confirmed galaxy (Naidu et al., arXiv:2505.11263; published in the Open Journal of Astrophysics, Jan. 2026).
- **JADES-GS-z14-0:** NIRSpec z = 14.32 (+0.08/−0.20) (Carniani et al. 2024, Nature); ALMA [OIII] 88 µm z = 14.1793 ± 0.0007 (Schouws et al. 2025, arXiv:2409.20549), consistent with it. The catalogue keeps the NIRSpec value; the ALMA value is noted in the description.
- **PAN-z14-1:** z = 13.53 (+0.05/−0.06), JWST/NIRSpec (Donnan et al., arXiv:2601.11515, Jan. 2026): fourth in distance, not a record. Not added to the catalogue (its coordinates were not verified), only mentioned in the MoM-z14 note.

## JWST notes in 8 languages and discrepancies (2.1.0)

- The JWST notes re-checked on 27 Oct 2026 (ALMA [OIII] 88 µm for JADES-GS-z14-0, z = 14.1793; PAN-z14-1 in the MoM-z14 note) now also exist in fr/it/es/pt/de/hu as **machine translations marked in the text**; translation keys were not modified (`tests/jwst-notes.test.mjs`).
- The discrepancies against 2D (8 distances, the sign of Andromeda's z) are in a generated table: [`docs/DISCREPANTE.md`](docs/DISCREPANTE.md). **No value was chosen** (NED/SIMBAD unreachable in the session); the 1D values match the lookback computed from the catalogue's own z, which is **not a source**.
- Merging the catalogues into one shared file: not done (it would have required choosing between conflicting values).

## History / Changelog

### 2.1.1 — 2026-10-28
- Label "Perseus (BCG IC 310)" → "IC 310 (Perseus)" (IC 310 is not the BCG; translation keys renamed in all languages); the 1D distances are confirmed by sources (`docs/DISCREPANTE.md`); tests `tests/catalog.test.mjs` and `tests/blueshift.test.mjs`.


### 2.1.0 — 2026-10-27
- JWST notes machine-translated into 6 languages; `docs/DISCREPANTE.md`.


### 2.0.0 — 2026-10-26
- Light journey (photon on the axis, both directions) and a column of links to the 2D map in the data table.

### 1.3.10 — 2026-10-23
- Robustness: corrupted preferences in `localStorage` (e.g. `null`) are ignored instead of breaking start-up; the version shown in the title, the Guide and the self-test is the real one again.

### 1.3.9 — 2026-10-23
- fff-kit 1.2.0: the preferences key is now `universul-observabil-1d.prefs`; the old `uv1d_prefs_v1` is migrated automatically at start-up, also after importing an old .fff.json backup. The “copy link / copy details” fallback no longer uses the native browser prompt but an accessible dialog.

### 1.3.6 — 2026-10-22
- fff-kit 1.1.4: touch targets and minimum text size; touch targets/text fixed

### 1.3.5 — 2026-10-22
- fff-kit 1.1.2: PBKDF2 600,000 iterations, anti-clickjacking protection.

### 1.3.4 — 2026-10-22
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

## Author

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf. The application also names Centrul StrING in its credits.

## Audit

Audit: 2026-10-10; round 2: 2026-10-11 — removed from the citation the "DOI" field with a fictitious value (there is no real DOI); reworded the "satirical and educational" / "all data are correct" statement (RO+EN guide and README). Viewport and contrast fixed in round 1. Round 3 (2026-10-11): perishable claims ("absolute/current record", "NEW", "nearest/farthest") reworded as "as of the catalogue date (May 2026)", with the source (Naidu et al. 2025 for MoM-z14; arXiv 2603.15841 for EGS-z11-R0). Records may be surpassed after this date.

## English summary

A single-file 1D map of the observable universe: 112 galaxies on one radial axis, switchable between lookback time, comoving distance, redshift and scale factor, with a log density histogram, search, guided tour, 10-question quiz, 8-language UI and shareable permalinks. Preferences are kept in localStorage; no external requests were found in the code. MIT licence.
