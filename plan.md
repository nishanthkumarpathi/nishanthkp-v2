# Portfolio Redesign Plan

_Audit + improvement roadmap for the Nishanth Kumar Pathi portfolio. Prepared on the `redesign` branch._

---

## 1. Verdict: Refactor, don't rewrite

You do **not** need a from-scratch rewrite. The foundation is solid:

- Clean React + Vite + TypeScript + Tailwind v4 stack.
- Good separation of data (`src/app/data/*`) from presentation (`src/app/components/*`).
- Motion (Framer) animations, Embla carousel, Radix UI primitives already in place.
- Routing is already set up (and now supports deep links after the research-papers fix).

The real problems are **information architecture and a thin data model**, not the rendering tech. The single biggest issue: **your best achievements (an award, keynotes, 30+ workshops, volunteering) are all flattened into one undifferentiated "Gallery" of 33 captioned images.** A recruiter or conference organizer can't quickly see "He won an award," "He keynoted X," "He trained 500+ people." We fix that by **categorizing the data and giving each category its own section** — mostly additive work on top of what exists.

---

## 2. Current state — what's working vs. what's hurting

### Working well
- Hero, About (stat cards), Publications (now deep-linkable), Contact services grid.
- Consistent component pattern; animations are tasteful.
- Mobile responsive layout throughout.

### Hurting the portfolio
| # | Problem | Impact |
|---|---------|--------|
| 1 | **Everything is in one flat "Gallery"** (`galleryPhotos.ts`, 33 items, title-only) — awards, talks, workshops, volunteering all mixed | Achievements are invisible; no story |
| 2 | **No "Awards & Recognition" section** — the CyberX Bahrain Excellence Award 2024 is just photo #28 | Your single most credible signal is buried |
| 3 | **No structured "Speaking Engagements"** — talks exist only as photos, no event name / date / venue / topic / role | Organizers can't assess you as a speaker |
| 4 | **No "Community & Outreach" framing** — ISACA volunteering, food drives, mentoring shown as random photos | Undersells real impact |
| 5 | **Thin gallery data model** — only `id`, `src`, `title`; no date, location, category, role, link | Can't filter, sort, or tell a story |
| 6 | **Color tokens inconsistent** — primary `#2596be`, header hover `#007BFF`, LinkedIn `#0077B5`, ~5 hardcoded navy shades in About | Looks slightly "off"/unbranded |
| 7 | **Patents data orphaned** (`patents.ts` defined but the Publications component hardcodes its own patent inline) | Maintenance drift |
| 8 | **Accessibility gaps** — no skip link, missing `aria-expanded` on mobile menu, weak focus rings, non-semantic stat cards | Excludes keyboard/AT users; hurts SEO |
| 9 | **Gallery lightbox** — no arrow-key navigation, no "x of N" counter, masonry distorts aspect ratios | Clunky viewing |
| 10 | **Dependency bloat** — `react-slick`, `react-dnd`, `recharts`, `@mui/material`, `@mui/icons-material`, `vaul`, `cmdk` etc. appear unused | Bundle size, slower installs |

---

## 3. Recommended information architecture

Restructure the single-page flow into clearer, scannable sections. Proposed order (home page, top → bottom):

```
1. Hero
2. About  (keep stat cards — they're a strong "at a glance")
3. Awards & Recognition          ← NEW (extract from gallery)
4. Speaking & Workshops          ← NEW (extract + enrich from gallery)
5. Research & Publications        (existing, already improved)
6. Community & Outreach           ← NEW (volunteering, mentoring, committees)
7. Collaborations                 (existing — fold orgs in here)
8. Gallery                        (becomes a *visual archive*, filterable)
9. Contact
```

Dedicated routes (deep-linkable, shareable, SEO-friendly):
- `/` (all sections above as anchors)
- `/research-papers/:slug` (done)
- `/gallery` (done — upgrade to filterable)
- `/speaking/:slug` _(optional, if talks get detail pages)_
- `/awards` _(optional)_

---

## 4. The key fix — a richer, categorized data model

Replace the flat `Photo` type with a unified, categorized model so one source of truth can power Awards, Speaking, Outreach, **and** the Gallery.

```ts
// src/app/data/engagements.ts
export type EngagementCategory =
  | 'award'
  | 'speaking'      // keynote / panel / talk
  | 'workshop'      // training delivered
  | 'volunteer'     // outreach / community service
  | 'committee'     // ISACA forum, judging, organizing
  | 'summit';       // attended / represented

export interface Engagement {
  id: string;
  slug: string;
  title: string;
  category: EngagementCategory;
  date?: string;          // ISO; enables sort + "2024" badges
  location?: string;      // "Manama, Bahrain"
  organization?: string;  // "ISACA", "CyberX", "Eskan Bank"
  role?: string;          // "Keynote Speaker", "Trainer", "Volunteer"
  description?: string;
  image: string;          // existing imported asset
  link?: string;          // event page / slides / recording
  metrics?: { label: string; value: string }[]; // "Attendees: 120"
  featured?: boolean;     // surface on home page
}
```

This single array lets each new section be a **filtered view**:
- Awards section = `engagements.filter(e => e.category === 'award')`
- Speaking section = `category === 'speaking' || 'workshop'`
- Outreach section = `category === 'volunteer' || 'committee'`
- Gallery = everything, with category filter chips.

Your 33 existing photos already encode the category in their filenames (Award, Workshop, Summit, Volunteer, Forum) — migration is mostly a one-time tagging pass.

---

## 5. Section-by-section recommendations

### 5a. Awards & Recognition (NEW — highest priority)
- A short, prominent band with 1–N award cards: trophy icon, award name, issuer, year, one line of context, optional cert image.
- Start with **CyberX Bahrain Cyber Security Excellence Award 2024**. Add any others.
- Design: horizontal cards or a 2–3 column grid with a gold/amber accent to differentiate from the cyan brand — awards should *feel* special.
- Reuse the `certificates`/`images` fields already on the `ResearchPaper` type as a pattern.

### 5b. Speaking & Workshops (NEW)
- Turn talks into a **timeline or card list** with: event name, date, venue, your role (Keynote / Panel / Trainer), topic, and a link to slides/recording if available.
- Add a quick summary stat row up top: e.g. _"30+ sessions • 7 countries • 500+ professionals trained."_ (Pulls double duty with the About stats.)
- Group by year. Optionally make each a detail route `/speaking/:slug`.
- This is what conference organizers and training clients look for — it's currently nearly invisible.

### 5c. Community & Outreach (NEW)
- Frame ISACA volunteering, Ramadan food distribution, mentoring, and student workshops as **impact**, not snapshots.
- Use impact metrics: students mentored, workshops for graduates (IGA), volunteer events. The About section already claims "Students" and "Workshops" counts — link them here with proof.
- Warmer visual treatment (photos + short captions) than the corporate sections.

### 5d. Gallery (UPGRADE, don't remove)
- Keep it, but reposition as a **visual archive** that sits *after* the structured sections.
- Add **filter chips** by category (All / Awards / Speaking / Workshops / Outreach) driven by the new `category` field.
- Fix the **lightbox**: add ←/→ keyboard + on-screen arrows, an "x of N" counter, and show the engagement's metadata (date, location, role) under the image.
- Fix **masonry aspect-ratio distortion**: either use `react-responsive-masonry` (already a dependency) properly with intrinsic sizes, or switch to a uniform `aspect-[4/3]` grid with `object-cover`.
- Lazy-load below-the-fold images (`loading="lazy"`).

### 5e. Page navigation
- **Keep the floating prev/next + jump-to-top** (`SectionNavigation`) — it's a nice touch — but:
  - Drive its `sections` array from the **same `navigation.ts` source** the Header uses, so it can't drift out of sync (currently hardcoded separately).
  - Add a subtle **scroll-progress indicator** (thin top bar) for long-page feedback.
  - Consider a **scrollspy** that highlights the current section in the Header nav.
- **Header**: add `aria-expanded`/`aria-controls` to the mobile toggle, a **skip-to-content** link, and align hover color to the brand token.
- For the new sections, add their anchors to `navigation.ts` so Header, Footer, and SectionNavigation all update from one place.

---

## 6. Design-system cleanup (do this early — it touches everything)

1. **Define brand tokens once** (Tailwind v4 `@theme` in CSS, or a `theme.ts`):
   - `--color-brand: #2596be` (primary), a deeper `--color-brand-dark` for hover, an `--color-award: amber` accent, and a fixed navy ramp to replace the ad-hoc `#0B1C3E / #001f3f / #002a52 / #003566` values in `about.ts`.
   - Replace header hover `#007BFF` with the brand token; keep LinkedIn `#0077B5` only on the LinkedIn button.
2. **Centralize links/socials** into one `siteConfig.ts` (LinkedIn, X, GitHub, YouTube, blog, location). They're currently duplicated across Hero and Footer with slight variations.
3. **Consistent icon sizing** — pick `size={}` props everywhere; drop the mixed Tailwind `w-[18px]` approach.
4. **Semantic + a11y pass** — stat cards as `<dl>/<dt>/<dd>`, visible `focus-visible:` rings on all interactive elements, real alt text on engagement images.
5. **Typography scale** — define 2–3 heading sizes as utilities so section headers are consistent (they vary slightly today).

---

## 7. Performance & housekeeping

- **Prune unused dependencies.** Audit and likely remove: `react-slick`, `react-dnd`, `react-dnd-html5-backend`, `recharts`, `@mui/material`, `@mui/icons-material`, `@emotion/*`, `vaul`, `cmdk`, `input-otp`, `react-day-picker`, `react-resizable-panels` if not referenced. (Verify with a usage grep before removing.) This shrinks the bundle and install time noticeably.
- **Code-split routes** with `React.lazy` for `/gallery` and `/research-papers`.
- **Responsive images** — generate `srcset`/sizes for the hero headshot and gallery (Vite image tooling) instead of shipping full-res JPGs.
- **Wire up `patents.ts`** into Publications (remove the inline hardcoded patent) so there's one source of truth.
- **SPA fallback** — ensure the deploy target rewrites unknown paths to `index.html` (needed for `/research-papers/:slug` and any new routes). Add `_redirects` (Netlify) or `vercel.json` rewrites as appropriate.

---

## 8. Phased roadmap

**Phase 0 — Foundations (low risk, high leverage)**
- Brand tokens + `siteConfig.ts` for links/socials.
- A11y quick wins (skip link, focus rings, `aria-expanded`).
- Dependency prune.

**Phase 1 — Data model**
- Introduce `engagements.ts` with the categorized model; migrate the 33 photos (tag category/date/role/org).
- Keep `galleryPhotos.ts` as a thin re-export during migration to avoid breakage.

**Phase 2 — New sections**
- Build **Awards & Recognition** (start with CyberX 2024).
- Build **Speaking & Workshops** (timeline + summary stats).
- Build **Community & Outreach**.
- Add anchors to `navigation.ts`; update Header/Footer/SectionNavigation from that single source.

**Phase 3 — Gallery upgrade**
- Category filter chips, fixed aspect ratios, improved lightbox (arrows, counter, metadata).

**Phase 4 — Polish**
- Scroll progress + scrollspy, route code-splitting, responsive images, SEO meta per route.

---

## 9. Quick wins you can ship this week
1. Extract the **CyberX Award** into a small Awards band on the home page.
2. Add a **one-line speaking stat** ("30+ sessions across 7 countries") near the top.
3. Unify the **brand hover color** (`#007BFF` → `#2596be`).
4. Add **skip-to-content** + `aria-expanded` on the mobile menu.
5. Fix the **gallery lightbox** to support ←/→ and show a counter.

---

## 10. Open questions for you
- Do you have **dates, venues, and your role** for the talks/workshops? (Needed to make Speaking section credible.)
- Any **awards beyond CyberX 2024**?
- Do you want **detail pages** for talks (slides/recordings), or just cards?
- Should **Collaborations** merge into Community & Outreach, or stay separate?
- Any **metrics** you can cite for outreach (people trained, mentees, volunteer hours)?

Answer these and Phase 2 becomes straightforward to build.
