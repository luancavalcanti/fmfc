## FMFC - Florida Medical Facility Cleaning
This is the official institutional website for FMFC, a company specialized in medical-grade sanitation and disinfection for healthcare facilities across Florida, USA. The project focuses on high performance, professional SEO, and conversion-driven design.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI Library: Material UI (MUI) v6
- Styling: Emotion (CSS-in-JS) + Modern Flexbox
- Fonts: Google Fonts (Cabin) via next/font
- Deployment: Vercel

## Project Structure
The website was built following a Multi-Page Application (MPA) architecture to optimize SEO for specific medical services:

- app/: Contains all routes and the global layout.
  - / (Home): High-impact Hero section, specialized facilities list, and social proof (Reviews).
  - /services: Technical breakdown of medical cleaning protocols and floor care.
  - /about: Company history, work philosophy, and commitment to hygiene.
  - /quote: Conversion funnel featuring a specialized service request form.
- components/: Modular and reusable React components.
- theme/: MUI ThemeProvider configuration maintaining the brand's visual identity (Medical Blue & Cabin Typography).
- assets/: Optimized images and logos (WebP format).

## Key Features
- Sticky Glass Navbar: Dynamic navigation that changes style (transparency/height) based on user scroll using useScrollTrigger.
- Responsive Layout: Fully optimized for mobile and desktop using Flexbox-first design (no complex grids).
- SEO Optimized: Proper use of semantic HTML tags (H1-H6) and NextGen image compression.
- Dark Overlay Hero: Main section featuring custom image filters to ensure text readability over backgrounds.
- Dynamic Theme Integration: Seamless connection between Next.js font optimization and MUI’s rendering engine.

## Development Log

### March 13, 2026 - Project started

- Project Goal: Florida Medical Facility Website.
- Tech Stack: Next.js 15, Tailwind CSS, TypeScript.
- How to run: npm run dev.
- Deployment: Vercel (Production branch: main).

### March 15, 2026
- Implementation of ThemeProvider, Dynamic Navbar, and Hero Section.
  
### March 17, 2026
- Development of institutional pages (Services, About) and navigation flow

### March 18, 2026
- Finalization of the "Get a Quote" lead generation page and Global Footer.