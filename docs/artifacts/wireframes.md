# Wireframes
**Phase:** 1
**Agent:** ux-architect
**Date:** 2026-03-23
**Status:** revised (v2 -- feature audit + optimizations applied)

---

## Global Elements

### Announcement Banner (Conditional, Site-Wide)

- Renders above the header when an active announcement exists (date-range driven)
- Full-width bar, centered text, contrasting background based on type:
  - `closure`: Bandung Red background, Rice text -- "Wij zijn gesloten van 20 juli t/m 21 augustus 2026"
  - `special`: Daun background, Rice text -- promotional announcements
  - `info`: Rice background, Kecap text -- general notices
- Dismissible via X button (right side). Preference stored in sessionStorage.
- If no active announcement, the banner does not render at all -- zero layout impact.
- Height: ~40-48px. Does not push the header off-screen on mobile.

### Header

**Desktop (1024px+):**
- Sticky header, background becomes solid/blurred on scroll (transparent over hero)
- Left: Logo (links to Home)
- Center-right: Navigation links -- Menu, Ons Verhaal, Reserveren (CTA button), Bestellen (text link)
- Far right: Language toggle (NL / EN) as a small text toggle
- "Reserveren" styled as filled CTA button (Bandung Red). "Bestellen" styled as a text link (not a button -- avoids CTA competition)
- Height: compact (~64px)

**Mobile (< 768px):**
- Sticky header: Logo (left) + Hamburger (right)
- Hamburger opens a full-screen overlay with large tap targets
- Overlay shows: Menu, Ons Verhaal, Reserveren, Bestellen, language toggle, phone number
- Header height: ~56px

### Mobile Bottom Bar (< 768px Only)

- Fixed to bottom of viewport, always visible
- Two-column layout:
  - Left: Phone number (tel: link, tap to call) with small "Bellen" label
  - Right: "Reserveer" button (Bandung Red, links to Zenchef)
- Height: ~60px with safe area padding for notched phones
- Subtle top shadow to separate from page content

### Footer

**Desktop (1024px+):**
- Four-column layout on Daun (#0B473A) dark background
- Column 1: Logo + tagline
- Column 2: Quick Links (Menu, Rijsttafel, Ons Verhaal, Reserveren, Bestellen, Afhalen, Catering)
- Column 3: Contact (address with Maps link, phone, email, hours compact)
- Column 4: Facebook, Google Reviews, TripAdvisor links
- Bottom bar: KvK 66772141 | BTW NL856691707B01 | Privacy Policy | Cookie Policy | copyright

**Mobile (< 768px):**
- Single column stacked: Logo, Contact (address/phone/hours), Quick Links, Legal
- Bottom padding to clear the fixed bottom bar

---

## Page: Home

**Primary action:** Reserve a table
**Secondary action:** Order takeaway (online or phone)

### Section 1: Hero

- Full-bleed food photograph (rijsttafel-candlelit.jpg) with warm overlay gradient
- Restaurant name + tagline about West Javanese cooking in Den Bosch
- Primary CTA: "Reserveer een tafel" (Zenchef)
- Secondary CTA: "Bekijk het menu" (/menu)
- Scroll indicator at bottom
- Desktop: 100vh, text left or center. Mobile: 85vh, text centered, CTAs stacked.

### Section 2: Open Now / Hours Ribbon

- **Dynamic open/closed indicator** based on current day + time
- "Nu geopend -- tot 21:30" with green dot when open
- "Vandaag gesloten -- morgen weer welkom vanaf 16:00" on Wednesday
- "Zaterdag & zondag al open vanaf 12:00" on weekends
- Full-width band, centered text, Daun background with Rice text
- Height: ~48-64px, single line

### Section 3: Rijsttafel Teaser

- Asymmetric two-column: large rijsttafel photo (55%) left, text block (45%) right
- Headline: "De Rijsttafel Ervaring" / "The Rijsttafel Experience"
- 2-3 sentences about the communal feast tradition
- CTA: "Ontdek onze rijsttafels" -> /menu#rijsttafel
- Mobile: stacked (image above text)
- Height: ~60-70vh desktop

### Section 4: Menu Highlights

- 3-4 signature dish cards (Rendang, Soto Ayam, Gado-gado, Sate Ayam)
- Each card: dish photo, name, short description, price indicator
- "Bekijk het volledige menu" button -> /menu
- Desktop: horizontal row. Mobile: horizontal scroll carousel with snap + peek (1.2 cards visible)

### Section 5: Heritage Trust Strip

- Glanceable credibility markers in a horizontal band
- "West-Javaans" | "Familierecepten" | "4.5/5 TripAdvisor"
- Desktop: 3 items horizontal. Mobile: 3 items horizontal (compact) or 2x2 grid
- Height: ~120-160px

### Section 6: Social Proof

- 1-2 curated review quotes with star rating
- Large quote typography, centered, max-width 640px
- "Bekijk meer reviews" text link
- Desktop: ~300-400px height. Mobile: same centered layout, smaller type.

### Section 7: Location & Final CTA

- Two-column: Google Maps embed (left) + address/hours/CTA (right)
- "Reserveer nu" CTA button
- Mobile: info block on top, map below. "Open in Google Maps" button supplements embed.
- Map: `loading="lazy"`, `pointer-events: none` until tapped on mobile

---

## Page: Menu

**Primary action:** Discover the rijsttafel, browse the menu, then reserve or order
**Page purpose:** Full menu with dine-in/takeaway price toggle, rijsttafel hero, and smart navigation

### Section 1: Menu Hero / Page Header

- Compact hero (~25-30vh), subtle food texture or warm color background
- Page title: "Ons Menu" / "Our Menu"
- Subtext: one line about the West Javanese kitchen
- **Dine-in / Afhalen toggle** -- pill-shaped toggle directly below the title:
  - "In het restaurant" (default) | "Afhalen"
  - Switching to "Afhalen" updates all displayed prices to takeaway prices
  - Items without a takeaway price show "Alleen in het restaurant" (dine-in only)
  - Rijsttafel section displays a note: "Rijsttafel is alleen beschikbaar in het restaurant"
  - Toggle state persists during page session (not across visits)
  - When "Afhalen" is active, a small "Bestellen" link appears pointing to ecashcloud

### Section 2: Monthly Specials (Conditional)

- Only renders when specials data exists for the current month
- 2-3 special dishes: name, description, price, photo if available
- "Maandelijkse Specials" heading with badge styling
- Desktop: horizontal cards. Mobile: stacked cards.
- No specials = section does not render (no empty state)

### Section 3: Rijsttafel Feature Section

- Premium editorial treatment, NOT a regular menu category
- Intro text + atmospheric photo (rijsttafel-overhead.jpg or rijsttafel-candlelit.jpg) in two-column layout
- 5 rijsttafel options as accordion:
  - Each shows: name, dish count, price/pp, min 2 persons
  - Expanded: complete dish list
  - Flagship (Banten EUR 36.00, Bandung EUR 35.50) most prominent
  - Bogor (vegetarian) and Pangandaran (seafood) with badges
- Default: Rijsttafel Bandung pre-expanded
- Serialize expand/collapse (collapse first, 450ms wait, then expand)
- CTA after options: "Reserveer voor rijsttafel" -> Zenchef
- Note: "Rijsttafel vereist reservering vooraf" (advance reservation required)
- When takeaway toggle active: section shows "Alleen in het restaurant" overlay

### Section 4: Category Quick Navigation

- Horizontal scrollable bar, becomes sticky when scrolling past rijsttafel section
- Tabs for each category: Lunch, Voorgerechten, Sate, Soepen, Gebakken, Vlees, Vis, Kip, Groenten, Eieren, Bijgerechten
- Scroll-spy updates active tab on manual scroll
- Tap -> smooth scroll to category
- Desktop: all categories visible. Mobile: scroll-snap, 3-4 visible with peek.
- Height: ~48-56px. Sits at top of viewport (not bottom -- avoids competing with mobile bottom bar)

### Section 5: Menu Categories (Repeated Pattern)

- Each category as a distinct section
- Category heading (Dutch, English subtitle in EN mode)
- Items: dish name (left, bold) + price (right, aligned) + description (below, smaller) + spiciness (chili icons inline)
- **Price display:** Shows dine-in price by default, switches to takeaway price when toggle is active
- Desktop: two-column grid. Mobile: single column, full-width.
- Items NOT clickable (this is a restaurant menu, not e-commerce)

### Section 6: Menu Footer / Dietary Notes

- Allergen statement: "Informeer ons over uw allergieen"
- Spiciness legend
- Rijsttafel minimum party size note
- Takeaway note: "Afhalen? Bel 073 -- 820 09 43 of bestel online" with links to phone and ecashcloud
- "Reserveer" CTA -- final prompt after browsing

---

## Page: Our Story (Ons Verhaal)

**Primary action:** Build trust, then guide to reservation or menu

### Section 1: Story Hero

- Interior photo (interior-main-dining.jpg) or textured color field
- Headline: warm, personal headline about Yana, Steven, and Bandung
- No CTA -- let the story breathe
- Desktop: ~50vh. Mobile: ~40vh.

### Section 2: The Origin Story

- Editorial text layout (max-width ~720px, centered)
- Founding story: 2016, Yana and Steven, flavors disappearing from Dutch dining, finding the Hinthamereinde location
- West Javanese (Sundanese) cuisine explained -- lighter flavors, fresh vegetables, herbs, sambals
- The name "Bandung" -- Yana's hometown, "Parijs van Java"
- Photo breaking into margin (gedung-sate-bandung.jpg -- the building in their logo)
- Mobile: single column, photo between paragraphs

### Section 3: The Kitchen Tradition

- Two-column: text + interior photo (interior-bar-area.jpg or interior-back-room.jpg)
- Recipes from home, not culinary school
- Every dish connects to a family tradition
- Mobile: stacked

### Section 4: The Rijsttafel Tradition

- Cross-sell bridge to menu
- Brief rijsttafel context as a shared dining tradition
- Photo (rijsttafel-sate-closeup.jpg)
- CTA: "Ontdek onze rijsttafels" -> /menu#rijsttafel
- Desktop: banner-style with image + text. Mobile: stacked.

### Section 5: Social Proof & Trust

- 2-3 review quotes (different from Home page)
- "4.5/5 TripAdvisor -- #25 van 300 restaurants in Den Bosch"
- Desktop: horizontal slider. Mobile: stacked or swipeable.

### Section 6: Visit Us (Story to Action Bridge)

- "Kom langs en proef het zelf" / "Come taste it for yourself"
- Address, hours compact, "Reserveer een tafel" CTA
- Small exterior photo or map
- Mobile: CTA above photo

---

## Page: Reserve & Contact (Reserveren)

**Primary action:** Complete a reservation via Zenchef
**Secondary action:** Order online, submit inquiry, or call
**Page purpose:** Single destination for all contact and action needs

### Section 1: Reservation + Ordering Hero

- Page heading: "Reserveer een tafel" / "Reserve a Table"
- Subtext: "Kleine, intieme sfeer -- reserveren aanbevolen"
- **Two action paths side by side:**
  - Left card: Zenchef booking widget (embed or styled link-out button)
  - Right card: "Online bestellen" with ecashcloud link + phone number for takeaway
- Phone number as fallback: "Liever bellen? 073 -- 820 09 43"
- Desktop: two-column cards. Mobile: stacked (reservation first, ordering second).
- Designed to fit above the fold on desktop

### Section 2: Opening Hours

- Clean table, today's day highlighted
- Weekend lunch callout: "Zaterdag & zondag al open vanaf 12:00"
- Holiday exceptions note (if active)
- Desktop: centered, max-width ~480px. Mobile: full-width, ~48px row height.
- Day abbreviations on small screens (Ma, Di, Wo, Do, Vr, Za, Zo)

### Section 3: Takeaway Information

- "Afhalen" / "Takeaway" heading
- Two ordering methods:
  - Online: "Bestel via onze website" with ecashcloud link button
  - Phone: "Of bel 073 -- 820 09 43" with tap-to-call button
- Note: "Alle gerechten beschikbaar behalve rijsttafel (alleen in het restaurant)"
- Note about takeaway prices being different from dine-in, with link to /menu?view=afhalen
- Desktop: contained card. Mobile: full-width with prominent buttons.

### Section 4: Catering

- "Catering" heading
- For groups of 30 or more (corrected from 25)
- Custom menus by consultation
- Minimum 2 weeks advance notice
- Suitable for: corporate events, family celebrations, cultural gatherings
- Contact: phone and email prominently linked
- No pricing shown (by quote)
- Desktop: text block with subtle background differentiation. Mobile: full-width.

### Section 5: Contact Form

- "Neem contact op" / "Get in Touch" heading
- Fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Subject dropdown: Algemeen / Catering / Afhalen / Overig (General / Catering / Takeaway / Other)
  - Message (textarea, required)
- Submit button: "Verstuur" / "Send"
- Honeypot field for spam prevention (no reCAPTCHA -- avoids Google dependency)
- Success state: "Bedankt! Wij nemen zo snel mogelijk contact met u op."
- Desktop: max-width ~560px, centered. Mobile: full-width with comfortable input heights.

### Section 6: Location & Map

- Google Maps embed showing Hinthamereinde 34
- Full address + "Open in Google Maps" link
- Nearby parking or landmark notes if relevant
- Desktop: two-column (map 60%, info 40%). Mobile: info + "Open in Maps" button above map.
- Map: `loading="lazy"`, `pointer-events: none` until tapped on mobile

---

## Cross-Cutting Patterns

### Reservation CTA Presence (8 locations)

1. Header (desktop): "Reserveren" button in sticky nav
2. Mobile bottom bar: Fixed "Reserveer" button
3. Home hero: Primary CTA
4. Home Section 7: Final CTA before footer
5. Menu Section 3: "Reserveer voor rijsttafel" after rijsttafel accordion
6. Menu Section 6: Menu footer prompt
7. Our Story Section 6: Story-to-action bridge
8. Reserve page: The page itself

**Rule:** Reachable within 0-1 taps from any scroll position, any page. Architecturally present, not behaviorally intrusive.

### Online Ordering Presence (5 locations)

1. Header: "Bestellen" text link in nav
2. Menu page: "Bestellen" link appears when Afhalen toggle is active
3. Menu footer: "Bestel online" link alongside phone number
4. Reserve page Section 1: Ordering card alongside reservation
5. Reserve page Section 3: Takeaway section with ecashcloud link

### Phone Number Presence (6 locations)

1. Mobile bottom bar: Tap-to-call
2. Reserve page Section 1: Alternative to booking
3. Reserve page Section 3: Takeaway ordering
4. Reserve page Section 4: Catering inquiries
5. Footer: Contact column
6. Mobile nav overlay

### Language Toggle Behavior

- Toggle in header (desktop) and mobile nav overlay
- Switching does NOT change URL -- content swaps client-side
- Preference in localStorage, default Dutch
- Indonesian dish names stay Indonesian in both modes
- Announcement banner message also switches

### Menu Price Toggle Behavior

- Toggle at top of Menu page: "In het restaurant" | "Afhalen"
- Default: dine-in prices shown
- Afhalen mode: all prices switch to takeaway prices from menu data
- Items with `priceTakeaway: null` show "Alleen in het restaurant"
- Rijsttafel section shows dine-in-only overlay
- Toggle state: session only (not persisted across visits)
- URL updates to `/menu?view=afhalen` when toggled (supports direct linking and redirect from old `/afhaalmenu-2/`)

### Announcement Banner Behavior

- Data-driven from JSON file
- Auto-shows when `startDate <= today <= endDate` and `active: true`
- Dismissible, sessionStorage prevents re-show during same visit
- Renders above header, does not push content down on dismiss (smooth collapse)
- Multiple announcements: only the most recent active one shows

### Scroll Behavior

- Smooth scroll for all anchor links
- Sticky category bar on Menu page with scroll-spy
- No scroll-hijacking anywhere
- Parallax on Home hero only (disabled on mobile for performance)

### Image Strategy

- All images served in WebP/AVIF with JPEG fallback
- Responsive `srcset` for different viewport sizes
- Hero images: different crops for desktop (landscape) and mobile (portrait/square)
- Lazy loading below the fold
- Rijsttafel spread photos are the highest-priority images

### URL Redirect Strategy

All old WordPress URLs 301-redirect via `next.config.ts` `redirects()`. See sitemap.md for the full redirect map. This preserves Google rankings and prevents 404s for bookmarked URLs.
