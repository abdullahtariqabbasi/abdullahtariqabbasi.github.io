<<<<<<< HEAD
# Abdullah Tariq Abbasi — Portfolio

A fully responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, themed **"Emerald Matrix"** (near-black + emerald/mint, matrix-rain background, CRT scanlines). Showcases 11 shipped projects spanning Computer Vision, Generative AI, Agentic AI, and full-stack web platforms.

![Built with Next.js + Tailwind](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

---

## ✨ Features

- **"Emerald Matrix" background** — animated canvas matrix-rain (falling glyph columns), drifting emerald/mint/amber aurora blobs, a masked grid overlay, and CRT scanlines. Honors `prefers-reduced-motion`.
- **Hero** with a typewriter role cycler, a faux-terminal "stack" card, floating stat badges, and an animated stats bar.
- **About** — narrative, capability pillars, and an infinite tech marquee.
- **Projects** — filterable grid (All / AI & ML / Web Platforms). Web projects open a **screenshot gallery modal** (prev/next + dots); AI projects show a poster-frame thumbnail and play a **video demo** in the modal (loaded only when opened).
- **Skills** — six categorized capability cards (AI/ML, AI Frameworks & Libraries, DevOps & Cloud, Frontend & Web, Backend & Data, Tools).
- **Experience** — alternating vertical timeline with pulsing nodes + an education card.
- **Contact** — working form with client + server-side validation, loading/success/error states, and direct links (email, phone, GitHub, LinkedIn).
- **Contact API** — `POST /api/contact` validates input and delivers it via SendGrid or Gmail SMTP.
- **Polish** — glassmorphism, scroll-reveal animations, active-section nav tracking, sticky navbar, mobile slide-in menu, custom scrollbar, reduced-motion support, SEO + OpenGraph metadata, and a downloadable résumé PDF.
- **Responsive** — mobile-first, from 360px phones to ultrawide monitors.

---

## 🚀 Quick start

> Requirements: **Node.js 18.17+** (Node 20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

### Production build

```bash
npm run build
npm run start      # serves the optimized build on http://localhost:3000
```

---

## 📁 Project structure

```
abdullah-portfolio/
├─ public/
│  ├─ projects/                 # project screenshots + AI demo videos/posters
│  └─ Abdullah_Tariq_Abbasi_Resume.pdf   # drop your résumé here
├─ src/
│  ├─ app/
│  │  ├─ api/contact/route.ts   # contact form API (validation + email delivery)
│  │  ├─ icon.svg               # favicon (AA monogram)
│  │  ├─ globals.css            # tailwind layers + custom styles/animations
│  │  ├─ layout.tsx             # fonts, metadata, root layout
│  │  └─ page.tsx               # composes all sections
│  ├─ components/
│  │  ├─ Background.tsx         # matrix-rain canvas + aurora + scanlines
│  │  ├─ Navbar.tsx             # sticky nav, active tracking, mobile menu
│  │  ├─ Hero.tsx               # typewriter + terminal card + stats
│  │  ├─ About.tsx              # narrative, pillars, marquee
│  │  ├─ Projects.tsx           # filterable project grid
│  │  ├─ ProjectModal.tsx       # video demo (AI) or image gallery (web) modal
│  │  ├─ Skills.tsx             # capability cards
│  │  ├─ Experience.tsx         # timeline + education
│  │  ├─ Contact.tsx            # contact form (client)
│  │  ├─ Footer.tsx
│  │  └─ RevealOnScroll.tsx
│  ├─ data/content.ts           # ← ALL editable content lives here
│  └─ hooks/useReveal.ts        # IntersectionObserver scroll reveal
├─ tailwind.config.ts
├─ next.config.mjs
└─ tsconfig.json
```

---

## ✏️ Customizing content

**Everything editable lives in one file:** [`src/data/content.ts`](src/data/content.ts).

- `profile` — name, roles, tagline, contact info, social links, summary.
- `stats` — the four numbers in the hero stats bar.
- `projects` — each project's name, category, description, highlights, tech stack, images/video, and live link.
- `skillGroups` — skill categories and items.
- `experiences` — work history timeline entries.
- `education` — degree, school, and period shown on the timeline.

### Adding / swapping project media

- **Web projects**: drop images into `public/projects/` and reference them in `projects[].images` (paths like `/projects/my-image.png`). The first image is the card thumbnail; all images appear in the modal gallery.
- **AI projects**: set `type: "ai"`, provide a `video` path and a `poster` (still-frame) path. The poster is the card thumbnail; the video only loads once the modal is opened.

### Colors & theme

Brand colors are defined in [`tailwind.config.ts`](tailwind.config.ts) under `colors` (`brand` = emerald, `accent` = mint, `amber`, `ink`). Edit the hex values there to re-theme the whole site.

---

## 📬 Contact form behavior

1. The client validates and `POST`s to `/api/contact`.
2. The route re-validates server-side, then sends the message via SendGrid or Gmail SMTP to `EMAIL_TO`.

Without email env vars configured, the form still validates and returns a friendly error, but nothing is delivered. Copy `.env.example` → `.env.local` and fill in:

- `SENDGRID_API_KEY` + `EMAIL_TO` — preferred SendGrid delivery path.
- `EMAIL_USER` + `EMAIL_PASS` + `EMAIL_TO` — Gmail SMTP fallback.

For Gmail SMTP, enable 2-Step Verification and use an **App Password** — a plain Gmail password is rejected by Google.

---

## ☁️ Deploying

This is a standard Next.js app — deploy anywhere that supports Node.

### Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — no config needed. Add the `EMAIL_*` / `SENDGRID_*` env vars, then deploy.

### Self-host / Docker

```bash
npm run build
npm run start    # runs on PORT 3000; reverse-proxy with nginx/Caddy as needed
```

---

## 🧱 Tech stack

| Layer       | Choice                                   |
| ----------- | ----------------------------------------- |
| Framework   | Next.js 14 (App Router, RSC)             |
| Language    | TypeScript 5                             |
| Styling     | Tailwind CSS 3 + custom CSS              |
| Fonts       | Space Grotesk + JetBrains Mono (Google)  |
| Animations  | CSS keyframes + Canvas + IntersectionObserver |
| Icons       | Inline SVG (no icon dependency)          |

No heavy UI library — every visual is hand-built for a unique look and a small bundle.

## 📄 License

Personal portfolio content © Abdullah Tariq Abbasi. Code structure is yours to adapt and reuse.
=======
# abdullahtariqabbasi.github.io
Portfolio
>>>>>>> e5c571b776e8b80e4ca93fb177b4fab85060efa2
