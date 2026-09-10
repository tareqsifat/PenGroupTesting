# VCAD — Web Developer Code Test

The VCAD website (Victoria College of Arts and Design, part of PEN
Group), built with Next.js (App Router) + TypeScript + Tailwind CSS.
Homepage and Explore Our Courses match the supplied designs; Course
Details is an intentional placeholder (see below).

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces a production build;
`npm run lint` runs ESLint.

## How far I got

Homepage and Explore Our Courses are built end-to-end, matching the
designs section by section, working from the measured spacing, type
sizes, colours and radii rather than the token sheet alone. Header and
footer are shared components rendered once and reused across every page.
Course content lives in one data file (`src/data/courses.ts`) and every
page that shows courses — the homepage and the courses grid/gallery —
reads from it. Photos, icons and logos live in `public/images` and
`public/svg`.

Course Details page intentionally left blank, as you gimme permission to
skip.

- **Homepage** — nav, the photo-collage hero ("welcome to VCAD"), the
  "Explore our creative courses" list + photo, the pull-quote + photo
  trio, a campuses carousel, a testimonial carousel, partner institution
  logos, and a stories carousel. All three carousels are single-item,
  prev/next-driven, matching the design (not a multi-card scroller).
- **Explore Our Courses** — hero, a school filter, the asymmetric card
  grid (one large feature card, two stacked cards, one expanded card
  with school + duration badges), a photo gallery strip (drag or arrow
  navigation), and a testimonial carousel. Filtering triggers a brief
  loading state, and an empty state appears if a filter produces zero
  matches (see below — the brief flags these as intentionally
  undesigned).

Course content is modelled on VCAD's real, public course offering
(vcad.ac.uk/study-with-us) — 5 courses across Graphic Design, Fashion,
and Business & Management for Creatives — since the designs name courses
in passing but don't model course data itself. Copy is
paraphrased from the public course pages; module codes, credits, tuition
and entry requirements are quoted from there. See `src/data/courses.ts`.

## Decisions the design didn't specify

- **Courses/loading/empty states** — explicitly undesigned per the
  brief. Loading shows skeleton placeholders shaped like the real
  grid/strip; an empty filter result shows a message plus a button that
  clears the filter, rather than an ambiguous blank grid.
- **Carousel content beyond one example** — the design shows one
  testimonial, one story and one named campus. A carousel needs more
  than one slide to be meaningfully interactive, so 2–3 further items
  are modelled in the same voice for each (`src/data/testimonials.ts`,
  inline in `StoriesCarousel.tsx` / `CampusesCarousel.tsx`) — clearly
  commented at each call site.
- **Card corner cut-out** — the courses-grid cards have a circle punched
  out of the bottom-right corner around the arrow badge. Reproduced with
  a CSS radial-gradient mask so it scales to both card sizes instead of
  needing a hand-traced SVG shape per card.

## What I'd do next with more time

- Wire the school-filter pill state into the URL (`?school=`) so filtered
  views are shareable/bookmarkable.
- Build out the Course Details page (currently a placeholder — see
  above).
- Add automated tests (component tests for the carousels, grid, and
  accordions; a couple of Playwright smoke tests per page).
- Add basic SEO (OpenGraph images, JSON-LD for courses).
- Accessibility pass on the carousels (keyboard scroll, focus order) and
  accordions (full ARIA roving-tabindex pattern).

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (tokens defined in
`src/app/globals.css` via `@theme`), Inter via `next/font/google`.
