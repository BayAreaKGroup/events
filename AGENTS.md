# AGENTS.md — BAKG Events repo conventions

Rules for AI agents (and humans) working in this repo. Follow these exactly;
do not "improve" the structure without the maintainer asking for it.

## Repo layout — one folder per event, fixed

```
events/
├── index.html                      # Archive index page → /events/ (plain static HTML, no build)
├── README.md                       # Repo docs
├── AGENTS.md                       # This file
├── .github/workflows/deploy-pages.yml  # THE ONLY deploy pipeline
└── <event>/                        # One folder per event → /events/<event>/
    └── (self-contained app or static site)
```

- Every event lives in exactly one top-level folder named after its URL path
  (lowercase, no spaces, year-suffixed: `knight2026`, `knight2027`, …).
- The folder name IS the public URL segment. Never rename an existing event
  folder — it breaks published URLs.
- No shared code between event folders. Each event is self-contained on
  purpose (yearly snapshots must not break when another year changes).
  Copy, don't import across event folders.

## Deployment invariants

- **Never commit build output** (`out/`, `dist/`, `.next/`, `node_modules/`).
  CI builds everything on push to `main`.
- All builds and site assembly happen ONLY in
  `.github/workflows/deploy-pages.yml`. Do not add per-event workflow files,
  and do not add a second workflow that deploys Pages.
- A Next.js event app must use `output: 'export'`, `trailingSlash: true`,
  `images.unoptimized: true`, and `basePath: '/events/<folder>'`
  (see `knight2026/next.config.mjs` as the reference).
- Do not switch the repo back to branch-based ("legacy") Pages serving.

## Adding a new event (checklist)

1. Create `<event>/` folder (static HTML or Next.js static export).
2. If it needs a build: add install/build/copy steps to
   `deploy-pages.yml`, mirroring the knight2026 steps.
3. Add a card for it in the root `index.html` archive grid.
4. Do not touch other events' folders.

## Event app conventions (knight2026, template for future years)

- Next.js App Router (`src/app/<route>/page.tsx`). Do NOT convert to the
  legacy `pages/` router.
- Page sections live in `src/components/<feature>/`; shared pieces in
  `components/common`, `components/ui`, `components/layout`,
  `components/motion`.
- Design tokens live in `src/styles/tokens.css` and are consumed via the
  Tailwind theme (`tailwind.config.js`). Add/modify tokens there — do not
  hardcode colors/spacing in components.
- Static assets are imported (`import img from '@/assets/…'`) and used as
  `img.src` in plain `<img>` tags. Do not introduce `next/image` optimization
  (incompatible with static export) and do not move assets to `public/`.
- Client interactivity (hooks, framer-motion, event handlers) requires
  `'use client'` at the top of the component file.
- Routing uses `next/link` + `usePathname()`. `react-router-dom` is banned.
- Lint with `npm run lint` (oxlint). Keep the existing package set; do not
  add dependencies without need.

## Root archive page (`index.html`)

- Plain static HTML with inline CSS — keep it build-free.
- Visual language mirrors the K-Night design tokens (Pretendard body,
  Stack Sans Notch display, JetBrains Mono labels, accent `#F03466`).
- One card per event in the grid; keep the `N°00X` index sequence and the
  dashed "next year" placeholder tile.

## Git

- Work happens on `main` via normal pushes (small team). Never force-push.
- Do not commit as, or impersonate, another contributor.
- AI attribution in commits is forbidden: never add
  `Co-Authored-By: Claude <noreply@anthropic.com>` or any other
  `Co-Authored-By:` / "Generated with" trailer crediting an AI tool.
  Commit messages must contain no AI-authorship lines at all.
- Git operations (`git add`, `git commit`, `git push`, or any variant) are
  the human contributor's responsibility by default. An AI agent may run
  them only when the human explicitly asks for that operation in the
  current session — never proactively, and never on its own judgment.
