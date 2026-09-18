# Nurudeen Salihu — portfolio

Next.js 15 (App Router) + TypeScript. No CSS framework, no animation library:
every effect on the page is CSS transitions plus about forty lines of
JavaScript, which keeps the bundle near-zero and the motion consistent.

## Run it

```bash
npm install
npm run dev
```

## The one file you must edit

`lib/links.ts`. Every outbound URL on the site is declared there once.

A `null` value is deliberate, not unfinished: `SmartLink` renders it as a
disabled control reading "Available on request" instead of an `href="#"`.
Dead links are structurally impossible here — you cannot ship one by
forgetting to fill something in.

Also drop into `public/`:

- `Nurudeen-Salihu-Resume.pdf`
- `og.png` — 1200×630, your name and one metric. Without it your link
  previews as a blank box in every application portal and DM.

## Where things live

```
app/
  layout.tsx      fonts (next/font, self-hosted), metadata, no-flash theme script
  page.tsx        section order, nothing else
  globals.css     the entire design system — tokens, easing scale, all motion
components/
  Nav.tsx         client: scroll progress + condense  [macro]
  Hero.tsx        client: the single orchestrated entrance  [macro]
  ProjectRow.tsx  server: pointer-triggered row effects  [micro]
  SmartLink.tsx   server: the no-dead-links guarantee
  Contact.tsx     client: copy-to-clipboard confirmation  [micro]
  Footer.tsx      client: theme toggle via View Transitions
  schematics/     one hand-built SVG per system
lib/
  links.ts        every URL, in one place
  content.ts      metrics, timeline, stack tiers, compact projects
```

## Motion budget

Deliberately small, because a recruiter spends under ninety seconds here.

**Macro — runs without being asked.** Two things only: the hero entrance
(~1.1s, once per load) and the nav, which condenses past 40px and carries a
hairline scroll-depth rule. Both are informational.

**Micro — responds to the pointer.** Link underlines wipe in from the left
and out to the right, buttons fill from the baseline, project rows draw
their own rule and start packets moving along the schematic, timeline dates
shift 3px, the copy button swaps its label and returns on its own.

**Deliberately absent:** scroll-triggered section reveals. Content that is
on screen is readable the moment it is on screen. Staggered fade-ups on
every section are the single clearest tell of a templated build.

Everything collapses under `prefers-reduced-motion: reduce` — and it
collapses to *visible*, never to hidden content waiting on a transition
that will not run.

## Type and colour

Two families. IBM Plex Mono carries every heading at large size — unusual
as a display face, and honest about the subject. Instrument Sans handles
body copy. One accent (brass) and one data colour (verdigris) against a
petrol base; light mode is a full second palette, not an inversion.

Tokens are in `:root` with a dark default, a `prefers-color-scheme` block
guarded by `:root:not([data-theme='dark'])`, and explicit `[data-theme]`
overrides — so system preference, manual choice, and the pre-paint script
in `layout.tsx` can never disagree.
