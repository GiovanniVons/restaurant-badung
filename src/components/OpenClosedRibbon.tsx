"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { HOURS } from "@/data/hours";

function getStatusInfo(lang: "nl" | "en") {
  const now = new Date();
  const dayIndex = now.getDay(); // 0=Sun
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Mon=0
  const today = HOURS[mappedIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (!today.open || !today.close) {
    // Closed day -- find next open day
    const nextOpen = HOURS.find((h, i) => i > mappedIndex && h.open) ?? HOURS.find((h) => h.open);
    const nextDay = nextOpen ? (lang === "nl" ? nextOpen.day.nl.toLowerCase() : nextOpen.day.en) : "";
    const nextTime = nextOpen?.open ?? "16:00";

    return {
      status: "closed" as const,
      text: lang === "nl"
        ? `Vandaag gesloten \u00B7 Weer open ${nextDay} om ${nextTime}`
        : `Closed today \u00B7 Open again ${nextDay} at ${nextTime}`,
    };
  }

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);
  const openMin = openH * 60 + openM;
  const closeMin = closeH * 60 + closeM;

  if (currentMinutes < openMin) {
    return {
      status: "closed" as const,
      text: lang === "nl"
        ? `Vanmiddag geopend vanaf ${today.open}`
        : `Open this evening from ${today.open}`,
    };
  }

  if (currentMinutes >= closeMin) {
    return { status: "closed" as const, text: lang === "nl" ? "Vandaag gesloten" : "Closed today" };
  }

  const isWeekend = mappedIndex >= 5;
  if (isWeekend && currentMinutes < 16 * 60) {
    return {
      status: "open" as const,
      text: lang === "nl"
        ? `Nu geopend \u00B7 Lunch & diner tot ${today.close}`
        : `Open now \u00B7 Lunch & dinner until ${today.close}`,
    };
  }

  return {
    status: closeMin - currentMinutes <= 30 ? "closing-soon" as const : "open" as const,
    text: lang === "nl"
      ? `Nu geopend \u00B7 Diner tot ${today.close}`
      : `Open now \u00B7 Dinner until ${today.close}`,
  };
}

export function OpenClosedRibbon() {
  const { lang } = useLang();
  const [info, setInfo] = useState<{ status: string; text: string } | null>(null);

  useEffect(() => {
    setInfo(getStatusInfo(lang));
    const interval = setInterval(() => setInfo(getStatusInfo(lang)), 60000);
    return () => clearInterval(interval);
  }, [lang]);

  if (!info) return null;

  const dotColor = info.status === "open"
    ? "var(--ribbon-dot-open)"
    : info.status === "closing-soon"
      ? "var(--ribbon-dot-closing)"
      : "var(--color-bandung-red)";

  return (
    <div
      className="py-3 px-6 text-center"
      style={{
        backgroundColor: "var(--ribbon-bg)",
        color: "var(--ribbon-text)",
        fontFamily: "var(--font-accent)",
        fontSize: "var(--text-body-sm)",
        letterSpacing: "var(--tracking-wider)",
      }}
    >
      <div className="inline-flex items-center justify-center gap-2 flex-wrap">
        <span
          className="inline-block w-2 h-2 rounded-full shrink-0"
          style={{
            backgroundColor: dotColor,
            boxShadow: info.status === "open" ? `0 0 6px ${dotColor}` : "none",
          }}
        />
        <span className="uppercase">{info.text}</span>
      </div>
    </div>
  );
}
