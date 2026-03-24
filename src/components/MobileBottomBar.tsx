"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { mobileBar, CONTACT } from "@/data/copy";
import { orderCopy } from "@/data/order-copy";
import { cartItemCount, cartSubtotal, formatPrice } from "@/lib/cart";

export function MobileBottomBar() {
  const { t } = useLang();
  const { items, openDrawer, lastAddedAt } = useCart();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const count = cartItemCount(items);
  const total = cartSubtotal(items);
  // Only show cart button after hydration to avoid server/client mismatch
  const showCart = mounted && count > 0;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t"
      style={{
        backgroundColor: "var(--bottom-bar-bg)",
        borderColor: "var(--bottom-bar-border)",
        height: "var(--bottom-bar-height)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <a
        href={`tel:${CONTACT.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 font-medium"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-kecap)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>{t(mobileBar.call)}</span>
      </a>

      {showCart && (
        <button
          key={lastAddedAt}
          onClick={openDrawer}
          className="flex-1 flex items-center justify-center gap-2 font-bold cart-pulse"
          style={{
            backgroundColor: "var(--color-bandung-red)",
            color: "var(--color-rice)",
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-body-sm)",
            letterSpacing: "var(--tracking-wider)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span>
            {count} {count === 1 ? t(orderCopy.mobileBar.item) : t(orderCopy.mobileBar.items)}
          </span>
          <span style={{ opacity: 0.6 }}>&middot;</span>
          <span>{formatPrice(total)}</span>
        </button>
      )}
    </div>
  );
}
