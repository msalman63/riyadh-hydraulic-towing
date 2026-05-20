# Riyadh Hydraulic Towing — سطحة هيدروليك الرياض

Production website for a hydraulic towing service based in Riyadh, Saudi Arabia.

## Stack

- Angular 21 (standalone components, signals)
- Tailwind CSS v4
- TypeScript
- Deployed on Vercel

## Features

- Bilingual — Arabic (RTL) + English (LTR)
- Mobile-first, fully responsive
- Smooth scroll SPA — no routing
- Language switcher with localStorage persistence
- Floating WhatsApp + Call buttons
- Google Maps embed
- SEO optimized meta tags

## Structure
src/app/
├── components/        # navbar, hero, services, about, why,
│                      # coverage, gallery, contact, footer, floating-buttons
├── core/services/     # language.service, scroll.service
├── data/              # typed static data (constants, translations)
├── interfaces/        # TypeScript interfaces
└── constants/         # brand, phone, social URLs

## Local Development

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200`

## Production Build

```bash
ng build --configuration production
```

Output → `dist/riyadh-hydraulic-towing/browser`

## Deployment

Hosted on Vercel. Every push to `main` triggers an automatic redeploy.

## Notes

- All colors reference CSS variables defined in `styles.css`
- Translations managed via `TRANSLATIONS` constant — no i18n library
- Data is fully typed — ready for Supabase migration later