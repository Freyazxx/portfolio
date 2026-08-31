# Xiaoxuan Zhou — Personal Portfolio

A personal portfolio website built as a **Vibe Coding** project — designed and
built through human × AI collaboration (Claude Code / Codex + human direction).

**Positioning:** Language × AI × Global Experience. Editorial, warm, cinematic —
a digital home, not a résumé page.

## Tech stack

| Layer     | Choice                                      |
| --------- | ------------------------------------------- |
| Framework | **Next.js 16** (App Router)                 |
| Language  | TypeScript                                  |
| Styling   | Tailwind CSS v4                             |
| Motion    | Framer Motion                               |
| Fonts     | Fraunces · Inter · JetBrains Mono (self-hosted via `next/font`) |

**Why Next.js over Vite:** multiple routed pages, first-class SEO/Open Graph,
`next/font` self-hosting, and one-command deploy to Vercel — all requirements
for a portfolio you'll share on LinkedIn and job applications.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build (checks TypeScript, lint and build):

```bash
npm run build
npm run start
```

## Project structure

```
app/                  # routes (one file per page)
  layout.tsx          # fonts, SEO/OG metadata, sidebar shell
  page.tsx            # HOME
  about/ hcr/ ai-language/ global-events/ ucsb/ life/ contact/
  opengraph-image.tsx # dynamic social share image
  sitemap.ts robots.ts not-found.tsx icon.svg
components/           # UI + motion primitives
  Sidebar.tsx NavbarMobile.tsx Footer.tsx
  Hero.tsx PageHeader.tsx SectionHeading.tsx
  SmartImage.tsx      # unified image + graceful placeholder
  Metric.tsx AIWorkflow.tsx ExperienceTimeline.tsx
  PhotoGrid.tsx PhotoStory.tsx Skills.tsx Contact.tsx
  motion/             # Reveal, FadeIn
data/                 # ← edit content here, not in components
  site.ts nav.ts experience.ts skills.ts projects.ts gallery.ts
public/images/        # your photos (see below)
```

## Editing content

All text lives in `data/` — you should never need to touch a component:

- **`data/site.ts`** — name, tagline, email, GitHub URL, résumé link,
  site URL (SEO). LinkedIn is optional — leave `linkedin: ""` to hide it.
  **Replace the `TODO` placeholders first.**
- **`data/experience.ts`** — the timeline (education + work).
- **`data/projects.ts`** — the HCR case study, the MT+PE project, and the AI
  workflow steps.
- **`data/skills.ts`** — the four skill groups.
- **`data/gallery.ts`** — photo metadata (see below).
- **`data/nav.ts`** — sidebar navigation.

## Adding photos

Drop images into `public/images/`, then point each photo's `src` in
`data/gallery.ts` to the public path. Until then, an **elegant placeholder**
renders automatically (no broken images, no random photos).

| Folder                | What goes here                                            |
| --------------------- | --------------------------------------------------------- |
| `public/images/profile/`  | Hero collage — your portrait + 2 smaller shots (上海 / UCSB…) |
| `public/images/hcr/`      | HCR internship — desk, project, tools                      |
| `public/images/world-games/` | 2025 Chengdu World Games — venue, interpreting, moments |
| `public/images/fisu/`     | FISU World University Games (add when you have content)    |
| `public/images/ucsb/`     | UCSB — campus, coast, classmates                          |
| `public/images/life/`     | Life — travel, cafés, books, friends, gaming              |

Example:

```ts
// data/gallery.ts
{ src: "/images/life/shanghai.jpg", alt: "Shanghai", ratio: "3/4" },
```

Supported ratios: `"1/1"`, `"3/4"`, `"4/5"`, `"4/3"`, `"3/2"`, `"16/10"`.
Recommended size: ~1600px on the long edge, JPEG, under ~500 KB for fast loads.

> 把照片放进对应文件夹后，在 `data/gallery.ts` 里填上 `src` 路径即可，占位图会自动被替换。

## Placeholders to finish

Search for `TODO` in `data/` — these need your real details before sharing:

- deployed domain (`data/site.ts` → `url`)
- HCR internship exact dates (`data/projects.ts`, `data/experience.ts`)
- FISU story text (`app/global-events/page.tsx`) — photos already in place

## Language / i18n

The site is **English-first** (aimed at global and AI roles). Content is fully
data-driven, so adding Chinese is a matter of swapping the `data/` files or
introducing a locale layer later — no component changes required.

## Deployment

**Vercel (recommended):**

```bash
npx vercel
# or connect the GitHub repo in vercel.com — it auto-detects Next.js
```

1. Update `url` in `data/site.ts` to your domain before deploying (SEO/OG).
2. Push to GitHub → import in Vercel → done.

The `opengraph-image.tsx`, `sitemap.ts` and `robots.ts` are generated
automatically at build time.

---

*Designed & built through human × AI collaboration.*
