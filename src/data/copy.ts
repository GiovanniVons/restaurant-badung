export const nav = {
  menu: { nl: "Menu", en: "Menu" },
  story: { nl: "Ons Verhaal", en: "Our Story" },
  reserve: { nl: "Contact", en: "Contact" },
  order: { nl: "Afhalen", en: "Pickup" },
  catering: { nl: "Catering", en: "Catering" },
  logoAlt: {
    nl: "Restaurant Indonesia Bandung, Indonesisch restaurant in Den Bosch",
    en: "Restaurant Indonesia Bandung, Indonesian restaurant in Den Bosch",
  },
  skipToContent: { nl: "Ga naar inhoud", en: "Skip to content" },
} as const;

export const mobileBar = {
  call: { nl: "073-820 09 43 \u00B7 Bellen", en: "073-820 09 43 \u00B7 Call" },
  reserve: { nl: "Contact", en: "Contact" },
} as const;

export const footer = {
  tagline: {
    nl: "Indonesisch restaurant in Den Bosch, sinds 2016.",
    en: "Indonesian restaurant in Den Bosch, since 2016.",
  },
  quickLinksHeading: { nl: "Snel naar", en: "Quick links" },
  contactHeading: { nl: "Contact", en: "Contact" },
  socialHeading: { nl: "Volg ons", en: "Follow us" },
  hoursHeading: { nl: "Openingstijden", en: "Opening hours" },
  hoursCompact: {
    nl: ["Ma, Di, Do, Vr: 16:00\u201321:30", "Za & Zo: 12:00\u201321:30", "Wo: Gesloten"] as string[],
    en: ["Mon, Tue, Thu, Fri: 16:00\u201321:30", "Sat & Sun: 12:00\u201321:30", "Wed: Closed"] as string[],
  },
  quickLinks: {
    nl: [
      { label: "Menu", href: "/menu" },
      { label: "Afhalen", href: "/menu?view=afhalen" },
      { label: "Catering", href: "/catering" },
      { label: "Ons Verhaal", href: "/ons-verhaal" },
      { label: "Contact", href: "/reserveren" },
    ] as { label: string; href: string }[],
    en: [
      { label: "Menu", href: "/menu" },
      { label: "Pickup", href: "/menu?view=afhalen" },
      { label: "Catering", href: "/catering" },
      { label: "Our Story", href: "/ons-verhaal" },
      { label: "Contact", href: "/reserveren" },
    ] as { label: string; href: string }[],
  },
  legal: {
    nl: "\u00A9 2026 Restaurant Indonesia Bandung \u00B7 KvK 66772141 \u00B7 BTW NL856691707B01",
    en: "\u00A9 2026 Restaurant Indonesia Bandung \u00B7 KvK 66772141 \u00B7 BTW NL856691707B01",
  },
} as const;

export const home = {
  hero: {
    headline: { nl: "Indonesisch eten zoals het hoort", en: "Indonesian food the way it should be" },
    sub: { nl: "West-Javaanse keuken \u00B7 Den Bosch", en: "West Javanese cuisine \u00B7 Den Bosch" },
    cta1: { nl: "Reserveer een tafel", en: "Reserve a table" },
    cta2: { nl: "Bekijk het menu", en: "See the menu" },
  },
  ribbon: {
    openDinner: { nl: "Nu geopend \u00B7 Diner tot 21:30", en: "Open now \u00B7 Dinner until 21:30" },
    openLunch: { nl: "Nu geopend \u00B7 Lunch & diner tot 21:30", en: "Open now \u00B7 Lunch & dinner until 21:30" },
    closedWed: { nl: "Vandaag gesloten \u00B7 Weer open donderdag om 16:00", en: "Closed today \u00B7 Open again Thursday at 16:00" },
    opensLater: { nl: "Vanmiddag geopend vanaf 16:00", en: "Open this evening from 16:00" },
  },
  intro: {
    headline: { nl: "Welkom bij Bandung", en: "Welcome to Bandung" },
    body: {
      nl: "In het hart van Den Bosch, op de Hinthamereinde, kookt Yana de gerechten waarmee ze opgroeide in Bandung, West-Java. Steven ontvangt u aan tafel. Samen runnen ze een restaurant dat aanvoelt als een verlengstuk van hun eigen keuken: warm, persoonlijk, zonder haast.",
      en: "In the heart of Den Bosch, on the Hinthamereinde, Yana cooks the dishes she grew up with in Bandung, West Java. Steven welcomes you at the table. Together they run a restaurant that feels like an extension of their own kitchen: warm, personal, without rush.",
    },
  },
  rijsttafelTeaser: {
    overline: { nl: "Samen delen", en: "Shared dining" },
    headline: { nl: "De Rijsttafel", en: "The Rijsttafel" },
    body: {
      nl: "Acht tot achttien gerechten, \u00E9\u00E9n tafel. De rijsttafel is geen menu, het is een manier van eten. Samen kiezen, samen delen, samen genieten. Elke schotel vertelt iets anders: zout, zoet, zuur, pittig, umami. Samen vormen ze de hele Indonesische keuken in \u00E9\u00E9n avond.",
      en: "Eight to eighteen dishes, one table. The rijsttafel is not a menu, it is a way of eating. Choosing together, sharing together, enjoying together. Every dish tells a different story: salty, sweet, sour, spicy, umami. Together they bring the entire Indonesian kitchen to your table in a single evening.",
    },
    cta: { nl: "Ontdek de rijsttafel", en: "Discover the rijsttafel" },
  },
  menuHighlights: {
    headline: { nl: "Uit de keuken van Bandung", en: "From the kitchen of Bandung" },
    cta: { nl: "Bekijk het volledige menu", en: "See the full menu" },
    items: [
      {
        name: "Rendang Sapi",
        desc: {
          nl: "Rundvlees, uren gestoofd in kokos met rode peper, laos, kurkuma en citroengras. Droog, intens, onvergetelijk.",
          en: "Beef, slow-braised for hours in coconut with red chilli, galangal, turmeric and lemongrass. Dry, intense, unforgettable.",
        },
        price: "\u20AC18,50",
        image: "/images/rijsttafel-sate-closeup.jpg",
      },
      {
        name: "Soto Ayam",
        desc: {
          nl: "Heldere kippensoep, geel van de kurkuma, met glasnoedels, taug\u00E9 en knapperige gebakken uitjes.",
          en: "Clear chicken soup, golden with turmeric, with glass noodles, bean sprouts and crispy fried shallots.",
        },
        price: "\u20AC7,50",
        image: "/images/food-platter-overhead.png",
      },
      {
        name: "Gado-gado",
        desc: {
          nl: "Gestoomde groenten en tahu in een dikke, huisgemaakte pindasaus. Met kroepoek.",
          en: "Steamed vegetables and tofu in a thick, house-ground peanut sauce. Served with prawn crackers.",
        },
        price: "\u20AC13,50",
        image: "/images/rijsttafel-branded-tray.jpg",
      },
      {
        name: "Sat\u00E9 Ayam",
        desc: {
          nl: "Kipsaté van de houtskoolgrill, geserveerd met pindasaus, lontong en atjar.",
          en: "Chicken satay from the charcoal grill, served with peanut sauce, lontong and pickled vegetables.",
        },
        price: "\u20AC9,50",
        image: "/images/rijsttafel-serving-hands.jpg",
      },
    ],
  },
  trustStrip: {
    items: [
      { top: { nl: "Sinds 2016", en: "Since 2016" }, bottom: { nl: "in Den Bosch", en: "in Den Bosch" } },
      { top: { nl: "West-Javaans", en: "West Javanese" }, bottom: { nl: "uit Bandung", en: "from Bandung" } },
      { top: { nl: "Familiebedrijf", en: "Family-run" }, bottom: { nl: "Yana & Steven", en: "Yana & Steven" } },
    ],
  },
  socialProof: {
    headline: { nl: "Wat onze gasten zeggen", en: "What our guests say" },
    reviews: [
      {
        text: {
          nl: "Het voelt alsof je bij iemand thuis eet. De rijsttafel was ongelofelijk -- zoveel smaken, allemaal vers. Yana en Steven maken er iets bijzonders van.",
          en: "It feels like eating at someone's home. The rijsttafel was incredible -- so many flavours, all fresh. Yana and Steven make it something special.",
        },
        author: "Mark V.",
        platform: "google" as const,
        rating: 5 as const,
      },
      {
        text: {
          nl: "Kleine zaak, grote smaken. We komen hier elke maand. De rendang is de beste die we buiten Indonesie hebben geproefd.",
          en: "Small restaurant, big flavours. We come here every month. The rendang is the best we've had outside Indonesia.",
        },
        author: "Sandra K.",
        platform: "tripadvisor" as const,
        rating: 5 as const,
      },
      {
        text: {
          nl: "Alles werd vers bereid en met zorg geserveerd. De vegetarische rijsttafel Bogor was een verrassing -- je mist het vlees helemaal niet.",
          en: "Everything was freshly prepared and served with care. The vegetarian rijsttafel Bogor was a revelation -- you don't miss the meat at all.",
        },
        author: "Floor D.",
        platform: "google" as const,
        rating: 5 as const,
      },
      {
        text: {
          nl: "Authentieke Indonesische keuken in een gezellige sfeer. De satay en de sambal zijn huisgemaakt en dat proef je. Aanrader voor iedereen die van Aziatisch eten houdt.",
          en: "Authentic Indonesian cuisine in a cozy atmosphere. The satay and sambal are homemade and you can taste it. A must for anyone who loves Asian food.",
        },
        author: "Thomas B.",
        platform: "tripadvisor" as const,
        rating: 4 as const,
      },
    ],
    aggregates: [
      { platform: "Google", score: "4.5", count: 120, url: "https://g.page/restaurantbandung" },
      { platform: "TripAdvisor", score: "4.5", count: 94, url: "https://www.tripadvisor.com/Restaurant_Review-g188587-d10095498-Reviews-Restaurant_Indonesia_Bandung-s_Hertogenbosch_North_Brabant_Province.html" },
    ],
    cta: { nl: "Alle beoordelingen bekijken", en: "See all reviews" },
  },
  locationCta: {
    heading: { nl: "Kom langs", en: "Come visit" },
    address: "Hinthamereinde 34, 5211 PN Den Bosch",
    cta: { nl: "Reserveer een tafel", en: "Reserve a table" },
  },
} as const;

export const CONTACT = {
  address: "Hinthamereinde 34",
  postcode: "5211 PN Den Bosch",
  phone: "073-820 09 43",
  phoneTel: "+31738200943",
  email: "info@restaurantbandung.nl",
  kvk: "66772141",
  btw: "NL856691707B01",
  tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g188587-d10095498-Reviews-Restaurant_Indonesia_Bandung-s_Hertogenbosch_North_Brabant_Province.html",
  facebook: "https://www.facebook.com/restaurantindonesiabandung/",
  googleMaps: "https://maps.app.goo.gl/YCVxVsmqXJhx7KnJ7",
} as const;
