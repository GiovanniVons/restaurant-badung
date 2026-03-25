"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

function setNexusVisibility(hidden: boolean) {
  const el = document.getElementById("vnx-consent");
  if (el) el.style.display = hidden ? "none" : "";
  return !!el;
}

export function VonzieNexus() {
  const pathname = usePathname();

  const shouldHide = pathname.startsWith("/start");

  useEffect(() => {
    if (setNexusVisibility(shouldHide)) return;

    // Widget not in DOM yet -- watch for it
    const observer = new MutationObserver(() => {
      if (setNexusVisibility(shouldHide)) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [shouldHide]);

  return (
    <Script
      src="https://atshvftlpuvtnredbjgc.supabase.co/functions/v1/widget?p=1074dee1-e7dd-4e0a-b03a-da6c57347ec4"
      strategy="afterInteractive"
    />
  );
}
