# Project WHEAT-NESS — Digital Portal

**Project WHEAT-NESS** (Wheat-Based Consumer Foods Value Chain Optimisation and Cost Competitiveness Programme) is Nigeria's national initiative to reset the economics of the wheat-based consumer foods value chain, put idle milling capacity back to work, support MSME bakeries, and establish a self-renewing development fund.

## Stack & Architecture

- **Framework:** Next.js (App Router, Server Components & Client Islands)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Validation:** Zod
- **Form Handling:** React Hook Form
- **Icons:** Lucide React

## Application Routes

- `/` — Home (Hero, compact stats baseline, portal entry pathways)
- `/about` — About WHEAT-NESS (Challenge statement, evidence & consequence tabs, Made-in-Nigeria campaign, impact stats)
- `/programme` — The Programme (Core objectives, dual-track financing architecture, parallel miller & agronomy tracks)
- `/governance` — Governance (Institutional structure flow & leadership profiles)
- `/involved` — Get Involved (Stakeholder registration pathways deep-linking to contact)
- `/contact` — Contact (Official Programme Delivery Unit correspondence form & headquarters info)
- `/alt` — Alternate UI View (High-contrast executive institutional presentation)

## Environment Variables

Configure the following variables in `.env.local` for email dispatch and site URL setup:

```env
# Optional Email Provider Setup (Resend)
RESEND_API_KEY=re_123456789...
CONTACT_TO_EMAIL=info@projectwheatness.gov.ng

# Base Site URL for Sitemap & Robots
NEXT_PUBLIC_SITE_URL=https://projectwheatness.gov.ng
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build & Deployment

```bash
npm run build
npm run start
```

Deployable directly on Vercel or any Next.js-compatible host.
