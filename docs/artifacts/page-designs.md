# Page Designs -- Restaurant Indonesia Bandung
**Phase:** 2
**Agent:** UI Designer
**Date:** 2026-03-23
**Status:** draft

---

## Global Elements

### Announcement Banner (Conditional)

Renders only when announcement data is present. Sits above the header, pushing all content down.

- **Layout:** Full-width colored bar, content centered, max-width `var(--content-max-width)`
- **Component:** AnnouncementBanner (see design-system.md)
- **Animation:** Slides down from top on page load (translateY -100% to 0, 400ms ease-out). Dismiss animates height to 0 over 300ms.
- **Z-index:** 60 (above header)

### Header

Present on all pages. Behavior varies by page:

- **Home / Ons Verhaal:** Starts transparent (over hero image), transitions to solid on scroll
- **Menu / Reserveren:** Starts solid immediately (no hero image on these pages -- they use colored section headers instead)
- **Component:** Header (see design-system.md)
- **Z-index:** 50

### Mobile Bottom Bar

- **Visible:** < 768px only
- **Component:** MobileBottomBar (see design-system.md)
- **Z-index:** 40
- **Body compensation:** `padding-bottom: 76px` on mobile viewports

### Footer

Present on all pages. Identical structure.

- **Component:** Footer (see design-system.md)
- **Animation:** Scroll reveal -- fade in as section enters viewport, children stagger at 100ms intervals

---

## Page 1: Home (/)

### Overall
- **Background:** Rice #F5F0E8 with noise texture overlay (1.5% opacity)
- **Max content width:** `var(--content-max-width)` (1200px)
- **Vertical rhythm:** Sections alternate between `var(--section-space-main)` and `var(--section-space-sm)` gaps -- the hero-to-ribbon is 0, ribbon-to-intro is `var(--section-space-main)`, intro-to-rijsttafel is `var(--section-space-lg)` (thematic shift), rijsttafel-to-reviews is `var(--section-space-main)`, reviews-to-CTA is `var(--section-space-sm)`

---

### Section 1: Hero

**Layout:** Full-bleed, no content container constraint on the image
**Background:** Image: `rijsttafel-candlelit.jpg` covering full section
**Dimensions:** Height `clamp(75vh, 70vh + 5vw, 90vh)`, min-height 540px
**Component:** HeroSection

**Elements:**

**Hero Image:**
- Source: `/images/rijsttafel-candlelit.jpg`
- `object-fit: cover`, `object-position: center 40%`
- GSAP parallax: translateY 0 to 60px on scroll (disabled on mobile + reduced motion)
- Page load: scale 1.05 to 1.0, 1200ms ease-out

**Gradient Overlay:**
- `linear-gradient(to top, rgba(26, 20, 16, 0.85) 0%, rgba(26, 20, 16, 0.4) 45%, rgba(26, 20, 16, 0.15) 100%)`
- Position: absolute, inset: 0

**Hero Content Container:**
- Position: absolute, bottom: 0, left: 0, right: 0
- Padding: 0 `var(--space-md)` `var(--space-2xl)`
- Max-width for text block: 640px

**Overline:**
- Text: "Sinds 2016 -- Den Bosch" (from copywriter)
- Josefin Sans, `var(--text-overline)`, weight 600, Rice at /80, uppercase, letter-spacing 0.12em
- Animation: fadeIn + translateY 16px to 0, delay 300ms, duration 600ms
- Initial state: opacity 0, translateY 16px

**Heading (h1):**
- Text: (from page-copy.md -- primary headline)
- Fraunces, `var(--text-display)`, weight 600, Rice #F5F0E8
- Animation: fadeIn + translateY 24px to 0, delay 450ms, duration 700ms
- Initial state: opacity 0, translateY 24px

**Subheading:**
- Text: (from page-copy.md -- hero subheading)
- Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Rice at /80, max-width 480px
- Animation: fadeIn + translateY 16px to 0, delay 600ms, duration 600ms
- Initial state: opacity 0, translateY 16px

**CTA Group:**
- Layout: flex, gap `var(--space-sm)`, flex-wrap: wrap
- Primary CTA: "Reserveer Nu" -- btn btn-primary
- Secondary CTA: "Bekijk Menu" -- btn btn-secondary-light
- Animation: fadeIn + translateY 16px to 0, delay 750ms, duration 500ms
- Initial state: opacity 0, translateY 16px

**Responsive:**
- Desktop (1024px+): content left-aligned, heading at `var(--text-display)` scale, max-width 640px
- Tablet: content left-aligned, heading at `var(--text-h1)` scale, max-width 560px
- Mobile (< 768px): content left-aligned, heading at `var(--text-h1)` scale, full-width text block, `padding-bottom: var(--space-xl)`

---

### Section 2: Open/Closed Ribbon

**Layout:** Full-width strip immediately below hero (no gap)
**Background:** Daun #0B473A
**Component:** OpenClosedRibbon

**Content:**
- Status dot (animated pulse when open)
- Status text: "Nu geopend" / "Gesloten" / "Sluit binnenkort"
- Today's hours: e.g., "Di 16:00 -- 21:00"

**Animation:** No scroll animation -- visible immediately as hero scrolls past. Static content.

---

### Section 3: Introduction / Welcome

**Layout:** CSS Grid, `grid-template-columns: 1fr 1fr` at desktop, 1fr at mobile
**Background:** Rice #F5F0E8 (inherits page bg)
**Padding:** `var(--section-space-main)` vertical, `var(--space-md)` horizontal
**Max-width:** `var(--content-max-width)`, centered

**Left Column -- Text:**
- Overline: Josefin Sans, `var(--text-overline)`, Sambal #C4332E (text-safe red), uppercase
  - Text: "Welkom" (from copywriter)
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Kecap
  - Text: (from page-copy.md)
- Body paragraph: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Kecap at /80, line-height 1.65
  - Text: (from page-copy.md -- 2-3 short paragraphs about the restaurant's story and mission)
- CTA: "Ons Verhaal" -- btn btn-tertiary (text link with arrow)

**Right Column -- Image:**
- Source: `/images/interior-main-dining.jpg`
- Aspect ratio: 4:3
- Border-radius: `var(--radius-md)`
- `object-fit: cover`
- Slight offset: `margin-top: var(--space-lg)` on desktop (creates asymmetric rhythm, the layout-appropriate subtle offset for DESIGN_VARIANCE 5)

**Animation (Scroll Reveal):**
- Text column: stagger children at 100ms, fadeUp (opacity 0 to 1, translateY 20px to 0), 600ms
- Image: fadeIn + slight scale 0.98 to 1.0, 800ms, triggered separately
- Both trigger at 20% viewport intersection

**Responsive:**
- Desktop: 2-column, image offset down
- Tablet: 2-column, gap `var(--space-md)`, no image offset
- Mobile: stacked (text first, image below), no offset, image full-width with radius

---

### Section 4: Rijsttafel Teaser

**Layout:** Full-bleed background section with contained content
**Background:** Kecap #1A1410
**Padding:** `var(--section-space-lg)` vertical
**Content max-width:** `var(--content-max-width)`

This is the "wow moment" for the Home page -- the food image on the right extends 40px beyond the content container boundary, overlapping the section edge.

**Left Column (text, ~55% width at desktop):**
- Overline: Josefin Sans, `var(--text-overline)`, Rice at /60, uppercase
  - Text: "Onze Specialiteit"
- Heading (h2): Fraunces, `var(--text-h1)`, weight 600, Rice #F5F0E8
  - Text: (from page-copy.md -- rijsttafel heading)
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Rice at /80
  - Text: (from page-copy.md -- 1-2 paragraphs about the rijsttafel tradition)
- Price hint: Fraunces, `var(--text-h4)`, Kunyit #E8A832 (7.1:1 on Kecap -- PASS)
  - Text: "Vanaf EUR XX p.p." (from copywriter/data)
- CTA: "Bekijk Rijsttafel Menu" -- btn btn-primary

**Right Column (image, ~45% width at desktop):**
- Source: `/images/rijsttafel-sate-closeup.jpg`
- Aspect ratio: 3:4 (portrait)
- Border-radius: `var(--radius-md)` on left edges only (right edge bleeds)
- `object-fit: cover`
- **Wow moment:** `margin-right: calc(-1 * var(--space-lg))` -- image extends 40px past content boundary on the right
- On mobile: image is full-width, no bleed, standard `var(--radius-md)` all corners, shown above text

**Animation (Scroll Reveal):**
- Section fade in as a unit, 800ms
- Text stagger: 100ms between children
- Image: translateX from 30px to 0 (slides in from right), opacity 0 to 1, 800ms, delay 200ms
- Initial states: all opacity 0; image also translateX 30px

**Responsive:**
- Desktop: CSS Grid `grid-template-columns: 55fr 45fr`, gap `var(--space-lg)`, image bleeds right
- Tablet: `grid-template-columns: 1fr 1fr`, gap `var(--space-md)`, no bleed
- Mobile: single column, image on top (order: -1), text below, standard padding

---

### Section 5: Menu Highlights

**Layout:** CSS Grid, `grid-template-columns: repeat(4, 1fr)` at desktop, horizontal scroll at mobile
**Background:** Rice #F5F0E8 (inherits page bg)
**Padding:** `var(--section-space-main)` vertical, `var(--space-md)` horizontal
**Max-width:** `var(--content-max-width)`, centered

**Heading (h2):**
- Fraunces, `var(--text-h2)`, weight 500, Kecap
- Text: (from page-copy.md -- "Uit de keuken van Bandung")
- Margin-bottom: `var(--space-lg)`

**Dish Cards (4 cards):**
- Each card: vertical stack -- image (aspect 4:3, border-radius `var(--radius-md)`, object-fit cover), dish name (Fraunces, `var(--text-h4)`, weight 500, Kecap), description (Plus Jakarta Sans, `var(--text-body-sm)`, Kecap at /80, max 2 lines), price (Plus Jakarta Sans, `var(--text-body)`, weight 600, Bandung Red)
- Card has no border, no shadow -- just content stacked on Rice bg
- Gap between cards: `var(--space-md)`
- Dishes: Rendang Sapi, Soto Ayam, Gado-gado, Sate Ayam (from page-copy.md highlight cards)
- Images: use existing scraped food photography or placeholder SVGs

**CTA below cards:**
- "Bekijk het volledige menu" -- btn btn-secondary, centered
- Margin-top: `var(--space-lg)`

**Animation (Scroll Reveal):**
- Heading: fadeUp, 500ms
- Cards: stagger at 100ms, fadeUp from 16px, 500ms each
- Initial states: opacity 0, translateY 16px

**Responsive:**
- Desktop: 4-column grid
- Tablet: 2x2 grid, gap `var(--space-md)`
- Mobile: horizontal scroll carousel with snap, 1.2 cards visible (peek), gap `var(--space-sm)`

---

### Section 6: Heritage Trust Strip

**Layout:** Full-width strip, content centered
**Background:** Daun #0B473A
**Padding:** `var(--space-lg)` vertical

**Content:**
- 3 trust markers in a horizontal row: flex, justify-content: center, gap `var(--space-2xl)`
- Each marker: two-line stack -- primary text (Fraunces, `var(--text-h4)`, weight 500, Rice #F5F0E8) + secondary text (Plus Jakarta Sans, `var(--text-caption)`, Rice at /60)
- Markers: "Sinds 2016 / in Den Bosch" | "West-Javaans / uit Bandung" | "Familiebedrijf / Yana & Steven"

**Animation (Scroll Reveal):**
- Full strip: fadeIn, 600ms
- Markers: stagger at 150ms, fadeUp from 12px, 500ms
- Initial states: opacity 0, translateY 12px

**Responsive:**
- Desktop: 3 markers in a row
- Mobile: 3 markers in a row (compact text), or stacked vertically with `var(--space-md)` gap if too tight

---

### Section 7: Social Proof / Reviews

**Layout:** Single column, centered content
**Background:** Rice #F5F0E8 (back to light)
**Padding:** `var(--section-space-main)` vertical
**Max-width:** `var(--content-narrow)` (720px), centered

**Heading (h2):**
- Fraunces, `var(--text-h2)`, weight 500, Kecap, text-align: center
- Text: (from page-copy.md -- something like "Wat onze gasten zeggen")
- Margin-bottom: `var(--space-xl)`

**Review Cards:**
- 2-3 review cards displayed (from ReviewQuote data)
- Component: ReviewQuoteCard
- Stacked vertically with `var(--space-lg)` gap between cards
- Each card has left border accent (Bandung Red 3px)
- Alternating: odd cards left-aligned, even cards have `margin-left: var(--space-xl)` on desktop (creates staggered reading rhythm for DESIGN_VARIANCE 5)

**Google/TripAdvisor Link:**
- Below reviews: tertiary button "Meer reviews op Google" with external link icon
- Plus Jakarta Sans, `var(--text-body-sm)`, weight 600, Daun

**Animation (Scroll Reveal):**
- Heading: fadeUp, 600ms
- Cards: stagger at 200ms intervals, fadeUp from 20px, 600ms each
- Initial states: opacity 0, translateY 20px

**Responsive:**
- Desktop: staggered left margin on even cards
- Mobile: all cards full-width, no stagger offset, `var(--space-md)` gap

---

### Section 8: Location Teaser + CTA

**Layout:** CSS Grid, `grid-template-columns: 1fr 1fr` at desktop
**Background:** Daun Muted #1A3D33
**Padding:** `var(--section-space-main)` vertical

**Left Column -- Text:**
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Rice #F5F0E8
  - Text: "Kom Langs" or similar (from copywriter)
- Address: Plus Jakarta Sans, `var(--text-body)`, Rice at /80
  - Hinthamereinde 34, 5211 PN Den Bosch
- Phone: Plus Jakarta Sans, `var(--text-body)`, Rice at /80
  - Link: tel:+31738200943
- CTA: "Reserveer Nu" -- btn btn-primary, "Route Plannen" -- btn btn-secondary-light
- CTA gap: `var(--space-sm)`, flex-wrap: wrap

**Right Column -- Map:**
- Component: MapSection
- Height: 320px
- `filter: saturate(0.3) contrast(0.9)` for muted appearance, removed on interaction
- `pointer-events: none` until tap on mobile
- Border-radius: `var(--radius-md)`

**Animation (Scroll Reveal):**
- Text column: stagger at 100ms, fadeUp
- Map: fadeIn, 600ms

**Responsive:**
- Desktop: 2-column, content left, map right
- Mobile: stacked, text first, map below at 280px height, full-width

---

## Page 2: Menu (/menu)

### Overall
- **Background:** Rice #F5F0E8 with noise texture
- **No hero image** -- this page uses a colored section header instead
- **Header:** Solid state from start (data-scrolled="true" by default)
- **Max content width:** `var(--content-max-width)` (1200px)
- **Vertical rhythm:** Page header to toggle `var(--space-md)`, toggle to first category `var(--space-md)`, between categories `var(--section-space-sm)`, after last category to rijsttafel `var(--section-space-lg)`

---

### Section 1: Page Header

**Layout:** Full-width Daun #0B473A background strip
**Padding:** `var(--space-3xl)` top (accounts for fixed header), `var(--space-xl)` bottom
**Content max-width:** `var(--content-max-width)`, centered

**Elements:**
- Overline: Josefin Sans, `var(--text-overline)`, Rice at /60, uppercase -- "Restaurant Indonesia Bandung"
- Heading (h1): Fraunces, `var(--text-h1)`, weight 600, Rice #F5F0E8 -- "Ons Menu"
- Subtext: Plus Jakarta Sans, `var(--text-body)`, Rice at /80 -- brief line about the menu (from copywriter)

**Animation (Page Load):**
- Overline: fadeUp, delay 200ms, 500ms
- Heading: fadeUp, delay 350ms, 600ms
- Subtext: fadeUp, delay 500ms, 500ms
- Initial states: opacity 0, translateY 16px

---

### Section 2: Dine-in/Takeaway Toggle + Monthly Special

**Layout:** Flex, space-between (toggle left, special card right), max-width `var(--content-max-width)`
**Background:** Rice #F5F0E8
**Padding:** `var(--space-md)` vertical, `var(--space-md)` horizontal

**Toggle:**
- Component: DineInTakeawayToggle
- Aligned left
- Below toggle: Plus Jakarta Sans, `var(--text-caption)`, Kecap at /60 -- "Prijzen kunnen afwijken" (prices may differ)

**Monthly Special (conditional):**
- Component: MonthlySpecialsCard
- Aligned right on desktop, below toggle on mobile
- **Wow moment:** Card extends 60px beyond the left content edge: `margin-left: calc(-1 * var(--space-xl))` with Daun background against Rice surrounding. On mobile, full-width with no negative margin.
- Only renders when `monthlySpecials` data is non-empty

**Responsive:**
- Desktop: side-by-side layout
- Mobile: stacked, toggle first, special below (if present)

---

### Section 3: Category Navigation (Sticky)

**Component:** MenuCategoryNav
**Position:** Sticky, top: 72px (desktop header height) / 64px (mobile header height)
**Z-index:** 30
**Full-width:** Yes, with horizontal scroll

**Categories (from sitemap data interfaces):**
- Voorgerechten (Starters)
- Soepen (Soups)
- Hoofdgerechten (Main Courses)
- Rijsttafel
- Nagerechten (Desserts)
- Dranken (Drinks)

(Exact categories TBD from menu data -- the nav auto-generates from the data)

---

### Section 4: Menu Categories (Repeated)

For each menu category, render this structure:

**Layout:** Single column, max-width 800px, centered within `var(--content-max-width)`
**Padding:** `var(--section-space-sm)` vertical between categories

**Category Header:**
- ID: `category-{slug}` (for scroll spy targeting)
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Kecap
- Optional description: Plus Jakarta Sans, `var(--text-body)`, Kecap at /80
- Bottom border: 2px solid Bandung Red #E83F39, width 60px (accent line, not full-width)
- Margin-bottom: `var(--space-md)`

**Menu Items:**
- Component: MenuItemRow (repeated for each item)
- Stacked vertically, `var(--space-xs)` gap (tight rhythm for scanability)
- Border-bottom between items (see component spec)

**Animation (Scroll Reveal):**
- Category header: fadeUp, 500ms
- Menu items within category: stagger at 50ms (fast, since there can be many items), fadeUp from 12px, 400ms
- Initial states: opacity 0, translateY 12px

---

### Section 5: Rijsttafel Section

**Layout:** Full-width, max-content 800px centered
**Background:** Subtle shift -- Rice Dark #E8E0D3 at /50 background behind this section to visually distinguish it from regular menu items
**Padding:** `var(--section-space-main)` vertical

**Section Header:**
- Overline: Josefin Sans, `var(--text-overline)`, Sambal #C4332E (text-safe red), uppercase -- "Onze Specialiteit"
- Heading (h2): Fraunces, `var(--text-h1)`, weight 600, Kecap -- "Rijsttafel"
- Description: Plus Jakarta Sans, `var(--text-body-lg)`, Kecap at /80 -- (from copywriter, about the communal tradition)
- Image: `/images/rijsttafel-overhead.jpg`, width 100%, max-width 800px, aspect ratio 16:9, border-radius `var(--radius-md)`, margin-bottom `var(--space-lg)`

**Rijsttafel Cards:**
- Component: RijsttafelCard (accordion) -- one per rijsttafel option
- Gap between cards: `var(--space-sm)`
- Serialize expand/collapse pattern

**Bottom Note:**
- Plus Jakarta Sans, `var(--text-body-sm)`, Kecap at /80, italic
- Text: "Alle rijsttafels worden geserveerd met witte rijst en kroepoek" (or similar from copywriter)

**Animation (Scroll Reveal):**
- Section header elements: stagger at 100ms, fadeUp
- Image: fadeIn + scale 0.98 to 1.0, 800ms
- Cards: stagger at 150ms, fadeUp from 16px

---

### Section 6: Dietary Info / Legend

**Layout:** Centered text block, max-width `var(--content-narrow)` (720px)
**Background:** Rice #F5F0E8
**Padding:** `var(--space-lg)` vertical

**Content:**
- Heading (h3): Fraunces, `var(--text-h4)`, weight 500, Kecap -- "Allergenen & Dieetwensen"
- Body: Plus Jakarta Sans, `var(--text-body-sm)`, Kecap at /80
  - Text explaining that staff can advise on allergens, vegetarian/vegan options available
- Spice legend:
  - Layout: flex, gap `var(--space-md)`, align-items: center
  - Each: dot indicator + label text
  - 1 dot: "Mild", 2 dots: "Medium", 3 dots: "Pittig"

---

## Page 3: Ons Verhaal (/ons-verhaal)

### Overall
- **Background:** Rice #F5F0E8 with noise texture
- **Max content width:** `var(--content-max-width)` (1200px)
- **Header:** Transparent start (over hero), transitions to solid
- **Vertical rhythm:** Hero to story `var(--section-space-main)`, story to kitchen `var(--section-space-lg)`, kitchen to cultural `var(--section-space-main)`, cultural to values `var(--section-space-sm)`, values to CTA `var(--section-space-main)`

---

### Section 1: Hero

**Layout:** Full-bleed hero, similar structure to Home but different image and content
**Background:** Image: `/images/interior-main-dining.jpg`
**Dimensions:** Height `clamp(60vh, 55vh + 5vw, 75vh)`, min-height 440px (shorter than home hero)
**Component:** HeroSection (reused, different props)

**Content:**
- Overline: "Ons Verhaal" -- Josefin Sans, `var(--text-overline)`, Rice at /80, uppercase
- Heading (h1): Fraunces, `var(--text-display)`, weight 600, Rice -- (from copywriter, story-oriented headline)
- No subheading on this hero (cleaner, lets the image speak)
- No CTA buttons on this hero

**Gradient Overlay:**
- Same as Home hero but slightly lighter: `linear-gradient(to top, rgba(26, 20, 16, 0.8) 0%, rgba(26, 20, 16, 0.3) 50%, rgba(26, 20, 16, 0.1) 100%)`

**Animation:** Same page-load sequence as Home hero.

---

### Section 2: Origin Story

**Layout:** CSS Grid, `grid-template-columns: 1fr 1fr` at desktop
**Background:** Rice #F5F0E8
**Padding:** `var(--section-space-main)` vertical
**Max-width:** `var(--content-max-width)`

**Left Column -- Text (Story Part 1):**
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Kecap
  - Text: (from copywriter -- founding story heading)
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Kecap at /80, line-height 1.65
  - Multiple paragraphs from copywriter about the founding, the family, 2016
- Accent detail: Pull quote inline using Fraunces italic, `var(--text-h4)`, Kecap, with Bandung Red left border (3px, reusing review card pattern)

**Right Column -- Image:**
- Source: `/images/gedung-sate-bandung.jpg` (Bandung cultural reference)
- Aspect ratio: 3:4 (portrait)
- Border-radius: `var(--radius-md)`
- Caption below image: Plus Jakarta Sans, `var(--text-caption)`, Kecap at /60 -- describing the Bandung connection

**Animation (Scroll Reveal):**
- Text stagger at 100ms
- Image: fadeIn + translateY 20px to 0, delay 200ms
- Initial states: all opacity 0, translateY 20px

**Responsive:**
- Desktop: 2-column, gap `var(--space-xl)`
- Mobile: stacked, text first, image below

---

### Section 3: The Kitchen / Our Approach

**Layout:** CSS Grid, reversed: `grid-template-columns: 1fr 1fr`, image on LEFT, text on RIGHT
**Background:** Kecap #1A1410 (dark section)
**Padding:** `var(--section-space-main)` vertical

**Left Column -- Image:**
- Source: `/images/interior-bar-area.jpg`
- Aspect ratio: 4:3
- Border-radius: `var(--radius-md)`

**Right Column -- Text:**
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Rice #F5F0E8
  - Text: (from copywriter -- kitchen/cooking philosophy heading)
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Rice at /80
  - Paragraphs about cooking approach, traditional recipes, fresh ingredients

**Wow Moment -- Batik Watermark:**
- Subtle abstracted batik geometric pattern at 4-6% opacity (CSS background-image or SVG)
- Position: absolute behind the text column, right-aligned, top-aligned
- Dimensions: clamp(180px, 15vw, 320px) square
- z-index: 0 (behind content at z-index: 1)
- This creates a cultural texture moment that rewards close attention without referencing a specific number

**Animation (Scroll Reveal):**
- Image: fadeIn + translateX -20px to 0 (slides from left), 700ms
- Text: stagger at 100ms, fadeUp
- Batik watermark: fadeIn only (no movement), 1200ms, delay 400ms
- Initial states: opacity 0 for all; image also translateX -20px

**Responsive:**
- Desktop: 2-column, image left, text right, batik watermark visible
- Mobile: stacked, image first, text below, batik watermark hidden (too subtle at mobile widths)

---

### Section 4: Atmosphere / Interior

**Layout:** Asymmetric image grid (not uniform card grid -- banned)
**Background:** Rice #F5F0E8
**Padding:** `var(--section-space-main)` vertical

**Image Grid Layout:**
```
Desktop:
┌─────────────────┬──────────┐
│                  │          │
│  Large image     │  Small   │
│  (2:3 portrait)  │  (1:1)   │
│                  │          │
│                  ├──────────┤
│                  │  Small   │
│                  │  (1:1)   │
└─────────────────┴──────────┘
```

- CSS Grid: `grid-template-columns: 3fr 2fr`, `grid-template-rows: 1fr 1fr`
- Gap: `var(--space-sm)`
- Large image: spans 2 rows, `/images/interior-back-room.jpg`, aspect ratio handled by grid cell
- Top-right: `/images/es-cendol-dessert.jpg`, 1:1 square
- Bottom-right: `/images/food-platter-overhead.png`, 1:1 square
- All images: `object-fit: cover`, border-radius `var(--radius-md)`, overflow: hidden

**Optional heading above grid:**
- Fraunces, `var(--text-h3)`, weight 500, Kecap, text-align: left
- Text: "De Sfeer" or similar (from copywriter)

**Animation (Scroll Reveal):**
- Large image: fadeIn + scale 0.97 to 1.0, 900ms
- Small images: stagger at 200ms, fadeIn + translateY 16px to 0, 600ms
- Initial states: opacity 0; large image also scale 0.97

**Responsive:**
- Desktop: 3:2 asymmetric grid as described
- Mobile: stacked vertically, all images full-width, 4:3 aspect ratio, gap `var(--space-xs)`

---

### Section 5: Rijsttafel Tradition (Cross-sell Bridge)

**Layout:** Banner-style, CSS Grid `grid-template-columns: 1fr 1fr` at desktop
**Background:** Rice Dark #E8E0D3 at /50 (subtle shift from main Rice)
**Padding:** `var(--section-space-main)` vertical

**Left Column -- Text:**
- Overline: Josefin Sans, `var(--text-overline)`, Sambal #C4332E, uppercase -- "Onze Specialiteit"
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Kecap
  - Text: (from page-copy.md -- "De rijsttafel: meer dan een maaltijd")
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Kecap at /80
  - 1-2 paragraphs about the rijsttafel tradition (from page-copy.md Ons Verhaal Section 4)
- CTA: "Bekijk de rijsttafel" -- btn btn-primary

**Right Column -- Image:**
- Source: `/images/rijsttafel-sate-closeup.jpg`
- Aspect ratio: 4:3
- Border-radius: `var(--radius-md)`
- `object-fit: cover`

**Animation (Scroll Reveal):**
- Text: stagger at 100ms, fadeUp
- Image: fadeIn + translateX 20px to 0 (slides from right), 700ms

**Responsive:**
- Desktop: 2-column, gap `var(--space-xl)`
- Mobile: stacked, text first, image below

---

### Section 6: Social Proof & Trust

**Layout:** Single column, centered content
**Background:** Rice #F5F0E8
**Padding:** `var(--section-space-main)` vertical
**Max-width:** `var(--content-narrow)` (720px), centered

**Review Cards:**
- 2-3 review cards (different quotes from Home page -- see page-copy.md Ons Verhaal Section 5)
- Component: ReviewQuoteCard
- Stacked vertically with `var(--space-lg)` gap
- Each card has left border accent (Bandung Red 3px)

**Trust Stat:**
- Below reviews: Fraunces, `var(--text-h4)`, weight 500, Kecap, text-align: center
- Text: "4,5/5 TripAdvisor -- #25 van 300 restaurants in Den Bosch"
- Margin-top: `var(--space-lg)`

**CTA:**
- "Lees meer beoordelingen" -- btn btn-tertiary (text link with arrow)
- Plus Jakarta Sans, `var(--text-body-sm)`, weight 600, Daun

**Animation (Scroll Reveal):**
- Cards: stagger at 200ms intervals, fadeUp from 20px, 600ms
- Trust stat: fadeIn, delay 400ms

**Responsive:**
- Desktop: centered, staggered left margin on even cards
- Mobile: all cards full-width, no stagger

---

### Section 7: Values / Philosophy

**Layout:** 3-column on desktop, with short text blocks
**Background:** Daun #0B473A
**Padding:** `var(--section-space-main)` vertical

This is NOT a card grid -- it's three text blocks without borders, shadows, or card containers. Just text on the dark background with spacing.

**Layout:** CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap `var(--space-xl)`, max-width `var(--content-max-width)`

**Each Value Block:**
- Number/Icon: Fraunces, `var(--text-h1)`, weight 300, Rice at /20 (very faint) -- "01", "02", "03"
- Heading (h3): Fraunces, `var(--text-h3)`, weight 500, Rice #F5F0E8
- Body: Plus Jakarta Sans, `var(--text-body)`, weight 400, Rice at /80
- Number sits above heading, creates visual anchor without needing icons or borders

**Values (from copywriter):**
1. Tradition -- family recipes, generational knowledge
2. Quality -- fresh ingredients, authentic preparation
3. Hospitality -- warm welcome, family atmosphere

**Animation (Scroll Reveal):**
- Section heading (if any): fadeUp, 500ms
- Value blocks: stagger at 200ms, fadeUp from 20px, 600ms
- Initial states: opacity 0, translateY 20px

**Responsive:**
- Desktop: 3-column
- Tablet: 3-column (compressed gaps)
- Mobile: single column, stacked with `var(--space-lg)` gap

---

### Section 8: CTA Band

**Layout:** Centered text block, full-width Bandung Red background
**Background:** Bandung Red #E83F39
**Padding:** `var(--space-2xl)` vertical

**Content (centered):**
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Rice #F5F0E8 -- "Proef het zelf" or similar (from copywriter)
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Rice at /80 -- one line about visiting
- CTA: "Reserveer Nu" -- btn with Rice #F5F0E8 background and Bandung Red text (inverted primary). Contrast: Bandung Red on Rice = 3.9:1 -- qualifies as AA Large since button text is bold 14-16px.
- "Bekijk Menu" -- btn btn-secondary-light (transparent, Rice border)

**Animation (Scroll Reveal):**
- Entire section: fadeIn, 600ms
- Content stagger at 100ms within

---

## Page 4: Reserveren (/reserveren)

### Overall
- **Background:** Rice #F5F0E8 with noise texture
- **No hero image** -- colored page header like Menu
- **Header:** Solid state from start
- **Max content width:** `var(--content-max-width)` (1200px)
- **Vertical rhythm:** Page header to form `var(--section-space-sm)`, form section to catering `var(--section-space-main)`, catering to map `var(--section-space-main)`

---

### Section 1: Page Header

**Layout:** Full-width Daun #0B473A background strip
**Padding:** `var(--space-3xl)` top (header clearance), `var(--space-xl)` bottom
**Content max-width:** `var(--content-max-width)`, centered

**Elements:**
- Overline: Josefin Sans, `var(--text-overline)`, Rice at /60, uppercase -- "Restaurant Indonesia Bandung"
- Heading (h1): Fraunces, `var(--text-h1)`, weight 600, Rice #F5F0E8 -- "Reserveren"
- Subtext: Plus Jakarta Sans, `var(--text-body)`, Rice at /80 -- brief line about reserving (from copywriter)

**Animation (Page Load):** Same pattern as Menu page header.

---

### Section 2: Reservation Form + Info Sidebar

**Layout:** CSS Grid, `grid-template-columns: 3fr 2fr` at desktop
**Background:** Rice #F5F0E8
**Padding:** `var(--section-space-sm)` vertical
**Max-width:** `var(--content-max-width)`, gap `var(--space-xl)`

**Left Column -- Form:**
- Component: ContactForm (reservation variant)
- Heading above form: Fraunces, `var(--text-h3)`, weight 500, Kecap -- "Reserveer uw tafel"
- Form fields as specified in design-system.md component spec
- Submit button: btn btn-primary btn-lg, full width on mobile

**Right Column -- Info Sidebar:**
- **Hours Table:**
  - Component: HoursTable
  - Heading: Josefin Sans, `var(--text-overline)`, Kecap, uppercase -- "Openingstijden"
  - **Wow moment:** 3px wide Daun accent bar running the full height of the table's left edge (via border-left on the table container). Padding-left: `var(--space-md)` to offset from the bar.

- **Contact Info (below hours):**
  - Margin-top: `var(--space-lg)`
  - Heading: Josefin Sans, `var(--text-overline)`, Kecap, uppercase -- "Contact"
  - Address: Plus Jakarta Sans, `var(--text-body-sm)`, Kecap at /80
  - Phone: link, Plus Jakarta Sans, `var(--text-body-sm)`, weight 500, Daun #0B473A (no underline)
  - Email: link, Plus Jakarta Sans, `var(--text-body-sm)`, weight 500, Daun #0B473A (no underline)

- **Quick Note:**
  - Margin-top: `var(--space-md)`
  - Plus Jakarta Sans, `var(--text-body-sm)`, Kecap at /80, italic
  - Text about group reservations (10+) needing phone call, or similar (from copywriter)

**Animation (Scroll Reveal):**
- Form: fadeUp as a unit, 600ms
- Sidebar elements: stagger at 150ms, fadeUp from 16px
- Initial states: opacity 0, translateY 16px

**Responsive:**
- Desktop: 2-column (3:2 ratio)
- Tablet: 2-column (1:1 ratio)
- Mobile: stacked, form first, sidebar below

---

### Section 3: Catering

**Layout:** Single column centered, with accent card
**Background:** Rice Dark #E8E0D3 at /50 (subtle background shift)
**Padding:** `var(--section-space-main)` vertical
**Max-width:** `var(--content-narrow)` (720px), centered

**Content:**
- Overline: Josefin Sans, `var(--text-overline)`, Sambal #C4332E, uppercase -- "Catering & Groepen"
- Heading (h2): Fraunces, `var(--text-h2)`, weight 500, Kecap
  - Text: (from copywriter -- about catering services)
- Body: Plus Jakarta Sans, `var(--text-body-lg)`, Kecap at /80
  - Text: 1-2 paragraphs about catering options (from copywriter)
- Image: `/images/catering-buffet.jpg`, width 100%, aspect ratio 16:9, border-radius `var(--radius-md)`, margin `var(--space-md)` vertical

**Catering Info Card:**
- Component: CateringInfoCard
- Contains: phone number for catering inquiries, brief list of what they offer
- Margin-top: `var(--space-md)`

**Animation (Scroll Reveal):**
- Content stagger at 100ms, fadeUp
- Image: fadeIn + scale 0.98 to 1.0, 800ms
- Card: fadeUp, delay 300ms

---

### Section 4: Map + Directions

**Layout:** Full-bleed map section
**Background:** Daun Muted #1A3D33

**Map Section:**
- Component: MapSection
- Height: 400px desktop, 280px mobile
- Full width (no border-radius, extends to edges)
- `filter: saturate(0.3) contrast(0.9)` for muted appearance
- Mobile: `pointer-events: none` with tap-to-interact overlay

**Below Map -- Directions Text:**
- Background: Daun Muted #1A3D33
- Padding: `var(--space-lg)` vertical
- Max-width: `var(--content-max-width)`, centered
- Layout: flex, gap `var(--space-xl)`, wrap

**Direction Items (2-3 blocks):**
- Icon (20px, Rice at /60): Train, Car, Bike (Lucide)
- Heading: Plus Jakarta Sans, `var(--text-body-sm)`, weight 600, Rice #F5F0E8
- Text: Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Rice at /80
- E.g., "Met de trein: 10 min lopen vanaf Station Den Bosch"

**Responsive:**
- Desktop: direction items in a row (flex)
- Mobile: stacked vertically

---

## Image Assignment Summary

| Image File | Used On | Section | Role |
|------------|---------|---------|------|
| `bandung-logo.png` | All pages | Header, Footer | Brand logo |
| `rijsttafel-candlelit.jpg` | Home | Hero | Primary hero background |
| `rijsttafel-overhead.jpg` | Menu | Rijsttafel section | Section header image |
| `rijsttafel-sate-closeup.jpg` | Home | Rijsttafel teaser | Accent food image (portrait, bleeds right) |
| `rijsttafel-table-setting.jpg` | -- | (Reserve for CMS/specials) | Available for future use |
| `interior-main-dining.jpg` | Ons Verhaal, Home | Hero (Ons Verhaal), Intro section (Home) | Interior establishing shots |
| `interior-bar-area.jpg` | Ons Verhaal | Kitchen section | Cooking/preparation context |
| `interior-back-room.jpg` | Ons Verhaal | Atmosphere grid (large) | Ambiance |
| `food-platter-overhead.png` | Ons Verhaal | Atmosphere grid (small) | Food presentation |
| `catering-buffet.jpg` | Reserveren | Catering section | Catering context |
| `es-cendol-dessert.jpg` | Ons Verhaal | Atmosphere grid (small) | Dessert accent |
| `gedung-sate-bandung.jpg` | Ons Verhaal | Origin story | Cultural reference |

---

## Spacing Reference Quick Sheet

For developer convenience, all spacing values used in page layouts mapped to tokens:

| Context | Token | Approx Range |
|---------|-------|-------------|
| Between hero and ribbon | 0 (flush) | 0px |
| Standard section gap | `var(--section-space-main)` | 72-120px |
| Closely related sections | `var(--section-space-sm)` | 48-80px |
| Major thematic shifts | `var(--section-space-lg)` | 96-160px |
| Within-section element gap | `var(--space-lg)` | 32-52px |
| Between cards/items | `var(--space-sm)` to `var(--space-md)` | 16-36px |
| Button group gap | `var(--space-sm)` | 16-24px |
| Form field gap (rows) | `var(--space-md)` | 24-36px |
| Content padding (horizontal) | `var(--space-md)` | 24-36px |
| Page header top padding | `var(--space-3xl)` | 80-140px |

---

*End of Page Designs specification.*
