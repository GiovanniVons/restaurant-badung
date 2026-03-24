import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutContent } from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Bestellen",
  description:
    "Rond je afhaalbestelling af bij Restaurant Indonesia Bandung in Den Bosch.",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
