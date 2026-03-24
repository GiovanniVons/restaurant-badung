export interface DayHours {
  day: { nl: string; en: string };
  open: string | null; // null = closed
  close: string | null;
}

export const HOURS: DayHours[] = [
  { day: { nl: "Maandag", en: "Monday" }, open: "16:00", close: "21:30" },
  { day: { nl: "Dinsdag", en: "Tuesday" }, open: "16:00", close: "21:30" },
  { day: { nl: "Woensdag", en: "Wednesday" }, open: null, close: null },
  { day: { nl: "Donderdag", en: "Thursday" }, open: "16:00", close: "21:30" },
  { day: { nl: "Vrijdag", en: "Friday" }, open: "16:00", close: "21:30" },
  { day: { nl: "Zaterdag", en: "Saturday" }, open: "12:00", close: "21:30" },
  { day: { nl: "Zondag", en: "Sunday" }, open: "12:00", close: "21:30" },
];

export function getOpenStatus(): "open" | "closed" | "closing-soon" {
  const now = new Date();
  const dayIndex = now.getDay(); // 0=Sun, 1=Mon...
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // remap to Mon=0
  const today = HOURS[mappedIndex];

  if (!today.open || !today.close) return "closed";

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  if (currentMinutes < openMinutes || currentMinutes >= closeMinutes) return "closed";
  if (closeMinutes - currentMinutes <= 30) return "closing-soon";
  return "open";
}

export const HOLIDAY_CLOSURE = {
  start: "2026-07-20",
  end: "2026-08-21",
  message: {
    nl: "Wij zijn gesloten van 20 juli t/m 21 augustus 2026",
    en: "We are closed from July 20 through August 21, 2026",
  },
};
