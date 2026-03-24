# Performance Report
**Phase:** 4
**Agent:** performance-expert
**Date:** 2026-03-24
**Status:** pass with notes

---

## Overall Verdict: PASS WITH NOTES

All Core Web Vitals estimated to pass thresholds. Dead font files cleaned up (60KB saved). framer-motion/mini was attempted but reverted -- v12.38.0's /mini entry only exports `useAnimate`, not the `motion`, `AnimatePresence`, or `useReducedMotion` APIs this site needs.

## Build Analysis

All routes statically pre-rendered (SSG). Correct strategy for a restaurant marketing site.

## Core Web Vitals Estimate

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| LCP | ~1.8-2.2s | < 2.5s | PASS |
| CLS | ~0.02 | < 0.1 | PASS |
| INP | ~80-120ms | < 200ms | PASS |

## Optimization Note: framer-motion/mini

Investigated switching from `"framer-motion"` to `"framer-motion/mini"`. In framer-motion v12.38.0, the `/mini` entry only exports `useAnimate` -- it does NOT include `motion`, `AnimatePresence`, or `useReducedMotion`. This is a version-specific limitation. **No change applied.**

## Font Audit

| Font | File | Size | Loaded | Status |
|------|------|------|--------|--------|
| Bandoeng | .woff2 | 9KB | Yes | OK |
| Fraunces | .woff2 | 67KB | Yes | OK |
| Fraunces Italic | .woff2 | 82KB | Yes | OK (used for review quotes) |
| Plus Jakarta Sans | .woff2 | 27KB | Yes | OK |
| Josefin Sans | .woff2 | 29KB | Yes | OK |
| JosefinSans Italic | .woff2 | 31KB | **No** | Deleted (dead file) |
| PlusJakartaSans Italic | .woff2 | 29KB | **No** | Deleted (dead file) |

All fonts use `display: "swap"` with `adjustFontFallback` configured. CLS from font swap is minimal.

## What Is Done Well

- All routes statically generated (SSG)
- All images use next/image with proper fill, sizes, priority
- Fonts loaded via next/font/local with display: swap and adjustFontFallback
- Zero third-party JavaScript
- Passive scroll listener in Navbar
- useReducedMotion respected in ScrollReveal
- All animations use transform/opacity (GPU-composited)
- Cart context uses useReducer + useMemo + useCallback (proper memoization)
