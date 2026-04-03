# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

Ced Studio — multi-brand creative hub website for Ced. One site, four sub-brands.

## Commands

```bash
npm run dev       # Dev server at http://localhost:5173
npm run build     # Vite build → dist/
npm run preview   # Preview production build
```

## Stack

- React 18 + Vite + TypeScript + Tailwind CSS v3
- React Router v6 (BrowserRouter, client-side routing)
- JSX (not TypeScript)
- Netlify (deploy), Netlify Forms (contact form)
- No backend, no auth, no Supabase

## Artist Name Rule

Always write **Cjones** — capital C, lowercase j. Never CJones, never CJONES.

## Four Sub-Brands

| Brand | Route | Accent | Purpose |
|---|---|---|---|
| C Jones | `/music` | `#00C2FF` | Music artist — hooks, features, beats |
| HB Media | `/promotion` | `#A855F7` | Promotion/media services |
| HB Stream | `/streaming` | `#22C55E` | Gaming/streaming content |
| Lil Said | `/writing` | `#F59E0B` | Writing/commentary |

Future placeholder: **HB Exotics** — local app concept, not built yet.

## Design System

Brand tokens in `tailwind.config.js`:
- `brand-dark: #080808` — page background
- `brand-card: #111111` — card backgrounds
- `brand-border: #1F1F1F` — borders
- `brand-silver: #9CA3AF` — body text
- `brand-cjones: #00C2FF`
- `brand-hbmedia: #A855F7`
- `brand-hbstream: #22C55E`
- `brand-lilsaid: #F59E0B`

Utility classes in `src/index.css`:
- `.btn-cjones` `.btn-hbmedia` `.btn-hbstream` `.btn-lilsaid` `.btn-outline`
- `.card`

## Pricing (Ced's confirmed rates)

- Hook Writing: $50
- Feature Verse: $150
- Collaboration: Custom / Inquire
- Music Promotion post: $25–$35 (12-hour feature)
- Play with Ced (gaming): $25
- Request a stream: $15

## File Structure

```
src/
  data/
    articles.js       — 6 sample articles for Lil Said writing page
    services.js       — musicServices, promoServices, streamServices
  components/
    layout/           — Navbar.jsx, Footer.jsx
    ui/               — Button.jsx, Card.jsx, SectionHeader.jsx
  pages/
    Home.jsx
    Music.jsx         — C Jones brand
    Promotion.jsx     — HB Media brand
    Streaming.jsx     — HB Stream brand
    Writing.jsx       — Lil Said brand
    Contact.jsx
    NotFound.jsx
```

## Contact Form

Netlify Forms — `data-netlify="true"` on the form tag. No serverless function needed.
Request types: Music Feature, Hook Request, Promotion Service, Streaming Collaboration, Writing Inquiry, General.

## Content To Update Before Launch

- `src/pages/Music.jsx` — replace `about:blank` video placeholders with real YouTube IDs
- `src/data/articles.js` — replace sample articles with real Lil Said content
- `src/components/layout/Footer.jsx` — add real social media handles/links
- `src/pages/Streaming.jsx` — add real Twitch/YouTube/TikTok links
- `index.html` — add real favicon

## GitHub / Deploy

- GitHub: https://github.com/yvetteingram/ced-studio
- Deploy: Connect repo in Netlify dashboard, build command `npm run build`, publish dir `dist`
- No environment variables needed
