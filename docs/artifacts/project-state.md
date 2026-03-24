# Project State
**Project:** Restaurant Indonesia Bandung
**Location:** `website-projects/restaurant-bandung/`
**Phase:** Phase 4 complete -- fix pass done, ready for refinement
**Dev Server:** localhost:5067

---

## Design Quick Reference
- **Archetype:** Rumah Makan (DESIGN_VARIANCE 5, MOTION_INTENSITY 4, VISUAL_DENSITY 4)
- **Fonts:** Bandoeng (display, custom Indonesian) + Fraunces (serif fallback), Plus Jakarta Sans (body), Josefin Sans (accent) -- all via next/font/local from public/fonts/
- **Primary colors:** Bandung Red #E83F39, Daun #0B473A, Rice #F5F0E8, Kecap #1A1410
- **Secondary colors:** Sambal #C4332E (hover red), Daun Light #0E5C4A, Daun Muted #1A3D33, Kunyit #E8A832 (gold accent), Pandan #D4E8D0
- **Color distribution:** 60% Rice / 30% Daun / 10% Bandung Red
- **Animation approach:** Framer Motion for scroll reveals + stagger sequences. GSAP removed (was unused).
- **Key tokens:** Section spacing fluid clamp (48-140px range), container max 1200px / narrow 720px / wide 1400px, radius 4-8px (subtle), shadows sparse
- **Bilingual:** Dutch (default) + English via LanguageContext toggle, localStorage-persisted

## File Manifest

### Pages
- src/app/page.tsx + HomeContent.tsx (Home -- 8 sections)
- src/app/menu/page.tsx + MenuContent.tsx (Menu -- dine-in/afhalen ordering toggle, 10 categories, rijsttafel accordion, monthly specials, sticky sidebar on lg+, QuantityStepper on takeaway items)
- src/app/catering/page.tsx + CateringContent.tsx (Catering -- 7 sections: hero, intro, event types, how it works, practical info, gallery, CTA)
- src/app/bestellen/page.tsx + CheckoutContent.tsx (Checkout -- pickup form, order summary, validation, pay-at-pickup)
- src/app/bestellen/bevestiging/page.tsx + ConfirmationContent.tsx (Order confirmation -- order number, pickup time, address)
- src/app/ons-verhaal/page.tsx + OnsVerhaalContent.tsx (Our Story)
- src/app/reserveren/page.tsx + ReserverenContent.tsx (Reserve & Contact, catering teaser links to /catering)
- src/app/layout.tsx (root layout, fonts, metadata, LanguageProvider + CartProvider)
- src/app/error.tsx, not-found.tsx, robots.ts, sitemap.ts

### API Routes
- src/app/api/order/route.ts (POST: validate order, generate BDG-YYMMDD-XXXX order ID, console.log -- email + Mollie slots marked)

### Components
- src/components/Navbar.tsx (fixed header, transparent->solid on scroll, hide/show, NL/EN toggle with active highlight)
- src/components/Footer.tsx (full footer with links, hours, social, legal)
- src/components/Button.tsx (4 variants: primary/secondary/secondary-light/tertiary, double-border hover animation)
- src/components/ScrollReveal.tsx (ScrollReveal + StaggerReveal + StaggerItem, Framer Motion)
- src/components/QuantityStepper.tsx (compact + button -> animated [-] qty [+] stepper, cart-aware)
- src/components/CartDrawer.tsx (slide-out cart panel from right, item list, quantity controls, subtotal, checkout CTA)
- src/components/CartFab.tsx (desktop floating cart button, bottom-right, count + total, hidden when empty)
- src/components/FormField.tsx (reusable form input: text/email/tel/select/textarea with error state)
- src/components/OpenClosedRibbon.tsx (real-time open/closed status with dot indicator)
- src/components/AnnouncementBanner.tsx (dismissible, typed: closure/special/info)
- src/components/MobileBottomBar.tsx (fixed bottom bar: call + reserve, swaps to cart summary when items in cart)
- src/components/JsonLd.tsx (Restaurant schema.org structured data)
- src/components/KawungDivider.tsx (kawung batik SVG section divider, light/dark variants)

### Data / Content
- src/data/copy.ts (all UI strings NL/EN, CONTACT object with all business details)
- src/data/menu.ts (10 categories, 72 dishes, 6 rijsttafel options, monthly specials with interfaces)
- src/data/hours.ts (operating hours, holiday closure config, getOpenStatus())
- src/data/announcements.ts (announcement interface, getActiveAnnouncement())
- src/data/order-copy.ts (all ordering flow bilingual strings: drawer, checkout, confirmation, FAB, banner)

### Lib
- src/lib/cart.ts (parsePrice, formatPrice, CartItem interface, cartSubtotal, cartItemCount, generateItemId)
- src/lib/timeslots.ts (pickup time slot generation from hours.ts -- 15-min intervals, 45-min prep, 7 days ahead)

### Context
- src/context/LanguageContext.tsx (lang state, setLang, t() helper, localStorage persistence, dynamic html lang update)
- src/context/CartContext.tsx (cart items, add/remove/update, drawer open/close, localStorage persistence)

### Styles
- src/styles/tokens.css (6-zone token system: primitives, fluid scale, semantic theme, component bridge, button tokens, text rules)
- src/app/globals.css (Tailwind imports, @theme inline registration, noise texture, button animation CSS, smooth scroll)

### Public Assets
- public/fonts/ (8 woff2 files: Bandoeng, Fraunces+Italic, Plus Jakarta Sans, Josefin Sans -- 5 preloaded after italic removal, 209KB total)
- public/images/ (15 production photos: rijsttafel variants, interior shots, dessert, catering, Bandung landmark, logos)

## Developer Quick Reference
```
Business name:    Restaurant Indonesia Bandung
Address:          Hinthamereinde 34, 5211 PN Den Bosch
Phone:            073-820 09 43
Email:            [email protected]
Facebook:         https://facebook.com/restaurantbandung
TripAdvisor:      https://www.tripadvisor.com/Restaurant_Review-g188581-d12197982
Reservation URL:  https://bookings.zenchef.com/results?rid=373418
Hours:            Mon/Tue/Thu/Fri 16:00-21:30, Sat/Sun 12:00-21:30, Wed closed
KvK:              66772141
BTW:              NL856691707B01
Holiday 2026:     July 20 -- August 21
Catering min:     30 persons, 2 weeks notice
```

## Active Issues
- [x] Phase 4 complete: design-review (FAIL->issues addressed), QA (PASS WITH NOTES), performance (PASS WITH NOTES)
- [ ] Contact form on /reserveren is structured but submission logic not connected (needs backend/serverless)
- [x] GSAP removed from dependencies (was unused)
- [ ] Brand guidelines specify Fraunces as display font, but build uses Bandoeng primary + Fraunces fallback -- artifacts are stale
- [ ] No Instagram presence noted in dossier (significant gap for restaurant)
- [ ] Vonzie Nexus CMP integration pending (post-launch on localhost)
- [ ] Dine-in prices for items only sourced from eCashcloud takeaway menu need client verification
- [ ] Monthly specials content needs real data from client (placeholder for April 2026 currently)
- [x] Design review: menu page sticky category sidebar (C2 -- implemented: sidebar on lg+ with IntersectionObserver active state)
- [ ] Design review: home page could benefit from more asymmetric grid layouts (M2 -- rijsttafel section already has image bleed)

## Change Log
### 2026-03-24 (feature: takeaway ordering system)
- Built full ordering flow: menu -> cart -> checkout -> confirmation
- CartContext (React Context + localStorage) follows LanguageContext pattern
- QuantityStepper on all takeaway items: compact + button expands to animated [-] qty [+]
- CartDrawer slides from right (Framer Motion), 420px desktop / full mobile, with quantity controls
- CartFab: desktop floating button (bottom-right) showing item count + total
- MobileBottomBar: swaps Reserve button for cart summary when items in cart
- Checkout at /bestellen: pickup form (name, phone, email, time slot, notes) + order summary
- Time slots generated from hours.ts: 15-min intervals, 45-min prep time, 7 days ahead
- API route POST /api/order: validates, generates BDG-YYMMDD-XXXX order ID, console.log
- Confirmation at /bestellen/bevestiging: order number, pickup time, address, pay-at-pickup note
- Payment: "Betaal bij afhalen" only -- Mollie iDEAL slot marked for future
- Email notification slot marked in API route for future nodemailer/resend integration
- Navbar: removed duplicate Reserveren CTA button, language toggle now shows NL|EN with active highlight
- Takeaway banner updated from "call to order" to "order online and pick up"
- All new UI fully bilingual (NL/EN) via order-copy.ts

### 2026-03-24 (refinement: dedicated catering page)
- Created /catering with 7 sections: hero, introduction, event types (3-col cards), how it works (3-step flow), practical info (2x2 grid), image strip (3-col gallery), CTA band
- All copy bilingual (NL/EN) via inline cateringCopy object + t() helper
- Added nav.catering to copy.ts, Catering link to Navbar navLinks + footer quickLinks (both languages)
- Slimmed /reserveren Section 3 from full catering section to a centered teaser linking to /catering
- Removed unused Image import from ReserverenContent.tsx
- Added /catering to sitemap.ts (priority 0.7, monthly)
- Reuses existing images: catering-buffet.jpg (hero), rijsttafel-overhead.jpg, rijsttafel-branded-tray.jpg, interior-main-dining.jpg (gallery)

### 2026-03-24 (refinement: menu sidebar)
- Added sticky category sidebar on menu page (desktop lg+ only)
- IntersectionObserver tracks active section, highlights with left-border accent
- Sidebar includes links to rijsttafel, specials (conditional), and all 10 categories
- Categories grid breakpoint adjusted: lg:grid-cols-3 -> xl:grid-cols-3 to accommodate sidebar width
- Categories container widened from content-max-width (1200px) to content-wide (1400px) on lg+

### 2026-03-24 (Phase 4 fix pass)
- Ran Phase 4 reviews: design-critic, qa-auditor, performance-expert
- Created design-review.md, qa-report.md, performance-report.md
- Fixed: removed 2 unused italic font variants (PJS, Josefin Sans) -- font payload 268KB -> 209KB
- Fixed: added adjustFontFallback to all font declarations (CLS reduction)
- Fixed: uninstalled GSAP (was unused, 1.5MB in node_modules)
- Fixed: created KawungDivider.tsx (kawung batik SVG section divider)
- Fixed: added KawungDivider between sections on home + ons-verhaal pages
- Fixed: html lang now updates dynamically when user switches language (LanguageContext.tsx)
- Fixed: mobile menu Escape key handler (Navbar.tsx)
- Fixed: language toggle aria-label on desktop + mobile buttons
- Fixed: Button.tsx disabled state (opacity-50, cursor-not-allowed, pointer-events-none)

### 2026-03-24 (menu expansion)
- Moved artifacts from repo-level `docs/artifacts/` to project-level `website-projects/restaurant-bandung/docs/artifacts/`
- Created project-state.md for refinement workflow
- Expanded menu.ts: 17 items -> 72 items across 10 categories (was 6), added dual pricing (dine-in + takeaway)
- Added 2 new rijsttafel options: Sukabumi and Maandmenu (monthly special)
- Built dine-in/afhalen toggle on menu page with URL param support (?view=afhalen)
- Added monthly specials section (conditional on activeMonth match)
- Added "Bestellen" nav link pointing to /menu?view=afhalen (desktop + mobile)
- Updated footer quickLinks: Bestellen now links to /menu?view=afhalen (was "#")
- Wrapped MenuContent in Suspense (required for useSearchParams in Next.js 15)
- Takeaway CTA is phone-only (no eCashcloud link -- that system is dine-in QR only)

## Artifact Authority
- client-dossier.md: CURRENT
- brand-guidelines.md: PARTIALLY STALE (specifies Fraunces as display font; build uses Bandoeng primary + Fraunces fallback)
- sitemap.md: CURRENT
- wireframes.md: CURRENT (not verified against build)
- design-system.md: CURRENT
- page-designs.md: PARTIALLY STALE (catering page built beyond original spec; menu sidebar now implemented)
- page-copy.md: STALE (menu expanded far beyond original copy, catering page copy inline in CateringContent.tsx)
- seo-strategy.md: CURRENT
- tokens.css (artifact): STALE (source of truth is src/styles/tokens.css)
- design-review.md: CURRENT (Phase 4)
- qa-report.md: CURRENT (Phase 4, issues fixed)
- performance-report.md: CURRENT (Phase 4)
