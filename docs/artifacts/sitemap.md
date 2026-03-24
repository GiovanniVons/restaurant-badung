# Sitemap
**Phase:** 1
**Agent:** ux-architect
**Date:** 2026-03-23
**Status:** revised (v2 -- feature audit + optimizations applied)

---

## Page Structure

| # | Page | URL Path | Purpose |
|---|------|----------|---------|
| 1 | Home | `/` | First impression, build appetite, funnel to rijsttafel and reservations |
| 2 | Menu | `/menu` | Full menu with dine-in/takeaway price toggle, rijsttafel hero, category nav, monthly specials |
| 3 | Our Story | `/ons-verhaal` | Family heritage, West Javanese identity, trust and differentiation |
| 4 | Reserve & Contact | `/reserveren` | Zenchef booking, online ordering link, contact form, takeaway, catering, location |

**Total: 4 pages.** Every page has confirmed content to fill it. No padding pages.

### Why Only 4 Pages

- **No standalone Takeaway page.** The current site has a separate `/afhaalmenu-2/` with lower prices. We consolidate: the Menu page gets a Dine-in / Afhalen toggle that switches displayed prices. One menu, two price views. Cleaner, no duplicate content.
- **No standalone Gallery page.** Strong images distributed across pages where they serve a narrative purpose.
- **No standalone Rijsttafel page.** Lives as the hero section of the Menu page.
- **No standalone Catering page.** Section on Reserve & Contact page with clear CTA.
- **No Blog.** No content pipeline exists to maintain it.

---

## Navigation

### Primary Navigation (Header)
```
[Logo]   Menu   Ons Verhaal   Reserveren   [Bestellen]   [NL/EN]
```

- Logo links to Home
- "Menu" -- anchor term for both locals and tourists
- "Ons Verhaal" (Our Story). English mode: "Our Story"
- "Reserveren" -- styled as highlighted CTA button. English mode: "Reserve"
- "Bestellen" -- secondary CTA linking to ecashcloud ordering (or styled as link, not button, to avoid CTA competition). English mode: "Order"
- Language toggle: minimal NL/EN switch

### Persistent Bottom Bar (Mobile Only)
Fixed to bottom of viewport, always visible:
```
[ 073 -- 820 09 43  Bellen ]  [ Reserveer ]
```
- Left: tap-to-call phone number
- Right: "Reserveer" button linking to Zenchef
- Height: ~60px with safe area padding

### Announcement Banner (Conditional)
Site-wide dismissible banner at the very top of the page, above the header:
- Data-driven: reads from a JSON file with `{ message, startDate, endDate, type }`
- Auto-shows when current date falls within the active period
- Types: `closure` (red/urgent), `special` (gold/promotional), `info` (neutral)
- Example: "Wij zijn gesloten van 20 juli t/m 21 augustus 2026"
- Dismissible via X button, preference stored in sessionStorage (reappears next visit)
- If no active announcement, the banner does not render

### Footer Navigation
```
+-- Contact
|   +-- Address (linked to Google Maps)
|   +-- Phone (clickable tel: link)
|   +-- Email
|   +-- Opening hours (compact)
+-- Quick Links
|   +-- Menu
|   +-- Rijsttafel
|   +-- Ons Verhaal
|   +-- Reserveren
|   +-- Bestellen (online ordering)
|   +-- Afhalen (Takeaway)
|   +-- Catering
+-- Legal
|   +-- Privacy Policy
|   +-- Cookie Policy (Vonzie Nexus)
|   +-- KvK 66772141
|   +-- BTW NL856691707B01
+-- Social / Reviews
    +-- Facebook
    +-- Google Reviews link
    +-- TripAdvisor link
```

---

## URL Redirect Map (SEO Preservation)

Old WordPress URLs must 301-redirect to new paths in `next.config.ts`. Without this, Google drops their existing rankings.

| Old URL | New URL | Notes |
|---------|---------|-------|
| `/menu/` | `/menu` | Direct match |
| `/afhaalmenu/` | `/menu?view=afhalen` | Takeaway price view |
| `/afhaalmenu-2/` | `/menu?view=afhalen` | Alternate takeaway URL |
| `/maandmenu/` | `/menu#specials` | Monthly specials section |
| `/maandmenu-2/` | `/menu#specials` | Alternate specials URL |
| `/over-ons/` | `/ons-verhaal` | Story page |
| `/catering/` | `/reserveren#catering` | Catering section |
| `/contact/` | `/reserveren#contact` | Contact section |
| `/reserveren/` | `/reserveren` | Direct match |
| `/vakantiesluiting/` | `/` | Handled by announcement banner |
| `/lunch/` | `/menu` | Dead page, redirect to menu |
| `/author/steven/` | `/ons-verhaal` | Author page redirect |

---

## User Flows

### Flow 1: "I want to eat there tonight" (Local Regular)
**Entry:** Direct URL or Google search
**Path:** Home -> sees open/closed indicator + "Reserveer" CTA -> taps -> Zenchef -> books
**Clicks to conversion: 1** (persistent CTA)
**Optimizations:**
- Dynamic open/closed indicator in hours ribbon (time-aware)
- If closed (Wednesday), ribbon says "Morgen weer welkom vanaf 16:00"

### Flow 2: "What's on the menu?" (Local Researcher)
**Entry:** Google search "Indonesian restaurant Den Bosch menu"
**Path:** Home -> Menu -> browses categories, discovers rijsttafel -> "Reserveer"
**Clicks to conversion: 2**
**Optimizations:**
- Sticky category bar with scroll-spy
- Dine-in / Afhalen price toggle at menu top

### Flow 3: "What is rijsttafel?" (Tourist Discovery)
**Entry:** Google search "rijsttafel Den Bosch"
**Path:** Home (EN) -> Menu -> Rijsttafel section -> "Reserveer"
**Clicks to conversion: 2**
**Optimizations:**
- Language toggle visible immediately in header
- Rijsttafel section has experiential description, not just a dish list

### Flow 4: "Is this place legit?" (Comparison Shopper)
**Entry:** Google Maps or review link
**Path:** Home -> Ons Verhaal -> Menu -> "Reserveer"
**Clicks to conversion: 3**

### Flow 5: "I need catering" (Catering Inquiry)
**Entry:** Google search "Indonesian catering Den Bosch"
**Path:** Home -> Reserveren -> Catering section -> contact form or call
**Clicks to conversion: 2**
**Optimizations:**
- Catering section includes minimum 30 persons, 2 weeks notice, contact form

### Flow 6: "I want takeaway" (Phone or Online Order)
**Entry:** Direct or Google
**Path A (phone):** Home -> sees phone in bottom bar -> calls
**Path B (online):** Home -> "Bestellen" in nav -> ecashcloud ordering
**Path C (browse first):** Home -> Menu (toggle to Afhalen prices) -> "Bestellen" or call
**Clicks to conversion: 0-1**
**Optimizations:**
- "Bestellen" link in nav (currently missing from our plan)
- Menu toggle shows takeaway prices without leaving the page
- Phone number in mobile bottom bar for quick call

### Flow 7: "Are they open during my holiday?" (Closure Check) -- NEW
**Entry:** Direct or Google
**Path:** Home -> sees announcement banner -> knows they're closed Jul 20 -- Aug 21
**Clicks to conversion: 0** (banner visible immediately)

---

## Content Requirements

### Assets Needed Per Page

**Home**
- Hero image: rijsttafel-candlelit.jpg or rijsttafel-table-setting.jpg
- Interior/atmosphere photo: interior-main-dining.jpg
- 1-2 pull quotes from Google/TripAdvisor reviews
- Dynamic open/closed hours logic (JavaScript, based on current day/time)
- Announcement banner data (JSON file)

**Menu**
- Complete menu data: all 80+ items with dine-in AND takeaway prices
- Each item: `{ id, name, descriptionNl, descriptionEn, priceDineIn, priceTakeaway, category, spiceLevel, isSpecial, specialMonth }`
- Rijsttafel options with dish lists (dine-in only -- no takeaway for rijsttafel)
- Monthly specials data (JSON, conditional rendering)
- Spiciness indicators (chili icon system)

**Our Story**
- Heritage narrative copy (Yana & Steven, Bandung, West Java)
- Interior photos: interior-main-dining.jpg, interior-back-room.jpg, interior-bar-area.jpg
- Gedung Sate image (cultural reference -- the building in their logo)
- 1-2 review quotes

**Reserve & Contact**
- Zenchef widget embed (bookings.zenchef.com/results?rid=373418)
- ecashcloud ordering link
- Contact form (name, email, phone, message, subject dropdown: General / Catering / Takeaway)
- Google Maps embed
- Full contact details + hours table
- Catering section (min 30 persons, 2 weeks notice, custom menu by consultation)
- Business registration: KvK 66772141, BTW NL856691707B01

### Content the Client Must Provide
- [ ] Takeaway price list (for all menu items -- may differ from dine-in)
- [ ] Confirmation of ecashcloud ordering URL and how it works
- [ ] Monthly specials for launch month
- [ ] Approval of rijsttafel dish lists per option
- [ ] Any upcoming holiday closure dates
- [ ] High-resolution food photography selection (if better than what we scraped)

### Content to Be Created by the Agency
- All page copy (Dutch primary, English secondary)
- Rijsttafel experiential descriptions
- SEO-optimized meta titles and descriptions
- Structured data markup (Restaurant, Menu, LocalBusiness, FoodEstablishment)
- Privacy policy and cookie policy text
- Announcement banner data file
- Menu data file with both dine-in and takeaway prices

---

## Language Strategy

**Approach:** Pragmatic bilingual, not full i18n framework.

- All pages available in Dutch (default) and English
- Language toggle (NL / EN) in header
- Dutch URLs as canonical (`/menu`, `/ons-verhaal`, `/reserveren`)
- English mode swaps copy and descriptions but keeps Indonesian dish names unchanged
- Zenchef handles its own language based on user browser settings
- `lang` attribute and `hreflang` tags for SEO

**What changes between languages:**
- Page copy, section headings, CTA text, navigation labels
- Menu item descriptions (names stay in Indonesian)
- Meta titles and descriptions
- Announcement banner message

**What stays the same:**
- Indonesian dish names
- Prices, hours, contact information
- Photography and layout

---

## Technical Notes

### Menu Data Architecture
```typescript
// src/data/menu.ts
interface MenuItem {
  id: string
  name: string              // Indonesian/Dutch name (never translates)
  descriptionNl: string
  descriptionEn: string
  priceDineIn: number       // EUR, dine-in price
  priceTakeaway: number | null  // EUR, takeaway price (null if not available for takeaway)
  category: MenuCategory
  spiceLevel: 0 | 1 | 2 | 3
  isSpecial: boolean
  specialMonth?: string     // "2026-04" format, only for monthly specials
}

interface RijsttafelOption {
  id: string
  name: string
  descriptionNl: string
  descriptionEn: string
  pricePerPerson: number
  minPersons: number
  dishes: string[]          // List of dish names included
  tags: ('vegetarisch' | 'vis' | 'premium')[]
}
```

### Announcement Banner Data
```typescript
// src/data/announcements.ts
interface Announcement {
  id: string
  messageNl: string
  messageEn: string
  startDate: string   // ISO date
  endDate: string     // ISO date
  type: 'closure' | 'special' | 'info'
  active: boolean
}
```

### Open/Closed Logic
```typescript
// Business hours as structured data
const HOURS = {
  1: { open: '16:00', close: '21:30' },  // Monday
  2: { open: '16:00', close: '21:30' },  // Tuesday
  3: null,                                  // Wednesday (closed)
  4: { open: '16:00', close: '21:30' },  // Thursday
  5: { open: '16:00', close: '21:30' },  // Friday
  6: { open: '12:00', close: '21:30' },  // Saturday
  0: { open: '12:00', close: '21:30' },  // Sunday
}
```
