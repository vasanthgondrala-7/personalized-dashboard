# Personalized Content Dashboard - Complete Submission

This repository is a complete submission for the SDE Intern - Frontend assignment. It includes a production-ready skeleton, tests, E2E scripts, authentication demo, and real-time demo via Server-Sent Events.

## What is included
- Next.js + TypeScript + Tailwind + Redux Toolkit app
- Mock API routes (and optional real API integration via env keys)
- NextAuth demo (Credentials provider) for authentication flows
- Server-Sent Events mock for realtime updates
- Drag-and-drop reordering (react-beautiful-dnd)
- Framer Motion animations
- Redux Persist for saving preferences/favorites
- Unit tests (Jest + React Testing Library)
- E2E tests (Cypress)
- GitHub Actions CI workflow to run unit tests automatically

## How to run locally
1. Unzip and open in VS Code
2. Install dependencies:
```bash
npm ci
```
3. Create `.env.local` (optional) — copy `.env.example` and fill keys if using real APIs
4. Run dev server:
```bash
npm run dev
```
5. Open http://localhost:3000

## Running tests
- Unit tests:
```bash
npm run test
```
- Cypress E2E (opens UI):
```bash
npx cypress open
```

## Submission checklist (what to upload)
- GitHub repository link (public)
- A short README explaining how to run
- Demo video (30-60s) showcasing:
  - Visiting the dashboard
  - Signing in
  - Searching and favoriting an item
  - Reordering items with drag-and-drop
  - Showing settings and dark mode
- Attach `personalized-dashboard-complete.zip` if required

## Demo recording script (30-60s)
1. Start at the homepage showing the unified feed.
2. Click Sign in and demonstrate the credentials login.
3. Search for a term in the search box (show debounced results).
4. Favorite an item and open Favorites page.
5. Drag one card and move it to the top.
6. Toggle dark mode in settings.
7. Mention how to replace mock APIs with real APIs in `.env.local` and where to add keys.

## Notes
- For production, secure all API keys on the server and do not expose them to client bundles.
- The NextAuth credentials provider used here is a demo and should be replaced with a proper user store in real projects.

Good luck with your internship submission — if you want, I can also:
- Create a ready-to-paste GitHub repository (I can provide exact `git` commands and commit content for you to run locally).
- Generate a short script and narration text for your demo video recording.
- Help you write a concise cover note to attach with your submission.

