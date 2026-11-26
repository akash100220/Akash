# Project notes

Personal portfolio for Amir Hossain Akash, a freelance full stack developer.

- Stack: React 19, TanStack Start (SSR), Tailwind CSS v4, Vite.
- All site copy lives in `src/lib/data.ts` — edit the profile, services and
  experience there rather than in components.
- `npm test` runs the Vitest suite. `npm run build` produces `dist/client`.
- `.github/workflows/deploy.yml` builds with `BASE_PATH=/Akash/` and publishes
  to GitHub Pages on every push to `main`.
