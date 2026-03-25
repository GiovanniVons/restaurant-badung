"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

function toggleWidget(el: HTMLElement | null, hidden: boolean) {
  if (!el) return;
  if (hidden) {
    el.style.setProperty("display", "none", "important");
  } else if (el.style.display === "none") {
    el.style.removeProperty("display");
  }
}

export function RemesaWidget() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const shouldHide =
    pathname.startsWith("/bestellen") ||
    pathname.startsWith("/pitch") ||
    pathname.startsWith("/start") ||
    (pathname === "/menu" && searchParams.get("view") === "afhalen");

  useEffect(() => {
    const btn = document.getElementById("remesa-widget-button");
    const panel = document.getElementById("remesa-widget-panel");

    if (btn) {
      toggleWidget(btn, shouldHide);
      toggleWidget(panel, shouldHide);
      return;
    }

    // Widget not in DOM yet -- only observe if we need to hide
    if (!shouldHide) return;

    const observer = new MutationObserver(() => {
      const b = document.getElementById("remesa-widget-button");
      if (b) {
        toggleWidget(b, true);
        toggleWidget(document.getElementById("remesa-widget-panel"), true);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [shouldHide]);

  return (
    <Script
      src="https://remesa.vonzie.app/remesa-widget.js"
      strategy="afterInteractive"
      data-slug="restaurant-bandung"
      data-color="#E8403A"
      data-text="Reserveer"
      data-lang="nl"
    />
  );
}
