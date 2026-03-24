"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { CONTACT } from "@/data/copy";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { KawungDivider } from "@/components/KawungDivider";

const storyCopy = {
  heroHeadline: { nl: "Van Bandung naar Den Bosch", en: "From Bandung to Den Bosch" },
  origin: {
    nl: [
      "In 2016 openden Yana en Steven de deuren van een klein restaurant aan de Hinthamereinde in Den Bosch. Veertig stoelen, een open keuken en een naam die Yana meedroeg vanuit huis: Bandung.",
      "Bandung is de hoofdstad van West-Java, ook wel \"Parijs van Java\" genoemd. Het is de stad waar Yana opgroeide, waar ze leerde koken in de keuken van haar moeder en waar de smaken van de Sundanese keuken haar tweede natuur werden.",
      "Die keuken is anders dan wat je in de meeste Indonesische restaurants in Nederland vindt. Sundanese gerechten zijn geurig, gevarieerd en vaak lichter dan de pan-Indonesische standaard. Verse kruiden in plaats van alleen gedroogde. Kokos die traag inkookt tot de saus droog en intens is. Sambal die per gerecht verschilt, niet uit een pot komt.",
      "Steven runt de zaak samen met Yana. Hij staat aan de voorkant, ontvangt gasten, onthoud namen en drinkt soms een glas mee. Het restaurant is klein genoeg dat elke tafel aandacht krijgt, en dat is precies de bedoeling.",
    ],
    en: [
      "In 2016, Yana and Steven opened the doors of a small restaurant on Hinthamereinde in Den Bosch. Forty seats, an open kitchen, and a name Yana carried with her from home: Bandung.",
      "Bandung is the capital of West Java, also known as \"the Paris of Java.\" It is the city where Yana grew up, where she learned to cook in her mother's kitchen, and where the flavours of Sundanese cuisine became second nature.",
      "That cuisine is different from what you find in most Indonesian restaurants in the Netherlands. Sundanese dishes are fragrant, varied and often lighter than the pan-Indonesian standard. Fresh herbs rather than only dried. Coconut that reduces slowly until the sauce is dry and intense. Sambal that varies per dish, not from a jar.",
      "Steven runs the restaurant alongside Yana. He is at the front, welcoming guests, remembering names, sometimes sharing a glass. The restaurant is small enough that every table gets attention, and that is exactly the point.",
    ],
  },
  kitchenHeadline: { nl: "Recepten van thuis", en: "Recipes from home" },
  kitchen: {
    nl: [
      "De recepten in onze keuken komen niet uit een kookboek. Ze komen van Yana's moeder, van tantes en buurvrouwen in Bandung, van een traditie die mondeling wordt doorgegeven en per huishouden net iets anders smaakt.",
      "Rendang begint hier met vers gemalen kruiden. Kurkuma, laos, citroengras en rode peper, gestampt in een vijzel tot een gladde pasta. Het vlees stooft uren mee in kokosmelk tot het vocht verdampt is en alleen de geconcentreerde smaak overblijft. Dat kost tijd. Wij nemen die tijd.",
      "De pindasaus voor de gado-gado malen we zelf. De sambal maakt Yana per dag vers. De kroepoek bakken we in eigen olie. Niet omdat het ingewikkeld moet zijn, maar omdat het zo lekkerder is.",
    ],
    en: [
      "The recipes in our kitchen do not come from a cookbook. They come from Yana's mother, from aunties and neighbours in Bandung, from a tradition passed on by word of mouth that tastes just a little different in every household.",
      "Rendang here starts with freshly ground spices. Turmeric, galangal, lemongrass and red chilli, pounded in a mortar until smooth. The beef braises for hours in coconut milk until the liquid evaporates and only the concentrated flavour remains. That takes time. We take that time.",
      "We grind the peanut sauce for the gado-gado ourselves. Yana makes the sambal fresh every day. We fry the prawn crackers in our own oil. Not because it needs to be complicated, but because it simply tastes better that way.",
    ],
  },
  rijsttafelHeadline: { nl: "De rijsttafel: meer dan een maaltijd", en: "The rijsttafel: more than a meal" },
  rijsttafel: {
    nl: "De rijsttafel ontstond als een manier om de rijkdom van de Indonesische keuken in \u00E9\u00E9n zitting te ervaren. Niet \u00E9\u00E9n gerecht, maar een heel landschap van smaken, van mild tot pittig, van romig tot krokant, met rijst als middelpunt.\n\nBij Bandung serveren we rijsttafels van acht tot achttien gerechten. De samenstelling wisselt met wat vers en goed is. Elke schotel heeft een eigen rol: de rendang brengt diepte, de sat\u00E9 brengt rokerigheid, de sayur lodeh brengt zachtheid, de sambal brengt vuur. Samen vormen ze een compleet verhaal.",
    en: "The rijsttafel originated as a way to experience the richness of Indonesian cuisine in a single sitting. Not one dish, but an entire landscape of flavours, from mild to fiery, from creamy to crispy, with rice at the centre.\n\nAt Bandung, we serve rijsttafel options from eight to eighteen dishes. The selection changes with what is fresh and at its best. Every dish has its own role: the rendang brings depth, the satay brings smokiness, the sayur lodeh brings softness, the sambal brings fire. Together they form a complete story.",
  },
  rijsttafelCta: { nl: "Bekijk de rijsttafel", en: "See the rijsttafel" },
  socialProof: {
    headline: { nl: "Wat gasten over ons zeggen", en: "What guests say about us" },
    quotes: [
      {
        text: { nl: "\u201CYana en Steven onthouden je naam. Dat merk je al bij de eerste keer. Bij de derde keer weet Steven wat je drinkt.\u201D", en: "\u201CYana and Steven remember your name. You notice it the first time. By the third visit, Steven knows what you drink.\u201D" },
        source: "TripAdvisor \u00B7 \u2605\u2605\u2605\u2605\u2605",
      },
      {
        text: { nl: "\u201CDe beste rendang die ik in Nederland heb gegeten. Punt.\u201D", en: "\u201CThe best rendang I've had in the Netherlands. Full stop.\u201D" },
        source: "Google Reviews \u00B7 \u2605\u2605\u2605\u2605\u2605",
      },
      {
        text: { nl: "\u201CWe komen hier al jaren. Het is ons vaste adres voor verjaardagen en familiedineetjes.\u201D", en: "\u201CWe've been coming here for years. It's our go-to for birthdays and family dinners.\u201D" },
        source: "Google Reviews \u00B7 \u2605\u2605\u2605\u2605\u2605",
      },
    ],
    cta: { nl: "Lees meer beoordelingen", en: "Read more reviews" },
  },
  visitCta: {
    heading: { nl: "Kom het zelf proeven", en: "Come taste for yourself" },
    cta: { nl: "Reserveer een tafel", en: "Reserve a table" },
  },
};

export function OnsVerhaalContent() {
  const { t } = useLang();

  return (
    <div>
      {/* Section 1: Story Hero */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "50vh", marginTop: "-72px", paddingTop: "72px" }}
      >
        <Image
          src="/images/gedung-sate-bandung.jpg"
          alt="Bandung, West-Java"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,20,16,0.5) 0%, rgba(26,20,16,0.75) 100%)" }} />

        <div className="relative z-10 px-6">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h1)",
              fontWeight: 600,
              color: "var(--color-rice)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            {t(storyCopy.heroHeadline)}
          </h1>
        </div>
      </section>

      {/* Section 2: Origin Story */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-12 items-start" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <div className="relative aspect-[3/4] max-h-[300px] md:max-h-none rounded-sm overflow-hidden">
              <Image
                src="/images/interior-bar-area.jpg"
                alt="Interieur Restaurant Indonesia Bandung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              {t(storyCopy.origin).map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-lg)",
                    lineHeight: "var(--leading-body-relaxed)",
                    color: "var(--color-kecap)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Kitchen Tradition */}
      <section style={{ padding: "var(--section-space-main) 0", backgroundColor: "var(--color-rice-dark)" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-narrow)" }}>
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
              {t(storyCopy.kitchenHeadline)}
            </h2>
          </ScrollReveal>
          {t(storyCopy.kitchen).map((p, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-lg)",
                  lineHeight: "var(--leading-body-relaxed)",
                  color: "var(--color-kecap)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section 4: Atmosphere Grid */}
      <section style={{ padding: "var(--section-space-sm) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/images/rijsttafel-serving-hands.jpg", alt: "Serveren van de rijsttafel" },
              { src: "/images/interior-main-dining.jpg", alt: "Eetzaal" },
              { src: "/images/rijsttafel-branded-tray.jpg", alt: "Gerechten op dienblad" },
              { src: "/images/interior-back-room.jpg", alt: "Achterzaal" },
              { src: "/images/es-cendol-dessert.jpg", alt: "Es Cendol dessert" },
              { src: "/images/catering-buffet.jpg", alt: "Catering buffet" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="relative aspect-square rounded-sm overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <KawungDivider />

      {/* Section 5: Rijsttafel Tradition */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "var(--section-space-main) 0" }}
      >
        {/* Wow moment: batik watermark */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-80 h-80 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `repeating-conic-gradient(var(--color-kecap) 0% 25%, transparent 0% 50%)`,
            backgroundSize: "40px 40px",
            borderRadius: "50%",
          }}
        />

        <div className="mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h2)",
                  fontWeight: 500,
                  color: "var(--color-kecap)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {t(storyCopy.rijsttafelHeadline)}
              </h2>
              {t(storyCopy.rijsttafel).split("\n\n").map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body-relaxed)",
                    color: "var(--color-kecap)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {p}
                </p>
              ))}
              <Button href="/menu#rijsttafel" variant="secondary">
                {t(storyCopy.rijsttafelCta)}
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/rijsttafel-overhead.jpg"
                alt="Rijsttafel van bovenaf"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Social Proof */}
      <section style={{ padding: "var(--section-space-main) 0", backgroundColor: "var(--color-daun)" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-narrow)" }}>
          <ScrollReveal>
            <h2
              className="text-center mb-10"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 500, color: "var(--color-rice)" }}
            >
              {t(storyCopy.socialProof.headline)}
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {storyCopy.socialProof.quotes.map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <blockquote className="text-center">
                  <p
                    className="italic"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h4)",
                      fontWeight: 400,
                      lineHeight: "var(--leading-relaxed)",
                      color: "var(--color-rice)",
                      marginBottom: "var(--space-xs)",
                    }}
                  >
                    {t(q.text)}
                  </p>
                  <cite
                    className="not-italic"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "var(--text-caption)",
                      letterSpacing: "var(--tracking-caps)",
                      color: "var(--color-kunyit)",
                    }}
                  >
                    {q.source}
                  </cite>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <Button href={CONTACT.tripadvisor} variant="secondary-light" external>
              {t(storyCopy.socialProof.cta)} &rarr;
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "var(--section-space-lg) 0" }}
      >
        <Image
          src="/images/rijsttafel-candlelit.jpg"
          alt="Sfeerbeeld restaurant"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,20,16,0.85), rgba(26,20,16,0.6))" }} />
        <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: "var(--content-narrow)" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 600,
                color: "var(--color-rice)",
                marginBottom: "var(--space-md)",
              }}
            >
              {t(storyCopy.visitCta.heading)}
            </h2>
            <Button href="/reserveren" variant="primary" size="lg">
              {t(storyCopy.visitCta.cta)}
            </Button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
