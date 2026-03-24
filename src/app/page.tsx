import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "Restaurant Indonesia Bandung | Indonesisch Restaurant Den Bosch",
  description:
    "Authentiek West-Javaans restaurant in het hart van Den Bosch. Vijf rijsttafels, verse ingredienten, huisgemaakt met liefde. Reserveer nu.",
  alternates: { canonical: "https://restaurantbandung.nl" },
};

export default function HomePage() {
  return <HomeContent />;
}
