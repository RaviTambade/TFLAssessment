<!-- .github/copilot-instructions.md -->
# Copilot instructions for this repository

This file gives concise, actionable guidance for AI coding agents working on the frontend React + TypeScript Vite app in this repository.

Keep guidance short and concrete. Do not modify server-side APIs or change behavior unless the user explicitly requests it.

1) Big picture
- This is a single-page React application built with Vite and TypeScript. The frontend lives at the repository root. Major files:
  - `package.json` — dev/build scripts: `npm run dev` (vite), `npm run build` (tsc -b && vite build), `npm run preview`.
  - `src/` — React source. Components live in `src/components`.
  - `public/` — static assets (images, icons).

2) Architecture & patterns
- Components are simple functional React components (TSX), typed with local interfaces (see `src/components/CandidateTestResult.tsx`).
- Styling uses utility classes (Tailwind-like classes are present). Tailwind is not configured in the repo; prefer using existing CSS in `src` and small Tailwind-like utility classes already used in components.
- Data fetching in components uses the browser fetch API directly (see `CandidateTestResult` calling `http://localhost:5201/api/Result/results`). Do not change API endpoints unless instructed.

3) Conventions and examples
- Type declarations: components commonly define local interfaces for API shapes and row models near the top of the file (example: `interface ApiAssessmentResult` and `interface AssessmentRow` in `CandidateTestResult.tsx`).
- Format dates with `new Date(...).toLocaleDateString()` when mapping API results to UI.
- Keep presentation/layout and data logic together inside the component unless asked to extract it.

4) Build & dev workflow (practical commands)
- Start dev server (fast HMR): `npm run dev`.
- Build for production: `npm run build` (runs `tsc -b` then `vite build`).
- Lint: `npm run lint` (ESLint configured in repo).

5) When editing code
- Preserve exported component names and default exports; other code may import them by path.
- Keep TypeScript types compatible; if adding new props or exports, update references.
- Avoid adding new global packages without user confirmation. If a package is required, propose it and update `package.json` only after consent.

6) Tests and validation
- This repo has no tests. After changes run `npm run dev` locally to ensure the dev server starts and TypeScript compiles (`tsc -b` is used in the build step).

7) Integration points & external services
- The frontend calls a backend at `http://localhost:5201`. Treat that endpoint as external and do not mock or change it unless the user asks.

8) Files to review for context when making UI changes
- `src/components/CandidateTestResult.tsx` — example data fetching, typing, and table layout patterns.
- `src/main.tsx` — app entry (routing and root render).
- `public/` — image assets referenced by components.

9) Examples of acceptable small improvements
- Improve responsive layout and spacing using the same utility-class approach already present.
- Add descriptive alt attributes to images and small accessibility fixes.

10) When to ask clarifying questions
- If a change affects backend API shapes, tests, or package dependencies, ask before proceeding.

If anything above is unclear or you need repository-level details (routes, global state, or missing configs) ask now and I will update these instructions.
