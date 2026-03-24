import type { Metadata } from "next";
import { Suspense } from "react";
import { ConfirmationContent } from "./ConfirmationContent";

export const metadata: Metadata = {
  title: "Bevestiging",
  robots: { index: false },
};

export default function ConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationContent />
    </Suspense>
  );
}
