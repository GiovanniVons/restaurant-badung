# Design Review
**Phase:** 4
**Agent:** design-critic
**Date:** 2026-03-24
**Status:** fail

---

## Overall Verdict: FAIL

Strong build with genuine brand character -- the Rumah Makan identity comes through clearly. Typography, color distribution, and content structure are well executed. However, two critical missing elements block shipping: the kawung batik divider pattern specified in the design system is not implemented as a reusable component (only a single CSS watermark exists on ons-verhaal), and the menu page lacks the sticky category sidebar navigation specified in page-designs. Fixing these brings the build to a pass.

## Spec Compliance

| Area | Score | Notes |
|------|-------|-------|
| Typography | 7/10 | Display (Bandoeng) and body (Plus Jakarta Sans) correct; accent (Josefin Sans) loaded and used in nav/buttons/labels but missing on prices and OpenClosedRibbon |
| Color | 8/10 | Palette matches spec; 60/30/10 distribution close; all colors registered in @theme inline; components use inline style var() refs |
| Layout | 7/10 | Good responsive behavior; missing sticky category sidebar on menu page; grids are clean but symmetric for DESIGN_VARIANCE 5 |
| Animation | 7/10 | ScrollReveal with Framer Motion is clean; opacity starts at 0 (correct); GSAP unused despite being in deps |
| Copy | 8/10 | Content matches page-copy well; contact details match dossier; bilingual system works |
| Responsive | 7/10 | MobileBottomBar is smart UX; mobile menu works; spacing could use more mobile-specific tuning |

## Critical Issues

### C1: Kawung Batik Divider Not Implemented as Reusable Component
**Location:** All pages (missing)
**Expected:** Design system specifies an inline SVG kawung/batik pattern as a decorative section divider. Page-designs calls for it between hero-to-introduction (home), before CTA sections, between story sections (ons-verhaal).
**Actual:** Only a single CSS `repeating-conic-gradient` watermark exists at OnsVerhaalContent.tsx:200. No SVG divider, no reusable KawungDivider component. The single most distinctive cultural texture element is missing.
**Fix:** Create `KawungDivider.tsx` as an inline SVG kawung petal motif. Use `--color-kunyit` at ~15% opacity on Rice backgrounds, `--color-rice` at ~15% on Daun backgrounds. Place between: hero and introduction (home), before CTA banner (home), between story sections (ons-verhaal), as header accent on menu page.

### C2: Menu Page Missing Sticky Category Sidebar
**Location:** MenuContent.tsx
**Expected:** Page-designs specifies a sticky sidebar (desktop) / horizontal scroll strip (mobile) listing all 10 menu categories with scroll-spy highlighting.
**Actual:** Categories render sequentially with no quick-nav. The dine-in/afhalen toggle is at the top, but no category navigation exists.
**Fix:** Add sticky left sidebar (lg+) listing category names. On mobile, horizontal scrollable chip bar below the toggle. Use IntersectionObserver for scroll-spy. Category names in `font-accent uppercase tracking-wider`.

## Major Issues

### M1: Section Spacing Lacks Rhythm Variation
**Location:** HomeContent.tsx, all pages
**Expected:** Three section spacing tokens (`--section-space-sm`, `--section-space-md`, `--section-space-lg`) for vertical rhythm. Different section types should use different spacing.
**Actual:** Most sections use uniform padding patterns. The token-based section spacing vars exist in tokens.css but are underused in components. OnsVerhaalContent does use `var(--section-space-main)` (good), but HomeContent uses mostly hardcoded values.
**Fix:** Replace hardcoded py-* on section wrappers with token values: `var(--section-space-sm)` for compact transitions, `var(--section-space-md)` for standard content, `var(--section-space-lg)` for hero sections and dramatic pauses.

### M2: No Grid Convention Break on Home Page
**Location:** HomeContent.tsx
**Expected:** DESIGN_VARIANCE 5 requires at least one grid break per page. Page-designs specifies asymmetric 7/5 image-text split for introduction.
**Actual:** All grids use symmetric columns (grid-cols-1 md:grid-cols-2, grid-cols-1 md:grid-cols-3). Clean but conventional.
**Fix:** Change introduction section to `grid-cols-12` with image `col-span-7` and text `col-span-5`. Add one overlapping image treatment (negative margin or absolute positioning).

### M3: OpenClosedRibbon Uses Body Font Instead of Accent
**Location:** OpenClosedRibbon.tsx
**Expected:** Per design system, status indicators use accent font (Josefin Sans) with uppercase tracking.
**Actual:** Ribbon uses body font (Plus Jakarta Sans).
**Fix:** Add `fontFamily: "var(--font-accent)"` and uppercase tracking to the ribbon text.

## Minor Issues

### m1: GSAP Installed But Unused
**Location:** package.json
**Expected:** GSAP for scroll-driven effects at MOTION_INTENSITY 4.
**Actual:** GSAP in package.json, zero imports in src/.
**Fix:** Either add GSAP ScrollTrigger parallax to hero images, or remove dependency.

### m2: Missing Disabled Button State
**Location:** Button.tsx
**Expected:** Design system specifies disabled state (opacity-50, cursor-not-allowed).
**Actual:** Button component doesn't handle disabled prop visually.
**Fix:** Add `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none`.

### m3: Batik Watermark on Ons-Verhaal Could Be More Prominent
**Location:** OnsVerhaalContent.tsx:200-205
**Actual:** The repeating-conic-gradient watermark at 6% opacity is extremely subtle. At 280px x 280px it is barely perceptible.
**Fix:** Increase to 8-10% opacity and 400px size. Consider replacing with the SVG kawung pattern from C1 for visual consistency.

## AI-Slop Assessment

- [PASS] No Inter, Roboto, Arial as primary fonts
- [PASS] No purple/blue gradients
- [PASS] No generic stock illustration style
- [PASS] No emoji/icon section markers
- [PASS] Button text contrast passes (white on Bandung Red, rice on Daun)
- [FLAG] Symmetric grid everywhere -- menu highlights cards are identical 3-col with same styling
- [FLAG] Uniform section spacing reads as template-generated (see M1)

## Commendations

1. **Token system architecture is solid.** 6-zone tokens.css, Zone 5 element selectors in @layer base, all colors in @theme inline.
2. **Data architecture is excellent.** Typed data files (copy.ts, menu.ts, hours.ts, announcements.ts) are production-ready.
3. **Dine-in/afhalen toggle is well implemented.** Correct filtering, smooth animation, URL param support.
4. **Contact details accurate.** Phone, email, address, hours all match client dossier. JSON-LD schema consistent.
5. **Mobile-first UX.** MobileBottomBar, Navbar scroll-hide, bilingual toggle all work well.
6. **Zero dead files.** Clean codebase, all components imported and used.
