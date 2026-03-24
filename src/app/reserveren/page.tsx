import type { Metadata } from "next";
import { ReserverenContent } from "./ReserverenContent";

export const metadata: Metadata = {
  title: "Reserveren",
  description:
    "Reserveer uw tafel bij Restaurant Indonesia Bandung in Den Bosch. Bel 073-820 09 43 of stuur ons een bericht. Ook catering en afhalen mogelijk.",
  alternates: { canonical: "https://restaurantbandung.nl/reserveren" },
  openGraph: {
    title: "Reserveren | Restaurant Indonesia Bandung",
    description:
      "Reserveer een tafel, bestel afhalen, of informeer naar catering. Wij helpen u graag.",
    images: [{ url: "/images/interior-main-dining.jpg", width: 1200, height: 630 }],
  },
};

export default function ReserverenPage() {
  return <ReserverenContent />;
}
