"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import {
  MENU_CATEGORIES,
  RIJSTTAFEL_OPTIONS,
  MONTHLY_SPECIALS,
  MENU_FOOTER,
} from "@/data/menu";
import { CONTACT } from "@/data/copy";
import { Button } from "@/components/Button";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { QuantityStepper } from "@/components/QuantityStepper";
import { parsePrice, generateItemId } from "@/lib/cart";
import { orderCopy } from "@/data/order-copy";

type MenuView = "dine-in" | "takeaway";

const menuCopy = {
  title: { nl: "Ons Menu", en: "The Menu" },
  titleTakeaway: { nl: "Afhaalkaart", en: "Takeaway Menu" },
  subtitle: {
    nl: "Alles vers bereid in onze keuken.",
    en: "Everything freshly prepared in our kitchen.",
  },
  subtitleTakeaway: {
    nl: "Kies je gerechten en haal ze op in het restaurant.",
    en: "Choose your dishes and pick them up at the restaurant.",
  },
  toggleDineIn: { nl: "Dine-in", en: "Dine-in" },
  toggleTakeaway: { nl: "Afhalen", en: "Takeaway" },
  takeawayBanner: {
    nl: "Je bekijkt de afhaalkaart. Bel ons op 073-820 09 43 om te bestellen.",
    en: "You are viewing the takeaway menu. Call us at 073-820 09 43 to order.",
  },
  rijsttafelHeadline: { nl: "De Rijsttafel", en: "The Rijsttafel" },
  rijsttafelIntro: {
    nl: "Een rijsttafel is geen enkel gerecht. Het is een tafel vol schotels, van mild tot pittig, van romig tot krokant, met een berg rijst in het midden. Iedereen schept op, proeft, wisselt en schept nog een keer. Zo eet je in Indonesi\u00EB: samen, op je gemak, tot de laatste lepel.",
    en: "A rijsttafel is not a single dish. It is a table full of plates, from mild to fiery, from creamy to crispy, with a mountain of rice at the centre. Everyone serves, tastes, shares and serves again. This is how people eat in Indonesia: together, at ease, until the very last spoonful.",
  },
  rijsttafelNoteDineIn: {
    nl: "Minimaal 2 personen \u00B7 Alleen dine-in",
    en: "Minimum 2 persons \u00B7 Dine-in only",
  },
  rijsttafelNoteTakeaway: {
    nl: "Afhaalporties \u00B7 Rijstkeuze inbegrepen",
    en: "Takeaway portions \u00B7 Rice choice included",
  },
  rijsttafelCta: {
    nl: "Reserveer voor de rijsttafel",
    en: "Reserve for the rijsttafel",
  },
  reserveCta: { nl: "Reserveer een tafel", en: "Reserve a table" },
  orderCta: {
    nl: "Bekijk de afhaalkaart",
    en: "See the pickup menu",
  },
  specialsHeadline: {
    nl: "Specials deze maand",
    en: "This month\u2019s specials",
  },
  perPerson: { nl: "p.p.", en: "p.p." },
  dineInOnly: { nl: "Alleen dine-in", en: "Dine-in only" },
};

export function MenuContent() {
  const { t, lang } = useLang();
  const searchParams = useSearchParams();
  const [view, setView] = useState<MenuView>("dine-in");
  const [activeSection, setActiveSection] = useState<string>("rijsttafel");

  // Filter active monthly specials (needs to be above the observer useEffect)
  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const activeSpecials = MONTHLY_SPECIALS.filter(
    (s) => s.activeMonth === currentMonth
  );

  // Read initial view from URL param (?view=afhalen)
  useEffect(() => {
    const param = searchParams.get("view");
    if (param === "afhalen" || param === "takeaway") {
      setView("takeaway");
    }
  }, [searchParams]);

  // IntersectionObserver for active section tracking (sidebar highlight)
  useEffect(() => {
    const sectionIds = [
      "rijsttafel",
      ...(activeSpecials.length > 0 ? ["specials"] : []),
      ...MENU_CATEGORIES.map((c) => c.slug),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0,
      }
    );

    const timeout = setTimeout(() => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [activeSpecials.length]);

  // Get the price to display based on current view
  const getPrice = (dineIn: string, takeaway: string | null) => {
    if (view === "takeaway") {
      return takeaway;
    }
    return dineIn;
  };

  return (
    <div>
      {/* Section 1: Page Header */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: "40vh",
          backgroundColor: "var(--color-kecap)",
          marginTop: "-72px",
          paddingTop: "72px",
        }}
      >
        <Image
          src="/images/food-platter-overhead.jpg"
          alt="Indonesische gerechten"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
          quality={50}
        />
        <div className="relative z-10 px-6">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              fontWeight: 600,
              color: "var(--color-rice)",
              marginBottom: "var(--space-xs)",
            }}
          >
            {t(view === "takeaway" ? menuCopy.titleTakeaway : menuCopy.title)}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-rice)",
              opacity: 0.8,
            }}
          >
            {t(view === "takeaway" ? menuCopy.subtitleTakeaway : menuCopy.subtitle)}
          </p>
        </div>
      </section>

      {/* Section 2: Category Navigation (Sticky) -- mobile/tablet only */}
      <nav
        className="sticky z-30 border-b lg:hidden"
        style={{
          top: "var(--nav-offset, var(--header-height-desktop))",
          backgroundColor: "var(--color-rice)",
          borderColor: "var(--color-rice-dark)",
          transition: "top 300ms ease",
        }}
      >
        <div
          className="mx-auto px-6 flex items-center"
          style={{
            maxWidth: "var(--content-max-width)",
            height: "var(--menu-nav-height)",
          }}
        >
          <div
            className="flex items-center gap-1 overflow-x-auto whitespace-nowrap flex-1"
            style={{ scrollbarWidth: "none" }}
          >
            <a
              href="#rijsttafel"
              className="shrink-0 font-semibold uppercase transition-colors py-3 px-3"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-caption)",
                letterSpacing: "var(--tracking-caps)",
                color: "var(--color-bandung-red)",
              }}
            >
              Rijsttafel
            </a>
            {activeSpecials.length > 0 && (
              <a
                href="#specials"
                className="shrink-0 uppercase transition-colors hover:opacity-70 py-3 px-3"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-caption)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--color-kunyit)",
                }}
              >
                Specials
              </a>
            )}
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="shrink-0 uppercase transition-colors hover:opacity-70 py-3 px-3"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-caption)",
                  letterSpacing: "var(--tracking-caps)",
                  color: "var(--color-kecap)",
                }}
              >
                {t(cat.name)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Takeaway info banner */}
      {view === "takeaway" && (
        <div
          className="text-center py-3 px-6"
          style={{
            backgroundColor: "var(--color-daun)",
            color: "var(--color-rice)",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-sm)",
          }}
        >
          {t(orderCopy.banner.takeaway)}
        </div>
      )}

      {/* Section 3: Rijsttafel Section */}
      <section
        id="rijsttafel"
        className="relative overflow-hidden"
        style={{
          padding: "var(--section-space-main) 0",
          backgroundColor: "var(--color-kecap)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-narrow)" }}
        >
          <ScrollReveal>
            <p
              className="text-center uppercase mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-overline)",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--color-kunyit)",
              }}
            >
              {t(menuCopy.rijsttafelHeadline)}
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-rice)",
                marginBottom: "var(--space-md)",
              }}
            >
              {t(menuCopy.rijsttafelHeadline)}
            </h2>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                lineHeight: "var(--leading-body-relaxed)",
                color: "var(--color-rice)",
                opacity: 0.85,
                marginBottom: "var(--space-lg)",
              }}
            >
              {t(menuCopy.rijsttafelIntro)}
            </p>
          </ScrollReveal>

          {/* Rijsttafel options */}
          <div className="space-y-4">
            {RIJSTTAFEL_OPTIONS.map((option, i) => {
              const price =
                view === "takeaway" && option.priceTakeaway
                  ? option.priceTakeaway
                  : option.priceDineIn;

              // In takeaway mode, skip options without takeaway price
              if (view === "takeaway" && !option.priceTakeaway) return null;

              return (
                <ScrollReveal key={option.name} delay={0.06 * i}>
                  <div
                    className="rounded-sm overflow-hidden border px-5 py-4"
                    style={{
                      borderColor: "rgba(245,240,232,0.15)",
                    }}
                  >
                    {option.flagship && (
                      <span
                        className="inline-block px-2 py-0.5 rounded-sm text-xs uppercase mb-2"
                        style={{
                          backgroundColor: "var(--color-kunyit)",
                          color: "var(--color-kecap)",
                          fontFamily: "var(--font-accent)",
                          letterSpacing: "var(--tracking-caps)",
                          fontWeight: 600,
                        }}
                      >
                        {lang === "nl" ? "Vlaggenschip" : "Flagship"}
                      </span>
                    )}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-h4)",
                            fontWeight: 500,
                            color: "var(--color-rice)",
                          }}
                        >
                          {option.name}
                        </span>
                        {option.vegetarian && (
                          <svg aria-label="Vegetarisch" width="14" height="14" viewBox="0 0 24 24" fill="var(--color-daun)" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" /></svg>
                        )}
                      </div>
                      <span
                        className="shrink-0"
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "var(--text-body)",
                          color: "var(--color-kunyit)",
                          fontWeight: 600,
                        }}
                      >
                        {price}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        lineHeight: "var(--leading-body)",
                        color: "var(--color-rice)",
                        opacity: 0.8,
                        margin: 0,
                      }}
                    >
                      {t(option.desc)}
                    </p>
                    {view === "takeaway" && option.takeawayNote && (
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "var(--text-caption)",
                          letterSpacing: "var(--tracking-caps)",
                          color: "var(--color-kunyit)",
                          opacity: 0.8,
                        }}
                      >
                        {t(option.takeawayNote)}
                      </p>
                    )}
                    {view === "takeaway" && option.priceTakeaway && (
                      <div className="mt-3 flex justify-end">
                        <QuantityStepper
                          itemId={generateItemId("rijsttafel", option.name)}
                          itemName={option.name}
                          priceCents={parsePrice(option.priceTakeaway)}
                          itemType="rijsttafel"
                          dark
                        />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <p
            className="text-center mt-6"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-caption)",
              letterSpacing: "var(--tracking-caps)",
              color: "var(--color-rice)",
              opacity: 0.6,
            }}
          >
            {t(
              view === "takeaway"
                ? menuCopy.rijsttafelNoteTakeaway
                : menuCopy.rijsttafelNoteDineIn
            )}
          </p>

          <div className="text-center mt-6">
            {view === "dine-in" ? (
              <Button href="/reserveren" variant="primary">
                {t(menuCopy.rijsttafelCta)}
              </Button>
            ) : (
              <Button href="/menu?view=afhalen" variant="primary">
                {t(menuCopy.orderCta)}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Section 3b: Monthly Specials (conditional) */}
      {activeSpecials.length > 0 && (
        <section
          id="specials"
          style={{
            padding: "var(--section-space-sm) 0",
            backgroundColor: "var(--color-daun)",
          }}
        >
          <div
            className="mx-auto px-6"
            style={{ maxWidth: "var(--content-wide)" }}
          >
            <div className="grid md:grid-cols-[1fr_auto] md:gap-12 md:items-start">
              {/* Content column */}
              <div>
                <ScrollReveal>
                  <span
                    className="block uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-caption)",
                      letterSpacing: "var(--tracking-caps)",
                      color: "var(--color-kunyit)",
                    }}
                  >
                    {lang === "nl" ? "Maandmenu" : "Monthly Menu"}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h2)",
                      fontWeight: 500,
                      color: "var(--color-rice)",
                      marginBottom: "var(--space-xs)",
                    }}
                  >
                    {t(menuCopy.specialsHeadline)}
                  </h2>
                </ScrollReveal>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "var(--space-sm)" }}
                >
                  {activeSpecials.map((special) => {
                    const price = getPrice(
                      special.priceDineIn,
                      special.priceTakeaway
                    );
                    return (
                      <ScrollReveal key={special.name}>
                        <div
                          className="rounded-sm"
                          style={{
                            padding: "var(--space-sm)",
                            backgroundColor: "rgba(245,240,232,0.08)",
                            border: "1px solid rgba(245,240,232,0.15)",
                          }}
                        >
                          <div className="flex items-baseline justify-between gap-4 mb-2">
                            <h3
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "var(--text-h4)",
                                fontWeight: 500,
                                color: "var(--color-rice)",
                                marginBottom: 0,
                              }}
                            >
                              {special.name}
                            </h3>
                            {price && (
                              <span
                                className="shrink-0"
                                style={{
                                  fontFamily: "var(--font-accent)",
                                  fontSize: "var(--text-body)",
                                  color: "var(--color-kunyit)",
                                  fontWeight: 600,
                                }}
                              >
                                {price}
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "var(--text-body-sm)",
                              lineHeight: "var(--leading-body)",
                              color: "var(--color-rice)",
                              opacity: 0.85,
                              margin: 0,
                            }}
                          >
                            {t(special.desc)}
                          </p>
                          {special.dishes && special.dishes.length > 0 && (
                            <ul
                              className="grid grid-cols-1 sm:grid-cols-2"
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                marginTop: "var(--space-xs)",
                                gap: "var(--space-3xs) var(--space-sm)",
                              }}
                            >
                              {special.dishes.map((dish) => (
                                <li
                                  key={dish.name}
                                  style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "var(--text-caption)",
                                    lineHeight: "var(--leading-relaxed)",
                                  }}
                                >
                                  <span style={{ color: "var(--color-kunyit)", fontWeight: 600 }}>
                                    {dish.name}
                                  </span>
                                  {" "}
                                  <span style={{ color: "var(--color-rice)", opacity: 0.6 }}>
                                    {t(dish.desc)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {view === "takeaway" && special.priceTakeaway && (
                            <div className="mt-3 flex justify-end">
                              <QuantityStepper
                                itemId={generateItemId("specials", special.name)}
                                itemName={special.name}
                                priceCents={parsePrice(special.priceTakeaway)}
                                itemType="special"
                                dark
                              />
                            </div>
                          )}
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>

              {/* Flyer image -- desktop only */}
              <div className="hidden md:block shrink-0" style={{ width: 280 }}>
                <Image
                  src="/mm-maart-2026.png"
                  alt={lang === "nl" ? "Maandmenu maart 2026" : "Monthly menu March 2026"}
                  width={280}
                  height={396}
                  className="rounded-sm"
                  style={{
                    border: "1px solid rgba(245,240,232,0.15)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Menu Categories with Sidebar */}
      <div
        className="mx-auto px-6 lg:flex lg:gap-10"
        style={{ maxWidth: "var(--content-wide)" }}
      >
        {/* Sticky category sidebar -- desktop only */}
        <aside className="hidden lg:block shrink-0" style={{ width: "180px" }}>
          <nav
            className="sticky"
            style={{
              top: "calc(var(--header-height-desktop) + var(--space-sm))",
              paddingTop: "var(--space-lg)",
              paddingBottom: "var(--space-lg)",
            }}
            aria-label="Menu categories"
          >
            <ul className="space-y-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a
                  href="#rijsttafel"
                  className="flex items-center gap-2 px-3 py-2 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-caption)",
                    letterSpacing: "var(--tracking-caps)",
                    textTransform: "uppercase",
                    fontWeight: activeSection === "rijsttafel" ? 700 : 500,
                    color: activeSection === "rijsttafel" ? "var(--color-bandung-red)" : "var(--color-kecap)",
                    borderBottom: activeSection === "rijsttafel" ? "2px solid var(--color-kunyit)" : "2px solid transparent",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {activeSection === "rijsttafel" && (
                    <span className="shrink-0 rounded-full" style={{ width: 6, height: 6, backgroundColor: "var(--color-kunyit)" }} />
                  )}
                  Rijsttafel
                </a>
              </li>
              {activeSpecials.length > 0 && (
                <li>
                  <a
                    href="#specials"
                    className="flex items-center gap-2 px-3 py-2 transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-caption)",
                      letterSpacing: "var(--tracking-caps)",
                      textTransform: "uppercase",
                      fontWeight: activeSection === "specials" ? 700 : 500,
                      color: activeSection === "specials" ? "var(--color-kunyit)" : "var(--color-kecap)",
                      borderBottom: activeSection === "specials" ? "2px solid var(--color-kunyit)" : "2px solid transparent",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {activeSection === "specials" && (
                      <span className="shrink-0 rounded-full" style={{ width: 6, height: 6, backgroundColor: "var(--color-kunyit)" }} />
                    )}
                    Specials
                  </a>
                </li>
              )}
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeSection === cat.slug;
                return (
                  <li key={cat.slug}>
                    <a
                      href={`#${cat.slug}`}
                      className="flex items-center gap-2 px-3 py-2 transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-caption)",
                        letterSpacing: "var(--tracking-caps)",
                        textTransform: "uppercase",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "var(--color-daun)" : "var(--color-kecap)",
                        borderBottom: isActive ? "2px solid var(--color-kunyit)" : "2px solid transparent",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {isActive && (
                        <span className="shrink-0 rounded-full" style={{ width: 6, height: 6, backgroundColor: "var(--color-kunyit)" }} />
                      )}
                      {t(cat.name)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Categories content */}
        <div className="flex-1 min-w-0">
          {MENU_CATEGORIES.map((category) => {
            const visibleItems =
              view === "takeaway"
                ? category.items.filter((item) => item.priceTakeaway !== null)
                : category.items;

            if (visibleItems.length === 0) return null;

            return (
              <section
                key={category.slug}
                id={category.slug}
                style={{
                  padding: "var(--section-space-sm) 0",
                  borderBottom: "1px solid var(--color-rice-dark)",
                }}
              >
                <ScrollReveal>
                  <h2
                    className="mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h2)",
                      fontWeight: 500,
                      color: "var(--color-kecap)",
                    }}
                  >
                    {t(category.name)}
                  </h2>
                </ScrollReveal>

                <StaggerReveal
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6"
                  staggerDelay={0.06}
                >
                  {visibleItems.map((item) => {
                    const price = getPrice(
                      item.priceDineIn,
                      item.priceTakeaway
                    );

                    return (
                      <StaggerItem key={item.name}>
                        <div className="flex justify-between items-baseline gap-2 mb-1">
                          <h3
                            className="flex items-center gap-2"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--text-h4)",
                              fontWeight: 500,
                              color: "var(--color-kecap)",
                              marginBottom: 0,
                            }}
                          >
                            {item.name}
                            {item.vegetarian && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-daun)" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" /></svg>
                            )}
                            {item.spice && (
                              <span className="inline-flex gap-0.5" style={{ verticalAlign: "middle" }}>
                                {Array.from({ length: item.spice }).map((_, i) => (
                                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-bandung-red)"><path d="M12 2C11 2 10 3 10 4v1c-3 1-5 4-5 7 0 5 3 10 7 10s7-5 7-10c0-3-2-6-5-7V4c0-1-1-2-2-2z" /></svg>
                                ))}
                              </span>
                            )}
                          </h3>
                          {price && (
                            <span
                              className="shrink-0"
                              style={{
                                fontFamily: "var(--font-accent)",
                                fontSize: "var(--text-body-sm)",
                                color: "var(--color-daun)",
                                fontWeight: 600,
                              }}
                            >
                              {price}
                            </span>
                          )}
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            lineHeight: "var(--leading-body)",
                            color: "var(--color-kecap)",
                            opacity: 0.75,
                            marginBottom: 0,
                          }}
                        >
                          {t(item.desc)}
                        </p>
                        {view === "takeaway" && item.priceTakeaway && (
                          <div className="mt-2 flex justify-end">
                            <QuantityStepper
                              itemId={generateItemId(category.slug, item.name)}
                              itemName={item.name}
                              priceCents={parsePrice(item.priceTakeaway)}
                              itemType="menu"
                            />
                          </div>
                        )}
                      </StaggerItem>
                    );
                  })}
                </StaggerReveal>
              </section>
            );
          })}
        </div>
      </div>

      {/* Section 5: Menu Footer / Dietary Info */}
      <section
        style={{
          padding: "var(--section-space-sm) 0",
          backgroundColor: "var(--color-rice-dark)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-narrow)" }}
        >
          <h3
            className="text-center uppercase mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--color-kecap)",
            }}
          >
            {t({ nl: "Goed om te weten", en: "Good to know" })}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {MENU_FOOTER.legend.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 py-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-kecap)",
                }}
              >
                {item.type === "spice" ? (
                  <span className="inline-flex gap-0.5">
                    {Array.from({ length: item.level }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-bandung-red)"><path d="M12 2C11 2 10 3 10 4v1c-3 1-5 4-5 7 0 5 3 10 7 10s7-5 7-10c0-3-2-6-5-7V4c0-1-1-2-2-2z" /></svg>
                    ))}
                  </span>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-daun)"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" /></svg>
                )}
                <span>{t({ nl: item.nl, en: item.en })}</span>
              </div>
            ))}
          </div>

          <p
            className="text-center mb-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
          >
            {t(MENU_FOOTER.allergen)}
          </p>
          {view === "dine-in" && (
            <p
              className="text-center mb-2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                opacity: 0.7,
              }}
            >
              {t(MENU_FOOTER.rijsttafelNote)}
            </p>
          )}
          <p
            className="text-center mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              opacity: 0.7,
            }}
          >
            {t(MENU_FOOTER.takeawayNote)}
          </p>
          <div className="text-center">
            {view === "dine-in" ? (
              <Button href="/reserveren" variant="primary">
                {t(menuCopy.reserveCta)}
              </Button>
            ) : (
              <Button href="/menu?view=afhalen" variant="primary">
                {t(menuCopy.orderCta)}
              </Button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
