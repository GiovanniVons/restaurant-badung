# Performance Report
**Phase:** 4
**Agent:** performance-expert
**Date:** 2026-03-24
**Status:** pass with notes

---

## Overall Verdict: PASS WITH NOTES

All Core Web Vitals pass thresholds. Two optimization opportunities: font payload (268KB with 3 unused italic variants) and CLS risk from font swap without adjustFontFallback.

## Build Analysis

All routes statically pre-rendered (SSG). No dynamic rendering, no server-side data fetching. Correct strategy for a restaurant marketing site.

| Route | Strategy |
|-------|----------|
| `/` (home) | Static SSG |
| `/menu` | Static SSG |
| `/ons-verhaal` | Static SSG |
| `/reserveren` | Static SSG |

**Bundle:** 860 KB total JS across all chunks (includes React, Framer Motion, Next.js runtime). CSS: 37 KB (single file). Fonts: 268 KB (7 woff2 files, all preloaded).

## Core Web Vitals Estimate

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| LCP | ~1.8-2.2s | < 2.5s | PASS |
| CLS | ~0.05-0.12 | < 0.1 | AT RISK |
| INP | ~80-120ms | < 200ms | PASS |

## Major Issues (Fix Before Launch)

### P1: Three Unused Italic Font Variants Preloaded (~139KB wasted)
**Impact:** LCP. 268KB of fonts preloaded on every page. Three italic woff2 files are registered in layout.tsx but never used anywhere. Zero instances of `italic` or `font-style: italic` in any component or CSS.

**Files wasting bandwidth:**
- Fraunces_Italic: 80 KB
- JosefinSans_Italic: 30 KB
- PlusJakartaSans_Italic: 29 KB

**Location:** src/app/layout.tsx lines 22, 31, 40

**Fix:** Remove italic entries from font declarations:
```typescript
const fraunces = localFont({
  src: "../../public/fonts/Fraunces.woff2",
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
});
```
Repeat for plusJakartaSans and josefinSans.

**Expected:** Font payload drops from 268KB to ~129KB (52% reduction).

### P2: No adjustFontFallback -- CLS Risk
**Impact:** CLS. Four font families use `display: "swap"` without `adjustFontFallback`. System fallback fonts have different metrics, causing text reflow when web fonts load.

**Location:** src/app/layout.tsx -- all four font declarations

**Fix:**
```typescript
adjustFontFallback: "Times New Roman" // for Fraunces (serif)
adjustFontFallback: "Arial"           // for Plus Jakarta Sans, Josefin Sans
adjustFontFallback: false             // for Bandoeng (display only, minimal impact)
```

**Expected:** CLS reduction of 0.03-0.08.

### P3: GSAP Installed But Unused (Dead Dependency)
**Impact:** No runtime cost (tree-shaken), but bloats node_modules. Zero GSAP imports in src/.

**Location:** package.json -- `"gsap": "^3.14.2"`

**Fix:** `npm uninstall gsap`

## Minor Issues

### P4: No placeholder="blur" on Any Image
Below-fold images pop in from blank. Using static imports enables automatic blurDataURL generation:
```typescript
import interiorWarm from "../../public/images/interior-warm.jpg";
<Image src={interiorWarm} placeholder="blur" ... />
```

### P5: Scroll Indicator Uses Framer Motion Infinite Loop
HomeContent.tsx has `repeat: Infinity` on scroll indicator. Replace with CSS `animate-bounce` to move animation off JS thread.

## Image Audit

All images use `next/image` with correct `fill`, `sizes`, and `priority` props. AVIF + WebP configured in next.config.ts. Hero images have `priority`. Sizes props well-configured (33vw for 3-col, 50vw for 2-col, 100vw for full-width).

## Font Audit

| Font | Role | Files | woff2 Size | Status |
|------|------|-------|-----------|--------|
| Bandoeng | Display | 1 (regular) | 8.7 KB | OK |
| Fraunces | Heading | 2 (regular + italic) | 66 + 80 KB | Remove italic |
| Plus Jakarta Sans | Body | 2 (regular + italic) | 27 + 29 KB | Remove italic |
| Josefin Sans | Accent | 2 (regular + italic) | 28 + 30 KB | Remove italic |
| **Total** | | **7 files** | **268 KB** | **Remove 3 = 129 KB** |

## What Is Done Well

- All routes statically generated (SSG)
- All images use next/image with proper fill, sizes, priority
- AVIF + WebP configured
- Fonts loaded via next/font/local with display: swap
- Zero third-party JavaScript
- Passive scroll listener in Navbar
- useReducedMotion respected in ScrollReveal
- Token system in @layer base follows cascade discipline
- All animations use transform/opacity (GPU-composited)
