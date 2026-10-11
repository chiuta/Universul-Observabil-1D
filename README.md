# Observable Universe 1D · The Cosmic Ray™

Harta 1D a universului observabil: 112 galaxii proiectate pe o singură axă radială.

**Live:** https://chiuta.github.io/Universul-Observabil-1D/

![Captura de ecran](screenshot.png)

## Ce este

O vizualizare dintr-un singur fișier HTML (v1.0) care așază 112 galaxii pe o singură axă, în funcție de distanță, „cel mai onest" proiect al universului: fără distorsiuni unghiulare, dar cu galaxiile aflate pe aceeași direcție suprapuse în același punct. Este varianta 1D, însoțitoare a versiunilor 2D și 3D. Datele folosesc cosmologia ΛCDM Planck 2018 (H₀ = 67,4 km/s/Mpc); aplicația se descrie ca „educațională”, cu un ton ironic în unele texte (nu este o publicație științifică); valorile sunt rotunjite sau aproximative, conform surselor din Credite. Interfața este bilingvă, română și engleză (pagina pornește în engleză).

## Funcții

- Patru moduri de axă: timp de privire înapoi (lookback time), distanță comobilă, redshift (z) și factor de scară (a = 1/(1+z)).
- Histogramă logaritmică a densității galaxiilor.
- Zoom pe axă, tooltip la hover, panou de detalii la click pe o galaxie.
- Căutare de galaxii (🔍), tur ghidat (🚀), quiz cosmic de 10 întrebări cu scor (🧩), ghid cu secțiunile Intro, Navigation, Axis Modes, Why 1D?, Terms, Limits, Changelog, Credits (📖).
- Buton RO / EN pentru limbă și ⌂ pentru resetarea vizualizării.
- „SHARE" generează un link permanent cu starea vizualizării în fragmentul URL (`#s=`); „COPY" copiază textul în clipboard.
- Accesibilitate declarată în pagină: respectă `prefers-reduced-motion`, mod pentru daltonism, navigare de la tastatură.

## Manual de utilizare

1. Deschide pagina; alege modul de axă din antetul hărții (lookback time, comoving distance, redshift, scale factor) — tasta `M` le parcurge pe rând.
2. Navighează: roata mouse-ului sau `+` / `-` pentru zoom, săgețile stânga/dreapta pentru a trece de la o galaxie la alta, click pe o galaxie pentru detalii.
3. Căutare: apasă 🔍, tasta `/` sau `Ctrl/Cmd+K`; săgețile sus/jos aleg rezultatul, `Enter` îl selectează.
4. Tastele `G` (ghid), `T` (tur), `Q` (quiz), `L` (limbă), `Esc` (închide panourile).
5. În panoul unei galaxii apasă „SHARE" pentru link sau „COPY" pentru text.
6. Butonul ⌂ resetează vizualizarea.

## Confidențialitate și rețea

- Local: preferințele se păstrează în `localStorage` (cheia `uv1d_prefs_v1`). Linkul de partajare stochează starea doar în URL.
- Rețea: nu am găsit apeluri `fetch`, scripturi sau fonturi externe; datele galaxiilor sunt incluse în fișier. Linkurile de susținere și de credit (alexio.tf, Patreon, Buy Me a Coffee) se deschid doar dacă le apeși.
- În ghid, secțiunea de credite menționează ca surse de date: Planck 2018, NASA/IPAC NED, SIMBAD, JWST/JADES și Naidu et al. 2025. Nu sunt interogate în timpul rulării.

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; funcționează fără internet.

## Licență

CC0 1.0 Universal (domeniu public) — vezi fișierul LICENSE

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf. Aplicația indică și Centrul StrING în creditele ei.

## Audit

Audit: 2026-10-10; rundă 2: 2026-10-11 — eliminat din citare câmpul „DOI” cu valoare fictivă (nu există un DOI real); reformulată mențiunea „satirică și educațională” / „toate datele sunt corecte” (ghid RO+EN și README). Viewport și contrast corectate în runda 1.

## English summary

A single-file 1D map of the observable universe: 112 galaxies on one radial axis, switchable between lookback time, comoving distance, redshift and scale factor, with a log density histogram, search, guided tour, 10-question quiz, bilingual RO/EN UI and shareable permalinks. Preferences are kept in localStorage; no external requests were found in the code. CC0.
