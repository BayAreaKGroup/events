# BAKG Events

Event sites for [Bay Area K-Group](https://bayareakgroup.org/), served with GitHub Pages.

**Live:** https://bayareakgroup.github.io/events/

## How this repo works

One repo hosts every yearly event site, each in its own folder, plus an archive
index at the root:

```
events/
├── index.html            → /events/            BAKG Events archive (static page)
├── knight2026/           → /events/knight2026/ K-Night 2026 (Next.js app, source)
└── <future-event>/       → /events/<future-event>/
```

Nothing compiled is committed. On every push to `main`, GitHub Actions
(`.github/workflows/deploy-pages.yml`) builds each event app, assembles the
folders into one site, and deploys it to GitHub Pages.

## Adding a new event

1. Create a folder named after the event's URL path (e.g. `knight2027/`).
   - Plain static HTML works as-is; a Next.js app should use static export
     (`output: 'export'`) with `basePath: '/events/<folder>'` — see
     `knight2026/next.config.mjs`.
2. If it needs a build step, add install/build/copy steps for it in
   `.github/workflows/deploy-pages.yml` (mirror the knight2026 steps).
3. Add a card for it in the root `index.html` archive grid.
4. Push to `main` — CI deploys it to `https://bayareakgroup.github.io/events/<folder>/`.

## Local development

Each event folder is self-contained; see its own README
(e.g. [`knight2026/README.md`](knight2026/README.md)) for dev commands.
