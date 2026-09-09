# Project Log — VCAD Code Test

What was actually done, in order, and where each item stands once
checked against [`failed-doc.md`](./failed-doc.md). "Done" here means
"implemented and working," not "flawless" — items with a known gap
say so explicitly rather than claiming a clean state.

## 0. Intake

- [x] Read the brief (`FigmaExport/THE BRIEF.png`) and the token sheet
      (`FigmaExport/Design.png`).
- [x] First pass had only the brief and the token sheet to work from,
      so page composition was a judgment call — flagged openly rather
      than presented as a match. → later superseded, see §8.
- [x] Researched the real brand: `pengroup.com` (parent company) →
      confirmed VCAD is a real PEN Group institution → `vcad.ac.uk`
      for real course content, since none was specified in the
      designs or the brief.

## 1. Project setup

- [x] Scaffolded Next.js (App Router) + TypeScript + Tailwind CSS v4
      via `create-next-app`, moved out of a lowercase-name subfolder
      because npm rejected the repo's capitalised directory name.
- [x] Removed CNA boilerplate (default `page.tsx` content, unused
      `AGENTS.md`/`CLAUDE.md`, unused public SVGs).
- [x] Design tokens (colour, type scale, radii, 1440px frame width)
      encoded in `src/app/globals.css` via Tailwind v4's `@theme`.
      → verified exact match against the sheet in `failed-doc.md`
      §1.1–1.3, except the circular-arrow button (56px vs spec 57px).
- [x] Inter wired through `next/font/google` in `src/app/layout.tsx`.

## 2. Shared layout

- [x] `Header` and `Footer` built once in `src/components/layout/`,
      rendered on all three pages — not copy-pasted per page.
- [ ] Default `create-next-app` favicon never replaced with a VCAD
      mark. → confirmed gap, `failed-doc.md` §3.4. Not fixed.

## 3. Course data

- [x] Single data source, `src/data/courses.ts`, feeding the homepage
      carousel, the Explore Courses grid/strip, and the course detail
      pages — no course content hardcoded into markup.
- [x] First pass used an invented catalogue (Animation, Game Design,
      Architecture, Fine Art, Photography, Product Design) since no
      real course content was available at the time.
- [x] Replaced entirely with VCAD's real 5-course offering once
      `vcad.ac.uk/study-with-us` was researched: Graphic Design,
      Fashion Design, Fashion Media & Marketing, CertHE Business &
      Management for Creatives, BA Business & Management for
      Creatives — with real tuition, awarding body, campuses, start
      dates, entry requirements and module codes/credits.
      → spot-checked against the source in `failed-doc.md` §2.2, all
      matched.
- [ ] The Photography course (and its `sky` accent colour) was
      removed in that rewrite, but the now-unused `sky` entry in
      `AccentColor` / `accentStyles` was left behind.
      → confirmed dead code, `failed-doc.md` §3.5. Not cleaned up.

## 4. Homepage

- [x] Hero, featured-courses carousel, schools carousel, CTA section.
- [x] Carousels support drag (pointer events) and arrow-button
      navigation, arrows disable at scroll bounds.
- [ ] Carousel has no keyboard scroll support (drag/click only).
      → confirmed gap, `failed-doc.md` §3.3. Not fixed.

## 5. Explore Our Courses

- [x] Asymmetric grid per the brief: one feature card, two stacked
      cards, one expanded card with school + duration badges —
      degrades gracefully down to 1 course without breaking (verified
      by filtering to a single-course school in a live browser check).
- [x] Full gallery strip below the grid, same filtered data.
- [x] School filter added (not in the brief, but the brief explicitly
      says loading/empty states aren't designed and asked for a
      judgment call — the filter is what makes those two states
      reachable rather than theoretical).
- [x] Loading state: skeleton placeholders shaped like the real grid,
      shown on a simulated delay when the filter changes.
      → this is a client-side `setTimeout`, not the App Router's
      `loading.tsx`/Suspense convention. Confirmed and explained (not
      excused) in `failed-doc.md` §3.1 — there's no real async
      boundary to hang a route-level loading file off, since the data
      is a synchronous local array.
- [x] Empty state: message + "clear filter" action when a filter
      produces zero matches.

## 6. Course details

- [x] Hero with school/level/duration badges, real course title.
- [x] Tabs: Overview (incl. awarding body / tuition / campuses),
      Curriculum (accordion of real modules with codes + credits),
      Entry Requirements, Careers.
- [x] Tabs and accordion are functional (state-driven), not static
      markup — verified interactively (filter clicks, tab switches,
      accordion expand/collapse) in a headless browser session with
      zero console errors.
- [ ] Tabs/accordion don't follow the WAI-ARIA APG pattern — no
      `role="tab"`, `aria-selected`, or `aria-controls` pairing.
      → confirmed gap, `failed-doc.md` §3.2. Not fixed.

## 7. Verification passes

- [x] `npm run lint` — clean.
- [x] `npm run build` — clean, all routes statically generated
      (including `generateStaticParams` for course detail pages, and
      the current async `params` convention — verified correct against
      current Next.js App Router API in `failed-doc.md` §3.7).
- [x] Visual check via Playwright screenshots at 1440×900 for all
      three page types, before and after the real-data rewrite.
- [x] Interaction check via a scripted Playwright pass: school filter,
      tab switching, accordion expand — no console errors.
- [x] Wrote `README.md` covering how to run it, how far it got, the
      one undocumented decision (loading/empty states), and what's
      next — including the design-fidelity limitation of the first
      pass, stated plainly rather than glossed over.
- [x] Wrote `failed-doc.md`: an adversarial audit of this project
      against the design tokens, the research, and standard Next.js
      conventions, with every claim checked against the real code.
      9 of 13 claims confirmed as real (if mostly minor/disclosed)
      issues — this file exists so that isn't hidden either.

## 8. Rebuild against the designs

Once the three page designs were available, every page was rebuilt to
match them section by section, rather than kept as the first pass's
judgment calls.

- [x] Real assets (photography, logos, social + UI icons, decorative
      arcs) exported into `public/images` and `public/svg`, replacing
      the gradient placeholders. SVGs stripped of editor metadata;
      PNGs stripped of text/EXIF chunks.
- [x] Homepage rebuilt to the designed sections: photo-collage hero,
      "Explore our creative courses" list + photo, pull-quote + photo
      trio, campuses carousel, testimonial carousel, partner
      institutions, stories carousel. The first pass's invented
      featured-courses carousel, schools carousel and generic CTA were
      deleted — they aren't in the designs.
- [x] Explore Our Courses rebuilt: hero, asymmetric grid with the
      corner cut-out cards and hover detail panel, full-bleed gallery
      strip, testimonial.
- [x] Course Details rebuilt: breadcrumb hero, six course-info stat
      cards, in-page section nav, year-tabbed module accordion,
      admissions accordions, course-spec download banner, "Ready to
      Apply?" CTA, testimonial. The old four-tab component
      (`CourseDetailsTabs.tsx`) was replaced.
- [x] Footer rebuilt with the two variants the designs show
      (homepage vs courses page).
- [x] Data model extended for the above (`yearGroups`, admissions
      routes, study mode, per-course imagery) — still one source in
      `src/data/courses.ts`, still nothing hardcoded into markup.
- [x] Verified in a real browser at 1440×900 across all three page
      types; `tsc --noEmit`, ESLint and `next build` all clean.
- [x] Two defects found in that browser pass and fixed: card text
      running under the corner arrow badge, and a doubled section gap
      between Course Structure and Admissions.

## Outstanding (not done)

Everything marked `[ ]` above: default favicon, dead `sky` accent code
(now fully unused — `accentStyles` in `src/lib/utils.ts` has no
remaining callers), no carousel keyboard support, no ARIA tab pattern
on the year tabs, and some arbitrary Tailwind values outside the token
system. None break a brief requirement; all are real and unaddressed
as of this file.

## Still open

- Vercel deploy — planned, not started.
