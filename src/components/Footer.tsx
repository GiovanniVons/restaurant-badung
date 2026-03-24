"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { footer, CONTACT, nav } from "@/data/copy";

export function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="pt-16 pb-0"
      style={{ backgroundColor: "var(--footer-bg)", color: "var(--footer-text)" }}
    >
      <div
        className="mx-auto px-6 grid gap-12 md:grid-cols-4"
        style={{ maxWidth: "var(--content-max-width)" }}
      >
        {/* Brand column */}
        <div className="md:col-span-1">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/bandung-logo.png"
              alt={t(nav.logoAlt)}
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
          </Link>
          <p
            className="opacity-80"
            style={{ fontSize: "var(--text-body-sm)", fontFamily: "var(--font-body)", color: "var(--color-rice)" }}
          >
            {t(footer.tagline)}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3
            className="mb-4 uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              fontWeight: "var(--weight-semibold)" as string,
              color: "var(--color-rice)",
            }}
          >
            {t(footer.quickLinksHeading)}
          </h3>
          <ul className="space-y-2">
            {t(footer.quickLinks).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontSize: "var(--text-body-sm)", color: "var(--color-rice)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="mb-4 uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              fontWeight: "var(--weight-semibold)" as string,
              color: "var(--color-rice)",
            }}
          >
            {t(footer.contactHeading)}
          </h3>
          <address className="not-italic space-y-1" style={{ fontSize: "var(--text-body-sm)", color: "var(--color-rice)" }}>
            <p className="opacity-80" style={{ color: "var(--color-rice)" }}>{CONTACT.address}</p>
            <p className="opacity-80" style={{ color: "var(--color-rice)" }}>{CONTACT.postcode}</p>
            <p>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-rice)" }}
              >
                {CONTACT.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-rice)" }}
              >
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>

        {/* Hours + Social */}
        <div>
          <h3
            className="mb-4 uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              fontWeight: "var(--weight-semibold)" as string,
              color: "var(--color-rice)",
            }}
          >
            {t(footer.hoursHeading)}
          </h3>
          <ul className="space-y-1 mb-6" style={{ fontSize: "var(--text-body-sm)", color: "var(--color-rice)" }}>
            {t(footer.hoursCompact).map((line, i) => (
              <li key={i} className="opacity-80">{line}</li>
            ))}
          </ul>

          <h3
            className="mb-3 uppercase"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-overline)",
              letterSpacing: "var(--tracking-widest)",
              fontWeight: "var(--weight-semibold)" as string,
              color: "var(--color-rice)",
            }}
          >
            {t(footer.socialHeading)}
          </h3>
          <div className="flex gap-4">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-rice)" }}
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href={CONTACT.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-rice)" }}
              aria-label="TripAdvisor"
            >
              TripAdvisor
            </a>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div
        className="mt-12 py-4 px-6 text-center"
        style={{
          backgroundColor: "var(--footer-bottom-bg)",
          fontSize: "var(--text-caption)",
          fontFamily: "var(--font-body)",
          opacity: 0.7,
        }}
      >
        <p style={{ color: "var(--color-rice)" }}>{t(footer.legal)}</p>
      </div>
    </footer>
  );
}
