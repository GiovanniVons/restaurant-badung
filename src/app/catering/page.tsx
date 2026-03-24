import type { Metadata } from "next";
import { CateringContent } from "./CateringContent";

export const metadata: Metadata = {
  title: "Catering & Groepen",
  description:
    "Indonesische catering in Den Bosch voor groepen vanaf 30 personen. Op maat samengestelde menu's voor bedrijfsfeesten, familiebijeenkomsten en culturele evenementen.",
  alternates: { canonical: "https://restaurantbandung.nl/catering" },
  openGraph: {
    title: "Catering & Groepen | Restaurant Indonesia Bandung",
    description:
      "Authentieke West-Javaanse catering voor uw evenement. Op maat samengestelde menu's, vers bereid door Yana.",
    images: [{ url: "/images/catering-buffet.jpg", width: 1200, height: 630 }],
  },
};

export default function CateringPage() {
  return <CateringContent />;
}
