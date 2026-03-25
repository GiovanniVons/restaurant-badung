"use client";

import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { KawungDivider } from "@/components/KawungDivider";
import { Button } from "@/components/Button";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const problems = [
  {
    stat: "Traag",
    label: "op mobiel",
    desc: "Uw site draait op WordPress met 6+ externe scripts die tegelijk laden. Gasten op hun telefoon wachten te lang en gaan naar een concurrent.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    stat: "Onzichtbaar",
    label: "voor Google",
    desc: "Geen beschrijving, geen restaurantgegevens voor Google, geen deelbare voorbeelden op WhatsApp of Facebook. Wie u zoekt, vindt u niet. Of ziet een kale link.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    stat: "Geen",
    label: "privacy-compliance",
    desc: "Geen cookiebanner en geen privacybeleid. Dat is een AVG-overtreding. Bezoekers zien dat, en het schaadt het vertrouwen in uw zaak.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: "PNG",
    label: "als maandmenu",
    desc: "Het menu is een plaatje. Gasten kunnen niet scrollen, niet zoeken, en op mobiel is het onleesbaar. Ze bellen liever dan bestellen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    stat: "Geen",
    label: "inzicht in bezoekers",
    desc: "Er draait geen analytics. U weet niet hoeveel mensen uw site bezoeken, waar ze afhaken, of welke gerechten het meest bekeken worden.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    stat: "< 2s",
    label: "laadtijd",
    desc: "Uw site laadt in minder dan 2 seconden, ook op mobiel. Gasten die onderweg zoeken naar 'Indonesisch eten Den Bosch' zien uw site direct. Geen wachttijd, geen afhakers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    stat: "Vindbaar",
    label: "in Google en AI-zoekmachines",
    desc: "Openingstijden, reviews, menu en adres verschijnen direct in Google. Links gedeeld via WhatsApp tonen een mooie preview met afbeelding. Toeristen vinden u in het Engels.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    stat: "Compliant",
    label: "privacy en cookiebeheer",
    desc: "Cookiebanner en privacybeleid inbegrepen via Vonzie Nexus. Uw zaak voldoet aan de AVG, en bezoekers zien dat u hun privacy serieus neemt.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: "Digitaal",
    label: "menu + bestellen",
    desc: "Gasten bladeren door het menu op hun telefoon en bestellen direct voor afhaal. Geen telefoontje nodig. U past prijzen en gerechten zelf aan, wanneer u wilt.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    stat: "Inzicht",
    label: "in uw bezoekers",
    desc: "U ziet precies hoeveel mensen uw site bezoeken, welke pagina's populair zijn en waar gasten afhaken. Reserveringen lopen via Remesa, inbegrepen in uw abonnement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "< 2s", label: "Laadtijd op mobiel" },
  { value: "NL + EN", label: "Tweetalig voor toeristen" },
  { value: "8", label: "Pagina's, altijd online" },
  { value: "0", label: "Externe partijen met uw data" },
];

const scores = [
  { label: "Snelheid", before: 46, after: 90 },
  { label: "Toegankelijkheid", before: 80, after: 96 },
  { label: "Techniek", before: 73, after: 92 },
  { label: "Vindbaarheid", before: 92, after: 100 },
];

function ScoreRing({ value, size = 80, color }: { value: number; size?: number; color: string }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        opacity={0.1}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: size * 0.3,
          fontWeight: 600,
        }}
      >
        {value}
      </text>
    </svg>
  );
}

const suiteFeatures = [
  {
    title: "Website op maat",
    desc: "Snel, tweetalig en gebouwd voor uw zaak. Geen template.",
  },
  {
    title: "Remesa reserveringen",
    desc: "Gasten boeken direct via uw site. Geen commissie, geen tussenpersoon.",
  },
  {
    title: "Vonzie Nexus (AVG)",
    desc: "Cookiebanner en privacybeleid, automatisch bijgewerkt.",
  },
  {
    title: "Hosting & onderhoud",
    desc: "Altijd online, altijd snel. Updates en beveiliging inbegrepen.",
  },
  {
    title: "Analytics",
    desc: "Inzicht in bezoekers, populaire pagina's en reserveringen.",
  },
  {
    title: "SEO-optimalisatie",
    desc: "Vindbaar in Google, AI-zoekmachines en op sociale media.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export function PitchContent() {
  return (
    <div>
      {/* S1: Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--color-kecap)",
          color: "var(--color-rice)",
        }}
      >
        <ScrollReveal>
          <p
            className="uppercase mb-4"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--color-kunyit)",
            }}
          >
            Restaurant Indonesia Bandung
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 500,
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-rice)",
              marginBottom: "var(--space-sm)",
            }}
          >
            Uw nieuwe website
            <br />
            is klaar.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              lineHeight: "var(--leading-body-relaxed)",
              color: "var(--color-rice)",
              opacity: 0.7,
              maxWidth: "520px",
            }}
          >
            Van WordPress-template naar een op maat gemaakte website die uw keuken eer aandoet.
          </p>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12" style={{ opacity: 0.4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-rice)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </ScrollReveal>
      </section>

      {/* Kawung divider */}
      <KawungDivider variant="light" />

      {/* S2: What We Found */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: "var(--color-rice)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <p
              className="text-center uppercase mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-overline)",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--color-bandung-red)",
              }}
            >
              Wat we zagen
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
                marginBottom: "var(--space-lg)",
              }}
            >
              Wat u nu misloopt
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {problems.map((item) => (
              <StaggerItem key={item.label}>
                <div
                  className="p-6 rounded-sm h-full"
                  style={{
                    border: "1px solid var(--color-rice-dark)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 flex items-center justify-center rounded-sm"
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: "var(--color-rice-dark)",
                        color: "var(--color-bandung-red)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-h3)",
                            fontWeight: 600,
                            color: "var(--color-bandung-red)",
                          }}
                        >
                          {item.stat}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--color-kecap)",
                            opacity: 0.6,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-body-sm)",
                          lineHeight: "var(--leading-body)",
                          color: "var(--color-kecap)",
                          opacity: 0.75,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Kawung divider on dark */}
      <div style={{ backgroundColor: "var(--color-daun)" }}>
        <KawungDivider variant="dark" />
      </div>

      {/* S3: What We Built */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: "var(--color-daun)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
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
              Wat we voor u regelden
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
              Meer gasten, minder gedoe
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {solutions.map((item) => (
              <StaggerItem key={item.label}>
                <div
                  className="p-6 rounded-sm h-full"
                  style={{
                    border: "1px solid rgba(245,240,232,0.15)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 flex items-center justify-center rounded-sm"
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: "rgba(245,240,232,0.1)",
                        color: "var(--color-kunyit)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-h3)",
                            fontWeight: 600,
                            color: "var(--color-rice)",
                          }}
                        >
                          {item.stat}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--color-rice)",
                            opacity: 0.5,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-body-sm)",
                          lineHeight: "var(--leading-body)",
                          color: "var(--color-rice)",
                          opacity: 0.7,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Kawung divider */}
      <KawungDivider variant="light" />

      {/* S4: Before / After Scores */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: "var(--color-rice)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <p
              className="text-center uppercase mb-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-overline)",
                letterSpacing: "var(--tracking-widest)",
                color: "var(--color-bandung-red)",
              }}
            >
              Het verschil
            </p>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
                marginBottom: "var(--space-lg)",
              }}
            >
              Oud vs. nieuw
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {scores.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-caption)",
                    letterSpacing: "var(--tracking-caps)",
                    textTransform: "uppercase",
                    color: "var(--color-kecap)",
                    opacity: 0.5,
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {s.label}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div style={{ opacity: 0.4 }}>
                    <ScoreRing value={s.before} size={72} color="var(--color-kecap)" />
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-kecap)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <ScoreRing value={s.after} size={72} color="var(--color-daun)" />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal delay={0.3}>
            <p
              className="text-center mt-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-kecap)",
                opacity: 0.45,
              }}
            >
              Scores via Google Lighthouse (0-100). Hoe hoger, hoe beter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kawung divider on dark */}
      <div style={{ backgroundColor: "var(--color-kecap)" }}>
        <KawungDivider variant="dark" />
      </div>

      {/* S5: What's Included */}
      <section
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: "var(--color-kecap)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
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
              Eén pakket
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
              Alles inbegrepen
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {suiteFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div
                  className="flex items-start gap-4 p-5 rounded-sm h-full"
                  style={{
                    border: "1px solid rgba(245,240,232,0.12)",
                  }}
                >
                  <svg
                    className="shrink-0 mt-0.5"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-kunyit)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-body)",
                        fontWeight: 600,
                        color: "var(--color-rice)",
                        marginBottom: "var(--space-3xs)",
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        lineHeight: "var(--leading-body)",
                        color: "var(--color-rice)",
                        opacity: 0.6,
                        margin: 0,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Kawung divider */}
      <KawungDivider variant="light" />

      {/* S6: By the Numbers */}
      <section
        style={{
          padding: "var(--section-space-main) 0",
          backgroundColor: "var(--color-rice)",
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3)",
                fontWeight: 500,
                color: "var(--color-kecap)",
                marginBottom: "var(--space-xl)",
              }}
            >
              In cijfers
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h1)",
                    fontWeight: 600,
                    color: "var(--color-daun)",
                    lineHeight: "var(--leading-none)",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-caption)",
                    letterSpacing: "var(--tracking-caps)",
                    color: "var(--color-kecap)",
                    opacity: 0.5,
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* S7: CTA */}
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{
          padding: "var(--section-space-lg) 0",
          backgroundColor: "var(--color-kecap)",
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
              fontWeight: 500,
              color: "var(--color-rice)",
              marginBottom: "var(--space-md)",
            }}
          >
            Klaar om te zien?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Button href="/" variant="primary" size="lg">
            Bekijk de website
          </Button>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-caption)",
              letterSpacing: "var(--tracking-caps)",
              color: "var(--color-rice)",
              opacity: 0.3,
              textTransform: "uppercase",
            }}
          >
            Gebouwd door Vonzie
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
