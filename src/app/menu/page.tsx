import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuContent } from "./MenuContent";

export const metadata: Metadata = {
  title: "Menukaart",
  description:
    "Ontdek onze authentieke Indonesische rijsttafels en gerechten. Van de vegetarische Rijsttafel Bogor tot ons vlaggenschip Rijsttafel Banten.",
  alternates: { canonical: "https://restaurantbandung.nl/menu" },
  openGraph: {
    title: "Menukaart | Restaurant Indonesia Bandung",
    description: "Vijf rijsttafels, voorgerechten, sate, soepen en meer. Alles vers bereid in onze keuken.",
    images: [{ url: "/images/food-platter-overhead.jpg", width: 1200, height: 630 }],
  },
};

export default function MenuPage() {
  return (
    <Suspense>
      <MenuContent />
    </Suspense>
  );
}
