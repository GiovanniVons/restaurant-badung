"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { formatPrice, cartSubtotal } from "@/lib/cart";
import { generateGroupedSlots } from "@/lib/timeslots";
import { orderCopy } from "@/data/order-copy";
import { FormField } from "@/components/FormField";
import { PickupTimePicker } from "@/components/PickupTimePicker";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CheckoutContent() {
  const { t } = useLang();
  const { items, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupSlot, setPickupSlot] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pickup" | "online">(
    "pickup"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const subtotal = cartSubtotal(items);
  const dayGroups = useMemo(() => generateGroupedSlots(), []);

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = t(orderCopy.checkout.required);
    if (!phone.trim()) {
      newErrors.phone = t(orderCopy.checkout.required);
    } else {
      const cleaned = phone.replace(/[\s\-()]/g, "");
      if (!/^(0|\+31)\d{9,10}$/.test(cleaned)) {
        newErrors.phone = t(orderCopy.checkout.invalidPhone);
      }
    }
    if (!email.trim()) {
      newErrors.email = t(orderCopy.checkout.required);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t(orderCopy.checkout.invalidEmail);
    }
    if (!pickupSlot) newErrors.pickupSlot = t(orderCopy.checkout.required);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;
    if (items.length === 0) return;

    setSubmitting(true);

    const allSlots = dayGroups.flatMap((g) => g.slots);
    const selectedSlot = allSlots.find((s) => s.value === pickupSlot);
    if (!selectedSlot) {
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            priceCents: i.priceCents,
            quantity: i.quantity,
          })),
          customer: { name: name.trim(), phone: phone.trim(), email: email.trim() },
          pickupSlot: { date: selectedSlot.date, time: selectedSlot.time },
          notes: notes.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Something went wrong");
        setSubmitting(false);
        return;
      }

      if (paymentMethod === "online") {
        // Redirect to Mollie placeholder page (cart stays until confirmation)
        router.push(
          `/bestellen/betalen?order=${data.orderId}&time=${data.pickupTime}&date=${data.pickupDate}&amount=${subtotal}`
        );
      } else {
        clearCart();
        router.push(
          `/bestellen/bevestiging?order=${data.orderId}&time=${data.pickupTime}&date=${data.pickupDate}`
        );
      }
    } catch {
      setSubmitError("Connection error. Please try again.");
      setSubmitting(false);
    }
  }

  // Empty cart state
  if (items.length === 0 && !submitting) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "60vh",
          backgroundColor: "var(--color-rice)",
          padding: "var(--section-space-main) var(--space-md)",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-kecap)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.3, marginBottom: 16 }}
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h2)",
            color: "var(--color-kecap)",
            marginBottom: 8,
          }}
        >
          {t(orderCopy.checkout.emptyCart)}
        </h1>
        <Link
          href="/menu?view=afhalen"
          className="font-medium transition-opacity hover:opacity-80"
          style={{
            fontFamily: "var(--font-accent)",
            color: "var(--color-daun)",
            textDecoration: "none",
          }}
        >
          {t(orderCopy.drawer.emptyCta)} &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--color-rice)" }}>
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "var(--section-space-sm) var(--space-md)",
        }}
      >
        <ScrollReveal>
          <h1
            className="mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              fontWeight: 500,
              color: "var(--color-kecap)",
            }}
          >
            {t(orderCopy.checkout.title)}
          </h1>
        </ScrollReveal>

        {submitError && (
          <div
            className="mb-6 p-4 rounded-sm"
            style={{
              backgroundColor: "rgba(232, 63, 57, 0.1)",
              border: "1px solid var(--color-bandung-red)",
              color: "var(--color-bandung-red)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
            }}
          >
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Left: Form */}
            <div className="flex-1 lg:max-w-[520px]">
              <ScrollReveal>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    fontWeight: 500,
                    color: "var(--color-kecap)",
                  }}
                >
                  {t(orderCopy.checkout.pickupHeading)}
                </h2>

                <FormField
                  id="name"
                  label={t(orderCopy.checkout.name)}
                  required
                  value={name}
                  onChange={setName}
                  error={errors.name}
                />

                <FormField
                  id="phone"
                  label={t(orderCopy.checkout.phone)}
                  type="tel"
                  required
                  value={phone}
                  onChange={setPhone}
                  error={errors.phone}
                  placeholder="06-12345678"
                />

                <FormField
                  id="email"
                  label={t(orderCopy.checkout.email)}
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  note={t(orderCopy.checkout.emailNote)}
                />

                <div className="mb-5">
                  <PickupTimePicker
                    value={pickupSlot}
                    onChange={setPickupSlot}
                    error={errors.pickupSlot}
                  />
                </div>

                <FormField
                  id="notes"
                  label={t(orderCopy.checkout.notes)}
                  type="textarea"
                  value={notes}
                  onChange={setNotes}
                  placeholder={t(orderCopy.checkout.notesPlaceholder)}
                  rows={3}
                />
              </ScrollReveal>
            </div>

            {/* Right: Order summary */}
            <div className="lg:w-[380px] shrink-0 mt-8 lg:mt-0">
              <ScrollReveal>
                <div
                  className="rounded-sm p-6 sticky"
                  style={{
                    top: 100,
                    backgroundColor: "rgba(26, 20, 16, 0.03)",
                    border: "1px solid var(--color-rice-dark)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-h4)",
                        fontWeight: 500,
                        color: "var(--color-kecap)",
                        margin: 0,
                      }}
                    >
                      {t(orderCopy.checkout.orderSummary)}
                    </h2>
                    <Link
                      href="/menu?view=afhalen"
                      className="transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-caption)",
                        color: "var(--color-daun)",
                        textDecoration: "none",
                      }}
                    >
                      {t(orderCopy.checkout.editCart)}
                    </Link>
                  </div>

                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between py-2 border-b"
                        style={{ borderColor: "var(--color-rice-dark)" }}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="shrink-0 flex items-center justify-center rounded-sm font-semibold"
                            style={{
                              width: 24,
                              height: 24,
                              backgroundColor: "var(--color-daun)",
                              color: "var(--color-rice)",
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--text-caption)",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <span
                            className="truncate"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "var(--text-body-sm)",
                              color: "var(--color-kecap)",
                            }}
                          >
                            {item.name}
                          </span>
                        </div>
                        <span
                          className="shrink-0 ml-2 font-semibold"
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--color-kecap)",
                          }}
                        >
                          {formatPrice(item.priceCents * item.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center justify-between mt-4 pt-4 border-t"
                    style={{ borderColor: "var(--color-rice-dark)" }}
                  >
                    <span
                      className="font-medium"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-kecap)",
                      }}
                    >
                      {t(orderCopy.checkout.subtotal)}
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

                  {/* Payment method */}
                  <h3
                    className="mt-5 mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-body)",
                      fontWeight: 500,
                      color: "var(--color-kecap)",
                      margin: "20px 0 12px",
                    }}
                  >
                    {t(orderCopy.checkout.paymentHeading)}
                  </h3>

                  <div
                    role="radiogroup"
                    className="flex flex-col gap-2"
                  >
                    {/* Pay at pickup */}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={paymentMethod === "pickup"}
                      onClick={() => setPaymentMethod("pickup")}
                      className="w-full p-3 rounded-sm flex items-center gap-3 text-left transition-all"
                      style={{
                        backgroundColor:
                          paymentMethod === "pickup"
                            ? "rgba(11, 71, 58, 0.08)"
                            : "transparent",
                        border:
                          paymentMethod === "pickup"
                            ? "1.5px solid var(--color-daun)"
                            : "1.5px solid var(--color-rice-dark)",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        className="shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: 20,
                          height: 20,
                          border:
                            paymentMethod === "pickup"
                              ? "2px solid var(--color-daun)"
                              : "2px solid var(--color-rice-dark)",
                        }}
                      >
                        {paymentMethod === "pickup" && (
                          <span
                            className="rounded-full"
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: "var(--color-daun)",
                            }}
                          />
                        )}
                      </span>
                      <div>
                        <span
                          className="block font-medium"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            color:
                              paymentMethod === "pickup"
                                ? "var(--color-daun)"
                                : "var(--color-kecap)",
                          }}
                        >
                          {t(orderCopy.checkout.payAtPickup)}
                        </span>
                        <span
                          className="block"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-caption)",
                            color: "var(--color-kecap)",
                            opacity: 0.5,
                          }}
                        >
                          {t(orderCopy.checkout.payAtPickupDesc)}
                        </span>
                      </div>
                    </button>

                    {/* Pay online */}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={paymentMethod === "online"}
                      onClick={() => setPaymentMethod("online")}
                      className="w-full p-3 rounded-sm flex items-center gap-3 text-left transition-all"
                      style={{
                        backgroundColor:
                          paymentMethod === "online"
                            ? "rgba(11, 71, 58, 0.08)"
                            : "transparent",
                        border:
                          paymentMethod === "online"
                            ? "1.5px solid var(--color-daun)"
                            : "1.5px solid var(--color-rice-dark)",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        className="shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: 20,
                          height: 20,
                          border:
                            paymentMethod === "online"
                              ? "2px solid var(--color-daun)"
                              : "2px solid var(--color-rice-dark)",
                        }}
                      >
                        {paymentMethod === "online" && (
                          <span
                            className="rounded-full"
                            style={{
                              width: 10,
                              height: 10,
                              backgroundColor: "var(--color-daun)",
                            }}
                          />
                        )}
                      </span>
                      <div>
                        <span
                          className="block font-medium"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            color:
                              paymentMethod === "online"
                                ? "var(--color-daun)"
                                : "var(--color-kecap)",
                          }}
                        >
                          {t(orderCopy.checkout.payOnline)}
                        </span>
                        <span
                          className="block"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-caption)",
                            color: "var(--color-kecap)",
                            opacity: 0.5,
                          }}
                        >
                          {t(orderCopy.checkout.payOnlineDesc)}
                        </span>
                      </div>
                    </button>
                  </div>

                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-caption)",
                      color: "var(--color-kecap)",
                      opacity: 0.5,
                      margin: "12px 0 0",
                    }}
                  >
                    {paymentMethod === "pickup"
                      ? t(orderCopy.checkout.paymentNote)
                      : t(orderCopy.checkout.paymentNoteOnline)}
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting || items.length === 0}
                    className="w-full mt-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      backgroundColor: "var(--color-bandung-red)",
                      color: "var(--color-rice)",
                      letterSpacing: "var(--tracking-wider)",
                      border: "none",
                      cursor: submitting ? "wait" : "pointer",
                    }}
                  >
                    {submitting
                      ? t(orderCopy.checkout.processing)
                      : paymentMethod === "online"
                        ? t(orderCopy.checkout.placeOrderOnline)
                        : t(orderCopy.checkout.placeOrder)}
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </form>
      </div>

      {/* Mobile spacer for bottom bar */}
      <div className="h-[60px] md:hidden" />
    </div>
  );
}
