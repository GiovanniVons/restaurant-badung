import type { Metadata } from "next";
import { PitchContent } from "./PitchContent";

export const metadata: Metadata = {
  title: "Uw nieuwe website | Vonzie",
  description: "Een overzicht van de nieuwe website voor Restaurant Indonesia Bandung.",
  robots: { index: false, follow: false },
};

export default function PitchPage() {
  return <PitchContent />;
}
