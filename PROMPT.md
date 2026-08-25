# Master Execution Prompt for Project WHEAT-NESS Digital Front Door

> **Target Repository:** `https://github.com/victordeman/wheat.git`
> **Target Environment & Host:** Vercel
> **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide Icons, Framer Motion (optional for subtle animations), Server Actions / API Routes.

---

## Instructions for Jules Agent

You are assigned to design, build, and deploy the official, government-grade digital front door for **Project WHEAT-NESS** — Nigeria's national programme to optimise the wheat-based consumer foods value chain.

The design language must communicate a confident, editorial visual style where **"public institution meets modern industrial"**. The visual identity relies heavily on a **deep-forest-green** and **harvest-gold** brand palette, featuring high-typography editorial hierarchy, industrial photography, data-dense stat callouts, structured institutional flowcharts, and multi-pathway interactive correspondence.

Reference site for content structure, layout hierarchy, tone, and visual feel:
👉 **`https://wheatness-test.vercel.app/`**

Follow the phased roadmap below sequentially to complete the implementation.

---

## Phase 1: Foundation & Next.js Architecture Setup

### Objective
Initialize a clean, high-performance Next.js full-stack application structure using App Router, TypeScript, and Tailwind CSS configured for Vercel deployment.

### Tasks
1. **Initialize Next.js App:**
   - Framework: `Next.js 14+` (App Router)
   - Language: `TypeScript`
   - Styling: `Tailwind CSS` + `PostCSS`
   - Components: Modular Server & Client components setup under `@/components`
2. **Directory Structure:**
   ```
   ├── app/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   ├── alt/
   │   │   └── page.tsx              # Alternate UI layout page
   │   ├── api/
   │   │   ├── contact/
   │   │   │   └── route.ts         # Correspondence handling API
   │   │   └── pathway/
   │   │       └── route.ts         # Stakeholder pathway registration API
   │   ├── globals.css
   │   └── favicon.ico
   ├── components/
   │   ├── ui/                       # Buttons, Cards, Badges, Inputs, Dialogs
   │   ├── layout/                   # Header, Navbar, Footer, MobileNav
   │   ├── sections/                 # Hero, BaselineStats, Objectives, Governance, Tracks, Impact, Campaign, Pathways, Contact
   │   └── SVG/                      # Custom WHEAT-NESS logo (Wheat Sheaf + Gear)
   ├── lib/
   │   ├── data.ts                   # Structured content, stats, leadership profiles
   │   └── validation.ts             # Zod validation schemas for forms
   └── public/
       └── images/                   # Hero, bakery, milling, leadership & grain assets
   ```
3. **Configuration & Dependencies:**
   - Install essential packages: `lucide-react`, `clsx`, `tailwind-merge`, `zod`.
   - Configure `next.config.js` for image optimization and domain settings.

---

## Phase 2: Brand System, Typography & Visual Identity

### Objective
Establish the institutional-industrial visual design system adhering strictly to the brand guidelines and color palette.

### Brand Palette Rules
- **Primary / Deep Forest Green:** `#0F382C` (Dark), `#134E3A` (Base), `#1B634B` (Light accent)
- **Secondary / Harvest Gold:** `#DAA520` (Gold), `#C59B27` (Deep Gold), `#E5C158` (Soft Gold)
- **Neutral Light / Warm Paper:** `#F9F9F6` (Canvas BG), `#F1F1EB` (Card BG), `#E5E5DC` (Borders)
- **Neutral Dark / Charcoal Industrial:** `#1A1D1A` (Body text), `#0D0F0D` (Dark text)

### Logo Specification
- **Symbol:** A stylized **"W"** formed from a combining wheat sheaf (agronomy) interlocking with a mechanical gear (milling & industry).
- **Wordmark:** **"Project WHEAT-NESS"** in bold uppercase sans-serif paired with "Federal Republic of Nigeria" badge or tagline: *"Wheat-Based Consumer Foods Value Chain Optimisation and Cost Competitiveness Programme"*.

### Tailwind Configuration (`tailwind.config.ts`)
Set up custom colors, fonts (e.g., `Playfair Display` or `Cinzel` / `Instrument Serif` for editorial titles + `Plus Jakarta Sans` or `Inter` for body & data metrics), and industrial container widths.

---

## Phase 3: Core UI Component Library & Shared Layouts

### Objective
Build reusable, accessible UI components representing the editorial public-institution aesthetic.

### Tasks
1. **Header & Navigation (`Header.tsx`):**
   - Sticky top bar with dark forest green / warm translucent blur background.
   - Government badge / WHEAT-NESS brand logo.
   - Navigation links: `About`, `The Programme`, `Governance`, `Get Involved`, `Contact`.
   - Action buttons: `↹ Alternate UI` switcher and `Get Involved` CTA button.
   - Mobile responsive drawer navigation.
2. **Footer (`Footer.tsx`):**
   - Official coat of arms / Federal Republic of Nigeria disclaimer.
   - Brand logo with full programme description.
   - Categorized links (`Explore`, `Participate`, `Governance`).
   - Copyright notice & link to Alternate UI view.
3. **Custom UI Elements (`/components/ui`):**
   - **StatCard:** Large numbers (e.g., `~4.3m MT`, `$3bn+`, `~50%`), label, subtitle, harvest gold border accents.
   - **GovernanceCard:** Portrait image, title, name, institutional role badge.
   - **TrackCard:** Step numbers (`01`, `02`, `03`), dark green background, gold accent line.
   - **PathwayCard:** Industrial image header, title (Millers, MSMEs, Investors, General Public), description, action link.

---

## Phase 4: Landing Page & Main Content Sections Development

### Objective
Construct the complete single-page digital front door mirroring the content and structure of `https://wheatness-test.vercel.app/`.

### Section Breakdown & Layout Rules

1. **Hero Section (`HeroSection.tsx`):**
   - Large banner background: Golden wheat fields at sunrise / industrial processing plant.
   - Tagline badge: *Federal Republic of Nigeria — National Programme*.
   - Headline: *"Strengthening Nigeria's Wheat Value Chain."*
   - Subhead: *"Project WHEAT-NESS is the national programme to optimise the wheat-based consumer foods value chain, lower costs, raise milling utilisation and build a self-renewing development fund for industry."*
   - Dual CTAs: `Explore the Programme` and `Why it matters`.

2. **The Baseline & Challenge Stats (`ChallengeSection.tsx`):**
   - Problem statement block: *"Nigeria consumes wheat at industrial scale, but produces almost none of it."*
   - Grid of key baseline metrics:
     - **~4.3m MT** Wheat imported each year
     - **$3bn+** Annual import cost
     - **~60,000 MT** Domestic production today
     - **~50%** Milling capacity utilised
   - Interactive tab bar switcher: `The Challenge`, `The Evidence`, `The Consequence`, `The Intervention`.

3. **Programme Objectives (`ObjectivesSection.tsx`):**
   - 4 Core Pillars:
     1. **Raise Milling Utilisation:** Put idle capacity back to work (target 50% → 65%).
     2. **Ease Consumer Costs:** Target 5–10% reduction in wheat-based consumer food costs.
     3. **Scale MSMEs:** Equip 72% SME bakery market with direct flour access & support.
     4. **Endow Development Fund:** Capitalise a self-renewing fund for sustainable financing.

4. **Financing Architecture (`FinancingSection.tsx`):**
   - Dual-track capital architecture:
     - **Track 1: Direct Programme Activities** (Milling optimization, MSME support, Made-in-Nigeria campaign).
     - **Track 2: Fund Capitalisation** (Self-renewing development fund, seed capital, private sector inflows).

5. **Governance & Leadership (`GovernanceSection.tsx`):**
   - Clear institutional reporting line:
     - `01. The Presidency` (National authority & policy direction)
     - `02. Steering Committee` (Chaired by Honourable Minister of State for Industry, Trade & Investment)
     - `03. Programme Delivery Unit` (Day-to-day execution & partner management)
   - Leadership Profiles:
     - **Senator John Owan Enoh** (Chairman, Steering Committee & Honourable Minister of State for Industry, Trade and Investment)
     - **Gerald Okunsebor** (National Programme Coordinator, Project WHEAT-NESS)

6. **Parallel Tracks & Impact Areas (`ParallelTracksSection.tsx` & `ImpactSection.tsx`):**
   - Parallel tracks: Miller Diversification, Research & Domestic Production (closing the 4.3m MT gap).
   - Impact showcases: Primary Production, Industrial Milling, MSME Bakery Output.

7. **Made-in-Nigeria Campaign (`CampaignSection.tsx`):**
   - Callout for domestic consumer demand. Visual showcases of Nigerian baked staples (Agege bread, sliced bread, local pastries).

8. **Stakeholder Pathways (`PathwaysSection.tsx`):**
   - 4 Entry Doors:
     - **Millers:** Structured offtake agreements.
     - **MSMEs:** Flour allocation & enterprise development.
     - **Investors & OPS:** Fund capitalization & private capital.
     - **General Public:** Public inquiry & engagement.

---

## Phase 5: Full-Stack Integration & Interactive Correspondence Forms

### Objective
Implement client-side interactive forms with robust backend Next.js API route validation and submission handling.

### Implementation Tasks
1. **Interactive Correspondence Form (`ContactForm.tsx`):**
   - Fields: `Full Name`, `Organisation`, `Email Address`, `Pathway Selection` (Dropdown: Miller, MSME, Investor, General Public), `Message`.
   - Client-side validation using Zod and React Hook Form / native React state.
2. **API Route (`app/api/contact/route.ts`):**
   - Accepts POST requests.
   - Validates input format (Zod schema).
   - Simulates or integrates email dispatch / database storage (e.g., Prisma / Supabase / Resend / Webhook).
   - Returns structured JSON response (`200 OK` on success, `400 Bad Request` with error field mapping).
3. **UX Feedback:**
   - Loading spinners, success confirmation banners (*"Your correspondence has been logged with the Programme Delivery Unit"*), and error state handling.

---

## Phase 6: Alternate UI View (Multi-Theme / Layout Switcher)

### Objective
Build the `/alt` page (`index-alt.html` equivalent) providing an alternate editorial layout mode for public preview.

### Tasks
1. Create `app/alt/page.tsx` utilizing a high-contrast editorial theme variant (e.g., dark-mode predominant or dense newspaper-style institutional layout).
2. Ensure seamless switching via the header button `↹ Alternate UI`.

---

## Phase 7: Testing, Verification & Vercel Deployment

### Objective
Ensure full code quality, responsiveness, accessibility compliance, and ready-to-deploy status on Vercel.

### Verification Checklist
1. **Linting & Type Safety:**
   ```bash
   npm run lint
   npx tsc --noEmit
   ```
2. **Build Verification:**
   ```bash
   npm run build
   ```
3. **Vercel Deployment Configuration:**
   - Ensure `vercel.json` or standard Next.js Vercel defaults are correctly configured.
   - Ensure clear environment variable structure (`.env.example`).

---

## Summary of Key Output Artifacts
- Full Next.js project codebase ready to push to `https://github.com/victordeman/wheat.git`.
- Clean government-grade visual presentation matching `https://wheatness-test.vercel.app/`.
- Fully functional full-stack form submission for official stakeholder inquiries.
