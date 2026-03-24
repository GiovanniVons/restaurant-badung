import type { Metadata } from "next";
import { Suspense } from "react";
import { BetalenContent } from "./BetalenContent";

export const metadata: Metadata = {
  title: "Betaling",
  robots: { index: false },
};

export default function BetalenPage() {
  return (
    <Suspense>
      <BetalenContent />
    </Suspense>
  );
}
