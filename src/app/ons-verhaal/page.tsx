import type { Metadata } from "next";
import { OnsVerhaalContent } from "./OnsVerhaalContent";

export const metadata: Metadata = {
  title: "Ons Verhaal",
  description:
    "Van Bandung naar Den Bosch -- de geschiedenis van Yana, Steven en de Sundanese keuken die zij meebrachten. Ontdek het verhaal achter de rijsttafel.",
  alternates: { canonical: "https://restaurantbandung.nl/ons-verhaal" },
  openGraph: {
    title: "Ons Verhaal | Restaurant Indonesia Bandung",
    description: "Van Bandung naar Den Bosch -- recepten van thuis, bereid met liefde.",
    images: [{ url: "/images/gedung-sate-bandung.jpg", width: 1200, height: 630 }],
  },
};

export default function OnsVerhaalPage() {
  return <OnsVerhaalContent />;
}
