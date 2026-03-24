"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { home, CONTACT } from "@/data/copy";
import { OpenClosedRibbon } from "@/components/OpenClosedRibbon";
import { Button } from "@/components/Button";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal";
import { KawungDivider } from "@/components/KawungDivider";

export function HomeContent() {
  const { t } = useLang();

  return (
    <div>
      {/* Section 1: Hero */}
      <section className="relative -mt-[72px] flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <Image
          src="/images/rijsttafel-candlelit.jpg"
          alt="Rijsttafel bij Restaurant Indonesia Bandung"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,20,16,0.4) 0%, rgba(26,20,16,0.7) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p
            className="mb-4 uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--color-rice)",
              opacity: 0.9,
            }}
          >
            {t(home.hero.sub)}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display)",
              fontWeight: 600,
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-rice)",
              marginBottom: "var(--space-md)",
            }}
          >
            {t(home.hero.headline)}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button href="/reserveren" variant="primary" size="lg">
              {t(home.hero.cta1)}
            </Button>
            <Button href="/menu" variant="secondary-light" size="lg">
              {t(home.hero.cta2)}
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Open/Closed Ribbon */}
      <OpenClosedRibbon />

      <KawungDivider />

      {/* Section 3: Introduction */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-narrow)" }}>
          <ScrollReveal>
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
              }}
            >
              {t(home.intro.headline)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                lineHeight: "var(--leading-body-relaxed)",
                color: "var(--color-kecap)",
              }}
            >
              {t(home.intro.body)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Rijsttafel Teaser */}
      <section className="relative overflow-hidden" style={{ padding: "var(--section-space-lg) 0" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/rijsttafel-overhead.jpg"
            alt="Rijsttafel van bovenaf"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(26,20,16,0.75)" }} />

        <div
          className="relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          <ScrollReveal>
            <div>
              <p
                className="uppercase mb-3"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-overline)",
                  letterSpacing: "var(--tracking-widest)",
                  color: "var(--color-kunyit)",
                }}
              >
                {t(home.rijsttafelTeaser.overline)}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h2)",
                  fontWeight: 500,
                  lineHeight: "var(--leading-snug)",
                  color: "var(--color-rice)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {t(home.rijsttafelTeaser.headline)}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--leading-body-relaxed)",
                  color: "var(--color-rice)",
                  opacity: 0.9,
                  marginBottom: "var(--space-md)",
                }}
              >
                {t(home.rijsttafelTeaser.body)}
              </p>
              <Button href="/menu#rijsttafel" variant="primary">
                {t(home.rijsttafelTeaser.cta)}
              </Button>
            </div>
          </ScrollReveal>

          {/* Wow moment: image bleeds 40px past section boundary */}
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden md:mr-[-40px]">
              <Image
                src="/images/rijsttafel-table-setting.jpg"
                alt="Rijsttafel aankleding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Menu Highlights */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
              }}
            >
              {t(home.menuHighlights.headline)}
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {home.menuHighlights.items.map((item) => (
              <StaggerItem key={item.name}>
                <div
                  className="group rounded-sm overflow-hidden border"
                  style={{ borderColor: "var(--color-rice-dark)", backgroundColor: "var(--color-rice)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-h4)",
                          fontWeight: 500,
                          color: "var(--color-kecap)",
                          marginBottom: 0,
                        }}
                      >
                        {item.name}
                      </h3>
                      <span
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "var(--text-body-sm)",
                          color: "var(--color-daun)",
                          fontWeight: 600,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        lineHeight: "var(--leading-body)",
                        color: "var(--color-kecap)",
                        opacity: 0.8,
                        marginBottom: 0,
                      }}
                    >
                      {t(item.desc)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal className="text-center mt-10">
            <Button href="/menu" variant="secondary">
              {t(home.menuHighlights.cta)}
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Heritage Trust Strip */}
      <section className="py-8" style={{ backgroundColor: "var(--color-daun)", color: "var(--color-rice)" }}>
        <div
          className="mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          style={{ maxWidth: "var(--content-max-width)" }}
        >
          {home.trustStrip.items.map((item, i) => (
            <div key={i} className="text-center">
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h3)",
                  fontWeight: 500,
                  lineHeight: "var(--leading-tight)",
                }}
              >
                {t(item.top)}
              </span>
              <span
                className="block uppercase"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-overline)",
                  letterSpacing: "var(--tracking-widest)",
                  opacity: 0.7,
                }}
              >
                {t(item.bottom)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Social Proof */}
      <section style={{ padding: "var(--section-space-main) 0" }}>
        <div className="mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h2
              className="text-center mb-12"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                color: "var(--color-kecap)",
              }}
            >
              {t(home.socialProof.headline)}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {home.socialProof.reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <blockquote
                  style={{
                    borderTop: "2px solid var(--color-kunyit)",
                    padding: "var(--space-md) var(--space-sm)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={s < review.rating ? "var(--color-kunyit)" : "none"}
                        stroke="var(--color-kunyit)"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className="italic flex-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-body)",
                      fontWeight: 400,
                      lineHeight: "var(--leading-relaxed)",
                      color: "var(--color-kecap)",
                      marginBottom: "var(--space-sm)",
                    }}
                  >
                    &ldquo;{t(review.text)}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-2">
                    <cite
                      className="not-italic uppercase"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-caption)",
                        letterSpacing: "var(--tracking-caps)",
                        color: "var(--color-kecap)",
                      }}
                    >
                      {review.author}
                    </cite>
                    <span style={{ color: "var(--color-kunyit)", opacity: 0.5 }}>&middot;</span>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "var(--text-caption)",
                        letterSpacing: "var(--tracking-caps)",
                        color: "var(--color-kunyit)",
                      }}
                    >
                      {review.platform === "google" ? "Google" : "TripAdvisor"}
                    </span>
                  </div>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>

          {/* Aggregate ratings strip */}
          <ScrollReveal>
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
              style={{
                padding: "var(--space-sm) 0",
                borderTop: "1px solid var(--color-kunyit-20, rgba(196,164,75,0.2))",
              }}
            >
              {home.socialProof.aggregates.map((agg, i) => (
                <a
                  key={i}
                  href={agg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "var(--text-caption)",
                    letterSpacing: "var(--tracking-caps)",
                    color: "var(--color-kecap)",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-kunyit)" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span style={{ fontWeight: 700 }}>{agg.platform}</span>
                  <span>{agg.score}/5</span>
                  <span style={{ opacity: 0.5 }}>({agg.count}+)</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <KawungDivider />

      {/* Section 8: Location CTA */}
      <section className="relative overflow-hidden" style={{ padding: "var(--section-space-lg) 0" }}>
        <Image
          src="/images/interior-main-dining.jpg"
          alt="Interieur Restaurant Indonesia Bandung"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,20,16,0.85) 0%, rgba(26,20,16,0.6) 100%)" }} />

        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h1)",
                fontWeight: 600,
                color: "var(--color-rice)",
                marginBottom: "var(--space-xs)",
              }}
            >
              {t(home.locationCta.heading)}
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-rice)",
                opacity: 0.8,
              }}
            >
              {home.locationCta.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/reserveren" variant="primary" size="lg">
                {t(home.locationCta.cta)}
              </Button>
              <Button href={CONTACT.googleMaps} variant="secondary-light" external>
                Google Maps &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile bottom bar spacer */}
      <div className="md:hidden" style={{ height: "calc(var(--bottom-bar-height) + env(safe-area-inset-bottom, 0px))" }} />
    </div>
  );
}
