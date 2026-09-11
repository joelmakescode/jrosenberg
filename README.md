# jrosenberg.dev

Persönliche Seite: Startseite mit Profil und Projekten, eine Detailseite pro Projekt,
zweisprachig (DE/EN). Statisch vorgerendert, kein Backend, keine Cookies, kein Tracking.

Angular 22 · Prerendering über `@angular/ssr` · Hosting auf Cloudflare Pages.

## Entwickeln

```bash
npm start     # Dev-Server auf http://localhost:4200
npm test      # Unit-Tests (Vitest)
npm run build # Produktionsbuild nach dist/jrosenberg/browser
```

Den fertigen Build so testen, wie ihn der Hoster ausliefert:

```bash
cd dist/jrosenberg/browser && python3 -m http.server 8080
```

## Inhalte pflegen

Alles Inhaltliche liegt als typisiertes TypeScript im Repository – kein CMS, keine API:

| Datei                        | Inhalt                                                          |
| ---------------------------- | --------------------------------------------------------------- |
| `src/app/data/profile.ts`    | Name, Rolle, Standort, Status, Über-mich-Text, Skills, Links    |
| `src/app/data/projects.ts`   | Alle Projekte (`status: 'done' \| 'in-progress' \| 'planned'`)  |
| `src/app/data/site.ts`       | Domain für canonical-/Open-Graph-Links, optionales Vorschaubild |
| `src/app/data/legal.ts`      | Angaben für das Impressum                                       |
| `src/app/i18n/dictionary.ts` | Alle UI-Texte in DE und EN                                      |

`title` darf ein einfacher String sein, wenn es ein Eigenname ist (`'EcoPlatform'`),
oder `{ de, en }`, wenn er übersetzbare Wörter enthält – dafür gibt es den Helfer
`localized()` in `src/app/shared/localized.ts`. `period` akzeptiert `'YYYY-MM'` und
`'YYYY'`, wenn der Monat noch offen ist.

`status` entscheidet, in welcher Sektion der Startseite ein Projekt landet:
`done` → „Projekte", `in-progress` → „In Entwicklung", `planned` → „Geplant".

Ein neues Projekt ist ein Eintrag in `PROJECTS`. Der `slug` wird zur URL
(`/projects/<slug>`), muss eindeutig sein und wird beim Build automatisch zu einer
eigenen HTML-Datei vorgerendert – Route, Karte, Detailseite und Sitemap ergeben sich
daraus von selbst. `end` im Zeitraum weglassen heißt „läuft noch"; bei
`status: 'planned'` wird daraus „geplant ab …".

Fehlt ein englischer Text im Wörterbuch, schlägt der Build fehl – das ist Absicht.

## Build-Ausgabe

`npm run build` erzeugt in `dist/jrosenberg/browser`:

- `index.html` und `projects/<slug>/index.html` – vorgerenderte Seiten inklusive
  Titel, Description und Open-Graph-Tags
- `404.html` – die leere Angular-Shell; Cloudflare Pages liefert sie für unbekannte
  Pfade mit Status 404 aus, Angular rendert darin die Not-Found-Seite
- `sitemap.xml` und `robots.txt` – von `scripts/postbuild.mjs` aus den tatsächlich
  vorgerenderten Seiten erzeugt
- `_headers` – Security-Header und Cache-Regeln für Cloudflare Pages

## Deployment (Cloudflare Pages)

| Einstellung            | Wert                      |
| ---------------------- | ------------------------- |
| Build command          | `npm run build`           |
| Build output directory | `dist/jrosenberg/browser` |
| Environment variable   | `NODE_VERSION` = `24`     |

Jeder Push auf `main` deployt live, jeder Branch bekommt eine Preview-URL.
