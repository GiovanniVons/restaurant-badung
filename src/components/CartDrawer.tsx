"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { formatPrice, cartSubtotal } from "@/lib/cart";
import { orderCopy } from "@/data/order-copy";

export function CartDrawer() {
  const { items, updateQuantity, removeItem, isDrawerOpen, closeDrawer } =
    useCart();
  const { t } = useLang();
  const subtotal = cartSubtotal(items);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "rgba(26, 20, 16, 0.5)" }}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[61] flex flex-col w-full sm:max-w-[420px]"
            style={{
              backgroundColor: "var(--color-rice)",
              boxShadow: "-4px 0 24px rgba(26, 20, 16, 0.15)",
            }}
            role="dialog"
            aria-label={t(orderCopy.drawer.title)}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between shrink-0 px-6 border-b"
              style={{
                height: 64,
                borderColor: "var(--color-rice-dark)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h4)",
                  fontWeight: 500,
                  color: "var(--color-kecap)",
                  margin: 0,
                }}
              >
                {t(orderCopy.drawer.title)}
              </h2>
              <button
                onClick={closeDrawer}
                aria-label="Close"
                className="p-2 -mr-2 transition-opacity hover:opacity-70"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-kecap)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.3 }}
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-kecap)",
                    opacity: 0.5,
                    margin: 0,
                  }}
                >
                  {t(orderCopy.drawer.empty)}
                </p>
                <Link
                  href="/menu?view=afhalen"
                  onClick={closeDrawer}
                  className="font-medium transition-opacity hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-body-sm)",
                    color: "var(--color-daun)",
                    textDecoration: "none",
                  }}
                >
                  {t(orderCopy.drawer.emptyCta)} &rarr;
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-4 py-4 border-b"
                      style={{ borderColor: "var(--color-rice-dark)" }}
                    >
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-medium"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body)",
                            color: "var(--color-kecap)",
                            margin: 0,
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--color-daun)",
                            fontWeight: 600,
                            margin: "2px 0 0",
                          }}
                        >
                          {formatPrice(item.priceCents)}
                        </p>
                      </div>

                      <div className="flex items-center gap-0 shrink-0">
                        {/* Inline quantity stepper */}
                        <div
                          className="flex items-center rounded-sm overflow-hidden"
                          style={{ border: "1.5px solid var(--color-daun)" }}
                        >
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label={`Decrease ${item.name}`}
                            className="flex items-center justify-center"
                            style={{
                              width: 28,
                              height: 28,
                              color: "var(--color-daun)",
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                          <span
                            className="flex items-center justify-center font-semibold"
                            style={{
                              minWidth: 24,
                              height: 28,
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--text-caption)",
                              color: "var(--color-kecap)",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label={`Increase ${item.name}`}
                            className="flex items-center justify-center"
                            style={{
                              width: 28,
                              height: 28,
                              backgroundColor: "var(--color-daun)",
                              color: "var(--color-rice)",
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            >
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="text-right shrink-0" style={{ minWidth: 60 }}>
                        <p
                          className="font-semibold"
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--color-kecap)",
                            margin: 0,
                          }}
                        >
                          {formatPrice(item.priceCents * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="mt-1 transition-opacity hover:opacity-70"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-caption)",
                            color: "var(--color-bandung-red)",
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                          }}
                        >
                          {t(orderCopy.drawer.remove)}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="shrink-0 px-6 py-4 border-t"
                style={{ borderColor: "var(--color-rice-dark)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                      color: "var(--color-kecap)",
                    }}
                  >
                    {t(orderCopy.drawer.subtotal)}
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-h4)",
                      color: "var(--color-kecap)",
                    }}
                  >
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <Link
                  href="/bestellen"
                  onClick={closeDrawer}
                  className="flex items-center justify-center w-full py-3 rounded-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    backgroundColor: "var(--color-bandung-red)",
                    color: "var(--color-rice)",
                    letterSpacing: "var(--tracking-wider)",
                    textDecoration: "none",
                  }}
                >
                  {t(orderCopy.drawer.checkout)}
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
