"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { getActiveAnnouncement, type Announcement } from "@/data/announcements";

export function AnnouncementBanner() {
  const { t } = useLang();
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const active = getActiveAnnouncement();
    if (!active) return;
    const wasDismissed = sessionStorage.getItem(`banner-${active.id}`);
    if (wasDismissed) return;
    setAnnouncement(active);
  }, []);

  if (!announcement || dismissed) return null;

  const dismiss = () => {
    sessionStorage.setItem(`banner-${announcement.id}`, "1");
    setDismissed(true);
  };

  const bgMap = {
    closure: "var(--banner-closure-bg)",
    special: "var(--banner-special-bg)",
    info: "var(--banner-info-bg)",
  };
  const textMap = {
    closure: "var(--banner-closure-text)",
    special: "var(--banner-special-text)",
    info: "var(--banner-info-text)",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex items-center justify-center px-4 py-2 text-center"
      style={{
        backgroundColor: bgMap[announcement.type],
        color: textMap[announcement.type],
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-sm)",
      }}
    >
      <span>{t(announcement.message)}</span>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-80 hover:opacity-100 transition-opacity"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
