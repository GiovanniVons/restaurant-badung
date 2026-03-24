"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { cartItemCount, cartSubtotal, formatPrice } from "@/lib/cart";
import { orderCopy } from "@/data/order-copy";

export function CartFab() {
  const { items, openDrawer, isDrawerOpen, lastAddedAt } = useCart();
  const { t } = useLang();
  const count = cartItemCount(items);
  const total = cartSubtotal(items);

  if (isDrawerOpen) return null;

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          key={lastAddedAt}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.1, 1], opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={openDrawer}
          aria-label={`${t(orderCopy.fab.label)} (${count})`}
          className="fixed z-50 hidden md:flex items-center gap-3 rounded-full shadow-lg transition-shadow hover:shadow-xl"
          style={{
            bottom: "var(--space-md)",
            right: "var(--space-md)",
            backgroundColor: "var(--color-bandung-red)",
            color: "var(--color-rice)",
            padding: "12px 20px 12px 16px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span
            className="font-bold"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-body-sm)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            {count}
          </span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "rgba(245,240,232,0.4)" }}
          />
          <span
            className="font-semibold"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-body-sm)",
            }}
          >
            {formatPrice(total)}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
