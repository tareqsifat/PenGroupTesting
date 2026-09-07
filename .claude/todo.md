# Project Log — VCAD Code Test

What was actually done, in order, and where each item stands once
checked against [`failed-doc.md`](./failed-doc.md). "Done" here means
"implemented and working," not "flawless" — items with a known gap
say so explicitly rather than claiming a clean state.

## 0. Intake

- [x] Read the brief (`FigmaExport/THE BRIEF.png`) and the token sheet
      (`FigmaExport/Design.png`).
- [x] Identified the Figma link only had a token sheet, not the three
      real page frames (WEB-234 Homepage, WEB-234 Explore our course,
      WEB-594 Course Details) — flagged to the user rather than
      guessing silently. No Figma API/MCP access in this session, and
      `WebFetch` on the Figma URL returns an empty SPA shell.
      → confirmed as the largest real risk in `failed-doc.md` §1.4.
- [x] Given the user had nothing else to share, researched the real
      brand instead: `pengroup.com` (parent company) → confirmed VCAD
      is a real PEN Group institution → `vcad.ac.uk` for real course
      content, since none existed in the Figma export or the brief.

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
      next — including the Figma-frame limitation, stated plainly
      rather than glossed over.
- [x] Wrote `failed-doc.md`: an adversarial audit of this project
      against the Figma tokens, the research, and standard Next.js
      conventions, with every claim checked against the real code.
      9 of 13 claims confirmed as real (if mostly minor/disclosed)
      issues — this file exists so that isn't hidden either.

## Outstanding (not done)

Everything marked `[ ]` above, all confirmed in `failed-doc.md`:
default favicon, dead `sky` accent code, no carousel keyboard support,
no ARIA tab/accordion pattern, 56px vs 57px circular arrow button, two
arbitrary-value gradients outside the token system. None break a
brief requirement; all are real and unaddressed as of this file.

## Still blocked

- Git identity (`user.name`/`user.email`) not yet set in this repo —
  local commit still pending on that.
- GitHub repo creation and Vercel deploy — planned, not started.
