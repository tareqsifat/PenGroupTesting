# VCAD — Web Developer Code Test

Three pages of the VCAD website (Victoria College of Arts and Design, part
of PEN Group), built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces a production build;
`npm run lint` runs ESLint.

## How far I got

All three pages are built: Homepage, Explore Our Courses, and Course
Details. Header and footer are shared components rendered once and reused
across every page. Course content lives in one data file
(`src/data/courses.ts`) and every page that shows courses — the homepage
carousel, the courses grid/gallery, and the details page — reads from it.

- **Homepage** — hero, a featured-courses carousel, a schools carousel,
  and a CTA section. Both carousels support drag and arrow navigation.
- **Explore Our Courses** — a school filter, the asymmetric card grid
  (one feature card, two stacked cards, one expanded card with school
  and duration badges), and a full gallery strip below it. Filtering
  triggers a brief loading state, and an empty state appears if a filter
  produces zero matches.
- **Course Details** — hero with badges, and tabs (Overview / Curriculum
  / Entry Requirements / Careers) where Curriculum is an accordion built
  from the course's module data. Tabs and accordion are functional, not
  static markup.

Course content is modelled on VCAD's real, public course offering
(vcad.ac.uk/study-with-us) — 5 courses across Graphic Design, Fashion,
and Business & Management for Creatives — rather than invented courses,
once I found that VCAD is a real PEN Group institution with its own site.
Copy is paraphrased from the public course pages; module codes, credits,
tuition and entry requirements are quoted from there. See
`src/data/courses.ts`.

## Important limitation: no visual mockups of the three pages

I want to flag this clearly rather than let it look like an oversight.
The Figma export I was given (`FigmaExport/`) contained the brief itself
and a **design tokens sheet** (colours, type scale, radii, "Inter
throughout") — but not the actual Homepage / Explore Courses / Course
Details frames referenced in the brief, and no image assets. I don't have
Figma API or MCP access in this environment, and the file link resolves
to Figma's authenticated app shell, which isn't fetchable headlessly.

So: colours, type sizes, weights, radii and the *structural* requirements
(asymmetric grid shape, header/footer as shared components, tabs +
accordion, carousels, data-driven cards) all come directly from the brief
and the token sheet and are followed exactly. The actual page
*composition* — hero layout, section order, card arrangement within the
grid, spacing rhythm — is my own design judgment, not a reproduction of a
Figma frame I never had access to. If given the real frames, the fastest
fix would be swapping component layout/spacing to match, since the token
foundation underneath is already correct.

For the same reason, there are no exported photos, so course cards use an
accent-coloured gradient block instead of an image (`CourseVisual.tsx`) —
a deliberate placeholder, not a broken `<img>`.

## One decision the brief didn't specify

The brief explicitly calls out that loading and empty states aren't
designed for the courses page. I added a school filter (not requested,
but a natural way to make those two states reachable rather than
theoretical) and decided:

- **Loading** — filtering simulates a brief network round-trip and shows
  skeleton placeholders shaped like the real grid/strip, so the layout
  doesn't jump when data arrives.
- **Empty** — a filter with zero matches shows a message plus a button
  that clears the filter, rather than an ambiguous blank grid.

## What I'd do next with more time

- Get the real Figma frames and align composition/spacing exactly, and
  use real VCAD course photography in place of the gradient placeholders.
- Add automated tests (component tests for the carousel, grid, and tabs;
  a couple of Playwright smoke tests per page).
- Add basic SEO (OpenGraph images, JSON-LD for courses) now that the
  course data is real.
- Revisit accessibility passes on the carousel (keyboard scroll, focus
  order) and tab/accordion (full ARIA roving-tabindex pattern).

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (tokens defined in
`src/app/globals.css` via `@theme`), Inter via `next/font/google`.
