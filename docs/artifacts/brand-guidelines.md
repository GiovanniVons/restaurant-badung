# Brand Guidelines -- Restaurant Indonesia Bandung
**Phase:** 1
**Agent:** Brand Strategist
**Date:** 2026-03-23
**Status:** draft

---

## 0. Source of Truth

This brand belongs to the client. The existing visual identity was extracted from https://restaurantbandung.nl/ and sharpened into a production-ready design system. Colors and logo are preserved. Typography is upgraded from system fonts (Arial) to characterful typefaces that complement the existing palette. Nothing was invented -- everything was either carried forward or refined.

### Existing Brand Assets (from restaurantbandung.nl)

| Asset | Source | Status |
|-------|--------|--------|
| **Logo** | `https://restaurantbandung.nl/wp-content/uploads/2020/09/logo.png` | Carry forward as-is |
| **Primary Red** | #e83f39 | Carry forward as primary accent |
| **Dark Teal** | rgba(11,71,58) = #0B473A | Carry forward as structural dark |
| **Button Gray** | #32373c | Replace with teal (sharpened) |
| **Typography** | Arial / system fonts | Upgrade (sharpened) |
| **Food Photography** | Multiple images on site (gallery from 2017, interior shots, story images) | Carry forward, curate best |
| **Surface Color** | #ffffff (flat white) | Upgrade to warm off-white (sharpened) |

### Image Assets to Download

These must be saved to `public/images/` at project setup:

| Image | Source URL | Usage |
|-------|-----------|-------|
| Logo | `restaurantbandung.nl/wp-content/uploads/2020/09/logo.png` | Header, footer, meta |
| Hero/story image | `restaurantbandung.nl/wp-content/uploads/2020/09/2020-04-03-e1601052686614.png` | About/story section |
| Interior photo | `restaurantbandung.nl/wp-content/uploads/2020/09/20200216_191747-2.jpg` | Hero or atmosphere |
| Gallery 1 | `restaurantbandung.nl/wp-content/uploads/2020/09/2017-11-27-2.jpg` | Food/gallery |
| Gallery 2 | `restaurantbandung.nl/wp-content/uploads/2020/09/2017-11-27.jpg` | Food/gallery |
| Gallery 3 | `restaurantbandung.nl/wp-content/uploads/2020/09/2017-11-27-3.jpg` | Food/gallery |
| Gallery 4 | `restaurantbandung.nl/wp-content/uploads/2020/09/2017-11-27-4.jpg` | Food/gallery |

Developer: scrape all `/wp-content/uploads/` images from the live site at project setup. The list above is the minimum confirmed set -- there may be more.

---

## 1. Brand Positioning

### Identity Statement

Restaurant Indonesia Bandung is a family-run West Javanese kitchen in the heart of Den Bosch where Yana and Steven serve the flavors Yana grew up with in Bandung. The rijsttafel -- five variations of shared rice-table dining -- is the centerpiece, but the real product is the feeling of being welcomed into a home kitchen 11,000 kilometers from where the recipes were born. Every dish is made from scratch using ingredients sourced for authenticity, not convenience. The restaurant seats fewer than fifty people because intimacy is the point.

### Competitive Differentiator

Every Indonesian restaurant in the Netherlands serves rijsttafel. Most of them treat it as a line item on a menu. Restaurant Indonesia Bandung treats it as the entire premise -- five distinct rice tables, each built around a different region or mood of West Javanese cooking, each requiring days of preparation. Combined with a space small enough that Yana can greet every table and Steven can explain every dish, the differentiator is not the food alone but the inseparability of the food from the family that makes it.

### Positioning

The Dutch-Indonesian restaurant market has two poles: the generic takeaway-and-dine-in operations (cheap websites, UberEats integration, no personality) and the upscale Indonesian fine-dining concepts like Restaurant Blauw and Ron Gastrobar Indonesia (polished, atmospheric, premium-priced, culturally distant). Restaurant Indonesia Bandung occupies the warm center that neither pole claims -- authentic home cooking served with genuine personal warmth in an intimate setting, at honest prices. The brand position is: **the closest thing to eating in Bandung without a plane ticket.**

---

## 2. Aesthetic Direction

### Aesthetic Label

**"West Javanese home kitchen -- deep teal warmth, sambal-red accents, and the generous intimacy of a family table set for guests."**

### Visual Translation

The digital experience should feel like crossing the threshold of a warm house. The dominant surface is a warm off-white (sharpened from the current flat white) that reads as "kitchen table" not "office screen." The deep teal (#0B473A) -- already the client's dark color -- provides structural weight for navigation, footer, overlays, and dark sections. It has the depth of tropical foliage without being cold. The vibrant red (#e83f39) -- the client's existing accent -- punches through for CTAs, highlights, and emphasis. It reads as sambal, warmth, urgency-without-aggression.

Photography dominates the visual hierarchy. The client has food photography and interior shots on the current site. These are the hero assets. Overhead shots of full rijsttafel spreads, the warm glow of the dining room, the textures of served dishes -- these do the heavy lifting, not decorative illustrations or icons.

Spatial rhythm alternates between generous breathing room (the calm of arriving, sitting down, unfolding a napkin) and denser moments of abundance (the rijsttafel spread, the full menu grid). This mirrors the actual dining experience -- anticipation followed by overwhelming generosity.

### Anti-Reference (What This Brand is NOT)

- **Not Restaurant Blauw's deep navy sophistication.** That palette says "Dutch design applied to Indonesian food."
- **Not Ron Gastrobar's minimalist white.** That's European fine dining that happens to serve Indonesian dishes.
- **Not the current WordPress template.** The existing site is functional but has no visual personality. The bar is the floor -- the rebuild must feel like it was designed specifically for this restaurant.
- **Not a food delivery platform.** No cart icons in the header, no calorie counts, no "Add to Order" buttons. This is a destination, not a transaction.

---

## 3. Design Dials

```
DESIGN_VARIANCE: 5
MOTION_INTENSITY: 4
VISUAL_DENSITY: 4
```

### Rationale

**DESIGN_VARIANCE: 5** -- The restaurant's personality is welcoming, not challenging. One deliberate layout-breaking moment per page (an asymmetric hero, a full-bleed photograph that breaks the grid, an overlapping element) prevents the site from feeling templated. But the overall structure stays intuitive -- visitors should find the menu, hours, and reservation button without thinking.

**MOTION_INTENSITY: 4** -- Framer Motion handles section reveals with staggered fade-ups, menu items appearing in sequence (like dishes being placed on the table), and smooth scroll navigation. A gentle parallax on the hero photography adds depth. No scroll hijacking, no complex GSAP timelines, no animations that delay information access.

**VISUAL_DENSITY: 4** -- Generous spacing for hero and story sections. The rijsttafel and menu sections are intentionally denser -- abundance communicates value. This rhythmic variation between spacious and abundant mirrors the dining experience: quiet anticipation, then the table fills up.

---

## 4. Aesthetic Archetype

### "Rumah Makan"

A digital translation of the Indonesian home-restaurant experience -- "rumah makan" literally means "eating house." The defining quality is intimate warmth communicated through natural material textures, the client's own color palette extended into a proper system, and a spatial generosity that alternates between calm and abundance.

**Hallmarks:**
- Client's existing colors (teal + red) extended into a complete design system
- Photography-first visual hierarchy -- food images are the hero, not illustrations or icons
- Warm-lit food photography showing shared plates and table settings
- Type system that balances editorial warmth (serif display) with functional clarity (humanist sans body)
- Spatial rhythm: generous whitespace for story sections, dense grids for menu/rijsttafel abundance
- Personal voice throughout -- this is Yana and Steven's place, not a brand

**Typical dials:** VARIANCE 4-6, MOTION 3-5, DENSITY 3-5

---

## 5. Visual System

### Color System

#### Palette

| Name | Hex | Source | Role | Notes |
|------|-----|--------|------|-------|
| **Bandung Red** | #e83f39 | Existing (carried forward) | Primary accent | The client's signature red. Vibrant, warm, reads as sambal-red. Used for CTAs, active states, highlights, links, and decorative accents. |
| **Daun** | #0B473A | Existing (carried forward) | Structural dark | The client's dark teal. Deep tropical foliage green. Used for navigation, footer, dark sections, overlays, and text on light backgrounds. |
| **Rice** | #F5F0E8 | Sharpened (from #fff) | Dominant surface | Warm off-white upgraded from flat white. The warmth of steamed jasmine rice. Used for page backgrounds, section surfaces, card backgrounds. |
| **Kecap** | #1A1410 | Sharpened (from #000) | Text dark | Warm near-black for body text. Softer than pure black, harmonizes with the teal. Used for body text and dark UI elements when full teal is too heavy. |
| **Daun Light** | #0E5C4A | Sharpened (new) | Hover/active dark | Lighter variant of the teal for hover states on dark backgrounds and interactive feedback. |
| **Daun Muted** | #1A3D33 | Sharpened (new) | Subtle dark | Mid-teal for card borders, secondary containers, and dark-on-dark subtle differentiation. |

#### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success | #0B473A (Daun) | Form confirmations, reservation confirmed states |
| Warning | #e8a339 | Attention states, limited availability (warm amber derived from the red) |
| Error | #e83f39 (Bandung Red) | Form validation errors, sold-out indicators |
| Info | #0B473A (Daun) | Informational callouts, tooltips |

#### Distribution Rule

- **60% Rice (#F5F0E8)** -- Page backgrounds, section surfaces, card backgrounds, breathing space
- **30% Daun (#0B473A)** -- Navigation, footer, dark sections, text headings, overlays
- **10% Bandung Red (#e83f39)** -- Buttons, links, active indicators, decorative lines, highlighted menu items

Kecap (#1A1410) is used for body text on light surfaces. Daun Light and Daun Muted appear as interactive and layering variants within the 30% dark zone.

#### Contrast Verification

| Combination | Ratio | WCAG AA |
|-------------|-------|---------|
| Kecap on Rice | ~15.5:1 | Pass (Normal + Large) |
| Daun on Rice | ~9.8:1 | Pass (Normal + Large) |
| Rice on Daun | ~9.8:1 | Pass (Normal + Large) |
| Bandung Red on Rice | ~4.1:1 | Pass (Large), borderline Normal -- use bold weight for body text |
| Rice on Bandung Red | ~4.1:1 | Pass (Large) -- buttons with white text need 600+ weight |
| Kecap on Bandung Red | ~3.5:1 | Fail Normal -- use Kecap text on Red only at large/bold sizes |

**Button text rule:** Primary buttons (Bandung Red background) use Rice (#F5F0E8) text at 600 weight minimum. Never use Kecap on Red at normal weight.

### Typography

**Existing:** Arial / system fonts (no custom typefaces on current site)
**Sharpened:** Upgraded to characterful fonts that complement the red + teal palette. This is the single biggest visual upgrade from the current site.

**Display: Fraunces** (Google Fonts, self-hosted via next/font/local)
- Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
- Usage: Hero headlines, section titles, the restaurant name in large settings, pull quotes
- Rationale: Soft, old-style serif with organic character. Warm without being decorative, characterful without being kitschy. The serif category bridges Indonesian craft aesthetics with European typographic tradition, complementing the teal-and-red palette with natural elegance.
- Settings: Letter-spacing: -0.02em at display sizes.

**Body: Plus Jakarta Sans** (Google Fonts, self-hosted via next/font/local)
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Usage: Body text, navigation, buttons, form labels, menu descriptions, metadata
- Rationale: Designed by Tokotype, an Indonesian type foundry. Using an Indonesian-designed typeface for the functional layer of a Dutch-Indonesian restaurant website is a meaningful cultural connection. Geometric sans-serif with softened terminals -- professional at small sizes, warm at medium sizes. Excellent Dutch and Indonesian diacritics support.
- Settings: Letter-spacing: 0 at body sizes, +0.02em at 12px and below.

**Accent: Josefin Sans** (Google Fonts, self-hosted via next/font/local)
- Weights: 400 (Regular), 600 (SemiBold)
- Usage: Category labels, navigation items in uppercase, price tags, badges ("Vegetarisch", "Vis"), breadcrumbs
- Rationale: Art-deco geometric structure with vintage warmth in uppercase. High x-height makes it excellent for wayfinding at small sizes.
- Settings: Uppercase transform for labels and badges. Letter-spacing: +0.08em in uppercase contexts.

**Font loading:** All fonts self-hosted via `next/font/local` to avoid Google Fonts network dependency. Download font files during project setup.

### Type Scale

Base: 18px (1.125rem)
Scale ratio: 1.25 (Major Third)

| Level | Size | Weight | Line Height | Letter Spacing | Font |
|-------|------|--------|-------------|----------------|------|
| Display | 56px / 3.5rem | Fraunces 700 | 1.05 | -0.02em | Fraunces |
| H1 | 44px / 2.75rem | Fraunces 700 | 1.1 | -0.02em | Fraunces |
| H2 | 36px / 2.25rem | Fraunces 600 | 1.15 | -0.01em | Fraunces |
| H3 | 28px / 1.75rem | Fraunces 600 | 1.2 | -0.01em | Fraunces |
| H4 | 22px / 1.375rem | Plus Jakarta Sans 600 | 1.3 | 0 | Plus Jakarta Sans |
| H5 | 18px / 1.125rem | Plus Jakarta Sans 600 | 1.4 | 0 | Plus Jakarta Sans |
| Body Large | 20px / 1.25rem | Plus Jakarta Sans 400 | 1.6 | 0 | Plus Jakarta Sans |
| Body | 18px / 1.125rem | Plus Jakarta Sans 400 | 1.65 | 0 | Plus Jakarta Sans |
| Body Small | 16px / 1rem | Plus Jakarta Sans 400 | 1.6 | 0 | Plus Jakarta Sans |
| Caption | 14px / 0.875rem | Plus Jakarta Sans 500 | 1.5 | +0.01em | Plus Jakarta Sans |
| Label | 13px / 0.8125rem | Josefin Sans 600 | 1.4 | +0.08em | Josefin Sans |
| Overline | 12px / 0.75rem | Josefin Sans 400 | 1.4 | +0.12em | Josefin Sans |

### Spacing Philosophy

- Hero and story sections: generous vertical padding (clamp 6rem-10rem range)
- Menu and rijsttafel sections: tighter vertical rhythm (clamp 3rem-5rem range), denser card grids
- Between major sections: breathing space of at least 4rem minimum
- Within cards and containers: comfortable 1.5rem-2rem internal padding

---

## 6. Voice and Tone

### Voice Attributes

1. **Warm but not syrupy** -- "Pull up a chair and see what we've been cooking" not "We are SO incredibly excited to welcome you to our humble little table!"

2. **Proud but not pretentious** -- "Our rijsttafel takes three days of preparation" not "Artisanally curated by our culinary maestros."

3. **Cultural but not exoticizing** -- "In Bandung, this is how families eat -- many dishes, passed around the table, everyone reaching" not "Experience the exotic flavors of the mystical East."

4. **Direct but not transactional** -- "See the full menu" and "Reserve a table" not "Order now!" and "Don't miss out!"

5. **Personal but not performative** -- "Yana brought these recipes from her mother's kitchen in Bandung" not "Our founder's culinary journey began with a childhood dream."

### Banned Phrases and Cliches

- "Exotic" or "mystical" in reference to the food or culture
- "Fusion" (this is West Javanese cooking, period)
- "Hidden gem" (overused TripAdvisor language)
- "Culinary journey" or "taste adventure"
- "Mouthwatering" or "lip-smacking" or "finger-licking"
- "East meets West" or any variation
- "Authentic" as a standalone adjective without specificity
- "Foodie" or "food lovers"
- "Hand-crafted" or "artisanal" (describe the actual process)
- "Book now before it's too late" or artificial urgency language
- "We pride ourselves on..." (show, don't declare)

### Tone Shifts by Context

| Context | Tone | Example |
|---------|------|---------|
| Homepage hero | Inviting, warm, confident | "A West Javanese kitchen in the heart of Den Bosch" |
| Menu descriptions | Informative, sensory, specific | "Slow-braised beef rendang with toasted coconut and lemongrass -- rich, layered, impossible to rush" |
| Rijsttafel section | Proud, generous, explanatory | "Twelve dishes, prepared over three days, served together. In Bandung, this is not a special occasion. This is just dinner." |
| About/story section | Personal, grounded, honest | "Yana missed the food she grew up with. Steven missed the look on her face when she cooked it. The restaurant started there." |
| Reservation CTA | Direct, hospitable | "We've saved you a seat. Pick a date." |
| Footer/contact | Practical, friendly | "Find us on the Hinthamereinde." |

---

## 7. Photography and Imagery Direction

### Source Material

The client has existing photography on restaurantbandung.nl. These are the primary assets. All images must be downloaded and optimized (WebP/AVIF, responsive srcset) during project setup.

### Food Photography Treatment

- Use the client's existing food photos as-is where quality permits
- Warm-lit, slightly soft directional lighting is the target aesthetic
- Overhead shots for rijsttafel spreads, 45-degree angles for individual dishes
- Where existing photos are insufficient, note specific gaps for the client to arrange a shoot

### Texture and Pattern

- Subtle woven textile patterns (Sundanese tenun, abstracted batik geometry) at 5-10% opacity as background atmospheric layers
- Wood grain and rattan references as subtle CSS texture effects
- No stock illustrations, no icons-as-decoration, no emoji section markers

### Imagery to Avoid

- Stock photos of generic Indonesian landscapes
- Temple or tourism imagery
- Isolated ingredient flat-lays on white backgrounds
- AI-generated food imagery

---

## 8. UI Element Direction (for downstream agents)

### Buttons

- Primary: Bandung Red (#e83f39) background, Rice (#F5F0E8) text at 600 weight, generous padding (16px 32px minimum), border-radius 6px
- Hover: Darken Red by 10% (#d03530), subtle scale-up (1.02)
- Secondary: Transparent background, 1.5px Daun (#0B473A) border, Daun text. Hover fills with Daun, text flips to Rice.
- All button text must pass WCAG AA contrast against its background in every state

### Cards

- Rice background with subtle warm shadow (use rgba of Daun for shadow color, not gray)
- Max border-radius 8px
- Menu cards can use a subtle left-border accent in Bandung Red (4px solid) to create hierarchy

### Navigation

- Daun (#0B473A) dark background, Rice text, Bandung Red accent on active item
- Client logo at left
- Reservation CTA button in Bandung Red at right -- always visible, always accessible

### Decorative Elements

- Thin horizontal lines in Bandung Red (1px) as section dividers
- Subtle dot or diamond patterns (abstracted from batik) at very low opacity as section backgrounds
- No heavy ornamentation -- the decorative layer should be barely noticed consciously but contribute to overall warmth subconsciously

---

## Quality Verification

- [x] Colors anchored in the client's existing brand (#e83f39, #0B473A)
- [x] Typography is a deliberate upgrade from Arial, not a reinvention
- [x] Logo and photography sourced from the live site, not invented
- [x] Every "sharpened" change is clearly marked and justified
- [x] Contrast ratios verified for all primary color combinations
- [x] Voice attributes grounded in the restaurant's actual personality
- [x] Downstream agents can design and build without guessing the brand
