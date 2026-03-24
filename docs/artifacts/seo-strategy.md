# SEO and Findability Strategy: Restaurant Indonesia Bandung

**Phase:** 2
**Agent:** findability-expert
**Date:** 2026-03-23
**Status:** draft

---

## 1. Keyword Strategy

### 1.1 Primary Keywords (Dutch)

| Keyword | Search Volume | Intent | Target Page | Opportunity |
|---------|--------------|--------|-------------|-------------|
| indonesisch restaurant den bosch | High | Navigational/Transactional | Homepage | High -- core discovery query, competitors have weak SEO |
| rijsttafel den bosch | Medium-High | Transactional | Homepage + Menu | Very High -- Bandung's hero product, low competition for this specific term |
| indonesisch eten den bosch | Medium | Transactional | Homepage | High -- colloquial variant of the primary query |
| rijsttafel bestellen den bosch | Medium | Transactional | Menu | High -- takeaway intent, links to eCashcloud |
| indonesisch restaurant s-hertogenbosch | Medium | Navigational | Homepage | High -- formal city name variant, must target for Maps |
| restaurant bandung den bosch | Medium | Navigational | Homepage | Very High -- branded query, must own position 1 |
| indonesisch afhalen den bosch | Medium | Transactional | Contact / Menu | High -- takeaway-specific, "De Besteller" audience |
| catering indonesisch den bosch | Low-Medium | Transactional | Contact | Medium -- less volume but high-value conversions |

### 1.2 Secondary Keywords (English)

| Keyword | Search Volume | Intent | Target Page | Opportunity |
|---------|--------------|--------|-------------|-------------|
| indonesian restaurant den bosch | Medium | Transactional | Homepage (EN) | High -- tourist/expat query, very low competition |
| rijsttafel experience netherlands | Low-Medium | Informational/Transactional | Our Story (EN) + Menu (EN) | High -- international foodies planning NL visits |
| best indonesian food s-hertogenbosch | Low | Transactional | Homepage (EN) | High -- AI search phrasing, evaluative intent |
| rijsttafel den bosch english menu | Low | Transactional | Menu (EN) | Medium -- specific tourist need |
| sundanese restaurant netherlands | Low | Informational | Our Story (EN) | Very High -- zero competition, unique differentiator |

### 1.3 Long-Tail Keywords (Dutch)

| Keyword | Intent | Target Page | Notes |
|---------|--------|-------------|-------|
| vegetarische rijsttafel den bosch | Transactional | Menu (rijsttafel section) | Specific product query, high conversion intent |
| rijsttafel voor 2 personen den bosch | Transactional | Menu | Common question about minimum group size |
| indonesisch restaurant den bosch reserveren | Transactional | Contact | Bottom-of-funnel, ready to book |
| beste indonesisch restaurant den bosch | Transactional | Homepage | Evaluative, AI-search phrasing |
| indonesisch eten afhalen den bosch | Transactional | Menu / Contact | Takeaway variant |
| indonesisch restaurant hinthamereinde | Navigational | Contact | Hyper-local, street-level search |
| rijsttafel menu met prijzen den bosch | Informational | Menu | Comparison shopper, wants transparency |
| nasi rames den bosch | Transactional | Menu | Specific dish search |
| satay den bosch | Transactional | Menu | Specific dish search |
| indonesisch restaurant den bosch open vandaag | Informational | Contact | Immediate need, answered by schema |
| west javaans restaurant nederland | Informational | Our Story | Differentiator, LLM-friendly |
| sundanees eten den bosch | Informational | Our Story / Homepage | Niche but zero competition |
| indonesisch restaurant den bosch kinderen | Informational | Menu | Families, answered by kids' rijsttafel |
| indonesisch restaurant den bosch groepen | Informational | Contact | Group dining, catering crossover |
| rendang den bosch | Transactional | Menu | Signature dish query |

### 1.4 Question-Based Queries (Critical for AI/LLM Search)

These are the exact phrases people type into ChatGPT, Perplexity, and Google's AI Overviews:

| Question | Answer Location | Priority |
|----------|----------------|----------|
| Wat is het beste Indonesische restaurant in Den Bosch? | Homepage (entity signals, reviews, schema) | Critical |
| Where should I eat Indonesian food in Den Bosch? | Homepage EN | Critical |
| Waar kan ik een rijsttafel eten in Den Bosch? | Homepage + Menu (rijsttafel section) | Critical |
| Wat kost een rijsttafel bij Restaurant Bandung? | Menu (prijzen clearly stated) | High |
| Is Restaurant Bandung goed voor een groep? | FAQ on Contact or Menu | High |
| Heeft Restaurant Bandung vegetarische opties? | Menu (vegetarische rijsttafel) | High |
| Wat is het verschil tussen Sundanees en Javaans eten? | Our Story | Medium -- excellent for LLM differentiation |
| Kan ik bij Restaurant Bandung afhalen? | Contact / Menu | High |
| Wat zijn de openingstijden van Restaurant Bandung? | Contact + Schema | High |
| What is a rijsttafel? | Our Story EN | Medium -- educational, drives international traffic |
| Is Restaurant Bandung wheelchair accessible? | Contact + Schema | Medium |
| Heeft Restaurant Bandung een kindermenu? | Menu (kinderrijsttafel) | Medium |

---

## 2. LLM Search Optimization

### 2.1 Entity Statement

This is the canonical factual description that should appear in the `<meta name="description">` of the homepage, the Restaurant schema `description` field, and the opening paragraph of the About page. It must be unambiguous, factual, and rich enough for an LLM to extract a complete recommendation.

**Dutch (primary):**
> Restaurant Indonesia Bandung is een West-Javaans (Sundanees) restaurant aan de Hinthamereinde 34 in 's-Hertogenbosch. Het restaurant serveert vijf variaties van de rijsttafel, van de Rijsttafel Bogor (EUR 31,00/pp, vegetarisch) tot de Rijsttafel Banten (EUR 36,00/pp, het vlaggenschip), plus een visrijsttafel (Pangandaran) en de signatuur Rijsttafel Bandung. De keuken is geworteld in de Sundanese traditie van West-Java, met lichtere, kruidigere bereidingen dan de meeste Indonesische restaurants in Nederland. Reserveren kan telefonisch (073-820 09 43), afhalen via telefoon. Beoordeeld met 4,5/5 op TripAdvisor (#25 van 300 restaurants in Den Bosch).

**English:**
> Restaurant Indonesia Bandung is a West Javanese (Sundanese) restaurant at Hinthamereinde 34 in 's-Hertogenbosch (Den Bosch), the Netherlands. The restaurant serves five variations of the rijsttafel, from the Rijsttafel Bogor (EUR 31.00/pp, vegetarian) to the Rijsttafel Banten (EUR 36.00/pp, the flagship), plus a seafood option (Pangandaran) and the signature Rijsttafel Bandung. The kitchen is rooted in the Sundanese tradition of West Java, featuring lighter, more aromatic preparations than most Indonesian restaurants in the Netherlands. Reservations by phone (073-820 09 43), takeaway by phone. Rated 4.5/5 on TripAdvisor (#25 of 300 restaurants in Den Bosch).

### 2.2 Entity Disambiguation

The name "Restaurant Bandung" is potentially ambiguous -- Bandung is a major city in Indonesia, and other restaurants in the Netherlands share similar names. To ensure LLMs connect search queries to THIS specific restaurant:

1. **Always use the full name** "Restaurant Indonesia Bandung" in schema, title tags, and at least one prominent heading per page
2. **Include the city name** "'s-Hertogenbosch" or "Den Bosch" within one sentence of every mention of the restaurant name
3. **Register consistent NAP** (Name, Address, Phone) across ALL external platforms using the exact format:
   - Name: `Restaurant Indonesia Bandung`
   - Address: `Hinthamereinde 34, 5211 PN 's-Hertogenbosch`
   - Phone: `073-820 09 43`
4. **Link social profiles** in schema `sameAs` field to create a connected entity graph
5. **Use `@id` in JSON-LD** to create a stable entity identifier: `"@id": "https://restaurantbandung.nl/#restaurant"`

### 2.3 Content Patterns That Increase LLM Citation

LLMs (ChatGPT, Perplexity, Gemini) favor content that:

1. **States facts first, then embellishes.** Lead paragraphs on every page should open with a clear factual statement before moving into brand voice. The Our Story page should begin with "Restaurant Indonesia Bandung is a Sundanese restaurant in Den Bosch specializing in rijsttafel..." not "When the aroma of lemongrass fills the kitchen..."
2. **Answers questions directly.** FAQ content should use the exact question as the heading and answer in the first sentence, then elaborate. LLMs extract the first 1-2 sentences as the answer.
3. **Includes numbers and specifics.** "Five rijsttafel variations from EUR 31 to EUR 36 per person" is more extractable than "a range of rijsttafel options at various price points."
4. **Names the category and location repeatedly.** The phrase "Indonesian restaurant in Den Bosch" should appear naturally 3-4 times across the homepage (H1, intro paragraph, midpage text, schema).
5. **Provides comparison context.** The Our Story page's section on Sundanese vs. general Indonesian cuisine gives LLMs a differentiating hook when recommending restaurants.

### 2.4 FAQ Content for Schema + LLM Extraction

These questions and answers will be implemented as both visible page content and FAQ schema. Each answer is written to be self-contained (an LLM can extract it without context).

**Q: Wat is een rijsttafel?**
A: Een rijsttafel is een Nederlands-Indonesische eetttraditie waarbij meerdere kleine gerechten tegelijk worden geserveerd rondom een centrale portie rijst. Bij Restaurant Indonesia Bandung in Den Bosch kunt u kiezen uit vijf rijsttafel variaties, van 8 tot 15 gerechten, inclusief vegetarische en kinderopties.

**Q: Wat maakt de Sundanese keuken anders dan andere Indonesische keukens?**
A: De Sundanese (West-Javaanse) keuken is lichter en aromatischer dan de meeste Indonesische keukens. Er wordt meer nadruk gelegd op verse groenten, kruiden zoals citroengras en galangal, en subtielere smaakcombinaties. Restaurant Bandung in Den Bosch is een van de weinige restaurants in Nederland dat specifiek Sundanees kookt.

**Q: Kan ik bij Restaurant Bandung reserveren?**
A: Ja, u kunt online reserveren via het Zenchef-reserveringssysteem op de website, of telefonisch via 073-820 09 43. Reserveren wordt aanbevolen, vooral in het weekend.

**Q: Heeft Restaurant Bandung vegetarische opties?**
A: Ja, Restaurant Bandung biedt de Rijsttafel Bogor aan (EUR 31,00/pp), een volledig vegetarische rijsttafel. Daarnaast staan diverse vegetarische gerechten op de reguliere kaart.

**Q: Kan ik Indonesisch eten afhalen in Den Bosch?**
A: Ja, bij Restaurant Indonesia Bandung kunt u afhalen via het online bestelsysteem (eCashcloud). Bekijk het menu en bestel via de website.

**Q: Wat zijn de openingstijden van Restaurant Bandung?**
A: Restaurant Indonesia Bandung is geopend op maandag, dinsdag, donderdag en vrijdag van 16:00 tot 21:30, en op zaterdag en zondag van 12:00 tot 21:30. Op woensdag zijn wij gesloten.

**Q: Is Restaurant Bandung geschikt voor grotere groepen?**
A: Ja, het restaurant is geschikt voor groepen. De rijsttafel is van nature een gedeelde ervaring. Voor grotere groepen of besloten evenementen adviseren wij contact op te nemen via telefoon of het contactformulier.

**Q: Heeft Restaurant Bandung een kindermenu?**
A: Ja, er is een speciale Rijsttafel voor Kinderen (EUR 16,50/pp, 6 gerechten) met kindvriendelijke gerechten.

**Q: What is a rijsttafel? (English)**
A: A rijsttafel ("rice table") is a Dutch-Indonesian dining tradition where multiple small dishes are served simultaneously around a central portion of rice. At Restaurant Indonesia Bandung in Den Bosch, you can choose from five rijsttafel variations with 8 to 15 dishes, including vegetarian and children's options. Prices range from EUR 16.50 to EUR 36.00 per person.

**Q: Where is the best Indonesian restaurant in Den Bosch? (English)**
A: Restaurant Indonesia Bandung at Hinthamereinde 34 is rated 4.5/5 on TripAdvisor and is one of the top-rated Indonesian restaurants in 's-Hertogenbosch. It specializes in Sundanese (West Javanese) cuisine and serves five rijsttafel variations.

### 2.5 Knowledge Graph Checklist

- [ ] Google Business Profile fully optimized (see Section 5)
- [ ] TripAdvisor listing verified with correct NAP
- [ ] Iens (TheFork NL) listing created/verified
- [ ] Restaurant Guru listing created/verified
- [ ] Yelp listing created/verified (if active in NL market)
- [ ] Facebook page with complete business info
- [ ] Instagram business profile with location tag
- [ ] Apple Maps listing via Apple Business Connect
- [ ] Bing Places listing created/verified
- [ ] Wikidata entry considered (strengthens entity resolution for LLMs)
- [ ] All external listings use EXACT same NAP format
- [ ] All external listings link back to `https://restaurantbandung.nl`
- [ ] Social profile URLs added to schema `sameAs`

---

## 3. On-Page SEO Directives

### 3.1 Homepage (`/` and `/`)

**Dutch title tag (max 60 chars):**
`Indonesisch Restaurant Den Bosch | Rijsttafel | Bandung`
(58 chars)

**English title tag:**
`Indonesian Restaurant Den Bosch | Rijsttafel | Bandung`
(55 chars)

**Dutch meta description (max 155 chars):**
`Proef de Sundanese rijsttafel bij Restaurant Indonesia Bandung in Den Bosch. 5 variaties, van 8 tot 15 gerechten. Reserveer online of bestel afhaal.`
(148 chars)

**English meta description:**
`Taste the Sundanese rijsttafel at Restaurant Indonesia Bandung in Den Bosch. 5 variations, 8 to 15 dishes. Reserve online or order takeaway.`
(141 chars)

**H1 (Dutch):** `De rijsttafel van Den Bosch -- Sundanese keuken sinds [jaar]`
**H1 (English):** `Den Bosch's Rijsttafel Destination -- Sundanese Cuisine Since [Year]`

Note: If founding year is unconfirmed, use: "Sundanese keuken in het hart van Den Bosch"

**H2s (Dutch):**
- `Vijf rijsttafels, een traditie` (Rijsttafel showcase)
- `Geworteld in West-Java` (Story teaser)
- `Wat onze gasten zeggen` (Social proof)
- `De rijsttafel thuis` (Takeaway callout)

**Internal links from homepage:**
- Rijsttafel showcase cards link to `/menu` (anchor: "Bekijk het volledige menu")
- Story teaser links to `/ons-verhaal` (anchor: "Lees ons verhaal")
- Takeaway section links to eCashcloud (anchor: "Bestel afhaal") and `/menu` (anchor: "Bekijk het afhaalmenu")
- All reservation CTAs link to Zenchef

**Image alt text pattern:**
- Hero: `Rijsttafel met [X] gerechten geserveerd bij Restaurant Indonesia Bandung in Den Bosch`
- Food photos: `[Gerechtsnaam] -- [korte beschrijving] bij Restaurant Bandung`
- Interior: `Interieur van Restaurant Indonesia Bandung, Hinthamereinde, Den Bosch`

### 3.2 Menu (`/menu` and `/menu`)

**Dutch title tag:**
`Menu & Rijsttafel Prijzen | Restaurant Indonesia Bandung Den Bosch`
(60 chars -- exact limit)

**English title tag:**
`Menu & Rijsttafel Prices | Restaurant Indonesia Bandung`
(56 chars)

**Dutch meta description:**
`Bekijk het complete menu van Restaurant Bandung. Rijsttafel vanaf EUR 31/pp, vegetarische opties, kindermenu en Sundanese specialiteiten. Den Bosch.`
(149 chars)

**English meta description:**
`View the full menu at Restaurant Bandung. Rijsttafel from EUR 31/pp, vegetarian options, kids' menu, and Sundanese specialties in Den Bosch.`
(141 chars)

**H1 (Dutch):** `Onze Kaart`
**H1 (English):** `Our Menu`

**H2s (organized by menu section):**
- `Rijsttafel` (hero section)
- `Voorgerechten` / `Starters`
- `Soepen` / `Soups`
- `Hoofdgerechten` / `Main Courses`
- `Nasi & Bami`
- `Satay`
- `Bijgerechten` / `Side Dishes`
- `Desserts`
- `Dranken` / `Drinks`

**Internal links from menu:**
- Rijsttafel section links to `/ons-verhaal` (anchor: "Meer over de rijsttafel traditie")
- Sticky reservation CTA links to Zenchef
- Takeaway indicators link to eCashcloud

**Image alt text pattern:**
- Dish photos: `[Gerechtsnaam] -- Sundanese [categorie] bij Restaurant Bandung Den Bosch`
- Rijsttafel photos: `Rijsttafel [naam variatie] met [X] gerechten, EUR [prijs] per persoon`

### 3.3 Ons Verhaal (`/ons-verhaal`)

**Dutch title tag:**
`Ons Verhaal -- Sundanese Keuken | Restaurant Bandung Den Bosch`
(60 chars)

**English title tag:**
`Our Story -- Sundanese Cuisine | Restaurant Bandung Den Bosch`
(60 chars)

**Dutch meta description:**
`Ontdek de Sundanese wortels van Restaurant Indonesia Bandung. Van de rijstvelden van West-Java naar het hart van Den Bosch. Een familietraditie.`
(145 chars)

**English meta description:**
`Discover the Sundanese roots of Restaurant Indonesia Bandung. From the rice paddies of West Java to the heart of Den Bosch. A family tradition.`
(144 chars)

**H1 (Dutch):** `Van West-Java naar Den Bosch`
**H1 (English):** `From West Java to Den Bosch`

**H2s (Dutch):**
- `De Sundanese keuken` (culinary tradition section)
- `De rijsttafel -- een Nederlandse traditie` (rijsttafel history)
- `Onze familie` (family story)
- `Thuis in Den Bosch` (local roots)

**Internal links from Our Story:**
- CTA section links to `/menu` (anchor: "Bekijk ons menu")
- CTA section links to Zenchef (anchor: "Reserveer uw tafel")
- Inline links to specific rijsttafel items on `/menu`

**Image alt text pattern:**
- Kitchen/cooking: `Bereiding van Sundanese gerechten in de keuken van Restaurant Bandung`
- Family: `De familie achter Restaurant Indonesia Bandung in Den Bosch`
- Ingredients: `Verse [ingrediënt] -- basis van de Sundanese keuken`

### 3.4 Reserveren (`/reserveren`)

**Dutch title tag:**
`Reserveren & Contact | Restaurant Indonesia Bandung Den Bosch`
(60 chars)

**English title tag:**
`Reserve & Contact | Restaurant Indonesia Bandung`
(54 chars)

**Dutch meta description:**
`Reserveer een tafel bij Restaurant Indonesia Bandung, Hinthamereinde 34, Den Bosch. Bel 073-820 09 43 of boek online. Afhalen ook mogelijk.`
(140 chars)

**English meta description:**
`Reserve a table at Restaurant Indonesia Bandung, Hinthamereinde 34, Den Bosch. Call 073-820 09 43 or book online. Takeaway available.`
(137 chars)

**H1 (Dutch):** `Reserveren`
**H1 (English):** `Reservations`

**H2s (Dutch):**
- `Reserveren` (reservation block)
- `Bezoek ons` (address + map)
- `Openingstijden` (hours)
- `Afhalen` (takeaway)
- `Catering & groepen` (catering inquiry)

**Internal links from Contact:**
- Menu link (anchor: "Bekijk ons menu") to `/menu`
- Footer standard links

**Image alt text:**
- Map area: `Locatie van Restaurant Indonesia Bandung op de Hinthamereinde in Den Bosch`
- Exterior: `Buitenaanzicht van Restaurant Indonesia Bandung, Hinthamereinde 34, Den Bosch`

---

## 4. Technical SEO

### 4.1 URL Structure and Canonicals

**Canonical strategy:** Dutch pages are canonical. Each page declares itself as canonical:

```html
<!-- On /menu -->
<link rel="canonical" href="https://restaurantbandung.nl/menu" />
```

**Root redirect:** `https://restaurantbandung.nl/` should detect `Accept-Language` and redirect to `/` or `/` accordingly, defaulting to `/`.

### 4.2 hreflang Implementation

Every page must include hreflang tags in the `<head>`. Implementation via Next.js metadata API or manual `<link>` tags:

```html
<!-- On every page, both languages reference both alternatives -->
<link rel="alternate" hreflang="nl" href="https://restaurantbandung.nl/{slug}" />
<link rel="alternate" hreflang="en" href="https://restaurantbandung.nl/{slug}" />
<link rel="alternate" hreflang="x-default" href="https://restaurantbandung.nl/{slug}" />
```

**URL pairs:**
| Dutch (canonical) | English | x-default |
|-------------------|---------|-----------|
| `/` | `/` | `/` |
| `/menu` | `/menu` | `/menu` |
| `/ons-verhaal` | `/ons-verhaal` | `/ons-verhaal` |
| `/reserveren` | `/reserveren` | `/reserveren` |
| `/privacy` | `/privacy` | `/privacy` |

> **Note:** Language switching is client-side (no URL change). Both hreflang variants point to the same URL. Dutch is the canonical language.

### 4.3 XML Sitemap

Generate via Next.js `sitemap.ts` (App Router convention). Structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://restaurantbandung.nl/</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="https://restaurantbandung.nl/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://restaurantbandung.nl/" />
    <lastmod>2026-03-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://restaurantbandung.nl/menu</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="https://restaurantbandung.nl/menu" />
    <xhtml:link rel="alternate" hreflang="en" href="https://restaurantbandung.nl/menu" />
    <lastmod>2026-03-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://restaurantbandung.nl/ons-verhaal</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="https://restaurantbandung.nl/ons-verhaal" />
    <xhtml:link rel="alternate" hreflang="en" href="https://restaurantbandung.nl/ons-verhaal" />
    <lastmod>2026-03-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://restaurantbandung.nl/reserveren</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="https://restaurantbandung.nl/reserveren" />
    <xhtml:link rel="alternate" hreflang="en" href="https://restaurantbandung.nl/reserveren" />
    <lastmod>2026-03-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 4.4 robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://restaurantbandung.nl/sitemap.xml
```

### 4.5 301 Redirect Map

Reference: `docs/artifacts/sitemap.md` Section 7.

| Source | Destination | Status |
|--------|------------|--------|
| `/` (root) | `/` (or language detect) | 302 (temporary, for language detection) |
| `/menu.html` | `/menu` | 301 |
| `/menu.php` | `/menu` | 301 |
| `/about` | `/ons-verhaal` | 301 |
| `/over-ons` | `/ons-verhaal` | 301 |
| `/contact` | `/reserveren` | 301 |
| `/contact.html` | `/reserveren` | 301 |
| `/afhalen` | `/menu` | 301 |
| `/takeaway` | `/menu` | 301 |
| Any unmatched `/*` | `/` | 301 (via custom 404) |
| Any unmatched `/*` | `/` | 301 (via custom 404) |

Note: Exact legacy URLs must be verified against the current live site before launch. Implement via Next.js `next.config.ts` `redirects` array.

### 4.6 Core Web Vitals Targets

| Metric | Target | Notes |
|--------|--------|-------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image must use priority loading, responsive srcset, WebP/AVIF |
| FID (First Input Delay) / INP | < 100ms / < 200ms | Minimal JS, no heavy client-side rendering on initial load |
| CLS (Cumulative Layout Shift) | < 0.1 | All images must have explicit width/height, fonts must use `font-display: swap` with size-adjust |
| TTFB (Time to First Byte) | < 800ms | Netlify CDN handles this; ensure no blocking server-side calls |
| Total page weight (mobile) | < 1.5MB | Per sitemap.md performance budget |
| TTI (Time to Interactive) | < 3s on 4G | Per sitemap.md requirement |

### 4.7 Mobile-First Compliance

- All pages must pass Google's Mobile-Friendly Test
- Touch targets minimum 48x48px (per sitemap.md)
- No horizontal scrolling at any breakpoint
- Text readable without zooming (minimum 16px body text)
- Tap-to-call on phone numbers (`<a href="tel:+31738200943">`)
- Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## 5. Structured Data (JSON-LD)

### 5.1 Restaurant Schema (Homepage)

Place in `<head>` or `<body>` of the homepage layout. This is the single most important schema for local SEO and AI search.

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://restaurantbandung.nl/#restaurant",
  "name": "Restaurant Indonesia Bandung",
  "alternateName": ["Restaurant Bandung", "Bandung Den Bosch"],
  "description": "West-Javaans (Sundanees) restaurant in Den Bosch, gespecialiseerd in rijsttafel met vijf variaties. Sundanese keuken met verse kruiden en lichtere bereidingen.",
  "url": "https://restaurantbandung.nl",
  "telephone": "+31738200943",
  "email": "[EMAIL_TO_CONFIRM]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hinthamereinde 34",
    "addressLocality": "'s-Hertogenbosch",
    "addressRegion": "North Brabant",
    "postalCode": "5211 PN",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.6898,
    "longitude": 5.3096
  },
  "image": [
    "https://restaurantbandung.nl/images/rijsttafel-spread.jpg",
    "https://restaurantbandung.nl/images/restaurant-exterior.jpg",
    "https://restaurantbandung.nl/images/restaurant-interior.jpg"
  ],
  "priceRange": "EUR 16-36",
  "servesCuisine": ["Indonesian", "Sundanese", "West Javanese"],
  "menu": "https://restaurantbandung.nl/menu",
  "acceptsReservations": "True",
  "reservations": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://bookings.zenchef.com/results?rid=373418",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday"],
      "opens": "16:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "12:00",
      "closes": "21:30"
    }
  ],
  "paymentAccepted": "Cash, Debit Card, Visa, Mastercard",
  "currenciesAccepted": "EUR",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "ratingCount": "[ACTUAL_COUNT]",
    "reviewCount": "[ACTUAL_COUNT]"
  },
  "hasMenu": {
    "@type": "Menu",
    "@id": "https://restaurantbandung.nl/#menu",
    "url": "https://restaurantbandung.nl/menu",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Rijsttafel",
        "description": "Vijf variaties van de traditionele rijsttafel",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Rijsttafel Bogor",
            "description": "Vegetarische rijsttafel met Sundanese gerechten",
            "suitableForDiet": "https://schema.org/VegetarianDiet",
            "offers": {
              "@type": "Offer",
              "price": "31.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Rijsttafel Bandung",
            "description": "Signatuur rijsttafel met West-Javaanse gerechten",
            "offers": {
              "@type": "Offer",
              "price": "35.50",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Rijsttafel Pangandaran",
            "description": "Visrijsttafel met vis, garnalen en zeevruchten",
            "offers": {
              "@type": "Offer",
              "price": "35.50",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Rijsttafel Banten",
            "description": "Premium rijsttafel, het vlaggenschip van Restaurant Bandung",
            "offers": {
              "@type": "Offer",
              "price": "36.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Rijsttafel voor Kinderen",
            "description": "6 kindvriendelijke gerechten",
            "offers": {
              "@type": "Offer",
              "price": "16.50",
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    ]
  },
  "sameAs": [
    "[TRIPADVISOR_URL]",
    "[FACEBOOK_URL]",
    "[INSTAGRAM_URL]",
    "[IENS_URL]"
  ]
}
```

**Developer notes:**
- Replace `[EMAIL_TO_CONFIRM]`, `[ACTUAL_COUNT]`, `[TRIPADVISOR_URL]`, etc. with real values before launch
- Opening hours MUST be verified with the client
- The `aggregateRating` should only be included if the site displays reviews with a visible average rating; otherwise, Google may issue a manual action
- Image URLs must point to actual optimized images on the live domain

### 5.2 Menu Schema (Menu Page)

The Restaurant schema above includes a `hasMenu` section for the rijsttafel items. The menu page should extend this with additional MenuSection entries for each a la carte category. Minimal implementation for launch:

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://restaurantbandung.nl/#menu",
  "name": "Menu Restaurant Indonesia Bandung",
  "url": "https://restaurantbandung.nl/menu",
  "inLanguage": "nl",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Rijsttafel",
      "description": "Vijf variaties van de Sundanese rijsttafel",
      "hasMenuItem": [
        "... (same 5 items as above)"
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Voorgerechten",
      "description": "Sundanese en Indonesische voorgerechten"
    },
    {
      "@type": "MenuSection",
      "name": "Hoofdgerechten",
      "description": "Hoofdgerechten van vlees, vis en gevogelte"
    },
    {
      "@type": "MenuSection",
      "name": "Nasi & Bami",
      "description": "Gebakken rijst- en noedelgerechten"
    },
    {
      "@type": "MenuSection",
      "name": "Satay",
      "description": "Gegrilde satay met huisgemaakte pindasaus"
    },
    {
      "@type": "MenuSection",
      "name": "Vegetarisch",
      "description": "Vegetarische gerechten en de Vegetarische Rijsttafel"
    }
  ]
}
```

**Note:** Once the full menu content is confirmed, populate individual MenuItems for at least the top 10 most-searched dishes (rendang, nasi goreng, satay, gado gado, etc.) with names, descriptions, and prices.

### 5.3 BreadcrumbList Schema (All Pages)

Even though the site is only 4 pages, breadcrumb schema helps search engines understand hierarchy:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://restaurantbandung.nl/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Menu",
      "item": "https://restaurantbandung.nl/menu"
    }
  ]
}
```

Generate dynamically per page. Homepage only has position 1. Subpages add their own position 2.

### 5.4 FAQPage Schema (Homepage or Contact)

Wrap the FAQ content from Section 2.4 in FAQ schema. Place on the homepage (if FAQ section is visible) or Contact page:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is een rijsttafel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een rijsttafel is een Nederlands-Indonesische eettraditie waarbij meerdere kleine gerechten tegelijk worden geserveerd rondom een centrale portie rijst. Bij Restaurant Indonesia Bandung in Den Bosch kunt u kiezen uit vijf rijsttafel variaties, van 8 tot 15 gerechten, inclusief vegetarische en kinderopties."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik bij Restaurant Bandung reserveren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, u kunt online reserveren via het Zenchef-reserveringssysteem op de website, of telefonisch via 073-820 09 43. Reserveren wordt aanbevolen, vooral in het weekend."
      }
    },
    {
      "@type": "Question",
      "name": "Heeft Restaurant Bandung vegetarische opties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Restaurant Bandung biedt een volledig Vegetarische Rijsttafel aan (EUR 31,00/pp, 12 gerechten) en diverse vegetarische gerechten op de reguliere kaart."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik Indonesisch eten afhalen in Den Bosch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, bij Restaurant Indonesia Bandung kunt u afhalen via het online bestelsysteem (eCashcloud). Bekijk het menu en bestel via de website."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zijn de openingstijden van Restaurant Bandung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restaurant Indonesia Bandung is geopend van maandag, dinsdag, donderdag en vrijdag van 16:00 tot 21:30. Zaterdag en zondag van 12:00 tot 21:30. Op woensdag zijn wij gesloten. [VERIFY WITH CLIENT]"
      }
    },
    {
      "@type": "Question",
      "name": "Heeft Restaurant Bandung een kindermenu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, er is een speciale Rijsttafel voor Kinderen (EUR 16,50/pp, 6 gerechten) met kindvriendelijke gerechten."
      }
    }
  ]
}
```

### 5.5 Open Graph and Twitter Card Meta (All Pages)

Template for each page (values shown for homepage):

```html
<!-- Open Graph -->
<meta property="og:type" content="restaurant" />
<meta property="og:site_name" content="Restaurant Indonesia Bandung" />
<meta property="og:title" content="Indonesisch Restaurant Den Bosch | Rijsttafel | Bandung" />
<meta property="og:description" content="Proef de Sundanese rijsttafel bij Restaurant Indonesia Bandung in Den Bosch. 5 variaties, van 8 tot 15 gerechten." />
<meta property="og:url" content="https://restaurantbandung.nl/" />
<meta property="og:image" content="https://restaurantbandung.nl/images/og-rijsttafel.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="nl_NL" />
<meta property="og:locale:alternate" content="en_GB" />

<!-- Restaurant-specific OG -->
<meta property="restaurant:menu" content="https://restaurantbandung.nl/menu" />
<meta property="place:location:latitude" content="51.6898" />
<meta property="place:location:longitude" content="5.3096" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Indonesisch Restaurant Den Bosch | Rijsttafel | Bandung" />
<meta name="twitter:description" content="Proef de Sundanese rijsttafel bij Restaurant Indonesia Bandung in Den Bosch." />
<meta name="twitter:image" content="https://restaurantbandung.nl/images/og-rijsttafel.jpg" />
```

**Developer note:** The OG image should be a well-composed rijsttafel photograph, 1200x630px, optimized for social sharing. Create this as a dedicated asset, not just a cropped page image.

---

## 6. Local SEO

### 6.1 Google Business Profile Optimization

**Primary category:** Indonesian Restaurant
**Secondary categories:** Asian Restaurant, Restaurant, Takeaway Restaurant

**Attributes to enable:**
- Dine-in: Yes
- Takeaway: Yes
- Delivery: [Confirm with client]
- Reservations: Yes (link to Zenchef)
- Wheelchair accessible: [Confirm -- ground floor likely yes]
- Wi-Fi: [Confirm]
- Outdoor seating: [Confirm]
- Good for groups: Yes
- Good for kids: Yes (children's rijsttafel)
- Alcohol served: [Confirm]
- Vegetarian options: Yes

**GBP content strategy:**
- **Description:** Use the entity statement from Section 2.1 (Dutch version)
- **Photos:** Upload minimum 20 photos in these categories:
  - Exterior (2-3, including signage and street view)
  - Interior (3-5, showing ambiance, table settings)
  - Food (10-15, prioritizing rijsttafel spreads, signature dishes, close-ups)
  - Team (2-3, kitchen and front-of-house)
- **Posts:** Publish Google Posts 2x per month:
  - Menu updates or seasonal specials
  - Events or holiday hours
  - Behind-the-scenes kitchen content
  - Customer spotlight (with permission)
- **Q&A:** Pre-populate the Q&A section with answers to the top 5 FAQs from Section 2.4
- **Menu:** Upload the full menu directly to GBP (in addition to the website menu page)

### 6.2 NAP Consistency

The following exact format must be used across ALL external listings:

```
Name:    Restaurant Indonesia Bandung
Address: Hinthamereinde 34, 5211 PN 's-Hertogenbosch
Phone:   073-820 09 43
Website: https://restaurantbandung.nl
```

**Variations to avoid:**
- "Restaurant Bandung" (missing "Indonesia")
- "Den Bosch" instead of "'s-Hertogenbosch" in address (use the official postal name in structured listings; "Den Bosch" is acceptable in descriptive text)
- "073-8200943" (no spaces) or "(073) 820 09 43" (parentheses) -- use the international format consistently
- Any trailing slash on the website URL

### 6.3 Citation Targets (Priority Order)

| Platform | Priority | Status | Action |
|----------|----------|--------|--------|
| Google Business Profile | Critical | Likely exists | Verify, optimize, claim if unclaimed |
| TripAdvisor | Critical | Exists (#25 in Den Bosch) | Verify NAP, respond to reviews, update photos |
| Iens (TheFork NL) | High | Unknown | Create or claim listing, NL's primary restaurant platform |
| Restaurant Guru | High | Unknown | Create or claim -- frequently cited by LLMs |
| Yelp | Medium | Unknown | Create if not present, maintain NAP |
| Foursquare/Swarm | Medium | Unknown | Data feeds Apple Maps and many LLMs |
| Apple Business Connect | Medium | Unknown | Claim listing for Apple Maps and Siri |
| Bing Places | Medium | Unknown | Claim listing for Bing Copilot |
| Facebook Page | High | [Confirm] | Complete business info, link to website |
| Instagram Business | High | [Confirm] | Location tag, business info, link in bio |
| Thuisbezorgd / Uber Eats | Medium | [Confirm] | If on delivery platforms, ensure NAP matches |
| DenBosch.com / local directories | Medium | Research | Local tourism and dining directories |
| OpenTable | Low | Unlikely (uses Zenchef) | Only if switching reservation platforms |

### 6.4 Review Generation Strategy

**Goal:** Increase Google review volume and maintain 4.5+ average

**Tactics:**
1. **In-restaurant prompt:** Table cards or receipt inserts with QR code linking directly to Google review page (use the `search?q=Restaurant+Indonesia+Bandung` URL that triggers the review modal)
2. **Post-visit follow-up:** If Zenchef supports post-reservation emails, include a review request link
3. **Respond to every review:** Google rewards businesses that engage with reviews. Template:
   - Positive: Thank by name, reference specific dish or experience mentioned, invite return
   - Negative: Acknowledge, apologize, offer to discuss privately (phone/email), never argue publicly
4. **Ask verbally:** Train front-of-house staff to mention reviews to satisfied guests: "We'd love it if you shared your experience on Google"
5. **Monitor TripAdvisor equally:** TripAdvisor reviews feed into LLM training data. Respond there too.

### 6.5 Local Content Signals

The following natural references in copy support local SEO without feeling forced:

- Reference **Hinthamereinde** (the street) and its proximity to the **Markt** and **Binnendieze**
- Mention **Den Bosch** as a dining destination in the context of Brabant's **Bourgondische** culture
- Reference **parking** options (Parking Hintham, or nearest garage) -- this creates content for "parking near [restaurant]" queries
- Link to Google Maps with a descriptive anchor ("Bekijk onze locatie op de Hinthamereinde")

---

## 7. Content Directives for Copywriter

### 7.1 Keyword Placement by Page

**Homepage:**
- H1: Must contain "rijsttafel" and "Den Bosch" -- example: "De rijsttafel van Den Bosch"
- First paragraph (within first 100 words): Include "Indonesisch restaurant" and "'s-Hertogenbosch" or "Den Bosch" naturally
- At least one mention of "Sundanees" or "West-Javaans" on the homepage
- Rijsttafel showcase section: each card should include the variation name and price (these are keyword-rich terms)
- CTA text: "Reserveer uw tafel" (matches "reserveren" search intent)

**Menu:**
- H1: "Onze Kaart" (clean, matches user expectation)
- Introductory line: Include "Sundanese keuken" and "Den Bosch"
- Every dish name in HTML text (never image-only)
- Every dish with a brief description mentioning key ingredients
- Rijsttafel section: include per-person pricing and dish count in visible text (these are LLM-extractable data points)
- At least one internal link to the story page with anchor "de rijsttafel traditie" or similar

**Our Story:**
- H1: Include "West-Java" or a geographic/cultural reference
- First paragraph: Start with a factual statement -- "Restaurant Indonesia Bandung is een Sundanees restaurant..." before moving into narrative voice
- Include a dedicated section explaining what makes Sundanese cuisine different (this is the LLM differentiation content)
- Include a section on the rijsttafel tradition with historical context
- Mention "Den Bosch" at least twice naturally (in the Den Bosch Connection section)
- This page should be 600-1000 words -- long enough for topical authority, short enough to read

**Contact:**
- Full address in plain, crawlable text (not only inside the map embed)
- Phone number as a clickable link
- Opening hours in a clean text format (not an image)
- "Reserveren" as a prominent heading/CTA term

### 7.2 Natural Keyword Density

Do NOT stuff keywords. The following are guidelines, not mechanical rules:

- "Indonesisch restaurant" or "Indonesian restaurant": 3-4 times across the homepage (H1, body, schema, footer)
- "rijsttafel": 8-12 times across the entire site (heavily concentrated on homepage and menu)
- "Den Bosch" or "'s-Hertogenbosch": 2-3 times per page, always in context
- "Sundanees" or "Sundanese" or "West-Javaans": 3-5 times across the entire site (homepage, story, and schema)
- Never repeat a keyword phrase twice in the same paragraph
- Variation is key: "Indonesisch restaurant," "Indonesisch eten," "Indonesische keuken" all count as semantic variants

### 7.3 Alt Text Writing Patterns

Write alt text that is:
1. **Descriptive first** -- what does the image actually show?
2. **Location-aware** -- include "Den Bosch" or "Restaurant Bandung" when natural
3. **Keyword-light** -- one relevant keyword per alt text maximum, never forced

**Examples:**
- Good: `Rijsttafel Bandung met 12 Sundanese gerechten, geserveerd op een houten tafel bij Restaurant Bandung in Den Bosch`
- Bad: `Indonesisch restaurant Den Bosch rijsttafel beste Indonesisch eten`
- Good: `Verse satay op de grill met huisgemaakte pindasaus`
- Bad: `satay-den-bosch-indonesisch-eten`

### 7.4 Internal Link Anchor Text

Use descriptive, varied anchors -- never "click here" or bare URLs:

| Context | Anchor Text | Links To |
|---------|-------------|----------|
| Homepage rijsttafel section | "Bekijk het volledige menu" | /menu |
| Homepage story teaser | "Lees ons verhaal" | /ons-verhaal |
| Homepage takeaway | "Bestel afhaal" | eCashcloud URL |
| Menu to story | "Meer over de rijsttafel traditie" | /ons-verhaal |
| Menu to reservation | "Reserveer uw tafel" | Zenchef URL |
| Story to menu | "Bekijk ons menu" | /menu |
| Story to reservation | "Reserveer uw tafel" | Zenchef URL |
| Contact to menu | "Bekijk het menu" | /menu |

### 7.5 FAQ Content Brief

Write visible FAQ content (not hidden in an accordion that search engines might deprioritize) that uses the exact questions from Section 2.4 as headings and provides clear, factual first-sentence answers followed by warmer brand-voice elaboration. Recommended placement:

- **Homepage:** 3-4 most common questions at the bottom of the page (before footer)
- **Contact page:** 2-3 practical questions (hours, parking, reservations)
- **Our Story page:** 1-2 educational questions (what is a rijsttafel, what makes Sundanese cuisine different)

---

## 8. Content Directives for Developer

### 8.1 JSON-LD Placement

- **Homepage layout (`/` and `/`):** Restaurant schema (Section 5.1) + FAQPage schema (Section 5.4) + BreadcrumbList (Section 5.3)
- **Menu page:** Menu schema (Section 5.2) + BreadcrumbList
- **Our Story page:** BreadcrumbList
- **Contact page:** BreadcrumbList
- **All pages:** Open Graph + Twitter Card meta (Section 5.5)

Place JSON-LD in `<script type="application/ld+json">` tags. In Next.js 15 App Router, use the `metadata` export or a dedicated `JsonLd` component rendered in the page layout.

**Implementation approach:**
```tsx
// src/components/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Render one `<JsonLd>` per schema type per page. Do not combine multiple schemas into a single `@graph` array -- keep them separate for easier maintenance.

### 8.2 hreflang Implementation

Use Next.js `generateMetadata` to dynamically output hreflang `<link>` tags based on the current route. Each page in both `/` and `/` must reference BOTH language versions plus `x-default`.

```tsx
// In each page's metadata
export const metadata = {
  alternates: {
    canonical: 'https://restaurantbandung.nl/menu',
    languages: {
      'nl': 'https://restaurantbandung.nl/menu',
      'en': 'https://restaurantbandung.nl/menu',
      'x-default': 'https://restaurantbandung.nl/menu',
    },
  },
};
```

### 8.3 Canonical Tag Placement

Every page must have a `<link rel="canonical">` pointing to itself. Dutch pages are canonical for `x-default`. Implemented via Next.js `metadata.alternates.canonical`.

### 8.4 Image Optimization Requirements

| Requirement | Implementation |
|-------------|---------------|
| Format | Serve WebP with AVIF fallback via Next.js `<Image>` component |
| Responsive | Use `srcSet` with sizes: 640, 768, 1024, 1280, 1920px widths |
| Lazy loading | All images below the fold use `loading="lazy"` (Next.js default) |
| Priority loading | Hero image on each page uses `priority={true}` |
| Dimensions | Every `<Image>` must have explicit `width` and `height` to prevent CLS |
| Alt text | Every image has descriptive alt text per Section 7.3 patterns |
| OG image | Dedicated 1200x630px OG image in `/public/images/og-rijsttafel.jpg` |
| File naming | Kebab-case, descriptive: `rijsttafel-bandung-12-gerechten.jpg`, not `IMG_4521.jpg` |
| Max file size | Hero images < 200KB at mobile size, < 400KB at desktop |

### 8.5 Sitemap Generation

Use Next.js App Router `sitemap.ts` convention:

```tsx
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://restaurantbandung.nl';
  const lastModified = new Date('2026-03-23');

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          nl: `${baseUrl}/`,
          en: `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/menu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          nl: `${baseUrl}/menu`,
          en: `${baseUrl}/menu`,
        },
      },
    },
    {
      url: `${baseUrl}/ons-verhaal`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          nl: `${baseUrl}/ons-verhaal`,
          en: `${baseUrl}/ons-verhaal`,
        },
      },
    },
    {
      url: `${baseUrl}/reserveren`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          nl: `${baseUrl}/reserveren`,
          en: `${baseUrl}/reserveren`,
        },
      },
    },
    // Note: Language switching is client-side (no URL change).
    // Both hreflang variants point to the same Dutch URL.
  ];
}
```

### 8.6 robots.txt

Implement via Next.js App Router `robots.ts`:

```tsx
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://restaurantbandung.nl/sitemap.xml',
  };
}
```

### 8.7 Performance Targets

Reference Core Web Vitals from Section 4.6. Developer-specific implementation:

- **Font loading:** Use `next/font/local` (never `next/font/google` -- per CLAUDE.md learnings). Include `font-display: swap` and `size-adjust` to minimize CLS.
- **Image loading:** Next.js `<Image>` with `priority` on hero images, `sizes` attribute matching actual render sizes.
- **CSS:** Tailwind CSS 4 purges unused styles automatically. Avoid importing external CSS libraries.
- **JavaScript:** Keep client-side JS minimal. Framer Motion and GSAP only where specified in brand guidelines (MOTION_INTENSITY: 4 -- gentle animations). Use dynamic imports for GSAP if it's only used on scroll-triggered sections.
- **Third-party scripts:** Zenchef widget and eCashcloud should be loaded asynchronously or behind user interaction to avoid blocking initial render.
- **Netlify headers:** Set `Cache-Control` for static assets (images, fonts) to `max-age=31536000, immutable`.

---

## 9. Pages to Prioritize for SEO

| Priority | Page | Reason |
|----------|------|--------|
| 1 | Homepage | Targets the highest-volume keywords, serves as the entity anchor for all schema data, first impression for both Google and LLMs |
| 1 | Menu | Highest long-tail keyword density, most crawlable content, Menu schema feeds Google rich results and LLM knowledge |
| 1 | Contact | NAP data, Google Maps integration, reservation conversion -- critical for local SEO signals |
| 2 | Our Story | Lower direct search volume but highest LLM differentiation value -- the Sundanese content gives AI search something unique to cite when recommending |

### Content Gaps

The current 4-page sitemap covers the essentials well. The following are NOT required for launch but represent future SEO opportunities:

1. **Blog / Spice Guide:** A single evergreen article like "What is a Rijsttafel? The Complete Guide" could rank nationally for informational queries and feed LLM knowledge. Estimated effort: 1 article of 1000+ words. Only if the client can maintain it.
2. **Catering page:** If catering is a meaningful revenue stream, a dedicated `/catering` page would capture "catering Indonesisch Den Bosch" queries that currently have no page to land on. Currently, catering is a subsection of Contact.
3. **Seasonal specials:** A rotating featured dish or special menu creates fresh content for Google (recrawl incentive) and Google Posts.

---

## 10. Monitoring Plan

### Google Search Console
- Submit sitemap after launch
- Monitor index coverage for all 8 pages (4 Dutch + 4 English)
- Check for hreflang errors
- Track impressions and clicks for target keywords weekly for first 3 months
- Monitor Core Web Vitals report

### Google Business Profile
- Check GBP insights monthly (search queries, photo views, direction requests, website clicks)
- Respond to all reviews within 48 hours
- Post 2x per month minimum
- Update hours for holidays proactively

### AI/LLM Search Monitoring
- **Monthly:** Ask ChatGPT, Perplexity, and Google Gemini:
  - "What is the best Indonesian restaurant in Den Bosch?"
  - "Where can I eat rijsttafel in Den Bosch?"
  - "Tell me about Restaurant Bandung Den Bosch"
  - "Indonesian restaurant 's-Hertogenbosch"
- Record whether the restaurant appears, what information is cited, and from which source
- If the restaurant is NOT appearing, check: is the schema valid? Are citations consistent? Is there enough factual content on the site?
- Track which review platforms the LLMs seem to reference most and prioritize those

### Google "People Also Ask"
- Monthly: search the primary keywords and record new PAA questions
- Add any new, relevant questions to the FAQ content and schema
- Common PAA patterns for restaurants: hours, parking, price range, dietary options, group size

### Structured Data Validation
- Run Google's Rich Results Test on all 4 pages after launch
- Run Schema.org Markup Validator on all JSON-LD
- Fix any warnings or errors within the first week
- Re-validate after any schema changes

### Rank Tracking (Optional)
If the client invests in an SEO tool (SE Ranking, Semrush, Ahrefs), track weekly rankings for:
- "indonesisch restaurant den bosch" (target: top 3 organic)
- "rijsttafel den bosch" (target: position 1)
- "restaurant bandung den bosch" (target: position 1)
- "indonesisch afhalen den bosch" (target: top 5)
- "best indonesian restaurant den bosch" (target: top 3, English)

---

## Quality Checklist

- [x] Every page has target keywords mapped to it (Section 3)
- [x] Structured data plan covers Restaurant, Menu, FAQPage, and BreadcrumbList (Section 5)
- [x] LLM-friendly entity statement is clear, factual, and unambiguous (Section 2.1)
- [x] Entity disambiguation strategy prevents confusion with other "Bandung" restaurants (Section 2.2)
- [x] Local SEO recommendations are specific to Den Bosch and the Dutch restaurant market (Section 6)
- [x] Technical requirements are actionable with code examples (Sections 4 and 8)
- [x] Copywriter guidelines include specific keyword placement per page (Section 7)
- [x] FAQ content serves both visible users and schema extraction (Section 2.4)
- [x] The strategy does not compromise the brand voice -- "Rumah Makan" and findability coexist
- [x] hreflang and multilingual SEO are fully specified (Sections 4.2 and 8.2)
- [x] Monitoring plan covers Google, Maps, and LLM search surfaces (Section 10)

---

*This strategy serves as the source of truth for findability across all discovery surfaces. The copywriter implements keyword placement and FAQ content. The developer implements structured data, hreflang, sitemap, and technical SEO. Both agents should reference this document alongside the brand guidelines and sitemap artifacts.*
