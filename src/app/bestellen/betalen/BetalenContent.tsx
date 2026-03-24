"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cart";
import { orderCopy } from "@/data/order-copy";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BetalenContent() {
  const { t } = useLang();
  const { clearCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = searchParams.get("order") || "---";
  const pickupTime = searchParams.get("time") || "--:--";
  const pickupDate = searchParams.get("date") || "";
  const amountCents = parseInt(searchParams.get("amount") || "0", 10);

  function handleConfirm() {
    clearCart();
    router.push(
      `/bestellen/bevestiging?order=${orderId}&time=${pickupTime}&date=${pickupDate}`
    );
  }

  return (
    <div
      style={{
        backgroundColor: "var(--color-rice)",
        minHeight: "70vh",
      }}
    >
      <div
        className="mx-auto px-6 text-center"
        style={{
          maxWidth: "var(--content-narrow)",
          padding: "var(--section-space-main) var(--space-md)",
        }}
      >
        <ScrollReveal>
          {/* iDEAL logo area */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-sm"
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#CC0066",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
              fontWeight: 500,
              color: "var(--color-kecap)",
              marginBottom: 8,
            }}
          >
            {t(orderCopy.payment.heading)}
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="rounded-sm p-6 mx-auto text-left"
            style={{
              maxWidth: 400,
              backgroundColor: "rgba(26, 20, 16, 0.03)",
              border: "1px solid var(--color-rice-dark)",
            }}
          >
            {/* Amount */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: "var(--color-rice-dark)" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-kecap)",
                  opacity: 0.6,
                }}
              >
                {t(orderCopy.payment.amount)}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-h3)",
                  fontWeight: 700,
                  color: "var(--color-kecap)",
                }}
              >
                {formatPrice(amountCents)}
              </span>
            </div>

            {/* Order reference */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: "var(--color-rice-dark)" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-kecap)",
                  opacity: 0.6,
                }}
              >
                {t(orderCopy.payment.orderRef)}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 600,
                  color: "var(--color-daun)",
                  letterSpacing: "0.05em",
                }}
              >
                {orderId}
              </span>
            </div>

            {/* Coming soon notice */}
            <div
              className="p-4 rounded-sm"
              style={{
                backgroundColor: "rgba(204, 0, 102, 0.06)",
                border: "1px solid rgba(204, 0, 102, 0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-kecap)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {t(orderCopy.payment.comingSoon)}
              </p>
            </div>

            {/* Confirm button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full mt-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                backgroundColor: "#CC0066",
                color: "#fff",
                letterSpacing: "var(--tracking-wider)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t(orderCopy.payment.continueBtn)}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p
            className="mt-6 flex items-center justify-center gap-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-caption)",
              color: "var(--color-kecap)",
              opacity: 0.4,
            }}
          >
            {t(orderCopy.payment.poweredBy)}{" "}
            <span style={{ fontWeight: 700, color: "#CC0066", opacity: 1 }}>
              Mollie
            </span>
          </p>
        </ScrollReveal>
      </div>

      {/* Mobile spacer */}
      <div className="h-[60px] md:hidden" />
    </div>
  );
}
