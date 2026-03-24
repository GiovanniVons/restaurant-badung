"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { CONTACT } from "@/data/copy";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { KawungDivider } from "@/components/KawungDivider";

const cateringCopy = {
  hero: {
    headline: { nl: "Catering & Groepen", en: "Catering & Groups" },
    sub: {
      nl: "De smaken van Bandung bij u op locatie.",
      en: "The flavours of Bandung at your venue.",
    },
  },
  intro: {
    heading: { nl: "Uw evenement, onze keuken", en: "Your event, our kitchen" },
    body: {
      nl: [
        "Voor bijzondere gelegenheden brengen we de keuken van Bandung naar u toe. Yana stelt een menu samen dat past bij uw groep, de gelegenheid en het seizoen. Alles wordt vers bereid met dezelfde zorg en kwaliteit als in ons restaurant.",
        "Steven co\u00F6rdineert de service zodat u zich nergens zorgen over hoeft te maken. Of het nu gaat om een bedrijfsfeest, een familiebijeenkomst of een cultureel evenement: wij verzorgen een tafel die indruk maakt.",
      ],
      en: [
        "For special occasions, we bring the kitchen of Bandung to you. Yana puts together a menu that suits your group, the occasion and the season. Everything is freshly prepared with the same care and quality as in our restaurant.",
        "Steven coordinates the service so you don't have to worry about a thing. Whether it's a corporate celebration, a family gathering or a cultural event: we set a table that leaves an impression.",
      ],
    },
  },
  events: {
    overline: {
      nl: "Voor elke gelegenheid",
      en: "For every occasion",
    },
    heading: {
      nl: "Wat voor evenement heeft u in gedachten?",
      en: "What kind of event do you have in mind?",
    },
    items: [
      {
        title: { nl: "Bedrijfsfeesten", en: "Corporate events" },
        desc: {
          nl: "Teamdiners, jubilea, eindejaarsborrels. Een rijsttafel of buffet brengt collega's samen op een manier die een reguliere catering niet kan.",
          en: "Team dinners, anniversaries, end-of-year celebrations. A rijsttafel or buffet brings colleagues together in a way regular catering cannot.",
        },
      },
      {
        title: { nl: "Familiebijeenkomsten", en: "Family gatherings" },
        desc: {
          nl: "Verjaardagen, bruiloften, reünies. Gerechten om te delen, net als thuis in Indonesi\u00EB. Van intiem tot groot, wij passen het menu aan.",
          en: "Birthdays, weddings, reunions. Dishes to share, just like home in Indonesia. From intimate to grand, we tailor the menu to fit.",
        },
      },
      {
        title: { nl: "Culturele evenementen", en: "Cultural events" },
        desc: {
          nl: "Festivals, lezingen, tentoonstellingen. Authentieke Indonesische smaken als onderdeel van uw programma. Wij denken mee over opzet en presentatie.",
          en: "Festivals, lectures, exhibitions. Authentic Indonesian flavours as part of your programme. We help plan the setup and presentation.",
        },
      },
    ],
  },
  steps: {
    overline: { nl: "Hoe het werkt", en: "How it works" },
    items: [
      {
        num: "1",
        title: { nl: "Neem contact op", en: "Get in touch" },
        desc: {
          nl: "Vertel ons over uw evenement: datum, aantal gasten, locatie en wensen.",
          en: "Tell us about your event: date, number of guests, location and preferences.",
        },
      },
      {
        num: "2",
        title: { nl: "Menu op maat", en: "Custom menu" },
        desc: {
          nl: "Yana stelt een menu samen dat past bij uw groep en gelegenheid. U ontvangt een offerte.",
          en: "Yana designs a menu that fits your group and occasion. You receive a quote.",
        },
      },
      {
        num: "3",
        title: { nl: "Wij verzorgen de rest", en: "We handle the rest" },
        desc: {
          nl: "Alles wordt vers bereid en op locatie geleverd. Steven co\u00F6rdineert, u geniet.",
          en: "Everything is freshly prepared and delivered on-site. Steven coordinates, you enjoy.",
        },
      },
    ],
  },
  info: {
    overline: { nl: "Praktische informatie", en: "Practical details" },
    items: [
      {
        label: { nl: "Minimum", en: "Minimum" },
        value: { nl: "30 personen", en: "30 persons" },
      },
      {
        label: { nl: "Termijn", en: "Notice" },
        value: { nl: "Minimaal 2 weken vooruit", en: "At least 2 weeks in advance" },
      },
      {
        label: { nl: "Prijs", en: "Pricing" },
        value: { nl: "Op maat, offerte op aanvraag", en: "Custom, quote on request" },
      },
      {
        label: { nl: "Gebied", en: "Area" },
        value: { nl: "Den Bosch en omstreken", en: "Den Bosch and surroundings" },
      },
    ],
  },
  cta: {
    heading: {
      nl: "Vertel ons over uw evenement",
      en: "Tell us about your event",
    },
    sub: {
      nl: "Bel of mail ons en we denken graag met u mee.",
      en: "Call or email us and we'll be happy to help you plan.",
    },
    email: { nl: "Stuur een e-mail", en: "Send an email" },
    phone: { nl: "Bel 073-820 09 43", en: "Call 073-820 09 43" },
  },
};

const galleryImages = [
  { src: "/images/rijsttafel-overhead.jpg", alt: "Rijsttafel van bovenaf" },
  { src: "/images/rijsttafel-branded-tray.jpg", alt: "Bandung serveerplateau" },
  { src: "/images/interior-main-dining.jpg", alt: "Restaurant interieur" },
];

export function CateringContent() {
  const { t, lang } = useLang();

  return (
    <div>
      {/* S1: Hero */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "50vh",
          marginTop: "-72px",
          paddingTop: "72px",
        }}
      >
        <Image
          src="/images/catering-buffet.jpg"
          alt="Catering buffet met Indonesische gerechten"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,20,16,0.45) 0%, rgba(26,20,16,0.75) 100%)",
          }}
        />
        <div className="relative z-10 px-6">
          <ScrollReveal>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 600,
                color: "var(--color-rice)",
                marginBottom: "var(--space-2xs)",
              }}
            >
              {t(cateringCopy.hero.headline)}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-rice)",
                opacity: 0.85,
              }}
            >
              {t(cateringCopy.hero.sub)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* S2: Introduction */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-narrow)" }}
        >
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
                marginBottom: "var(--space-md)",
              }}
            >
              {t(cateringCopy.intro.heading)}
            </h2>
          </ScrollReveal>
          {t(cateringCopy.intro.body).map((p, i) => (
            <ScrollReveal key={i} delay={0.08 * (i + 1)}>
              <p
                className="text-center"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-lg)",
                  lineHeight: "var(--leading-body-relaxed)",
                  color: "var(--color-kecap)",
                  opacity: 0.85,
                  marginBottom: "var(--space-sm)",
                }}
              >
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* S3: Event Types */}
      <section
        style={{
          padding: "var(--section-space-main) 0",
          backgroundColor: "var(--color-kecap)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-max-width)" }}
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
              {t(cateringCopy.events.overline)}
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-rice)",
                marginBottom: "var(--space-lg)",
              }}
            >
              {t(cateringCopy.events.heading)}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {cateringCopy.events.items.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div
                  className="p-6 rounded-sm h-full"
                  style={{
                    backgroundColor: "rgba(245,240,232,0.08)",
                    border: "1px solid rgba(245,240,232,0.15)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      fontWeight: 500,
                      color: "var(--color-rice)",
                      marginBottom: "var(--space-xs)",
                    }}
                  >
                    {t(item.title)}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--leading-body-relaxed)",
                      color: "var(--color-rice)",
                      opacity: 0.8,
                      marginBottom: 0,
                    }}
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S4: How It Works */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <ScrollReveal>
            <p
              className="text-center uppercase mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-overline)",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--color-daun)",
              }}
            >
              {t(cateringCopy.steps.overline)}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {cateringCopy.steps.items.map((step, i) => (
              <ScrollReveal key={i} delay={0.12 * i}>
                <div className="text-center">
                  <div
                    className="mx-auto mb-4 flex items-center justify-center rounded-full"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "var(--color-kunyit)",
                      color: "var(--color-kecap)",
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      fontWeight: 600,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h4)",
                      fontWeight: 500,
                      color: "var(--color-kecap)",
                      marginBottom: "var(--space-2xs)",
                    }}
                  >
                    {t(step.title)}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--leading-body)",
                      color: "var(--color-kecap)",
                      opacity: 0.75,
                      marginBottom: i === 0 ? "var(--space-xs)" : 0,
                    }}
                  >
                    {t(step.desc)}
                  </p>
                  {i === 0 && (
                    <Button href="/reserveren" variant="secondary" size="sm">
                      {lang === "nl" ? "Neem contact op" : "Get in touch"}
                    </Button>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <KawungDivider />

      {/* S5: Practical Info */}
      <section
        style={{
          padding: "var(--section-space-sm) 0",
          backgroundColor: "var(--color-rice-dark)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <ScrollReveal>
            <p
              className="text-center uppercase mb-8"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-overline)",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--color-daun)",
              }}
            >
              {t(cateringCopy.info.overline)}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cateringCopy.info.items.map((item, i) => (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div className="text-center">
                  <p
                    className="uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-caption)",
                      letterSpacing: "var(--tracking-caps)",
                      color: "var(--color-daun)",
                      fontWeight: 600,
                    }}
                  >
                    {t(item.label)}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body)",
                      color: "var(--color-kecap)",
                      fontWeight: 600,
                      marginBottom: 0,
                    }}
                  >
                    {t(item.value)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S6: Image Strip */}
      <section style={{ padding: "var(--section-space-sm) 0" }}>
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S7: CTA Band */}
      <section
        style={{
          padding: "var(--section-space-main) 0",
          backgroundColor: "var(--color-daun)",
        }}
      >
        <div
          className="mx-auto px-6 text-center"
          style={{ maxWidth: "var(--content-narrow)" }}
        >
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-rice)",
                marginBottom: "var(--space-xs)",
              }}
            >
              {t(cateringCopy.cta.heading)}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-rice)",
                opacity: 0.85,
                marginBottom: "var(--space-md)",
              }}
            >
              {t(cateringCopy.cta.sub)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={`mailto:${CONTACT.email}?subject=Catering`} variant="primary">
                {t(cateringCopy.cta.email)}
              </Button>
              <Button href={`tel:${CONTACT.phoneTel}`} variant="secondary-light">
                {t(cateringCopy.cta.phone)}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-[60px] md:hidden" />
    </div>
  );
}
