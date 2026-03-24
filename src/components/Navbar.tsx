"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { nav } from "@/data/copy";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Hide/show with dead zone
      if (Math.abs(y - lastScrollY.current) > 5) {
        setHidden(y > lastScrollY.current && y > 200);
        lastScrollY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: t(nav.menu), href: "/menu" },
    { label: t(nav.order), href: "/menu?view=afhalen" },
    { label: t(nav.catering), href: "/catering" },
    { label: t(nav.story), href: "/ons-verhaal" },
    { label: t(nav.reserve), href: "/reserveren" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-sm"
        style={{ backgroundColor: "var(--color-daun)", color: "var(--color-rice)" }}
      >
        {t(nav.skipToContent)}
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--color-rice)" : "transparent",
          boxShadow: scrolled ? "var(--header-shadow)" : "none",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          height: "var(--header-height-desktop)",
        }}
      >
        <nav
          className="flex items-center justify-between h-full mx-auto px-6"
          style={{ maxWidth: "var(--content-wide)" }}
          aria-label="Primary navigation"
        >
          <Link href="/" className="relative z-10 shrink-0" aria-label="Home">
            <Image
              src="/images/bandung-logo.png"
              alt={t(nav.logoAlt)}
              width={160}
              height={48}
              className="h-10 w-auto"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
                transition: "filter 300ms ease",
              }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-80"
                style={{
                  fontFamily: "var(--font-accent)",
                  letterSpacing: "var(--tracking-caps)",
                  color: scrolled ? "var(--color-kecap)" : "var(--color-rice)",
                  opacity: pathname === link.href ? 1 : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="flex items-center rounded-sm border overflow-hidden transition-colors"
              style={{
                fontFamily: "var(--font-accent)",
                borderColor: scrolled ? "var(--color-rice-dark)" : "rgba(245,240,232,0.4)",
              }}
              role="radiogroup"
              aria-label="Language"
            >
              <button
                onClick={() => setLang("nl")}
                aria-label="Nederlands"
                aria-checked={lang === "nl"}
                role="radio"
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 transition-all"
                style={{
                  backgroundColor: lang === "nl"
                    ? (scrolled ? "var(--color-daun)" : "rgba(245,240,232,0.2)")
                    : "transparent",
                  color: lang === "nl"
                    ? (scrolled ? "var(--color-rice)" : "var(--color-rice)")
                    : (scrolled ? "var(--color-kecap)" : "rgba(245,240,232,0.5)"),
                }}
              >
                NL
              </button>
              <span
                className="w-px h-4"
                style={{
                  backgroundColor: scrolled ? "var(--color-rice-dark)" : "rgba(245,240,232,0.4)",
                }}
              />
              <button
                onClick={() => setLang("en")}
                aria-label="English"
                aria-checked={lang === "en"}
                role="radio"
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 transition-all"
                style={{
                  backgroundColor: lang === "en"
                    ? (scrolled ? "var(--color-daun)" : "rgba(245,240,232,0.2)")
                    : "transparent",
                  color: lang === "en"
                    ? (scrolled ? "var(--color-rice)" : "var(--color-rice)")
                    : (scrolled ? "var(--color-kecap)" : "rgba(245,240,232,0.5)"),
                }}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-10 p-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-0.5 w-full transition-all duration-300 origin-center"
                style={{
                  backgroundColor: scrolled && !menuOpen ? "var(--color-kecap)" : "var(--color-rice)",
                  transform: menuOpen ? "rotate(45deg) translate(2px, 6px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-full transition-all duration-300"
                style={{
                  backgroundColor: scrolled && !menuOpen ? "var(--color-kecap)" : "var(--color-rice)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-full transition-all duration-300 origin-center"
                style={{
                  backgroundColor: scrolled && !menuOpen ? "var(--color-kecap)" : "var(--color-rice)",
                  transform: menuOpen ? "rotate(-45deg) translate(2px, -6px)" : "none",
                }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[45] flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: "var(--color-daun)" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-medium tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-accent)",
                    color: "var(--color-rice)",
                    letterSpacing: "var(--tracking-caps)",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mt-4"
            >
              <div
                className="flex items-center rounded-sm border overflow-hidden"
                style={{
                  fontFamily: "var(--font-accent)",
                  borderColor: "rgba(245,240,232,0.4)",
                }}
                role="radiogroup"
                aria-label="Language"
              >
                <button
                  onClick={() => setLang("nl")}
                  aria-label="Nederlands"
                  aria-checked={lang === "nl"}
                  role="radio"
                  className="text-sm font-semibold uppercase tracking-widest px-4 py-2 transition-all"
                  style={{
                    backgroundColor: lang === "nl" ? "rgba(245,240,232,0.2)" : "transparent",
                    color: lang === "nl" ? "var(--color-rice)" : "rgba(245,240,232,0.5)",
                  }}
                >
                  NL
                </button>
                <span className="w-px h-5" style={{ backgroundColor: "rgba(245,240,232,0.4)" }} />
                <button
                  onClick={() => setLang("en")}
                  aria-label="English"
                  aria-checked={lang === "en"}
                  role="radio"
                  className="text-sm font-semibold uppercase tracking-widest px-4 py-2 transition-all"
                  style={{
                    backgroundColor: lang === "en" ? "rgba(245,240,232,0.2)" : "transparent",
                    color: lang === "en" ? "var(--color-rice)" : "rgba(245,240,232,0.5)",
                  }}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div style={{ height: "var(--header-height-desktop)" }} />
    </>
  );
}
