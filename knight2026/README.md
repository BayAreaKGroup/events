# K-Night 2026

Bay Area K-Group의 연례 테크 이벤트 **K-Night 2026** 공식 웹사이트.

> Event · Sep 12, 2026 · Computer History Museum, Mountain View, CA

**Live (GitHub Pages):** https://bayareakgroup.github.io/events/knight2026/

Ported from the original Vite app ([eunhye-k/k-night](https://github.com/eunhye-k/k-night)) to Next.js (App Router, static export).

---

## Pages

| Route | Page | Notes |
|-------|------|--------|
| `/` | Home | Hero, Overview, Past K-Night, Network |
| `/agenda` | Agenda | Coming soon |
| `/speakers` | Speakers | Coming soon |
| `/about` | About | Header, Team, Sponsors, Network |
| `/donation` | Donation | Impact, how to support |
| `/ticket` | Ticket | Ticket options, notice, carpool |

All routes are served under the `/events/knight2026` base path in production.

---

## Getting Started

**Requirements:** Node.js 20+

```bash
npm install
npm run dev
```

| Command | What it does |
|---------|----------------|
| `npm run dev` | Local dev server (routes served under the `/events/knight2026` base path) |
| `npm run build` | Typecheck + static export → `out/` |
| `npm run lint` | Oxlint |

---

## Folder Structure

```text
src/
├── app/             # Next.js App Router — one folder per route
├── assets/          # Images, icons (by section)
├── components/
│   ├── about/       # About page sections
│   ├── agenda/
│   ├── common/      # Shared components
│   ├── donation/
│   ├── home/
│   ├── layout/      # Header, Footer
│   ├── motion/      # Framer Motion Reveal / Stagger
│   ├── speakers/
│   ├── ticket/
│   └── ui/          # Button, EventBadge, …
├── hooks/
├── lib/             # motion variants, links, socials
├── styles/          # Design tokens (tokens.css)
└── types/
```

**Conventions**
- Route = `src/app/<route>/page.tsx` → sections live under `src/components/<feature>/`
- Design tokens: `src/styles/tokens.css` + Tailwind theme
- Scroll animations: `src/lib/motion.ts` + `src/components/motion/Reveal.tsx`

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript |
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| Styling | Tailwind CSS v3 + CSS tokens |
| Routing | Next.js file-based routing |
| Motion | Framer Motion |
| Lint | Oxlint |

---

## Deploy

`main` push → GitHub Actions → GitHub Pages, served at `/events/knight2026/`.

Workflow: `.github/workflows/deploy-pages.yml` (repo root — builds this app and assembles it with the events archive index).
