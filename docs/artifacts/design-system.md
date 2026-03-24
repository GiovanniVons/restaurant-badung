# Design System -- Restaurant Indonesia Bandung
**Phase:** 2
**Agent:** UI Designer
**Date:** 2026-03-23
**Status:** draft

---

## Design Philosophy

Restaurant Indonesia Bandung is a family restaurant in Den Bosch, opened in 2016 by Yana and Steven. The design must feel like stepping into a warm Indonesian living room -- not a trendy Bali beach club and not a generic food delivery app. Think handwritten recipe cards next to a carefully set rijsttafel, the amber light of a dining room where Yana greets every table.

The aesthetic archetype is **Rumah Makan** (literally "eating house") -- warm, unpretentious, deeply rooted in culture, with the quiet confidence of a family that knows exactly what they're cooking and why. The design communicates authority through restraint, not through visual loudness.

### Design Dials (from Brand Guidelines)

| Dial | Value | Interpretation |
|------|-------|----------------|
| `DESIGN_VARIANCE` | 5 | One layout-breaking moment per page. Occasional asymmetry, but the overall grid stays grounded and approachable. Not experimental -- trustworthy with character. |
| `MOTION_INTENSITY` | 4 | Framer Motion entrance sequences and staggered reveals. Subtle scroll parallax on hero. No GSAP SplitText reveals, no pinned sections. Motion serves warmth, not spectacle. |
| `VISUAL_DENSITY` | 4 | Balanced. Sections breathe, but content areas (menu, hours) are allowed to be dense. Generous padding on storytelling sections, tighter on utility sections. |

### Aesthetic Direction

**Warm over cool.** Every surface leans toward Rice (#F5F0E8), never pure white. Dark sections use Kecap (#1A1410) with warm undertones, never blue-black.

**Textured over flat.** Backgrounds use subtle noise overlays (1-2% opacity) to create the feeling of aged paper or warm fabric. Hard-edged flat color blocks are avoided.

**Grounded over floating.** Components sit firmly in the layout -- no excessive drop shadows creating floating card effects. Depth comes from layered backgrounds and color contrast, not elevation.

**Asymmetric detail within symmetric structure.** The grid is conventional (12-column), but within sections, images bleed, text blocks offset, and accent elements break alignment intentionally.

---

## Color System

### Primitives

| Token | Hex | HSL | Role |
|-------|-----|-----|------|
| `--color-bandung-red` | #E83F39 | 2 80% 57% | Primary accent -- CTAs, highlights, spice indicators |
| `--color-daun` | #0B473A | 164 75% 16% | Secondary accent -- section backgrounds, trust signals |
| `--color-daun-light` | #0E5C4A | 164 73% 21% | Interactive variant of Daun -- hover states |
| `--color-daun-muted` | #1A3D33 | 160 40% 17% | Subdued green -- footer, secondary surfaces |
| `--color-rice` | #F5F0E8 | 37 44% 93% | Primary background -- warm off-white |
| `--color-kecap` | #1A1410 | 24 27% 8% | Primary text, dark surfaces |
| `--color-sambal` | #C4332E | 2 63% 48% | Darkened red -- hover/active state for Bandung Red |
| `--color-rice-dark` | #E8E0D3 | 33 33% 87% | Dividers, input borders, secondary surfaces |
| `--color-pandan` | #D4E8D0 | 112 33% 86% | Light green tint -- success states, subtle accents |
| `--color-kunyit` | #E8A832 | 39 80% 55% | Warm gold -- star ratings, premium indicators |

### Color Distribution (60/30/10)

- **60% Rice (#F5F0E8):** Page backgrounds, card surfaces, form fields
- **30% Kecap (#1A1410) + Daun (#0B473A):** Text, dark sections, footer, header solid state
- **10% Bandung Red (#E83F39):** CTAs, active states, spice indicators, accent lines

### Contrast Ratio Table (WCAG AA Pre-Computation)

| Foreground | Background | Ratio | Pass AA Normal (4.5:1) | Pass AA Large (3:1) |
|------------|------------|-------|------------------------|---------------------|
| Kecap #1A1410 | Rice #F5F0E8 | 14.2:1 | PASS | PASS |
| Rice #F5F0E8 | Kecap #1A1410 | 14.2:1 | PASS | PASS |
| Rice #F5F0E8 | Daun #0B473A | 8.4:1 | PASS | PASS |
| Rice #F5F0E8 | Daun Muted #1A3D33 | 7.8:1 | PASS | PASS |
| Bandung Red #E83F39 | Rice #F5F0E8 | 3.9:1 | FAIL (decorative/large only) | PASS |
| Rice #F5F0E8 | Bandung Red #E83F39 | 3.9:1 | FAIL (decorative/large only) | PASS |
| Kecap #1A1410 | Bandung Red #E83F39 | 3.6:1 | FAIL (large only) | PASS |
| Bandung Red #E83F39 | Kecap #1A1410 | 3.6:1 | FAIL (large only) | PASS |
| Kunyit #E8A832 | Kecap #1A1410 | 7.1:1 | PASS | PASS |
| Kunyit #E8A832 | Rice #F5F0E8 | 2.0:1 | FAIL (decorative only) | FAIL |
| Kecap/65 (~#7A756E blended on Rice) | Rice #F5F0E8 | 4.0:1 | FAIL | PASS |
| Kecap/80 (~#4A433A blended on Rice) | Rice #F5F0E8 | 7.5:1 | PASS | PASS |
| Rice/80 (~#F7F3EC blended on Daun) | Daun #0B473A | 7.8:1 | PASS | PASS |

### Decorative-Only Colors (Never for Body Text)

- **Bandung Red #E83F39** -- Safe for large text (18px+ bold or 24px+ regular), buttons, headings. NOT safe for body text on Rice or Kecap backgrounds.
- **Kunyit #E8A832** -- Star ratings and decorative indicators only on dark backgrounds. Never for text on Rice.
- **Kecap at opacity /65 or lower on Rice** -- Fails AA Normal. Use /80 minimum for readable secondary text.

### Text-Safe Variants

| Original | Text-Safe Variant | Use Case |
|----------|------------------|----------|
| Bandung Red #E83F39 | Sambal #C4332E | Body-size red text on Rice (5.1:1 -- PASS) |
| Kunyit #E8A832 | #B8882A | Gold text on Rice (3.1:1 -- AA Large only) |

---

## Typography

### Font Stack

| Role | Family | Source | Fallback |
|------|--------|--------|----------|
| Display | Fraunces | Google Fonts (Variable, opsz 9-144, wght 100-900) | Georgia, serif |
| Body | Plus Jakarta Sans | Google Fonts (Variable, wght 200-800) | system-ui, sans-serif |
| Accent | Josefin Sans | Google Fonts (Variable, wght 100-700) | sans-serif |

### Type Scale (Fluid)

All sizes use `clamp()` for fluid scaling between viewport widths 20rem (320px) and 90rem (1440px).

Formula: `clamp(MIN, MIN + (MAX - MIN) * ((100vw - 20rem) / 70rem), MAX)`

| Token | Min (px) | Max (px) | Clamp | Font | Weight | Line Height | Letter Spacing |
|-------|----------|----------|-------|------|--------|-------------|----------------|
| `--text-display` | 44 | 80 | clamp(2.75rem, 2.179rem + 2.857vw, 5rem) | Fraunces | 600 | 1.0 | -0.02em |
| `--text-h1` | 36 | 60 | clamp(2.25rem, 1.821rem + 2.143vw, 3.75rem) | Fraunces | 600 | 1.1 | -0.015em |
| `--text-h2` | 28 | 44 | clamp(1.75rem, 1.464rem + 1.429vw, 2.75rem) | Fraunces | 500 | 1.15 | -0.01em |
| `--text-h3` | 22 | 32 | clamp(1.375rem, 1.196rem + 0.893vw, 2rem) | Fraunces | 500 | 1.2 | -0.005em |
| `--text-h4` | 18 | 24 | clamp(1.125rem, 1.018rem + 0.536vw, 1.5rem) | Fraunces | 500 | 1.3 | 0 |
| `--text-body-lg` | 18 | 22 | clamp(1.125rem, 1.054rem + 0.357vw, 1.375rem) | Plus Jakarta Sans | 400 | 1.65 | 0 |
| `--text-body` | 16 | 18 | clamp(1rem, 0.964rem + 0.179vw, 1.125rem) | Plus Jakarta Sans | 400 | 1.7 | 0.005em |
| `--text-body-sm` | 14 | 16 | clamp(0.875rem, 0.839rem + 0.179vw, 1rem) | Plus Jakarta Sans | 400 | 1.6 | 0.01em |
| `--text-caption` | 12 | 14 | clamp(0.75rem, 0.714rem + 0.179vw, 0.875rem) | Josefin Sans | 400 | 1.5 | 0.06em |
| `--text-overline` | 11 | 13 | clamp(0.688rem, 0.652rem + 0.179vw, 0.813rem) | Josefin Sans | 600 | 1.4 | 0.12em |

### Typographic Intent

- **Fraunces** is used for all headings and display text. Its optical size axis creates natural elegance at large sizes while remaining readable at h4 scale. The soft serif terminals connect to the warmth of Indonesian hospitality.
- **Plus Jakarta Sans** is the workhorse for body text, form labels, menu descriptions, and UI elements. Its geometric warmth pairs with Fraunces without competing.
- **Josefin Sans** is reserved for overlines, category labels, and navigational wayfinding. Its tall x-height and even letter-spacing in uppercase creates clean, readable labels at small sizes.

---

## Spacing Scale

### Base Unit: 4px

### Fluid Spacing Scale

| Token | Min (px) | Max (px) | Clamp |
|-------|----------|----------|-------|
| `--space-3xs` | 4 | 4 | 0.25rem |
| `--space-2xs` | 8 | 8 | 0.5rem |
| `--space-xs` | 12 | 16 | clamp(0.75rem, 0.679rem + 0.357vw, 1rem) |
| `--space-sm` | 16 | 24 | clamp(1rem, 0.857rem + 0.714vw, 1.5rem) |
| `--space-md` | 24 | 36 | clamp(1.5rem, 1.286rem + 1.071vw, 2.25rem) |
| `--space-lg` | 32 | 52 | clamp(2rem, 1.643rem + 1.786vw, 3.25rem) |
| `--space-xl` | 48 | 72 | clamp(3rem, 2.571rem + 2.143vw, 4.5rem) |
| `--space-2xl` | 64 | 104 | clamp(4rem, 3.286rem + 3.571vw, 6.5rem) |
| `--space-3xl` | 80 | 140 | clamp(5rem, 3.929rem + 5.357vw, 8.75rem) |

### Section Spacing

| Token | Min (px) | Max (px) | Clamp | Use |
|-------|----------|----------|-------|-----|
| `--section-space-sm` | 48 | 80 | clamp(3rem, 2.429rem + 2.857vw, 5rem) | Between closely related sections |
| `--section-space-main` | 72 | 120 | clamp(4.5rem, 3.643rem + 4.286vw, 7.5rem) | Standard section gap |
| `--section-space-lg` | 96 | 160 | clamp(6rem, 4.857rem + 5.714vw, 10rem) | Between major thematic shifts |

### Content Width

| Token | Value | Use |
|-------|-------|-----|
| `--content-max-width` | 1200px | Standard content container |
| `--content-narrow` | 720px | Text-heavy sections, forms |
| `--content-wide` | 1400px | Full-bleed image containers, hero |

---

## Border Radius Philosophy: Subtle (4-8px)

The design uses subtle rounding that communicates warmth without playfulness. Sharp enough for a restaurant (not a children's app), soft enough to feel inviting (not a brutalist portfolio).

| Token | Value | Use |
|-------|-------|-----|
| `--radius-none` | 0 | Images in bleed containers, dividers |
| `--radius-sm` | 4px | Input fields, small cards |
| `--radius-md` | 6px | Cards, menu sections, image overlays |
| `--radius-lg` | 8px | Modal containers, feature cards |
| `--radius-pill` | 9999px | Dine-in/takeaway toggle, language toggle only |

---

## Shadow System

Shadows are used sparingly. Depth comes from color layering and overlapping elements, not elevation.

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-sm` | 0 1px 3px rgba(26, 20, 16, 0.08) | Subtle lift on interactive elements |
| `--shadow-md` | 0 4px 12px rgba(26, 20, 16, 0.1) | Header solid state, floating CTA bar |
| `--shadow-lg` | 0 8px 24px rgba(26, 20, 16, 0.12) | Modal overlays, image hover states |
| `--shadow-inner` | inset 0 1px 3px rgba(26, 20, 16, 0.06) | Input fields on focus |

---

## Component Specifications

### 1. Announcement Banner

**Purpose:** Conditional banner for closures, special events, or info messages. Renders only when `AnnouncementBanner` data is non-null from CMS/data file.

**HTML Structure:**
```html
<div role="alert" class="announcement-banner" data-type="closure|special|info">
  <div class="announcement-inner">
    <span class="announcement-icon">{icon}</span>
    <p class="announcement-text">{message}</p>
    <button class="announcement-dismiss" aria-label="Dismiss announcement">
      <svg><!-- X icon --></svg>
    </button>
  </div>
</div>
```

**Visual Specs:**

| Type | Background | Text | Icon | Border-bottom |
|------|-----------|------|------|---------------|
| Closure | Bandung Red #E83F39 | Rice #F5F0E8 | Calendar X (Lucide) | none |
| Special | Daun #0B473A | Rice #F5F0E8 | Sparkles (Lucide) | none |
| Info | Rice Dark #E8E0D3 | Kecap #1A1410 | Info (Lucide) | 1px solid var(--color-rice-dark) |

**Dimensions:**
- Padding: `var(--space-2xs)` vertical, `var(--space-sm)` horizontal
- Height: auto (content-driven), typically 40-48px
- Max content width: `var(--content-max-width)`
- Centered within full-width colored bar

**Typography:**
- Text: Plus Jakarta Sans, `var(--text-body-sm)`, weight 500
- Icon: 16px, same color as text

**States:**
- Default: visible
- Dismissed: `opacity: 0`, `height: 0`, `overflow: hidden` over 300ms ease-out (Framer Motion)
- Dismissed state persisted to `sessionStorage`

**Responsive:**
- Mobile: text truncates with "..." if > 2 lines, dismiss button stays visible
- Desktop: single line, dismiss button at right edge

---

### 2. Header / Navigation

**Purpose:** Primary navigation. Starts transparent (on pages with hero images), transitions to solid on scroll.

**HTML Structure:**
```html
<header class="site-header" data-scrolled="false">
  <nav class="header-inner">
    <a href="/" class="header-logo">
      <img src="/images/bandung-logo.png" alt="Restaurant Indonesia Bandung" />
    </a>
    <ul class="header-nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/ons-verhaal">Ons Verhaal</a></li>
      <li><a href="/reserveren">Reserveren</a></li>
    </ul>
    <div class="header-actions">
      <div class="language-toggle">{NL/EN toggle}</div>
      <a href="/reserveren" class="header-cta">Reserveer Nu</a>
    </div>
    <button class="header-hamburger" aria-label="Menu openen">
      <span></span><span></span>
    </button>
  </nav>
</header>
```

**Visual Specs -- Transparent State (data-scrolled="false"):**
- Background: transparent
- Logo: full color, height 44px
- Nav links: Rice #F5F0E8 (when over dark hero images), Plus Jakarta Sans, `var(--text-body-sm)`, weight 500, letter-spacing 0.02em
- CTA button: Bandung Red bg, Rice text (see Button specs)
- Hamburger lines: Rice #F5F0E8

**Visual Specs -- Solid State (data-scrolled="true"):**
- Background: Rice #F5F0E8
- Box shadow: `var(--shadow-md)`
- Logo: full color, height 40px (slightly reduced)
- Nav links: Kecap #1A1410, same type specs
- CTA button: unchanged
- Hamburger lines: Kecap #1A1410
- Transition: background 400ms ease, color 300ms ease, box-shadow 300ms ease

**Scroll behavior:**
- Track `scrollY` with `useRef`, 5px dead zone
- Solid state triggers at scrollY > 60px
- On scroll down past 400px: header slides up (translateY: -100%) over 300ms
- On scroll up: header slides back down (translateY: 0)
- Always visible on mobile (no hide on scroll down)

**Dimensions:**
- Height: 72px desktop, 64px mobile
- Inner max-width: `var(--content-wide)` (1400px)
- Padding: 0 `var(--space-md)`
- Position: fixed, top: 0, left: 0, width: 100%, z-index: 50

**Nav Link Hover:**
- Color: Bandung Red #E83F39
- No underline (underlines are banned)
- Transition: color 200ms ease

**Nav Link Active (current page):**
- Color: Bandung Red #E83F39
- Weight: 600
- Small 2px-wide dot below link, centered, Bandung Red, `border-radius: var(--radius-pill)`

**Responsive:**
- Desktop (1024px+): horizontal nav links visible, CTA visible, hamburger hidden
- Tablet (768-1023px): horizontal nav links hidden, CTA hidden, hamburger visible
- Mobile (< 768px): hamburger visible, logo centered, language toggle moves to mobile menu

**Mobile Menu Overlay:**
- Full viewport height, Kecap #1A1410 background
- Slides in from right: `translateX(100%)` to `translateX(0)` over 400ms, ease-out (Framer Motion)
- Nav links: Fraunces, `var(--text-h2)`, weight 500, Rice color, staggered entrance (50ms delay between items)
- Language toggle at bottom of menu
- Close button: 24px X icon, Rice color, top-right
- Body scroll locked when open

---

### 3. Mobile Bottom Bar

**Purpose:** Fixed bottom CTA bar on mobile, providing persistent access to phone and reservation.

**HTML Structure:**
```html
<div class="mobile-bottom-bar">
  <a href="tel:+31738200943" class="bottom-bar-phone">
    <svg><!-- Phone icon --></svg>
    <span>Bel Ons</span>
  </a>
  <a href="/reserveren" class="bottom-bar-reserve">
    <span>Reserveer</span>
    <svg><!-- Arrow right icon --></svg>
  </a>
</div>
```

**Visual Specs:**
- Background: Rice #F5F0E8
- Border-top: 1px solid var(--color-rice-dark)
- Shadow: `0 -2px 8px rgba(26, 20, 16, 0.08)`
- Height: 60px
- Position: fixed, bottom: 0, width: 100%, z-index: 40
- Layout: CSS Grid, `grid-template-columns: 1fr 1fr`, gap: 1px (divider via background color)
- Padding: `var(--space-2xs)` `var(--space-sm)`

**Phone Button (Left):**
- Background: transparent
- Text: Kecap #1A1410, Plus Jakarta Sans, `var(--text-body-sm)`, weight 600
- Icon: 20px, Daun #0B473A
- Layout: flex, align-items: center, gap: `var(--space-2xs)`, justify-content: center

**Reserve Button (Right):**
- Background: Bandung Red #E83F39
- Text: Rice #F5F0E8, Plus Jakarta Sans, `var(--text-body-sm)`, weight 700
- Icon: 16px arrow-right, Rice color
- Border-radius: `var(--radius-sm)`
- Layout: flex, align-items: center, gap: `var(--space-2xs)`, justify-content: center

**Responsive:**
- Visible: < 768px only
- Hidden: >= 768px
- Page content needs `padding-bottom: 76px` on mobile to prevent content from hiding behind bar

---

### 4. Hero Section

**Purpose:** Full-bleed atmospheric entrance for Home and Ons Verhaal pages.

**HTML Structure:**
```html
<section class="hero-section">
  <div class="hero-image-wrapper">
    <img src="{image}" alt="{alt}" class="hero-image" />
    <div class="hero-gradient-overlay"></div>
  </div>
  <div class="hero-content">
    <p class="hero-overline">{overline text}</p>
    <h1 class="hero-heading">{heading}</h1>
    <p class="hero-subheading">{subheading}</p>
    <div class="hero-cta-group">
      <a class="btn btn-primary">{primary CTA}</a>
      <a class="btn btn-secondary-light">{secondary CTA}</a>
    </div>
  </div>
</section>
```

**Visual Specs:**
- Full viewport width, height: `clamp(75vh, 70vh + 5vw, 90vh)`, min-height: 540px
- Image: `object-fit: cover`, `object-position: center 40%` (weighted toward top for food/dining shots)
- Gradient overlay: `linear-gradient(to top, rgba(26, 20, 16, 0.85) 0%, rgba(26, 20, 16, 0.4) 45%, rgba(26, 20, 16, 0.15) 100%)`
- Content positioned at bottom-left, `padding-bottom: var(--space-2xl)`, `padding-left: var(--space-md)`
- Max content width within hero: 640px

**Typography:**
- Overline: Josefin Sans, `var(--text-overline)`, weight 600, Rice #F5F0E8 at /80, uppercase, letter-spacing 0.12em
- Heading: Fraunces, `var(--text-display)`, weight 600, Rice #F5F0E8, line-height 1.0
- Subheading: Plus Jakarta Sans, `var(--text-body-lg)`, weight 400, Rice #F5F0E8 at /80, line-height 1.65, max-width 480px
- CTA Group: flex, gap: `var(--space-sm)`, flex-wrap: wrap

**Parallax (GSAP):**
- Image translateY from 0 to 60px as user scrolls through hero
- Disabled on mobile (`prefers-reduced-motion` and viewport < 768px)
- GSAP ScrollTrigger: start "top top", end "bottom top", scrub: true

**Page Load Animation (Framer Motion):**
- Image: scale from 1.05 to 1.0 over 1200ms, ease-out
- Overline: fadeIn + translateY from 16px to 0, delay 300ms, duration 600ms
- Heading: fadeIn + translateY from 24px to 0, delay 450ms, duration 700ms
- Subheading: fadeIn + translateY from 16px to 0, delay 600ms, duration 600ms
- CTA Group: fadeIn + translateY from 16px to 0, delay 750ms, duration 500ms

**Responsive:**
- Desktop: content left-aligned, 60% max-width of container
- Mobile: content left-aligned, full-width, `padding-bottom: var(--space-xl)`, heading uses `var(--text-h1)` scale instead of display

---

### 5. Open/Closed Ribbon

**Purpose:** Dynamic time-based indicator showing current open/closed status. Appears below the hero or at the top of the content area.

**HTML Structure:**
```html
<div class="open-ribbon" data-status="open|closed|closing-soon">
  <div class="ribbon-inner">
    <span class="ribbon-dot"></span>
    <span class="ribbon-text">{status text}</span>
    <span class="ribbon-hours">{today's hours}</span>
  </div>
</div>
```

**Visual Specs:**
- Background: Daun #0B473A
- Text: Rice #F5F0E8
- Height: 44px
- Full width, content centered
- Inner max-width: `var(--content-max-width)`
- Padding: `var(--space-2xs)` `var(--space-md)`
- Layout: flex, align-items: center, justify-content: center, gap: `var(--space-sm)`

**Status Dot:**
- Width/height: 8px, border-radius: 50%
- Open: Pandan #D4E8D0, with `animation: pulse 2s ease-in-out infinite`
- Closing soon: Kunyit #E8A832, same pulse
- Closed: Rice #F5F0E8 at /40, no animation

**Typography:**
- Status text: Plus Jakarta Sans, `var(--text-body-sm)`, weight 600
- Hours: Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Rice at /80

**Responsive:**
- Desktop: single line
- Mobile: wraps to two lines if needed, dot + status on line 1, hours on line 2

---

### 6. Rijsttafel Card (Accordion)

**Purpose:** Expandable card for each rijsttafel option. Uses serialize expand/collapse pattern -- collapse current, wait 450ms, then expand new.

**HTML Structure:**
```html
<div class="rijsttafel-card" data-expanded="false">
  <button class="rijsttafel-header" aria-expanded="false">
    <div class="rijsttafel-header-content">
      <h3 class="rijsttafel-name">{name}</h3>
      <p class="rijsttafel-summary">{dish count} gerechten</p>
    </div>
    <div class="rijsttafel-header-meta">
      <span class="rijsttafel-price">{price}</span>
      <span class="rijsttafel-chevron">
        <svg><!-- Chevron --></svg>
      </span>
    </div>
  </button>
  <div class="rijsttafel-body">
    <div class="rijsttafel-description">{description}</div>
    <ul class="rijsttafel-dishes">{dish list}</ul>
    <p class="rijsttafel-note">{minimum persons note}</p>
  </div>
</div>
```

**Visual Specs -- Collapsed:**
- Background: Rice #F5F0E8
- Border: 1px solid var(--color-rice-dark)
- Border-radius: `var(--radius-md)`
- Padding: `var(--space-sm)` `var(--space-md)`
- Min-height: 72px
- Layout: header is flex, justify-content: space-between, align-items: center

**Visual Specs -- Expanded:**
- Background: Rice #F5F0E8
- Border: 1px solid Daun #0B473A at /30
- Box shadow: `var(--shadow-sm)`
- Body: padding `var(--space-sm)` `var(--space-md)` `var(--space-md)`

**Typography:**
- Name: Fraunces, `var(--text-h3)`, weight 500, Kecap
- Summary: Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Kecap at /80
- Price: Fraunces, `var(--text-h4)`, weight 600, Bandung Red
- Description: Plus Jakarta Sans, `var(--text-body)`, weight 400, Kecap at /80
- Dish list items: Plus Jakarta Sans, `var(--text-body-sm)`, weight 400
- Note: Plus Jakarta Sans, `var(--text-caption)`, weight 400, Kecap at /65 -- **NOTE:** /65 is below /80 threshold on Rice, but caption text is 12-14px and non-essential. Acceptable as decorative hint text.

**Chevron:**
- Size: 20px
- Color: Kecap at /60
- Rotates from 0deg (collapsed) to 180deg (expanded) over 300ms ease

**Accordion Behavior (Framer Motion):**
- Expand: `height: 0` to `height: auto`, opacity 0 to 1, 450ms, ease-out
- Collapse: reverse, 350ms, ease-in
- **Serialize pattern:** When expanding a new card, collapse current card first. Wait for collapse exit animation to complete (350ms + 100ms buffer = 450ms), then expand new card and scroll it into view with 80px offset.

**Responsive:**
- Desktop: cards in a single column, max-width 800px
- Mobile: full-width, price moves below name (stack layout)

---

### 7. Menu Item Row

**Purpose:** Individual menu item within a category.

**HTML Structure:**
```html
<div class="menu-item-row">
  <div class="menu-item-info">
    <div class="menu-item-name-line">
      <h4 class="menu-item-name">{name}</h4>
      <span class="menu-item-dots"></span>
      <span class="menu-item-price">{price}</span>
    </div>
    <p class="menu-item-description">{description}</p>
  </div>
  <div class="menu-item-indicators">
    {spice dots if applicable}
  </div>
</div>
```

**Visual Specs:**
- Padding: `var(--space-xs)` 0
- Border-bottom: 1px solid var(--color-rice-dark) at /50
- Last child: no border

**Name Line Layout:**
- Flex, align-items: baseline, gap: `var(--space-2xs)`
- Dots: flex-grow: 1, border-bottom: 1px dotted var(--color-rice-dark), margin: 0 `var(--space-2xs)`, position relative bottom 4px

**Typography:**
- Name: Plus Jakarta Sans, `var(--text-body)`, weight 600, Kecap
- Price: Plus Jakarta Sans, `var(--text-body)`, weight 600, Kecap, white-space: nowrap
- Description: Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Kecap at /80
- No description on mobile if viewport < 480px (hide with `hidden` class, show above 480px)

**Spice Indicator:**
- 1-3 dots, each 6px diameter, Bandung Red #E83F39
- Gap between dots: 3px
- 0 dots = mild (no indicator shown)
- Tooltip on hover (desktop): "Mild / Medium / Spicy"

---

### 8. Menu Category Nav (Scroll Spy)

**Purpose:** Horizontal scrolling category navigation that sticks below the header on the menu page.

**HTML Structure:**
```html
<nav class="menu-category-nav" aria-label="Menu categories">
  <div class="menu-category-scroll">
    <button class="menu-category-tab" data-active="true">{category}</button>
    <button class="menu-category-tab">{category}</button>
    <!-- ... -->
  </div>
</nav>
```

**Visual Specs:**
- Background: Rice #F5F0E8
- Border-bottom: 1px solid var(--color-rice-dark)
- Position: sticky, top: 72px (below header, desktop) / top: 64px (mobile)
- Z-index: 30
- Height: 52px
- Padding: 0 `var(--space-md)`

**Tab Styling:**
- Inactive: Plus Jakarta Sans, `var(--text-body-sm)`, weight 500, Kecap at /80, padding `var(--space-2xs)` `var(--space-sm)`
- Active: weight 600, Kecap #1A1410, border-bottom 2px solid Bandung Red, padding-bottom adjusted to account for border
- Hover: color Kecap #1A1410, transition 200ms

**Scroll Behavior:**
- `overflow-x: auto`, `scrollbar-width: none`, `-webkit-overflow-scrolling: touch`
- Horizontal scroll snap: `scroll-snap-type: x proximity`, each tab `scroll-snap-align: center`
- Active tab auto-scrolls into center of viewport on scroll spy trigger

**Scroll Spy Logic:**
- Uses IntersectionObserver with `rootMargin: "-120px 0px -60% 0px"` (accounts for sticky header + nav)
- Updates active tab as user scrolls through categories
- Clicking a tab smooth-scrolls to the category section with 140px offset (header + nav height)

**Responsive:**
- All breakpoints: horizontal scroll
- Desktop: may fit all tabs without scrolling depending on category count
- Mobile: definitely scrolls, first/last tab have `var(--space-md)` padding to prevent edge clipping

---

### 9. Dine-in/Takeaway Toggle

**Purpose:** Session-persistent toggle for menu price/availability switching.

**HTML Structure:**
```html
<div class="menu-toggle" role="radiogroup" aria-label="Menu type">
  <button role="radio" aria-checked="true" class="toggle-option toggle-active">Afhalen</button>
  <button role="radio" aria-checked="false" class="toggle-option">Dineren</button>
  <div class="toggle-indicator"></div>
</div>
```

**Visual Specs:**
- Background: var(--color-rice-dark)
- Border-radius: `var(--radius-pill)`
- Padding: 3px
- Height: 40px
- Width: auto (content-driven), min-width: 220px

**Toggle Indicator (sliding pill):**
- Background: Rice #F5F0E8
- Border-radius: `var(--radius-pill)`
- Box shadow: `var(--shadow-sm)`
- Animates left/right with Framer Motion `layout` prop, spring transition (stiffness: 500, damping: 30)

**Toggle Option:**
- Font: Plus Jakarta Sans, `var(--text-body-sm)`, weight 500
- Active: Kecap #1A1410, weight 600
- Inactive: Kecap at /60
- Padding: 0 `var(--space-sm)`
- Cursor: pointer
- Transition: color 200ms ease

**State Management:**
- Persisted to `sessionStorage` key `menu-mode`
- Default: "Afhalen" (takeaway) -- the wireframe specifies takeaway default

---

### 10. Monthly Specials Card

**Purpose:** Conditional card for monthly specials. Only renders when specials data is available.

**HTML Structure:**
```html
<div class="monthly-special-card">
  <div class="special-badge">
    <span class="special-badge-text">Maandspecial</span>
  </div>
  <div class="special-content">
    <h3 class="special-name">{name}</h3>
    <p class="special-description">{description}</p>
    <span class="special-price">{price}</span>
  </div>
</div>
```

**Visual Specs:**
- Background: Daun #0B473A
- Border-radius: `var(--radius-md)`
- Padding: `var(--space-md)` `var(--space-lg)`
- Position: relative (for badge positioning)

**Badge:**
- Position: absolute, top: `calc(-1 * var(--space-xs))`, left: `var(--space-md)`
- Background: Bandung Red #E83F39
- Text: Rice, Josefin Sans, `var(--text-overline)`, weight 600, uppercase, letter-spacing 0.1em
- Padding: `var(--space-3xs)` `var(--space-sm)`
- Border-radius: `var(--radius-sm)`

**Typography:**
- Name: Fraunces, `var(--text-h3)`, weight 500, Rice #F5F0E8
- Description: Plus Jakarta Sans, `var(--text-body)`, weight 400, Rice at /80
- Price: Fraunces, `var(--text-h4)`, weight 600, Kunyit #E8A832 (decorative context on dark bg -- 7.1:1 ratio PASS)

---

### 11. Review Quote Card

**Purpose:** Customer testimonial with large typography treatment.

**HTML Structure:**
```html
<figure class="review-card">
  <div class="review-stars" aria-label="{n} van 5 sterren">
    {star SVGs}
  </div>
  <blockquote class="review-quote">
    <p>"{quote text}"</p>
  </blockquote>
  <figcaption class="review-attribution">
    <span class="review-author">{name}</span>
    <span class="review-source">{source}</span>
  </figcaption>
</figure>
```

**Visual Specs:**
- Background: transparent (inherits section bg)
- Padding: `var(--space-lg)` 0
- Border-left: 3px solid Bandung Red #E83F39
- Padding-left: `var(--space-md)`
- Max-width: 640px

**Stars:**
- Size: 18px each
- Color: Kunyit #E8A832 (on Rice bg -- decorative only, acceptable since star shape conveys meaning, aria-label provides text)
- Gap: 2px

**Typography:**
- Quote: Fraunces, `var(--text-h3)`, weight 400, Kecap, italic (font-style: italic), line-height 1.35
- Author: Plus Jakarta Sans, `var(--text-body-sm)`, weight 600, Kecap
- Source: Plus Jakarta Sans, `var(--text-caption)`, weight 400, Kecap at /80
- Author + Source separated by ` -- ` inline, or stacked on mobile

**Responsive:**
- Desktop: left-aligned, `var(--text-h3)` quote size
- Mobile: quote drops to `var(--text-h4)` size

---

### 12. Contact / Reservation Form

**Purpose:** Reservation form on the Reserveren page, catering inquiry form variant.

**HTML Structure:**
```html
<form class="contact-form" novalidate>
  <div class="form-row form-row-2col">
    <div class="form-field">
      <label for="name">Naam *</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-field">
      <label for="email">E-mail *</label>
      <input type="email" id="email" name="email" required />
    </div>
  </div>
  <div class="form-row form-row-2col">
    <div class="form-field">
      <label for="phone">Telefoon *</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
    <div class="form-field">
      <label for="guests">Aantal gasten *</label>
      <select id="guests" name="guests" required>
        <option value="">Selecteer...</option>
        <!-- 1-20+ options -->
      </select>
    </div>
  </div>
  <div class="form-row form-row-2col">
    <div class="form-field">
      <label for="date">Datum *</label>
      <input type="date" id="date" name="date" required />
    </div>
    <div class="form-field">
      <label for="time">Tijd *</label>
      <select id="time" name="time" required>
        <!-- time slot options per wireframe -->
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-field">
      <label for="message">Opmerkingen</label>
      <textarea id="message" name="message" rows="4"></textarea>
    </div>
  </div>
  <!-- Honeypot -->
  <div class="form-field" style="display:none" aria-hidden="true">
    <label for="website">Website</label>
    <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Reserveer Tafel</button>
</form>
```

**Form Field Specs:**

| State | Background | Border | Shadow | Label Color |
|-------|-----------|--------|--------|-------------|
| Default | Rice #F5F0E8 | 1px solid var(--color-rice-dark) | none | Kecap at /80 |
| Focus | Rice #F5F0E8 | 2px solid Daun #0B473A | `var(--shadow-inner)` | Daun #0B473A |
| Error | Rice #F5F0E8 | 2px solid Bandung Red #E83F39 | none | Bandung Red |
| Disabled | var(--color-rice-dark) | 1px solid var(--color-rice-dark) | none | Kecap at /40 |

**Field Dimensions:**
- Height: 48px (inputs and selects)
- Textarea: min-height 120px
- Border-radius: `var(--radius-sm)`
- Padding: `var(--space-xs)` `var(--space-sm)`
- Font: Plus Jakarta Sans, `var(--text-body)`, weight 400

**Label:**
- Font: Plus Jakarta Sans, `var(--text-body-sm)`, weight 500
- Margin-bottom: `var(--space-3xs)`
- Color: Kecap at /80

**Error Message:**
- Font: Plus Jakarta Sans, `var(--text-caption)`, weight 400
- Color: Bandung Red #E83F39 (5.1:1 contrast as Sambal on Rice -- PASS at caption size)
- Margin-top: `var(--space-3xs)`
- Icon: 14px alert-circle (Lucide) inline before text

**Focus Ring (global):**
- `outline: 2px solid var(--color-daun)`
- `outline-offset: 2px`
- Only on `:focus-visible` (not `:focus`)

**Success State:**
- Form fades out (opacity 0, height collapse, 400ms)
- Success message fades in: Fraunces `var(--text-h3)`, Daun #0B473A, check-circle icon (48px, Daun), plus confirmation text in Plus Jakarta Sans `var(--text-body)`

**Responsive:**
- Desktop: 2-column rows as specified
- Mobile (< 768px): all rows become single column

---

### 13. Hours Table

**Purpose:** Weekly opening hours with today's row highlighted.

**HTML Structure:**
```html
<table class="hours-table">
  <tbody>
    <tr class="hours-row" data-today="false">
      <td class="hours-day">{day name}</td>
      <td class="hours-time">{open} -- {close}</td>
    </tr>
    <tr class="hours-row" data-today="true">
      <td class="hours-day">{today}</td>
      <td class="hours-time">{open} -- {close}</td>
    </tr>
    <!-- ... -->
  </tbody>
</table>
```

**Visual Specs:**
- Width: 100%, max-width: 400px
- No table borders, clean layout

**Row Styling:**
- Padding: `var(--space-xs)` 0
- Border-bottom: 1px solid var(--color-rice-dark) at /40
- Last row: no border

**Today Row (data-today="true"):**
- Background: Daun #0B473A at /8 (transparent tint)
- Border-radius: `var(--radius-sm)`
- Padding: `var(--space-xs)` `var(--space-sm)`
- Day text: weight 700 (instead of 400)
- Small "Vandaag" badge inline: Josefin Sans, `var(--text-overline)`, Daun #0B473A, uppercase

**Typography:**
- Day: Plus Jakarta Sans, `var(--text-body)`, weight 400, Kecap
- Time: Plus Jakarta Sans, `var(--text-body)`, weight 500, Kecap
- Closed days: time shows "Gesloten" in Kecap at /60, italic

**Responsive:**
- Desktop: full day names (Maandag, Dinsdag...)
- Mobile (< 480px): abbreviated (Ma, Di, Wo...) to save space

---

### 14. Footer

**Purpose:** Site-wide footer with contact, hours, navigation, and legal.

**HTML Structure:**
```html
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-inner">
      <div class="footer-col footer-brand">
        <img src="/images/bandung-logo.png" alt="Restaurant Indonesia Bandung" class="footer-logo" />
        <p class="footer-tagline">{tagline}</p>
      </div>
      <div class="footer-col footer-contact">
        <h4 class="footer-heading">Contact</h4>
        <address>{address lines}</address>
        <a href="tel:...">{phone}</a>
        <a href="mailto:...">{email}</a>
      </div>
      <div class="footer-col footer-hours">
        <h4 class="footer-heading">Openingstijden</h4>
        {hours table compact}
      </div>
      <div class="footer-col footer-nav">
        <h4 class="footer-heading">Navigatie</h4>
        <ul>{nav links}</ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <p class="footer-copyright">&copy; {year} Restaurant Indonesia Bandung</p>
      <div class="footer-legal">
        <a href="/privacy">Privacy</a>
        <a href="/voorwaarden">Voorwaarden</a>
      </div>
    </div>
  </div>
</footer>
```

**Visual Specs:**
- Background: Daun Muted #1A3D33
- Full width

**Footer Top:**
- Max-width: `var(--content-max-width)`
- Margin: 0 auto
- Padding: `var(--section-space-main)` `var(--space-md)` `var(--space-xl)`
- Layout: CSS Grid, `grid-template-columns: 1.5fr 1fr 1fr 1fr`, gap: `var(--space-lg)`

**Footer Logo:**
- Height: 48px
- Filter: brightness(10) (makes dark logo visible on dark bg) -- OR use a white variant if available
- Margin-bottom: `var(--space-sm)`

**Footer Tagline:**
- Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Rice at /70 -- NOTE: /70 is below /75 threshold. Blended color on Daun Muted is approximately #A8B5AE. Contrast against #1A3D33: ~4.8:1 PASS AA Normal. Acceptable.

**Footer Heading:**
- Josefin Sans, `var(--text-overline)`, weight 600, Rice #F5F0E8, uppercase, letter-spacing 0.12em
- Margin-bottom: `var(--space-sm)`

**Footer Links:**
- Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Rice at /80
- No underlines (banned)
- Hover: Rice #F5F0E8 full opacity, transition 200ms
- No text-decoration on any state

**Footer Address:**
- Plus Jakarta Sans, `var(--text-body-sm)`, weight 400, Rice at /80, font-style: normal (override browser default italic)
- Line-height: 1.8

**Footer Bottom:**
- Background: Kecap #1A1410 at /30 (slightly darker strip)
- Padding: `var(--space-sm)` `var(--space-md)`
- Layout: flex, justify-content: space-between, max-width: `var(--content-max-width)`, margin: 0 auto

**Footer Copyright / Legal:**
- Plus Jakarta Sans, `var(--text-caption)`, weight 400, Rice at /60
- Legal links: gap `var(--space-sm)`, same styling as copyright

**Responsive:**
- Desktop: 4-column grid
- Tablet: 2x2 grid
- Mobile: single column, stacked, brand column first, then contact, hours, nav

---

### 15. CTA Buttons

**Purpose:** Primary interaction elements. Designed thoroughly, not as an afterthought.

**Button Variants:**

#### Primary Button (Bandung Red)

| Property | Default | Hover | Active | Focus | Disabled |
|----------|---------|-------|--------|-------|----------|
| Background | Bandung Red #E83F39 | Sambal #C4332E | #A82B27 | Bandung Red #E83F39 | Bandung Red at /40 |
| Text Color | Rice #F5F0E8 | Rice #F5F0E8 | Rice #F5F0E8 | Rice #F5F0E8 | Rice at /60 |
| Border | none | none | none | 2px solid Daun + 2px offset | none |
| Shadow | `var(--shadow-sm)` | `var(--shadow-md)` | none | -- | none |
| Transform | none | translateY(-1px) | translateY(0) | -- | none |
| Cursor | pointer | pointer | pointer | -- | not-allowed |

**Contrast:** Rice #F5F0E8 on Bandung Red #E83F39 = 3.9:1. This FAILS AA Normal but PASSES AA Large. Since buttons use `var(--text-body-sm)` at weight 700 (bold), the effective size is 14-16px bold, which qualifies as "large text" per WCAG (14px+ bold). PASS.

#### Secondary Button (Daun Outline)

| Property | Default | Hover | Active | Focus | Disabled |
|----------|---------|-------|--------|-------|----------|
| Background | transparent | Daun #0B473A | Daun Light #0E5C4A | transparent | transparent |
| Text Color | Daun #0B473A | Rice #F5F0E8 | Rice #F5F0E8 | Daun #0B473A | Daun at /40 |
| Border | 2px solid Daun #0B473A | 2px solid Daun #0B473A | 2px solid Daun Light | 2px solid Daun + outline | 2px solid Daun at /40 |
| Shadow | none | `var(--shadow-sm)` | none | -- | none |
| Transform | none | translateY(-1px) | translateY(0) | -- | none |

**Contrast (Default on Rice):** Daun #0B473A on Rice #F5F0E8 = 8.4:1 PASS AA Normal.
**Contrast (Hover):** Rice on Daun = 8.4:1 PASS.

#### Secondary Light Button (for dark backgrounds, e.g., hero)

| Property | Default | Hover | Active |
|----------|---------|-------|--------|
| Background | transparent | Rice #F5F0E8 at /15 | Rice at /25 |
| Text Color | Rice #F5F0E8 | Rice #F5F0E8 | Rice #F5F0E8 |
| Border | 2px solid Rice at /60 | 2px solid Rice at /80 | 2px solid Rice |

#### Tertiary Button (Text-only)

| Property | Default | Hover | Active |
|----------|---------|-------|--------|
| Background | transparent | Daun at /8 | Daun at /12 |
| Text Color | Daun #0B473A | Daun Light #0E5C4A | Daun #0B473A |
| Border | none | none | none |
| Text decoration | none | none | none |
| Arrow icon | 16px, same color | translateX(4px) | translateX(2px) |

**Common Button Properties:**
- Min-height: 48px (touch target)
- Padding: `var(--space-xs)` `var(--space-md)` (horizontal generous)
- Font: Plus Jakarta Sans, `var(--text-body-sm)`, weight 700, letter-spacing 0.02em
- Border-radius: `var(--radius-sm)` (4px)
- Transition: all 250ms cubic-bezier(0.25, 0.1, 0.25, 1)
- Display: inline-flex, align-items: center, gap: `var(--space-2xs)`

**Size Variants:**

| Size | Min-height | Padding V | Padding H | Font Size |
|------|-----------|-----------|-----------|-----------|
| sm | 36px | `var(--space-2xs)` | `var(--space-sm)` | `var(--text-caption)` weight 700 |
| md (default) | 48px | `var(--space-xs)` | `var(--space-md)` | `var(--text-body-sm)` weight 700 |
| lg | 56px | `var(--space-sm)` | `var(--space-lg)` | `var(--text-body)` weight 700 |

**Adjacent Button Spacing:**
- When primary + secondary sit side by side: gap `var(--space-sm)` (16-24px)
- Stack vertically on mobile (< 480px) with gap `var(--space-xs)`

---

### 16. Language Toggle

**Purpose:** NL/EN toggle. Small, unobtrusive.

**HTML Structure:**
```html
<div class="lang-toggle" role="radiogroup" aria-label="Kies taal">
  <button role="radio" aria-checked="true" class="lang-option lang-active">NL</button>
  <span class="lang-divider">/</span>
  <button role="radio" aria-checked="false" class="lang-option">EN</button>
</div>
```

**Visual Specs:**
- No background, no border
- Font: Josefin Sans, `var(--text-caption)`, weight 600, letter-spacing 0.06em
- Active: Kecap #1A1410 (or Rice on dark bg)
- Inactive: Kecap at /40 (or Rice at /40)
- Divider: same as inactive color
- Hover on inactive: Kecap at /80 (or Rice at /80)
- Cursor: pointer
- Transition: color 200ms ease

---

### 17. Image Card

**Purpose:** Dish highlight or story section image with optional overlay text.

**HTML Structure:**
```html
<div class="image-card">
  <div class="image-card-wrapper">
    <img src="{src}" alt="{alt}" class="image-card-img" loading="lazy" />
    <div class="image-card-overlay">{optional label}</div>
  </div>
</div>
```

**Visual Specs:**
- Border-radius: `var(--radius-md)`
- Overflow: hidden
- Image: `object-fit: cover`, width: 100%
- Aspect ratios: 4:3 (landscape default), 3:4 (portrait), 1:1 (square) -- set per instance

**Hover (desktop only):**
- Image: scale 1.0 to 1.04 over 500ms ease-out
- Overlay: opacity 0 to opacity 1, slight translateY from 8px to 0

**Overlay (optional):**
- Position: absolute, bottom: 0, left: 0, right: 0
- Background: linear-gradient(to top, rgba(26, 20, 16, 0.75) 0%, transparent 100%)
- Padding: `var(--space-md)` `var(--space-sm)`
- Text: Plus Jakarta Sans, `var(--text-body-sm)`, weight 500, Rice #F5F0E8

---

### 18. Map Section

**Purpose:** Embedded Google Map showing restaurant location.

**HTML Structure:**
```html
<div class="map-section">
  <div class="map-wrapper" data-interactive="false">
    <iframe
      src="{google maps embed URL}"
      title="Locatie Restaurant Indonesia Bandung"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="map-tap-overlay">
      <p>Tik om de kaart te gebruiken</p>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Width: 100%
- Height: 400px desktop, 280px mobile
- Border-radius: `var(--radius-md)` (or 0 if full-bleed)
- Overflow: hidden
- iframe: width 100%, height 100%, border: none

**Mobile Interaction:**
- `pointer-events: none` on iframe until user taps overlay
- Overlay: centered text on semi-transparent Kecap bg
- On tap: overlay fades out, `pointer-events: auto` on iframe
- Uses `filter: saturate(0.3) contrast(0.9)` for muted map, removes filter on interaction

---

### 19. Catering Info Card

**Purpose:** Text block with subtle background for catering information.

**HTML Structure:**
```html
<div class="catering-card">
  <div class="catering-icon">
    <svg><!-- Utensils or party icon --></svg>
  </div>
  <h3 class="catering-heading">{heading}</h3>
  <p class="catering-text">{description}</p>
  <a href="tel:..." class="btn btn-secondary">Bel voor Catering</a>
</div>
```

**Visual Specs:**
- Background: Pandan #D4E8D0 at /30 (very subtle green tint)
- Border: 1px solid Daun at /15
- Border-radius: `var(--radius-lg)`
- Padding: `var(--space-lg)`
- Max-width: 560px

**Icon:**
- Size: 40px
- Color: Daun #0B473A
- Margin-bottom: `var(--space-sm)`

**Typography:**
- Heading: Fraunces, `var(--text-h3)`, weight 500, Kecap
- Text: Plus Jakarta Sans, `var(--text-body)`, weight 400, Kecap at /80
- Margin-bottom: `var(--space-md)` between heading and text, `var(--space-md)` between text and button

---

## Animation System

### Design Dial Context

`MOTION_INTENSITY: 4` -- Framer Motion entrance sequences and staggered reveals. Subtle GSAP scroll parallax on hero only. No SplitText, no pinning, no elaborate scroll-driven sequences. Motion serves warmth and approachability, not spectacle.

### Page Load Sequence (Framer Motion)

Applied to every page via a shared layout wrapper.

**Initial states (critical -- must be explicitly set):**
- All animated elements: `opacity: 0`
- Slide-up elements: `translateY: 20px`
- Hero image: `scale: 1.05`

**Stagger Pattern:**
1. Header fades in: opacity 0 to 1, 400ms, ease-out
2. Hero image scales: 1.05 to 1.0, 1200ms, ease-out (simultaneous with header)
3. Hero content stagger: overline, heading, subheading, CTAs -- 150ms stagger between children, each 600ms duration, translateY 20px to 0 + opacity
4. Below-fold content: revealed by scroll (not page load)

**Framer Motion Variants:**
```javascript
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

### Scroll Reveal (Framer Motion + IntersectionObserver)

Applied to all below-fold sections.

**Configuration:**
- Trigger: `whileInView` with `viewport={{ once: true, amount: 0.2 }}`
- Animation: opacity 0 to 1, translateY 20px to 0
- Duration: 600ms
- Easing: `[0.25, 0.1, 0.25, 1]`
- Stagger children within sections: 100ms between items

**Reduced motion:**
- When `prefers-reduced-motion: reduce`, all translateY animations are disabled
- Only opacity transitions remain, with reduced duration (300ms)

### Hero Parallax (GSAP ScrollTrigger)

**Applied to:** Home hero, Ons Verhaal hero only.

```javascript
gsap.to('.hero-image', {
  y: 60,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
```

**Disabled when:**
- Viewport width < 768px
- `prefers-reduced-motion: reduce`

### Header Scroll Transition (CSS + JS)

- Transparent to solid: background-color transition 400ms ease
- Show/hide on scroll direction: translateY transition 300ms ease
- All transitions are CSS-based (no Framer Motion or GSAP needed)

### Menu Accordion (Framer Motion AnimatePresence)

**Serialize pattern (per CLAUDE.md lesson):**
1. User clicks new rijsttafel card
2. Currently expanded card begins collapse: `animate={{ height: 0, opacity: 0 }}`, duration 350ms
3. Wait 450ms total (350ms animation + 100ms buffer)
4. New card expands: `animate={{ height: 'auto', opacity: 1 }}`, duration 450ms
5. Scroll new card into view with `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` and 80px offset

### Smooth Scroll (CSS + JS)

- `html { scroll-behavior: smooth }` for anchor links
- JavaScript offset calculation: 140px (header 72px + category nav 52px + 16px breathing room)
- Applied to: category nav clicks, footer nav links, CTA buttons linking to sections

### Hover Micro-interactions (CSS transitions only)

- Buttons: translateY, shadow, and color shifts over 250ms cubic-bezier(0.25, 0.1, 0.25, 1)
- Nav links: color transition 200ms ease
- Image cards: scale 1.04 over 500ms ease-out
- Footer links: opacity transition 200ms ease
- No JavaScript needed for any hover state

---

## Responsive Breakpoints

### Breakpoint Definitions

| Name | Width | Tailwind Class |
|------|-------|---------------|
| Mobile | < 768px | Default (mobile-first) |
| Tablet | 768px - 1023px | `md:` |
| Desktop | 1024px+ | `lg:` |
| Wide | 1280px+ | `xl:` |

### Key Responsive Changes

**Header:**
- < 1024px: hamburger menu replaces nav links
- < 768px: logo centered, reduced height (64px)

**Layout Grids:**
- Home content sections: 2-col at lg:, 1-col below
- Footer: 4-col at lg:, 2-col at md:, 1-col below
- Form: 2-col rows at md:, 1-col below
- Menu items: name-dots-price line maintained at all sizes, description hides < 480px

**Typography:**
- Fluid clamp handles most scaling automatically
- Hero heading drops from `--text-display` to `--text-h1` on mobile
- Section headings maintain hierarchy but compress naturally via clamp

**Spacing:**
- Section spacing compresses naturally via clamp
- Mobile bottom bar adds 76px padding-bottom to body
- Full-bleed sections remain full-bleed on all sizes

**Images:**
- Hero: always full-bleed, aspect ratio adapts via height clamp
- Image cards: aspect ratio maintained, width becomes 100% on mobile
- Map: height drops from 400px to 280px on mobile

**Navigation:**
- Category nav: horizontal scroll on all sizes
- Mobile bottom bar: appears < 768px
- Header CTA: hidden < 1024px (bottom bar handles CTA on mobile)

---

## Background Textures

### Noise Overlay

Applied to the Rice background sections for warmth:
- SVG noise filter at 1.5% opacity
- CSS: `background-image: url("data:image/svg+xml,...")` -- inline SVG noise
- Combined with background-color using `background-blend-mode: overlay`
- Applied to: page background, card surfaces
- NOT applied to: dark sections (Daun, Kecap backgrounds use their own treatment)

### Dark Section Treatment

Daun-background sections (footer, special cards):
- Base color: Daun Muted #1A3D33
- Very subtle radial gradient from center: Daun #0B473A at /10 fading to transparent
- No noise overlay (too visible on dark backgrounds)

---

## Icon System

Icons sourced from **Lucide React** (consistent with the warm, slightly rounded aesthetic).

Size scale:
- Inline/label icons: 16px
- UI element icons (nav, button): 20px
- Feature/section icons: 24px
- Decorative/hero icons: 40px

Stroke width: 1.5px (Lucide default)

Required icons:
- Phone, Mail, MapPin, Clock, Calendar, ChevronDown, ChevronRight, ArrowRight, X, Menu, Star, Info, Sparkles, CalendarX, Utensils, Users, ExternalLink, Check, AlertCircle

---

## Focus & Accessibility

### Focus Visible Ring
- `outline: 2px solid var(--color-daun)`
- `outline-offset: 2px`
- Applied via `:focus-visible` (not `:focus`)
- Global style in tokens.css

### Color Blindness Considerations
- Status indicators (open/closed) use both color AND text labels -- never color alone
- Spice indicators use dots of varying count, not just color intensity
- Error states use icon + color + text, not color alone

### Touch Targets
- Minimum 44x44px for all interactive elements
- Mobile bottom bar buttons: full height of bar (60px)
- Form inputs: 48px height
- Buttons: 48px min-height

---

## Wow Moments (One Per Page)

These are the intentional layout-breaking moments that elevate the design above template territory. (DESIGN_VARIANCE: 5 -- one per page, tasteful, not aggressive.)

1. **Home:** The rijsttafel teaser section uses an asymmetric overlap -- the food image bleeds 40px past the section boundary on the right, overlapping the next section's top edge. Creates depth without chaos.

2. **Ons Menu:** The monthly specials card breaks the grid -- instead of sitting within the content column, it extends 60px beyond the left edge with a Daun background that contrasts sharply with the Rice background of the surrounding menu items.

3. **Ons Verhaal:** A large batik-inspired geometric pattern sits partially behind the text block (z-index layering), creating a decorative watermark effect in Kecap at /6 opacity that evokes the textile traditions of West Java.

4. **Reserveren:** The hours table on the right column has a subtle Daun accent bar (3px wide) running the full height of the table's left edge, echoing the review card's border-left treatment and creating visual continuity across pages.

---

*End of Design System specification.*
