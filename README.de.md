# Observable Universe 1D · The Cosmic Ray™

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · **Deutsch** · [Magyar](README.hu.md)

**Version:** 1.3.1 · **Zuletzt aktualisiert:** 2026-10-19

Oberflächensprachen: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

1D-Karte des beobachtbaren Universums: 112 Galaxien, projiziert auf eine einzige radiale Achse.

**Online-App:** https://chiuta.github.io/Universul-Observabil-1D/

![Screenshot](screenshot.de.png)

## Was es ist

Eine Visualisierung in einer einzigen HTML-Datei (v1.0.4), die 112 Galaxien nach Entfernung auf einer einzigen Achse anordnet – die „ehrlichste“ Projektion des Universums: ohne Winkelverzerrung, aber mit Galaxien in derselben Richtung, die im selben Punkt übereinanderliegen. Es ist die 1D-Variante, Begleiterin der 2D- und 3D-Versionen. Die Daten verwenden die ΛCDM-Kosmologie von Planck 2018 (H₀ = 67,4 km/s/Mpc); die Anwendung bezeichnet sich als „lehrreich“, mit ironischem Ton in einigen Texten (sie ist keine wissenschaftliche Publikation); die Werte sind gerundet oder angenähert, gemäß den Quellen unter Credits. Die Oberfläche hat 8 Sprachen (RO, EN, FR, IT, ES, PT, DE, HU); die Seite startet in der Browsersprache, sonst auf Englisch.

## Funktionen

- Vier Achsenmodi: Rückblickzeit (Lookback Time), mitbewegte Entfernung, Rotverschiebung (z) und Skalenfaktor (a = 1/(1+z)).
- Logarithmisches Histogramm der Galaxiendichte.
- Zoom auf der Achse, Tooltip beim Überfahren, Detailfenster beim Klick auf eine Galaxie.
- **Datentabelle** (📊 oder Taste `D`): alle 112 Galaxien mit Entfernung, z, Lookback und mitbewegter Entfernung, berechnet mit dem aktuellen H₀; sortierbare Spalten, Filter nach Name/Typ, CSV-Export (`observable-universe-1d-h0-<H₀>.csv`). Sie ist zugleich die barrierefreie Alternative zur Karte (Screenreader, Tastaturnavigation).
- Galaxiensuche (🔍), geführte Tour (🚀), kosmisches Quiz mit 10 Fragen und Punktzahl (🧩), Leitfaden mit den Abschnitten Intro, Navigation, Axis Modes, Why 1D?, Terms, Limits, Changelog, Credits (📖).
- RO-/EN-Schaltfläche für die Sprache und ⌂ zum Zurücksetzen der Ansicht.
- „SHARE“ erzeugt einen dauerhaften Link mit dem Ansichtszustand im URL-Fragment (`#s=`); „COPY“ kopiert den Text in die Zwischenablage.
- In der Seite erklärte Barrierefreiheit: beachtet `prefers-reduced-motion`, Modus für Farbfehlsichtigkeit, Tastaturnavigation.

## Bedienungsanleitung

1. Öffne die Seite; wähle den Achsenmodus in der Kopfzeile der Karte (lookback time, comoving distance, redshift, scale factor) — die Taste `M` schaltet sie der Reihe nach durch.
2. Navigation: Mausrad oder `+` / `-` zum Zoomen, Pfeile links/rechts, um von einer Galaxie zur nächsten zu wechseln, Klick auf eine Galaxie für Details.
3. Suche: drücke 🔍, die Taste `/` oder `Strg/Cmd+K`; die Pfeile hoch/runter wählen das Ergebnis, `Enter` bestätigt es.
4. Die Tasten `G` (Leitfaden), `T` (Tour), `Q` (Quiz), `D` (Datentabelle), `L` (Sprache), `Esc` (Fenster schließen).
5. Im Fenster einer Galaxie drücke „SHARE“ für einen Link oder „COPY“ für Text.
6. Die Schaltfläche ⌂ setzt die Ansicht zurück.

## Datenschutz und Netzwerk

- Lokal: Einstellungen werden in `localStorage` gespeichert (Schlüssel `uv1d_prefs_v1`). Der Teilen-Link speichert den Zustand nur in der URL.
- Netzwerk: Ich habe keine `fetch`-Aufrufe und keine externen Skripte oder Schriften gefunden; die Galaxiendaten sind in der Datei enthalten. Die Unterstützungs- und Credit-Links (alexio.tf, Buy Me a Coffee) öffnen sich nur per Klick.
- Im Leitfaden nennt der Credits-Abschnitt als Datenquellen: Planck 2018, NASA/IPAC NED, SIMBAD, JWST/JADES und Naidu et al. 2025. Sie werden zur Laufzeit nicht abgefragt.

## Lokale Ausführung / offline

Lade `index.html` herunter und öffne sie in einem Browser; sie funktioniert ohne Internet.

## Lizenz

MIT — siehe Datei LICENSE

## Verlauf / Changelog

- 1.2.0 — 2026-10-19: Schaltfläche „🗺️ 2D-KARTE ↗“ im Galaxienfenster (dieselbe Galaxie, aktuelle Sprache); der Permalink `#s=` akzeptiert den Guard `gn`.

- 1.1.0 — 2026-10-14: Datensicherung und Datenkennzeichnung (fff-kit).

- 1.0.4 — 2026-10-12: Version und Datum der letzten Aktualisierung werden in der App angezeigt.

v1.0.3 (11. Oktober 2026):
- Behoben: `Esc` schloss das Quiz nicht (jetzt schon; das Quiz lässt sich auch per Tastatur spielen: `1`–`4`, Tab + Enter, Fokus korrekt verschoben); die Datentabelle und das Detailfenster behielten nach dem Verschieben des Reglers das alte H₀ (jetzt aktualisieren sie sich sofort); im RO-Modus zeigte das Detailfenster auch die Beschreibung auf Englisch (jetzt nur eine Sprache, mit RO-Rückfall für Einträge ohne EN-Text); „CMB · kosmologischer Horizont“ übersetzt.
- Katalogentfernungen mit z in Einklang gebracht, gleiche Methode wie in v1.0.2: IC 4296 (130 → ≈ 180 Mio. Lj), 3C 48 (5 200 → ≈ 4 150 Mio. Lj), Abell 370 (5 900 → ≈ 4 200 Mio. Lj), CL 0024+1654 (5 500 → ≈ 4 400 Mio. Lj). Andere Einträge mit kleineren Abweichungen (z. B. 3C 273) bleiben bei den Katalogwerten.
- CSP-Hash neu berechnet; axe-core = 0 Verstöße bei 1280 und 360 px.

v1.0.2 (11. Oktober 2026):
- Neu: sortier-/filterbare Datentabelle mit CSV-Export (siehe „Funktionen“).
- Katalogentfernungen mit der veröffentlichten Rotverschiebung in Einklang gebracht für vier Einträge mit inkonsistenten Werten: NGC 1132 (z = 0,0232: 1 020 → ≈ 330 Mio. Lj), Perseus / IC 310 (z = 0,0189: 780 → ≈ 270 Mio. Lj), Abell 1689 (z = 0,183: 7 200 → ≈ 2 330 Mio. Lj), SDSS J1004+4112 (z = 1,734: 7 000 → ≈ 10 050 Mio. Lj). Die Werte sind die Rückblickzeit bei z in der ΛCDM-Kosmologie der Anwendung (H₀ = 67,4); die z-Werte wurden am 11.10.2026 bestätigt (Wikipedia für NGC 1132 und Abell 1689, Inada et al. 2003 für SDSS J1004+4112). Andere Einträge (z. B. Abell 370, 3C 48) haben Entfernungen, die vom Lookback bei z um 20–40 % abweichen, liegen aber zwischen Lookback und mitbewegter Entfernung und wurden daher nicht geändert.
- CSP: Das Skript wird jetzt per Hash erlaubt (`script-src 'sha256-…'`), ohne `'unsafe-inline'`; die Anwendung hat keine Inline-Handler.

v1.0.1 (11. Oktober 2026):
- Korrekte abgeleitete Werte für nahe Galaxien (d < 100 Mio. Lj): Andromeda zeigt jetzt Lookback ≈ 2,5 Mio. Jahre und mitbewegt ≈ 2,5 Mio. Lj (vorher 14 Mio. Jahre / 15 Mio. Lj, aus z abgeleitet); z = −0,001 (Blauverschiebung), nicht +0,001. Die Positionen auf der Achse verwenden dieselben Werte.
- Typbezeichnung auf Rumänisch: „Spirală galaxie“ statt „SPIRALĂ GALAXY“.
- Die Achsenbeschriftungen haben eine Kontur; Kopfzeile und Spenden-Widget verdecken die Bedienelemente bei 360 px nicht mehr. axe-core = 0 Verstöße (einschließlich `region`).
- Die Rotverschiebungsrekorde bleiben die „zum Katalogdatum (Mai 2026)“; eine Websuche am 11.10.2026 fand keinen neueren spektroskopischen Rekord als MoM-z14 (z = 14,44), der Katalog wurde jedoch nicht systematisch erneut geprüft.

## Autor

Alexio — Alexandru-Ionuț Chiuță, Kontakt: alexio@trom.tf. Die Anwendung nennt in ihren Credits auch das Centrul StrING.

## Audit

Audit: 2026-10-10; Runde 2: 2026-10-11 — das Feld „DOI“ mit fiktivem Wert aus der Zitation entfernt (es gibt keinen echten DOI); die Angabe „satirisch und lehrreich“ / „alle Daten sind korrekt“ umformuliert (RO+EN-Leitfaden und README). Viewport und Kontrast in Runde 1 korrigiert. Runde 3 (2026-10-11): vergängliche Aussagen („absoluter/aktueller Rekord“, „NEU“, „nächste/fernste“) als „zum Katalogdatum (Mai 2026)“ umformuliert, mit Quelle (Naidu et al. 2025 für MoM-z14; arXiv 2603.15841 für EGS-z11-R0). Rekorde können nach diesem Datum übertroffen werden.

## Zusammenfassung
Eine 1D-Karte des beobachtbaren Universums in einer einzigen Datei: 112 Galaxien auf einer radialen Achse, umschaltbar zwischen Rückblickzeit, mitbewegter Entfernung, Rotverschiebung und Skalenfaktor, mit logarithmischem Dichtehistogramm, Suche, geführter Tour, Quiz mit 10 Fragen, einer Oberfläche in 8 Sprachen und teilbaren Permalinks. Einstellungen werden in localStorage gespeichert; im Code wurden keine externen Anfragen gefunden. MIT-Lizenz.
