# Failure Analysis — VCAD Code Test

> **Status note.** This audit was written against the *first* pass of
> the build, before the three page designs were matched. The pages have
> since been rebuilt to the designs, so some findings below are now
> historical: §1.4 is resolved, and the components named in §3.1–3.2
> (`CourseDetailsTabs.tsx`, `CourseVisual.tsx`) no longer exist. The
> findings are left in place as written rather than quietly edited —
> `todo.md` records which ones were subsequently addressed.

Adversarial audit. Purpose: state the strongest possible case for why
this project fails the brief, against three axes —

1. The design (tokens + structural requirements)
2. The research (real PEN Group / VCAD site content)
3. "Standard Next.js way" of building an App Router project

— then verify every claim against the actual code, file and line. A
claim only counts if it survives verification. The scorecard at the
end is the real result: if most claims collapse under inspection, the
project is sound *for the constraints it was actually built under*.

No claim below was pre-decided as true or false before checking the
code. Some hold up. Most don't.

---

## Axis 1 — Against the design

### 1.1 Colours don't match the token sheet
**Claim:** hex values were eyeballed or approximated from the
`Design.png` swatches instead of copied exactly, so the palette drifts
from spec.

**Verify:** compare every swatch in `Design.png` against
`src/app/globals.css` `@theme` block.

| Token | Spec | Code | Match |
|---|---|---|---|
| Base | #030A2E | `--color-base: #030a2e` | ✅ |
| Deep | #020928 | `--color-deep: #020928` | ✅ |
| Card | #051251 | `--color-card: #051251` | ✅ |
| Card Alt | #040D3D | `--color-card-alt: #040d3d` | ✅ |
| Navy | #061665 | `--color-navy: #061665` | ✅ |
| Border | #384584 | `--color-border: #384584` | ✅ |
| Pink | #FF379E | `--color-pink: #ff379e` | ✅ |
| Magenta | #E018E0 | `--color-magenta: #e018e0` | ✅ |
| Magenta Lt | #E646E6 | `--color-magenta-light: #e646e6` | ✅ |
| Plum | #912491 | `--color-plum: #912491` | ✅ |
| Blue | #2262EE | `--color-blue: #2262ee` | ✅ |
| Cyan | #00FFD2 | `--color-cyan: #00ffd2` | ✅ |
| Text | #EBECF3 | `--color-text: #ebecf3` | ✅ |
| Sky | #8EC8EE | `--color-sky: #8ec8ee` | ✅ |
| Pale Blue | #D7E2FB | `--color-pale-blue: #d7e2fb` | ✅ |
| Pale Blue 2 | #ECF2FD | `--color-pale-blue-2: #ecf2fd` | ✅ |
| Ice Blue | #EBF7FF | `--color-ice-blue: #ebf7ff` | ✅ |

**Verdict: REFUTED.** All 17 colours match exactly.

### 1.2 Type scale doesn't match the sheet
**Claim:** font sizes were approximated in rem instead of the exact
px values ("Hero display 68 Bold", etc.).

**Verify:** `globals.css` `@theme`, values in rem × 16:

| Token | Spec | Code (× 16) | Match |
|---|---|---|---|
| Hero display | 68 Bold | `--text-hero: 4.25rem` (68px), weight 700 | ✅ |
| Page title | 60 Bold | `--text-pagetitle: 3.75rem` (60px), weight 700 | ✅ |
| Section heading | 48 Bold | `--text-heading: 3rem` (48px), weight 700 | ✅ |
| Sub-heading | 36 Semi Bold | `--text-subheading: 2.25rem` (36px), weight 600 | ✅ |
| Card title | 22 Semi Bold | `--text-cardtitle: 1.375rem` (22px), weight 600 | ✅ |
| Default | 16 Medium | `--text-default: 1rem` (16px), weight 500 | ✅ |

**Verdict: REFUTED.** Full scale matches, including weights.

### 1.3 Radii don't match the sheet
**Claim:** the four radius tokens (12 / 34 / 20 / 4px) and the "57px
(full)" circular-arrow spec were not honoured precisely.

**Verify:** `globals.css` defines `--radius-card: 12px`,
`--radius-pill: 34px`, `--radius-badge: 20px`, `--radius-chip: 4px` —
all exact. But `CircularArrowButton.tsx:23` uses `h-14 w-14` (56px),
not 57px.

**Verdict: PARTIALLY CONFIRMED.** Card/pill/badge/chip radii are
exact. The circular arrow button is **56px, 1px short of the 57px
spec** — cosmetically invisible, but the file doesn't match the sheet
if audited literally.

### 1.4 The three actual page designs were never matched
**Claim:** the brief's real deliverable — matching the Homepage,
Explore Our Courses and Course Details designs — was never done; only
the token sheet was followed, so page *composition* is invented.

**Verify:** true of the first pass, and it was disclosed in the README
at the time. It is no longer true of the current code: all three pages
were subsequently rebuilt section by section against the designs
(measured spacing, type sizes, colours, radii, asset placement), the
real photography/logos/icons were exported into `public/`, and the
invented sections from the first pass (featured-courses carousel,
schools carousel, generic CTA) were deleted in favour of the sections
the designs actually specify.

**Verdict: RESOLVED.** Superseded by the rebuild — see the note at the
top of this file. The remaining deltas are the deliberate calls listed
in `README.md` under "Decisions the design didn't specify."

---

## Axis 2 — Against the research (real PEN Group / VCAD site)

### 2.1 Course data still uses invented programmes
**Claim:** the course catalogue (Animation, Game Design, Architecture,
Fine Art, Photography, Product Design) was invented and never
reconciled with the real VCAD offering once it was found.

**Verify:** `src/data/courses.ts` — the current file lists exactly 5
courses: Graphic Design, Fashion Design, Fashion Media and Marketing,
CertHE Business & Management for Creatives, BA Business and Management
for Creatives. `git log`/session history shows the invented catalogue
was fully replaced after `vcad.ac.uk/study-with-us` was fetched.

**Verdict: REFUTED** for the current state of the file — the invented
catalogue no longer exists in the codebase. It *was* true earlier in
the session, which is exactly why this replacement happened.

### 2.2 Facts quoted from the real site don't match what's in the data file
**Claim:** tuition, awarding body, campuses, start dates or module
codes were transcribed wrong from the fetched VCAD pages.

**Verify, spot check against fetched content:**

| Field | Fetched from vcad.ac.uk | In `courses.ts` | Match |
|---|---|---|---|
| Graphic Design tuition | £9,790 | `"£9,790 / year (UK)"` | ✅ |
| Graphic Design awarding body | Arts University Plymouth | `"Arts University Plymouth"` | ✅ |
| Graphic Design start dates | November, February | `["November", "February"]` | ✅ |
| Fashion Design campuses | London – Canary Wharf only | `["London — Canary Wharf"]` | ✅ |
| Fashion Media & Marketing start dates | November, February, June | `["November", "February", "June"]` | ✅ |
| CertHE modules | 401–404, 30 credits each | `code: "401"…"404", credits: 30` | ✅ |
| BA top-up Level 5 modules | 4 modules listed, Level 6 "not detailed" | 4 Level-5 modules included; no invented Level 6 modules | ✅ |

**Verdict: REFUTED.** Every fact checked reproduces the source
correctly, including the one place the source itself was incomplete
(Level 6 modules) — the data file doesn't fabricate detail the
research didn't have.

### 2.3 The visual theme contradicts the real vcad.ac.uk site
**Claim:** the real VCAD site is light-background and image-rich;
this build is a dark navy/pink theme, so it "gets the brand wrong."

**Verify:** confirmed true — `vcad.ac.uk` presents a
"primarily light background, image-rich layout." This build is dark
navy throughout, per `globals.css` `--color-base: #030a2e`.

**Verdict: CONFIRMED, but not a defect.** The brief's own
`Design.png` token sheet — the actual spec for this exercise — is a
dark navy/pink/cyan palette. This is explicitly a redesign exercise,
not a clone of the live site. Following the live site's light theme
*instead of* the supplied tokens would be the actual failure. Noted
here so it isn't mistaken for an inconsistency later.

---

## Axis 3 — Against "standard Next.js way"

*(The brief specifies Next.js App Router, not Nuxt — Nuxt is Vue's
meta-framework and doesn't apply to this codebase. Treating this as
"standard Next.js App Router conventions," which is what's relevant.)*

### 3.1 No `loading.tsx` / `error.tsx` route conventions
**Claim:** the App Router's idiomatic way to express loading and error
states is route-segment `loading.tsx` / `error.tsx` files backed by
Suspense — this project has neither.

**Verify:** `find src/app -iname "loading.tsx" -o -iname "error.tsx"`
returns nothing. The loading state on `/courses` instead comes from
`ExploreCoursesClient.tsx` — a client component that fakes a 500ms
delay with `setTimeout` on every filter change and renders a skeleton
manually.

**Verdict: CONFIRMED.** This is a real deviation from the idiomatic
pattern. It's a defensible one — the course data is a synchronous
local array, not an async data source, so there is no real Suspense
boundary to hang `loading.tsx` off. The brief's "two states are
deliberately not designed" note is specifically about *filtering*
UI state, not route-level navigation, so a client-side simulated
loading state is a reasonable stand-in — but it is not the framework's
standard mechanism, and a reviewer checking for `loading.tsx` will not
find one.

### 3.2 Tabs and accordion are not ARIA-correct
**Claim:** the interactive tab and accordion patterns don't follow the
WAI-ARIA APG tabs/accordion pattern, which "standard" component build
would include.

**Verify:** `grep -r 'role="tab"|aria-selected|aria-controls'
src` returns **zero matches**. `CourseDetailsTabs.tsx` uses a plain
`role="tablist"` div wrapping `Pill` buttons with no `role="tab"`,
`aria-selected`, or `aria-controls`; `Accordion.tsx` uses
`aria-expanded` on the trigger but no `id`/`aria-controls` pairing to
its panel.

**Verdict: CONFIRMED.** Real, unaddressed gap — not the standard
accessible pattern. Already flagged in `README.md` under "what I'd do
next," but that doesn't fix it; it's still broken today.

### 3.3 Carousel isn't keyboard accessible
**Claim:** the custom `Carousel.tsx` only supports pointer drag and
click-to-scroll arrows, not keyboard navigation.

**Verify:** `Carousel.tsx` wires `onPointerDown/Move/Up/Leave` and two
arrow buttons calling `scrollBy`. No `onKeyDown` handler, no
`tabIndex` on the scroll track itself for arrow-key scrolling beyond
the browser's native (inconsistent) scroll-on-focus behaviour.

**Verdict: CONFIRMED.** Real gap, already listed as future work in the
README, not fixed.

### 3.4 Default favicon left in place
**Claim:** the project ships whatever `create-next-app` generated, not
a VCAD-branded icon — inattentive scaffolding.

**Verify:** `src/app/favicon.ico`, 25,931 bytes, timestamped at
scaffold time and never touched again. No brand-specific favicon was
generated for VCAD.

**Verdict: CONFIRMED.** Small, but true and unaddressed.

### 3.5 Dead code: unused `sky` accent
**Claim:** the codebase carries unused code paths — a violation of
"no dead code" / simplification norms.

**Verify:** `AccentColor` includes `"sky"`, and `accentStyles.sky` is
fully defined in `lib/utils.ts`. `grep -r '"sky"' src/data/courses.ts`
— **zero courses use it.** It was live when the catalogue had a
Photography course; that course was removed in the real-data rewrite,
and the accent was never cleaned up behind it.

**Verdict: CONFIRMED.** Genuine dead code, currently unused by any
course in the data file.

### 3.6 Heavy use of arbitrary Tailwind values instead of pure tokens
**Claim:** given a project built entirely around a token system, using
raw arbitrary-value gradients works against the token discipline the
brief asks for.

**Verify:** `Hero.tsx:7` and `CourseVisual.tsx:25` both use
`bg-[radial-gradient(...)]` with hand-written rgba stops not defined
anywhere in the token sheet.

**Verdict: CONFIRMED, low severity.** The token sheet has no gradient
tokens to reach for — there's no non-arbitrary way to express this
under the given system — but it's true that these two spots step
outside the token vocabulary.

### 3.7 Async `params` handled the old (wrong) way
**Claim:** Next.js's App Router changed dynamic route `params` to be
async; a build not updated for this would break or use the old sync
pattern.

**Verify:** `src/app/courses/[slug]/page.tsx` types `params` as
`Promise<{ slug: string }>` and `await`s it in both
`generateMetadata` and the page component.

**Verdict: REFUTED.** This one actually follows the current standard
correctly.

---

## Scorecard

| # | Claim | Verdict |
|---|---|---|
| 1.1 | Colour tokens don't match sheet | **Refuted** |
| 1.2 | Type scale doesn't match sheet | **Refuted** |
| 1.3 | Radii don't match sheet | **Partially confirmed** (57px → 56px, one component) |
| 1.4 | Real page designs never matched | **Resolved** — pages rebuilt to the designs after this audit |
| 2.1 | Course catalogue still invented | **Refuted** (true historically, fixed in current file) |
| 2.2 | Researched facts transcribed wrong | **Refuted** |
| 2.3 | Theme contradicts live site | **Confirmed, not a defect** — intentional per brief |
| 3.1 | No `loading.tsx`/`error.tsx` | **Confirmed** |
| 3.2 | Tabs/accordion not ARIA-correct | **Confirmed** |
| 3.3 | Carousel not keyboard accessible | **Confirmed** |
| 3.4 | Default favicon left in place | **Confirmed** |
| 3.5 | Dead `sky` accent code | **Confirmed** |
| 3.6 | Arbitrary gradient values | **Confirmed, low severity** |
| 3.7 | Async params handled wrong | **Refuted** |

**9 of 13 claims confirmed in some form.** Per the brief this file was
asked to follow: verify the failure claims against the real project,
and if the claims *fail to hold up*, the project is good. They didn't
all fail — six real, unaddressed issues survive verification (1.3,
1.4, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, if 1.4/2.3 are set aside as
disclosed-by-design rather than defects). None are fatal to the brief
— nothing here breaks colour/type/radius fidelity, the shared
header/footer requirement, the data-driven card requirement, or the
working-interactivity requirement — but the project is **not**
flawless, and this file should not be read as a clean bill of health.
The honest read: solid on the things that were fully specified
(tokens, data accuracy), weaker on framework idiom and accessibility
polish that nothing in the brief forced a decision on.
