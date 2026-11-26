# Amir Hossain Akash — Freelance Developer Portfolio

**Live site: [akash100220.github.io/Akash](https://akash100220.github.io/Akash/)**

A responsive, high-performance interactive portfolio for **Amir Hossain Akash**, Freelance Full Stack Developer. Built with React 19, TanStack Start (SSR), Tailwind CSS v4 and Lenis smooth scrolling.

## About

This is the interactive home for my freelance work: the services I offer, the
stack I build with and the way I think about front-end craft. Everything here is
real code you can open and read, and the result is live on GitHub Pages.

- **Live site** → https://akash100220.github.io/Akash/
- **Source** → https://github.com/akash100220/Akash
- **Contact** → [amirhossainakash8@gmail.com](mailto:amirhossainakash8@gmail.com)
- **GitHub** → https://github.com/akash100220

## What I build

| Service | What it covers | Stack |
|---|---|---|
| Custom Web Applications | Authentication, dashboards, search and admin areas backed by PostgreSQL | React, TypeScript, Node.js, Tailwind CSS, PostgreSQL |
| Business & Portfolio Websites | Fast, accessible marketing sites with SEO and light/dark themes | HTML, CSS, JavaScript, SEO, Accessibility |
| Interactive Experiences | Animated heroes, physics details and smooth scrolling with motion fallbacks | React 19, TypeScript, Tailwind CSS v4, Vite |
| Browser-first Web Apps | Offline-friendly tools with bundled data, on-device calculations and maps | React, TypeScript, Leaflet, Three.js |
| Store & Booking Platforms | Bilingual storefronts, customer accounts and staff admin panels | Next.js, Prisma, PostgreSQL |

## Key Features

- **Monogram hero** with a large type treatment and availability-focused calls to action.
- **Interactive Developer ID Card**: damped pendulum swing driven by pointer physics, with a 3D flip on hover or tap.
- **Periodic Table of Skills**: filterable grid of tech-stack elements with brand SVGs and a live inspector panel.
- **Accordion service showcase**: expandable cards with illustrative UI sketches for each service.
- **Experience timeline**: a short path from independent work to client projects.
- **Contact & Footer**: interactive hopping-letter typography, one-click email copy with toast confirmation, and social links.

## Tech Stack

- **Framework**: TanStack Start (React 19) + Nitro SSR
- **Styling**: Tailwind CSS v4 + `@fontsource-variable/inter-tight`, `jetbrains-mono`, `instrument-serif`
- **Animation & Physics**: Lenis smooth scroll, `requestAnimationFrame` pendulum, CSS 3D transforms
- **Icons**: `simple-icons` + `lucide-react`
- **Testing**: Vitest + Testing Library

## Development

```bash
npm install        # install dependencies
npm run dev        # local dev server on port 3000
npm run build      # production build
npm test           # run the test suite
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: it installs the
dependencies, runs the tests, builds the site with `BASE_PATH` set to the
repository name, and publishes `dist/client` to GitHub Pages.

Live site: https://akash100220.github.io/Akash/
