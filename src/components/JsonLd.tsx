export function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://restaurantbandung.nl/#restaurant",
    name: "Restaurant Indonesia Bandung",
    alternateName: "Indonesisch Restaurant Bandung Den Bosch",
    description:
      "Authentiek West-Javaans familierestaurant in Den Bosch. Vijf rijsttafelvariaties, van de vegetarische Bogor tot het vlaggenschip Banten, bereid met familierecepten uit Bandung.",
    url: "https://restaurantbandung.nl",
    telephone: "+31738200943",
    email: "info@restaurantbandung.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hinthamereinde 34",
      addressLocality: "'s-Hertogenbosch",
      addressRegion: "North Brabant",
      postalCode: "5211 PN",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.6894,
      longitude: 5.3063,
    },
    image: "https://restaurantbandung.nl/images/rijsttafel-overhead.jpg",
    priceRange: "\u20AC\u20AC",
    servesCuisine: ["Indonesian", "West Javanese", "Sundanese"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "21:30",
      },
    ],
    paymentAccepted: "Cash, Debit Card, Visa, Mastercard",
    currenciesAccepted: "EUR",
    hasMenu: {
      "@type": "Menu",
      "@id": "https://restaurantbandung.nl/#menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Rijsttafel",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Rijsttafel Bogor", description: "Vegetarische rijsttafel", offers: { "@type": "Offer", price: "31.00", priceCurrency: "EUR" }, suitableForDiet: "https://schema.org/VegetarianDiet" },
            { "@type": "MenuItem", name: "Rijsttafel Bandung", description: "Signature rijsttafel met rendang en sat\u00E9", offers: { "@type": "Offer", price: "35.50", priceCurrency: "EUR" } },
            { "@type": "MenuItem", name: "Rijsttafel Pangandaran", description: "Vis- en zeevruchtrijsttafel", offers: { "@type": "Offer", price: "35.50", priceCurrency: "EUR" } },
            { "@type": "MenuItem", name: "Rijsttafel Banten", description: "Meest uitgebreide rijsttafel", offers: { "@type": "Offer", price: "36.00", priceCurrency: "EUR" } },
          ],
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/restaurantindonesiabandung/",
      "https://www.tripadvisor.com/Restaurant_Review-g188587-d10095498-Reviews-Restaurant_Indonesia_Bandung-s_Hertogenbosch_North_Brabant_Province.html",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
