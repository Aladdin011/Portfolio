# AladdinCode portfolio

Personal portfolio for Nurudeen Salihu, built with Next.js App Router, React, and
TypeScript. The site presents selected work, engineering practice, technical focus,
career timeline, and a contact form.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- CSS design tokens and component-scoped class conventions in `src/app/globals.css`
- Nodemailer for the `/api/send-email` route
- Next Font for IBM Plex Mono and Instrument Sans

## Project structure

```text
src/
  app/                    Next.js routes, metadata, API route, and global CSS
  components/
    layout/               Navigation, footer, status bar, clock, and brand UI
    sections/             Page sections and full-page content blocks
    ui/                   Reusable links, status indicators, and project rows
    schematics/           Project-specific SVG schematic components
  data/                   Portfolio content and structured page data
  lib/                    Links, system status, and generated build metadata
public/                   Browser-served images, video, résumé, and icons
scripts/                  Build-time metadata generation
```

## Getting started

The project requires Node.js `24.19.x` (see `.nvmrc`) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — generate build metadata and start the development server.
- `npm run build` — generate build metadata and create an optimized production build.
- `npm start` — serve the latest production build.
- `npm run lint` — run ESLint.
- `npx tsc --noEmit` — run the TypeScript compiler without emitting files.

## Environment variables

The contact API uses:

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
```

Keep local environment files private. The repository's `.env.example` documents the
expected variable names without credentials.
