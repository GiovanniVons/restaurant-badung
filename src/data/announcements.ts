export interface Announcement {
  id: string;
  message: { nl: string; en: string };
  startDate: string; // ISO date
  endDate: string;
  type: "closure" | "special" | "info";
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "summer-2026",
    message: {
      nl: "Wij zijn gesloten van 20 juli t/m 21 augustus 2026",
      en: "We are closed from July 20 through August 21, 2026",
    },
    startDate: "2026-07-10",
    endDate: "2026-08-21",
    type: "closure",
  },
];

export function getActiveAnnouncement(): Announcement | null {
  const now = new Date().toISOString().split("T")[0];
  return ANNOUNCEMENTS.find((a) => now >= a.startDate && now <= a.endDate) ?? null;
}
