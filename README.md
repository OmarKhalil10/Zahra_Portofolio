# Zahra Chibane — Portfolio

Bilingual (FR/EN) portfolio for **Zahra Chibane**, Marketing & Communications project manager in Paris. Seeking a 1-year apprenticeship from September 2026.

Inspired by [landonorris.com](https://landonorris.com/): giant hero typography, manifesto + stats, sticky horizontal-scroll journey, project hall of fame with Drive document embeds, skills hall of fame ranked by LinkedIn endorsements, partners marquee, apprenticeship CTA, contact + footer.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion (scroll-linked + reveal animations) + Lenis (smooth scroll)
- Three.js / React Three Fiber (light hero particle field, code-split, no SSR)
- Bilingual FR (default) / EN toggle, persisted in localStorage
- Free hosting on Vercel, contact via `mailto:` (no backend needed)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repository.
3. Framework preset: **Next.js**. No environment variables needed. Deploy.

## Content

- `lib/content.ts` — all copy (FR + EN): 5 projects with public Google Drive embeds, experience, education, skills with endorsement counts.
- `public/zahra.jpg` — portrait. `public/cv-zahra-chibane.pdf` — downloadable CV.
- Contact: zahrachiibane@gmail.com · [LinkedIn](https://www.linkedin.com/in/zahra-chibane-366a4b182/)
