"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { CONTACT } from "@/data/copy";
import { HOURS } from "@/data/hours";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

const reserveCopy = {
  heading: { nl: "Contact & Reserveren", en: "Contact & Reserve" },
  sub: { nl: "Een tafel reserveren of liever afhalen? Wij helpen je graag.", en: "Want to reserve a table or prefer pickup? We're happy to help." },
  reserveCard: {
    label: { nl: "Reserveer een tafel", en: "Reserve a table" },
    body: { nl: "Bel ons direct om een tafel te reserveren.", en: "Call us directly to reserve a table." },
    cta: { nl: "Bel nu", en: "Call now" },
  },
  orderCard: {
    label: { nl: "Online Afhalen", en: "Pickup Online" },
    body: { nl: "Kies je gerechten online en haal ze af in het restaurant.", en: "Choose your dishes online and pick them up at the restaurant." },
    cta: { nl: "Bekijk de afhaalkaart", en: "See the pickup menu" },
  },
  hoursHeading: { nl: "Openingstijden", en: "Opening hours" },
  weekendNote: { nl: "Zaterdag & zondag al open vanaf 12:00!", en: "Saturday & Sunday open from 12:00!" },
  holidayNote: { nl: "Tijdens feestdagen kunnen openingstijden afwijken.", en: "Opening hours may vary during holidays." },
  closed: { nl: "Gesloten", en: "Closed" },
  takeaway: {
    heading: { nl: "Afhalen", en: "Pickup" },
    body: {
      nl: "Bijna alle gerechten van onze kaart zijn beschikbaar om af te halen. Bestel online, kies je afhaaltijd en haal je bestelling op in het restaurant.",
      en: "Almost all dishes from our menu are available for pickup. Order online, choose your pickup time and collect your order at the restaurant.",
    },
    dineInNote: { nl: "De rijsttafel is alleen beschikbaar voor dine-in.", en: "The rijsttafel is only available for dine-in." },
    pricingNote: { nl: "Afhaalprijzen kunnen afwijken van dine-in prijzen.", en: "Takeaway prices may differ from dine-in prices." },
    cta: { nl: "Bekijk de afhaalkaart", en: "See the pickup menu" },
  },
  catering: {
    heading: { nl: "Catering & Groepen", en: "Catering & Groups" },
    body: {
      nl: "Voor groepen vanaf 30 personen verzorgen we op maat samengestelde menu's. Denk aan bedrijfsfeesten, familiebijeenkomsten of culturele evenementen. Neem minimaal twee weken van tevoren contact op, dan stellen Yana en Steven een menu samen dat past bij jullie groep en gelegenheid.",
      en: "For groups of 30 or more, we create custom menus tailored to your event. Think corporate celebrations, family gatherings or cultural events. Get in touch at least two weeks in advance, and Yana and Steven will put together a menu that fits your group and occasion.",
    },
    cta: { nl: "Meer over catering", en: "More about catering" },
  },
  location: {
    heading: { nl: "Waar je ons vindt", en: "Where to find us" },
    mapLink: { nl: "Open in Google Maps", en: "Open in Google Maps" },
  },
  contact: {
    heading: { nl: "Stuur ons een bericht", en: "Send us a message" },
    name: { nl: "Naam", en: "Name" },
    namePlaceholder: { nl: "Jouw naam", en: "Your name" },
    email: { nl: "E-mail", en: "Email" },
    emailPlaceholder: { nl: "jouwmail@voorbeeld.nl", en: "youremail@example.com" },
    phone: { nl: "Telefoon", en: "Phone" },
    optional: { nl: "(optioneel)", en: "(optional)" },
    subject: { nl: "Onderwerp", en: "Subject" },
    subjectOptions: {
      nl: ["Reservering", "Catering", "Afhalen", "Overig"] as string[],
      en: ["Reservation", "Catering", "Takeaway", "Other"] as string[],
    },
    message: { nl: "Bericht", en: "Message" },
    messagePlaceholder: { nl: "Waar kunnen we je mee helpen?", en: "How can we help?" },
    submit: { nl: "Verstuur bericht", en: "Send message" },
  },
};

const subjectCards = [
  {
    value: "reservation",
    nl: "Reservering",
    en: "Reservation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    value: "catering",
    nl: "Catering",
    en: "Catering",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z" />
        <path d="M2 12h20" />
        <path d="M12 4V2" />
      </svg>
    ),
  },
  {
    value: "pickup",
    nl: "Afhalen",
    en: "Pickup",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    value: "other",
    nl: "Overig",
    en: "Other",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
] as const;

export function ReserverenContent() {
  const { t, lang } = useLang();
  const [selectedSubject, setSelectedSubject] = useState("");

  const todayIndex = new Date().getDay();
  const mappedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <div>
      {/* Section 1: Page Header + Cards */}
      <section
        style={{
          marginTop: "-72px",
          paddingTop: "calc(72px + var(--section-space-sm))",
          paddingBottom: "var(--section-space-sm)",
          backgroundColor: "var(--color-daun)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h1
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 600,
                color: "var(--color-rice)",
                marginBottom: "var(--space-xs)",
              }}
            >
              {t(reserveCopy.heading)}
            </h1>
            <p
              className="text-center mb-10"
              style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "var(--color-rice)", opacity: 0.85 }}
            >
              {t(reserveCopy.sub)}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Reservation card */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-sm" style={{ backgroundColor: "rgba(245,240,232,0.1)", border: "1px solid rgba(245,240,232,0.2)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 500, color: "var(--color-rice)", marginBottom: "var(--space-2xs)" }}>
                  {t(reserveCopy.reserveCard.label)}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-rice)", opacity: 0.8, marginBottom: "var(--space-xs)" }}>
                  {t(reserveCopy.reserveCard.body)}
                </p>
                <p className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 500, color: "var(--color-rice)" }}>
                  {CONTACT.phone}
                </p>
                <Button href={`tel:${CONTACT.phoneTel}`} variant="primary">
                  {t(reserveCopy.reserveCard.cta)}
                </Button>
              </div>
            </ScrollReveal>

            {/* Ordering card */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-sm" style={{ backgroundColor: "rgba(245,240,232,0.1)", border: "1px solid rgba(245,240,232,0.2)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 500, color: "var(--color-rice)", marginBottom: "var(--space-2xs)" }}>
                  {t(reserveCopy.orderCard.label)}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-rice)", opacity: 0.8, marginBottom: "var(--space-sm)" }}>
                  {t(reserveCopy.orderCard.body)}
                </p>
                <Button href="/menu" variant="secondary-light">
                  {t(reserveCopy.orderCard.cta)}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Info Grid (Hours + Contact Form) */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6 grid md:grid-cols-2 gap-12" style={{ maxWidth: "var(--content-max-width)" }}>
          {/* Hours */}
          <ScrollReveal>
            <div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 500, color: "var(--color-kecap)" }}
              >
                {t(reserveCopy.hoursHeading)}
              </h2>
              <table className="w-full" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)" }}>
                <tbody>
                  {HOURS.map((day, i) => {
                    const isToday = i === mappedToday;
                    return (
                      <tr
                        key={i}
                        className="border-b"
                        style={{
                          borderColor: "var(--color-rice-dark)",
                          backgroundColor: isToday ? "var(--hours-today-bg)" : "transparent",
                          borderLeft: isToday ? "3px solid var(--color-kunyit)" : "3px solid transparent",
                        }}
                      >
                        <td
                          className="py-4 pr-4"
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            fontWeight: isToday ? 700 : 500,
                            letterSpacing: "var(--tracking-wider)",
                            textTransform: "uppercase",
                            color: "var(--color-kecap)",
                          }}
                        >
                          {t(day.day)}
                          {isToday && (
                            <span
                              className="ml-2 inline-block w-2 h-2 rounded-full"
                              style={{ backgroundColor: day.open ? "var(--color-daun)" : "var(--color-bandung-red)" }}
                            />
                          )}
                        </td>
                        <td
                          className="py-4 text-right"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body)",
                            color: day.open ? "var(--color-kecap)" : "var(--color-bandung-red)",
                          }}
                        >
                          {day.open ? `${day.open}\u2013${day.close}` : t(reserveCopy.closed)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-daun)", fontWeight: 600 }}>
                {t(reserveCopy.weekendNote)}
              </p>
              <p className="mt-1 opacity-70" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)" }}>
                {t(reserveCopy.holidayNote)}
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.15}>
            <div>
              <h2
                className="mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 500, color: "var(--color-kecap)" }}
              >
                {t(reserveCopy.contact.heading)}
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="contact-name" className="block mb-1 font-medium" style={{ fontSize: "var(--text-body-sm)" }}>{t(reserveCopy.contact.name)}</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder={t(reserveCopy.contact.namePlaceholder)}
                    className="w-full px-4 rounded-sm border transition-colors"
                    style={{
                      height: "var(--field-height)",
                      borderColor: "var(--field-border)",
                      backgroundColor: "var(--field-bg)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block mb-1 font-medium" style={{ fontSize: "var(--text-body-sm)" }}>{t(reserveCopy.contact.email)}</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder={t(reserveCopy.contact.emailPlaceholder)}
                    className="w-full px-4 rounded-sm border transition-colors"
                    style={{
                      height: "var(--field-height)",
                      borderColor: "var(--field-border)",
                      backgroundColor: "var(--field-bg)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block mb-1 font-medium" style={{ fontSize: "var(--text-body-sm)" }}>
                    {t(reserveCopy.contact.phone)} <span className="opacity-60">{t(reserveCopy.contact.optional)}</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="w-full px-4 rounded-sm border transition-colors"
                    style={{
                      height: "var(--field-height)",
                      borderColor: "var(--field-border)",
                      backgroundColor: "var(--field-bg)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                    }}
                  />
                </div>
                <fieldset>
                  <legend className="block mb-2 font-medium" style={{ fontSize: "var(--text-body-sm)" }}>{t(reserveCopy.contact.subject)}</legend>
                  <input type="hidden" name="subject" value={selectedSubject} />
                  <div className="grid grid-cols-2 gap-2">
                    {subjectCards.map((card) => {
                      const isActive = selectedSubject === card.value;
                      return (
                        <label
                          key={card.value}
                          className="flex flex-col items-center gap-1 rounded-sm border-2 transition-colors cursor-pointer"
                          style={{
                            padding: "var(--space-xs) var(--space-2xs)",
                            borderColor: isActive ? "var(--color-daun)" : "var(--field-border)",
                            backgroundColor: isActive ? "rgba(45, 106, 79, 0.06)" : "var(--field-bg)",
                            color: isActive ? "var(--color-daun)" : "var(--color-kecap)",
                          }}
                        >
                          <input
                            type="radio"
                            name="subject-radio"
                            value={card.value}
                            checked={isActive}
                            onChange={() => setSelectedSubject(card.value)}
                            className="sr-only"
                          />
                          <span style={{ color: isActive ? "var(--color-daun)" : "var(--color-kecap)", opacity: isActive ? 1 : 0.5 }}>
                            {card.icon}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontSize: "var(--text-caption)",
                              fontWeight: isActive ? 700 : 500,
                              letterSpacing: "var(--tracking-wider)",
                              textTransform: "uppercase",
                            }}
                          >
                            {lang === "nl" ? card.nl : card.en}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="contact-message" className="block mb-1 font-medium" style={{ fontSize: "var(--text-body-sm)" }}>{t(reserveCopy.contact.message)}</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder={t(reserveCopy.contact.messagePlaceholder)}
                    className="w-full px-4 py-3 rounded-sm border transition-colors resize-y"
                    style={{
                      borderColor: "var(--field-border)",
                      backgroundColor: "var(--field-bg)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                    }}
                  />
                </div>
                <Button variant="primary">{t(reserveCopy.contact.submit)}</Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Catering teaser */}
      <section style={{ padding: "var(--section-space-sm) 0", backgroundColor: "var(--color-rice-dark)" }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 500, color: "var(--color-kecap)", marginBottom: "var(--space-2xs)" }}>
              {t(reserveCopy.catering.heading)}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-kecap)", opacity: 0.8, marginBottom: "var(--space-sm)" }}>
              {t(reserveCopy.catering.body)}
            </p>
            <Button href="/catering" variant="secondary">
              {t(reserveCopy.catering.cta)}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Map + Directions */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h2
              className="mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 500, color: "var(--color-kecap)" }}
            >
              {t(reserveCopy.location.heading)}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
            <ScrollReveal>
              <div>
                <address className="not-italic mb-6" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-body-relaxed)" }}>
                  <p className="font-semibold" style={{ color: "var(--color-kecap)" }}>Restaurant Indonesia Bandung</p>
                  <p>{CONTACT.address}</p>
                  <p>{CONTACT.postcode}</p>
                  <p className="mt-2">
                    <a href={`tel:${CONTACT.phoneTel}`} style={{ color: "var(--color-daun)" }}>{CONTACT.phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${CONTACT.email}`} style={{ color: "var(--color-daun)" }}>{CONTACT.email}</a>
                  </p>
                </address>
                <Button href={CONTACT.googleMaps} variant="secondary" external>
                  {t(reserveCopy.location.mapLink)} &rarr;
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="relative rounded-sm overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  border: "3px solid var(--color-daun)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.5!2d5.3063!3d51.6894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ef0000000000%3A0x0!2sHinthamereinde+34%2C+5211+PN+%27s-Hertogenbosch!5e0!3m2!1sen!2snl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Indonesia Bandung location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Takeaway info */}
      <section style={{ padding: "var(--section-space-sm) 0", backgroundColor: "var(--color-kecap)" }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 500, color: "var(--color-rice)", marginBottom: "var(--space-xs)" }}>
            {t(reserveCopy.takeaway.heading)}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-rice)", opacity: 0.85, marginBottom: "var(--space-xs)" }}>
            {t(reserveCopy.takeaway.body)}
          </p>
          <p className="mb-1" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-rice)", opacity: 0.65 }}>
            {t(reserveCopy.takeaway.dineInNote)}
          </p>
          <p className="mb-6" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-rice)", opacity: 0.65 }}>
            {t(reserveCopy.takeaway.pricingNote)}
          </p>
          <Button href="/menu?view=afhalen" variant="primary">
            {t(reserveCopy.takeaway.cta)}
          </Button>
        </div>
      </section>

      <div className="h-[60px] md:hidden" />
    </div>
  );
}
