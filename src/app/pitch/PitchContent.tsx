"use client";

import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { KawungDivider } from "@/components/KawungDivider";
import { Button } from "@/components/Button";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const problems = [
  {
    stat: "8.000+",
    label: "regels inline CSS",
    desc: "WordPress met Nectar-thema, WPBakery page builder en 6+ third-party scripts. Traag, opgeblazen, moeilijk te onderhouden.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    stat: "PNG",
    label: "als maandmenu",
    desc: "Het maandmenu is een statische afbeelding. Niet doorzoekbaar, niet aan te passen, niet mobielvriendelijk.",
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
    label: "cookiebanner",
    desc: "Geen cookiebeheer, geen AVG-compliance. Bezoekers worden niet geinformeerd over tracking en toestemming.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: "Geen",
    label: "gestructureerde data",
    desc: "Geen JSON-LD schema, geen per-pagina SEO, geen sitemap. Google en AI-zoekmachines missen cruciale informatie.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

const solutions = [
  {
    stat: "< 2s",
    label: "laadtijd",
    desc: "Alle 8 pagina's vooraf gegenereerd (SSG). Nul third-party scripts. Geoptimaliseerde afbeeldingen via Next.js Image.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    stat: "Digitaal",
    label: "maandmenu + bestellen",
    desc: "Het maandmenu live op de site, mobielvriendelijk en altijd actueel. Inclusief winkelmandje en afrekenpagina voor afhaalbestellingen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    stat: "Vonzie",
    label: "Nexus + Remesa",
    desc: "Cookiebeheer via Vonzie Nexus (AVG-compliant). Reserveringen via Remesa, ons eigen systeem -- inbegrepen in uw abonnement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: "SEO",
    label: "klaar voor Google",
    desc: "JSON-LD Restaurant schema, meta per pagina, sitemap, robots.txt. Tweetalig NL/EN voor toeristen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

const stats = [
  { value: "< 2.5s", label: "Largest Contentful Paint" },
  { value: "0", label: "Third-party scripts" },
  { value: "8", label: "Pagina's, vooraf gegenereerd" },
  { value: "NL + EN", label: "Tweetalig" },
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
              Wat we vonden
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
              De huidige website
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
              Wat we bouwden
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
              De nieuwe website
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

      {/* S4: By the Numbers */}
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

      {/* S5: CTA */}
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
