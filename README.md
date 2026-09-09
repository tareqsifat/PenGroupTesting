# VCAD — Web Developer Code Test

Three pages of the VCAD website (Victoria College of Arts and Design, part
of PEN Group), built with Next.js (App Router) + TypeScript + Tailwind CSS,
built to match the supplied designs.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces a production build;
`npm run lint` runs ESLint.

## How far I got

All three pages are built end-to-end — Homepage, Explore Our Courses and
Course Details — matching the designs section by section, working from
the measured spacing, type sizes, colours and radii rather than the token
sheet alone. Header and footer are shared components rendered once and
reused across every page. Course content lives in one data file
(`src/data/courses.ts`) and every page that shows courses — the homepage,
the courses grid/gallery, and the details page — reads from it. Photos,
icons and logos live in `public/images` and `public/svg`.

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
- **Course Details** — breadcrumb + hero, six course-info stat cards, an
  in-page section nav, a "Course Structure & Details" panel with
  Foundation/First/Second/Third Year sub-tabs and an accordion of
  modules, an "Admissions & Key Details" panel with route accordions
  plus entry/English-language requirements, a course specification
  download banner, a "Ready to Apply?" CTA, and a testimonial carousel.

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
- **Curriculum beyond the Foundation year** — the design shows module
  detail only for the Foundation Year, with an unpopulated First/Second/
  Third Year tab strip. Rather than invent specific module titles the
  design never specified, later years show a short "confirmed closer to
  enrolment" placeholder instead.
- **Card corner cut-out** — the courses-grid cards have a circle punched
  out of the bottom-right corner around the arrow badge. Reproduced with
  a CSS radial-gradient mask so it scales to both card sizes instead of
  needing a hand-traced SVG shape per card.

## What I'd do next with more time

- Wire the school-filter pill state into the URL (`?school=`) so filtered
  views are shareable/bookmarkable.
- Replace the Course Specification "Download PDF" placeholder with a
  real asset once one exists.
- Add automated tests (component tests for the carousels, grid, and
  accordions; a couple of Playwright smoke tests per page).
- Add basic SEO (OpenGraph images, JSON-LD for courses).
- Accessibility pass on the carousels (keyboard scroll, focus order) and
  accordions (full ARIA roving-tabindex pattern).

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (tokens defined in
`src/app/globals.css` via `@theme`), Inter via `next/font/google`.
