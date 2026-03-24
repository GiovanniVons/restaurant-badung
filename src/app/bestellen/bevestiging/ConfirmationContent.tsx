"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { orderCopy } from "@/data/order-copy";
import { CONTACT } from "@/data/copy";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ConfirmationContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order") || "---";
  const pickupTime = searchParams.get("time") || "--:--";
  const pickupDate = searchParams.get("date") || "";

  const formattedDate = pickupDate
    ? pickupDate.split("-").reverse().join("-")
    : "";

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
          {/* Success icon */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{
              width: 72,
              height: 72,
              backgroundColor: "rgba(11, 71, 58, 0.1)",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-daun)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              fontWeight: 500,
              color: "var(--color-kecap)",
              marginBottom: 8,
            }}
          >
            {t(orderCopy.confirmation.title)}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--color-kecap)",
              opacity: 0.7,
              marginBottom: "var(--space-lg)",
            }}
          >
            {t(orderCopy.confirmation.subtitle)}
          </p>
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
            {/* Order number */}
            <div className="mb-4">
              <p
                className="uppercase mb-1"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-overline)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--color-kecap)",
                  opacity: 0.5,
                  margin: 0,
                }}
              >
                {t(orderCopy.confirmation.orderNumber)}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-h3)",
                  fontWeight: 700,
                  color: "var(--color-daun)",
                  margin: 0,
                  letterSpacing: "0.05em",
                }}
              >
                {orderId}
              </p>
            </div>

            {/* Pickup time */}
            <div className="mb-4">
              <p
                className="uppercase mb-1"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-overline)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--color-kecap)",
                  opacity: 0.5,
                  margin: 0,
                }}
              >
                {t(orderCopy.confirmation.pickupAt)}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-h4)",
                  fontWeight: 600,
                  color: "var(--color-kecap)",
                  margin: 0,
                }}
              >
                {pickupTime} &middot; {formattedDate}
              </p>
            </div>

            {/* Address */}
            <div className="mb-4">
              <p
                className="uppercase mb-1"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-overline)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--color-kecap)",
                  opacity: 0.5,
                  margin: 0,
                }}
              >
                {t(orderCopy.confirmation.address)}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-kecap)",
                  margin: 0,
                }}
              >
                {CONTACT.address}, {CONTACT.postcode}
              </p>
            </div>

            {/* Payment note */}
            <div
              className="p-3 rounded-sm flex items-center gap-3"
              style={{
                backgroundColor: "rgba(11, 71, 58, 0.08)",
                border: "1px solid rgba(11, 71, 58, 0.15)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-daun)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-daun)",
                  fontWeight: 500,
                }}
              >
                {t(orderCopy.confirmation.payAtPickup)}
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu?view=afhalen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                backgroundColor: "var(--color-daun)",
                color: "var(--color-rice)",
                letterSpacing: "var(--tracking-wider)",
                textDecoration: "none",
              }}
            >
              {t(orderCopy.confirmation.backToMenu)}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-medium transition-colors hover:opacity-80"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-daun)",
                textDecoration: "none",
              }}
            >
              {t(orderCopy.confirmation.backToHome)}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
