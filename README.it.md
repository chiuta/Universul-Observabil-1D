# Observable Universe 1D · The Cosmic Ray™

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · **Italiano** · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Versione:** 2.1.2 · **Ultimo aggiornamento:** 2026-10-28

**Stato:** stabile · **Offline:** completo

Lingue dell'interfaccia: **Română, English, Français, Italiano, Español, Português (PT), Deutsch, Magyar**

Mappa 1D dell'universo osservabile: 112 galassie proiettate su un unico asse radiale.

**App online:** https://chiuta.github.io/Universul-Observabil-1D/

![Schermata](screenshot.it.png)

## Che cos'è

Una visualizzazione in un unico file HTML (v1.3.1) che dispone 112 galassie su un solo asse in funzione della distanza, la proiezione «più onesta» dell'universo: senza distorsioni angolari, ma con le galassie che si trovano nella stessa direzione sovrapposte nello stesso punto. È la versione 1D, compagna delle versioni 2D e 3D. I dati usano la cosmologia ΛCDM di Planck 2018 (H₀ = 67,4 km/s/Mpc); l'applicazione si descrive come «educativa», con un tono ironico in alcuni testi (non è una pubblicazione scientifica); i valori sono arrotondati o approssimativi, secondo le fonti indicate nei Crediti. L'interfaccia ha 8 lingue (RO, EN, FR, IT, ES, PT, DE, HU); la pagina parte nella lingua del browser, altrimenti in inglese.

**Lingue:** tutto il testo (guida, tour guidato con le sue 8 tappe, quiz con opzioni e spiegazioni, descrizioni delle 112 galassie) è disponibile nelle 8 lingue; restano invariati solo i nomi propri, le fonti citate e i formati di esportazione. Le traduzioni sono automatiche; si consiglia una revisione da parte di madrelingua, soprattutto per la terminologia astronomica.

## Funzionalità

- Quattro modalità dell'asse: tempo di retrospezione (lookback time), distanza comovente, redshift (z) e fattore di scala (a = 1/(1+z)).
- Istogramma logaritmico della densità delle galassie.
- Zoom sull'asse, tooltip al passaggio del mouse, pannello di dettagli al clic su una galassia.
- **Tabella dei dati** (📊 o tasto `D`): tutte le 112 galassie con distanza, z, lookback e distanza comovente calcolati con l'H₀ corrente; colonne ordinabili, filtro per nome/tipo, esportazione CSV (`observable-universe-1d-h0-<H₀>.csv`). È anche l'alternativa accessibile alla mappa (lettori di schermo, navigazione da tastiera).
- Ricerca di galassie (🔍), tour guidato (🚀), quiz cosmico di 10 domande con punteggio (🧩), guida con le sezioni Intro, Navigation, Axis Modes, Why 1D?, Terms, Limits, Changelog, Credits (📖).
- Selettore di lingua e ⌂ per reimpostare la vista.
- «SHARE» genera un link permanente con lo stato della vista nel frammento dell'URL (`#s=`); «COPY» copia il testo negli appunti.
- Accessibilità dichiarata nella pagina: rispetta `prefers-reduced-motion`, modalità per il daltonismo, navigazione da tastiera.

## Guida all'uso

1. Apri la pagina; scegli la modalità dell'asse dall'intestazione della mappa (lookback time, comoving distance, redshift, scale factor) — il tasto `M` le scorre una dopo l'altra.
2. Naviga: rotellina del mouse o `+` / `-` per lo zoom, frecce sinistra/destra per passare da una galassia all'altra, clic su una galassia per i dettagli.
3. Ricerca: premi 🔍, il tasto `/` o `Ctrl/Cmd+K`; le frecce su/giù scelgono il risultato, `Invio` lo seleziona.
4. I tasti `G` (guida), `T` (tour), `Q` (quiz), `D` (tabella dei dati), `L` (lingua), `Esc` (chiude i pannelli).
5. Nel pannello di una galassia premi «SHARE» per il link o «COPY» per il testo.
6. Il pulsante ⌂ reimposta la vista.

## Privacy e rete

- Locale: le preferenze sono conservate in `localStorage` (chiave `universul-observabil-1d.prefs`). Il link di condivisione memorizza lo stato solo nell'URL.
- Rete: non ho trovato chiamate `fetch` né script o font esterni; i dati delle galassie sono inclusi nel file. I link di sostegno e di credito (alexio.tf, Buy Me a Coffee) si aprono solo se li clicchi.
- Nella guida, la sezione dei crediti cita come fonti dei dati: Planck 2018, NASA/IPAC NED, SIMBAD, JWST/JADES e Naidu et al. 2025. Non vengono interrogate durante l'esecuzione.

## Esecuzione locale / offline

Scarica `index.html` e aprilo in un browser; funziona senza internet.

## Licenza

MIT — vedi il file LICENSE

## Dimensione dei cataloghi nella serie (2.0.1)

- **Numeri.** Hub: 112 voci (copia identica del catalogo 1D). 1D: 112. 2D: 112 (111 galassie + l'orizzonte CMB; alcuni testi dicono 111). 3D: 118 («oltre 115» nelle descrizioni). I numeri differiscono perché i cataloghi sono separati, non per un errore di conteggio.
- **Non unificati.** La 3D ha un catalogo proprio, con struttura diversa (AR in ore, altri nomi e grafie), quindi i suoi nomi coincidono solo in parte con 1D/2D. L'unione in un unico file comune non è stata fatta: ogni app è un singolo file offline senza passaggio di build comune, e unire cambierebbe i dati in tre app senza modo di validarli qui. Segnalato all'autore.
- **Conflitto 1D ↔ 2D (risolto il 2026-10-28; fonti e formule in `docs/DISCREPANTE.md` dell'hub).** Le 8 distanze (NGC 1132, IC 310, 3C 48, Abell 370, CL 0024+1654, SDSS J1004+4112, IC 4296, Abell 1689) seguono ora un'unica convenzione in entrambe le app: d = lb = lookback(z), in Mal, ΛCDM piatto Planck 2018 (H₀ = 67,4, Ωm = 0,315), con z confermato da almeno 2 fonti; la 2D ha adottato i valori della 1D (330, 270, 4150, 4200, 4400, 10050, 180, 2330). Il redshift di Andromeda (M31) è −0,001 in entrambe (M31 è spostata verso il blu, −301 km/s). L'etichetta «Perseus (BCG IC 310)» è diventata «IC 310 (Perseus)»: IC 310 non è la galassia più brillante dell'ammasso (è NGC 1275, voce separata).

## Record JWST riverificati (27.10.2026)

- **MoM-z14:** z = 14,44, ancora la galassia più lontana confermata spettroscopicamente (Naidu et al., arXiv:2505.11263; pubblicato su Open Journal of Astrophysics, gen. 2026).
- **JADES-GS-z14-0:** NIRSpec z = 14,32 (+0,08/−0,20) (Carniani et al. 2024, Nature); ALMA [OIII] 88 µm z = 14,1793 ± 0,0007 (Schouws et al. 2025, arXiv:2409.20549), compatibile. Il catalogo mantiene il valore NIRSpec; il valore ALMA è indicato nella descrizione.
- **PAN-z14-1:** z = 13,53 (+0,05/−0,06), JWST/NIRSpec (Donnan et al., arXiv:2601.11515, gen. 2026): quarta per distanza, non un record. Non aggiunta al catalogo (coordinate non verificate), solo citata nella nota di MoM-z14.

## JWST notes in 8 languages and discrepancies (2.1.0)

_(English only; not yet translated into this language. Machine translation intentionally not added to avoid errors in technical statements.)_

- The JWST notes re-checked on 27 Oct 2026 (ALMA [OIII] 88 µm for JADES-GS-z14-0, z = 14.1793; PAN-z14-1 in the MoM-z14 note) now also exist in fr/it/es/pt/de/hu as **machine translations marked in the text**; translation keys were not modified (`tests/jwst-notes.test.mjs`).
- The discrepancies against 2D (8 distances, the sign of Andromeda's z) are in a generated table: [`docs/DISCREPANTE.md`](docs/DISCREPANTE.md). **No value was chosen** (NED/SIMBAD unreachable in the session); the 1D values match the lookback computed from the catalogue's own z, which is **not a source**.
- Merging the catalogues into one shared file: not done (it would have required choosing between conflicting values).

## Cronologia / Changelog

### 2.1.2 — 2026-10-28
- Distanze del catalogo allineate a z e alle fonti (revisione 4): 3C 273 2.440→2.050, Mrk 421 397→430, 3C 279 5.800→5.470, PKS 2155-304 1.400→1.550, TON 618 10.400→10.840, MACS J0025 5.200→5.810, NGC 1277 220→240 Mly (z 0,0169). «RXCJ0232 (Pandora)» confondeva due ammassi: ora è «Abell 2744 (Pandora)» (AR 3,59°, Dec −30,4°, z 0,308, 3.620 Mly; chiavi di traduzione rinominate). Il Quintetto di Stephan, NGC 4874 e Arp 220 sono verificati e invariati; NGC 1275 resta irrisolto (una sola fonte). Dettagli e URL: `docs/DISCREPANTE.md`.


### 2.1.1 — 2026-10-28
- Etichetta «Perseus (BCG IC 310)» → «IC 310 (Perseus)» (IC 310 non è la BCG; chiavi di traduzione rinominate in tutte le lingue); le distanze 1D sono confermate da fonti (`docs/DISCREPANTE.md`); test `tests/catalog.test.mjs` e `tests/blueshift.test.mjs`.


### 2.1.0 — 2026-10-27
- JWST notes machine-translated into 6 languages; `docs/DISCREPANTE.md`.


### 1.3.10 — 2026-10-23
- Robustezza: preferenze corrotte in `localStorage` (es. `null`) vengono ignorate invece di bloccare l'avvio; la versione mostrata nel titolo, nella Guida e nell'autotest è di nuovo quella reale.

### 1.3.9 — 2026-10-23
- fff-kit 1.2.0: la chiave delle preferenze è ora `universul-observabil-1d.prefs`; la vecchia `uv1d_prefs_v1` viene migrata automaticamente all'avvio, anche dopo l'importazione di una vecchia copia .fff.json. L'alternativa «copia il link / i dettagli» non usa più la finestra nativa del browser, ma un dialogo accessibile.

### 1.3.6 — 2026-10-22
- fff-kit 1.1.4: bersagli touch e testo minimo; bersagli touch/testo corretti

### 1.3.5 — 2026-10-22
- fff-kit 1.1.2: PBKDF2 a 600.000 iterazioni, protezione anti-clickjacking.

### 1.3.4 — 2026-10-22
- Accessibilità: la pagina ha ora esattamente un H1 (la barra del titolo) e il campo di ricerca delle galassie ha un nome annunciato dagli screen reader (8 lingue).
- Mobile: il pulsante di ripristino e il cursore della costante di Hubble hanno aree tattili più grandi.
- Il pannello dei dettagli è nascosto a tastiera e screen reader finché è chiuso (niente più contenuto fuori schermo).

- **1.3.3 — 2026-10-22:** il campo filtro della tabella dati (segnaposto ed etichetta di accessibilità) è tradotto fin dall'inizio, non solo dopo l'apertura della tabella.
- 1.3.2 — 2026-10-22: nomi di galassie e oggetti localizzati nelle 8 lingue (Via Lattea, Girandola, Vortice, ecc. non restano più in rumeno); titolo della pagina e meta-descrizioni seguono la lingua dell'interfaccia.

- 1.3.1 — 2026-10-19: la guida, il tour guidato, il quiz (tutti i 12 tipi di domande, opzioni e spiegazioni) e le 112 descrizioni di galassie sono tradotti in fr, it, es, pt, de, hu; l'affermazione che i testi lunghi «restano in ro/en» è stata rimossa.
- 1.2.0 — 2026-10-19: pulsante «🗺️ MAPPA 2D ↗» nel pannello della galassia (stessa galassia, lingua corrente); il permalink `#s=` accetta la guardia `gn`.

- 1.1.0 — 2026-10-14: backup ed etichettatura dei dati (fff-kit).

- 1.0.4 — 2026-10-12: la versione e la data dell'ultimo aggiornamento sono mostrate nell'app.

v1.0.3 (11 ottobre 2026):
- Corretto: `Esc` non chiudeva il quiz (ora lo chiude; il quiz si può giocare anche da tastiera: `1`–`4`, Tab + Invio, focus spostato correttamente); la tabella dei dati e il pannello dei dettagli mantenevano il vecchio H₀ dopo lo spostamento del cursore (ora si aggiornano subito); in modalità RO il pannello dei dettagli mostrava anche la descrizione in inglese (ora una sola lingua, con ripiego RO per le voci senza testo EN); «CMB · orizzonte cosmologico» tradotto.
- Distanze del catalogo allineate a z, stesso metodo della v1.0.2: IC 4296 (130 → ≈ 180 Mal), 3C 48 (5 200 → ≈ 4 150 Mal), Abell 370 (5 900 → ≈ 4 200 Mal), CL 0024+1654 (5 500 → ≈ 4 400 Mal). Altre voci con scostamenti minori (ad es. 3C 273) restano ai valori del catalogo.
- Hash CSP ricalcolato; axe-core = 0 violazioni a 1280 e 360 px.

v1.0.2 (11 ottobre 2026):
- Novità: tabella dei dati ordinabile/filtrabile con esportazione CSV (vedi «Funzionalità»).
- Distanze del catalogo allineate al redshift pubblicato per quattro voci con valori incoerenti: NGC 1132 (z = 0,0232: 1 020 → ≈ 330 Mal), Perseus / IC 310 (z = 0,0189: 780 → ≈ 270 Mal), Abell 1689 (z = 0,183: 7 200 → ≈ 2 330 Mal), SDSS J1004+4112 (z = 1,734: 7 000 → ≈ 10 050 Mal). I valori sono il tempo di retrospezione a z nella cosmologia ΛCDM dell'applicazione (H₀ = 67,4); i z sono stati confermati l'11.10.2026 (Wikipedia per NGC 1132 e Abell 1689, Inada et al. 2003 per SDSS J1004+4112). Altre voci (ad es. Abell 370, 3C 48) hanno distanze che differiscono dal lookback a z del 20–40%, ma restano comprese tra il lookback e la distanza comovente, perciò non sono state modificate.
- CSP: lo script è ora consentito tramite hash (`script-src 'sha256-…'`), senza `'unsafe-inline'`; l'applicazione non ha gestori inline.

v1.0.1 (11 ottobre 2026):
- Valori derivati corretti per le galassie vicine (d < 100 Mal): Andromeda mostra ora lookback ≈ 2,5 Ma e distanza comovente ≈ 2,5 Mal (prima 14 Ma / 15 Mal, derivati da z); z = −0,001 (spostamento verso il blu), non +0,001. Le posizioni sull'asse usano gli stessi valori.
- Etichetta del tipo in rumeno: «Spirală galaxie» invece di «SPIRALĂ GALAXY».
- Le etichette dell'asse hanno un contorno; l'intestazione e il widget delle donazioni non coprono più i controlli a 360 px. axe-core = 0 violazioni (incluso `region`).
- I record di redshift restano quelli «alla data del catalogo (maggio 2026)»; una ricerca sul web dell'11.10.2026 non ha trovato un record spettroscopico più recente di MoM-z14 (z = 14,44), ma il catalogo non è stato ricontrollato sistematicamente.

## Autore

Alexio — Alexandru-Ionuț Chiuță, contatto: alexio@trom.tf. L'applicazione cita anche il Centrul StrING nei suoi crediti.

## Audit

Audit: 2026-10-10; turno 2: 2026-10-11 — rimosso dalla citazione il campo «DOI» con valore fittizio (non esiste un DOI reale); riformulata l'indicazione «satirico ed educativo» / «tutti i dati sono corretti» (guida RO+EN e README). Viewport e contrasto corretti nel turno 1. Turno 3 (2026-10-11): le affermazioni deperibili («record assoluto/attuale», «NUOVO», «la più vicina/lontana») riformulate come «alla data del catalogo (maggio 2026)», con la fonte (Naidu et al. 2025 per MoM-z14; arXiv 2603.15841 per EGS-z11-R0). I record possono essere superati dopo questa data.

## Riepilogo
Una mappa 1D dell'universo osservabile a file singolo: 112 galassie su un unico asse radiale, commutabile tra tempo di retrospezione, distanza comovente, redshift e fattore di scala, con istogramma logaritmico della densità, ricerca, tour guidato, quiz di 10 domande, interfaccia in 8 lingue e permalink condivisibili. Le preferenze sono conservate in localStorage; nel codice non sono state trovate richieste esterne. Licenza MIT.
