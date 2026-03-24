import { HOURS, HOLIDAY_CLOSURE } from "@/data/hours";

export interface TimeSlot {
  value: string; // "2026-03-24T17:30" -- used as select value
  date: string; // "2026-03-24"
  time: string; // "17:30"
  dayLabel: { nl: string; en: string };
}

const MIN_PREP_MINUTES = 45;
const SLOT_INTERVAL = 15;
const LAST_ORDER_BEFORE_CLOSE = 30;
const DAYS_AHEAD = 7;

const DAY_LABELS_NL = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const DAY_LABELS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function toDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isInHolidayClosure(dateStr: string): boolean {
  return dateStr >= HOLIDAY_CLOSURE.start && dateStr <= HOLIDAY_CLOSURE.end;
}

function getHoursForDate(d: Date) {
  const jsDay = d.getDay(); // 0=Sun
  const mappedIndex = jsDay === 0 ? 6 : jsDay - 1; // Mon=0
  return HOURS[mappedIndex];
}

export interface DayGroup {
  date: string; // "2026-03-24"
  dayLabel: { nl: string; en: string };
  shortDate: string; // "24 mrt" -- always NL-formatted (for compact chips)
  slots: TimeSlot[];
}

const MONTH_ABBR = [
  "jan", "feb", "mrt", "apr", "mei", "jun",
  "jul", "aug", "sep", "okt", "nov", "dec",
];

export function generateTimeSlots(): TimeSlot[] {
  return generateGroupedSlots().flatMap((g) => g.slots);
}

export function generateGroupedSlots(): DayGroup[] {
  const now = new Date();
  const groups: DayGroup[] = [];

  for (let offset = 0; offset < DAYS_AHEAD; offset++) {
    const day = new Date(now);
    day.setDate(now.getDate() + offset);
    day.setHours(0, 0, 0, 0);

    const dateStr = toDateStr(day);
    if (isInHolidayClosure(dateStr)) continue;

    const hours = getHoursForDate(day);
    if (!hours.open || !hours.close) continue;

    const [openH, openM] = hours.open.split(":").map(Number);
    const [closeH, closeM] = hours.close.split(":").map(Number);
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;
    const lastSlot = closeMinutes - LAST_ORDER_BEFORE_CLOSE;

    // Determine earliest slot for this day
    let startMinutes = openMinutes;
    if (offset === 0) {
      // Today: earliest = now + prep time, rounded up to next interval
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      const earliest = nowMinutes + MIN_PREP_MINUTES;
      startMinutes = Math.ceil(earliest / SLOT_INTERVAL) * SLOT_INTERVAL;
    }

    // Day label
    const jsDay = day.getDay();
    let dayLabel: { nl: string; en: string };
    if (offset === 0) {
      dayLabel = { nl: "Vandaag", en: "Today" };
    } else if (offset === 1) {
      dayLabel = { nl: "Morgen", en: "Tomorrow" };
    } else {
      dayLabel = { nl: DAY_LABELS_NL[jsDay], en: DAY_LABELS_EN[jsDay] };
    }

    const shortDate = `${day.getDate()} ${MONTH_ABBR[day.getMonth()]}`;

    const slots: TimeSlot[] = [];
    for (let m = startMinutes; m <= lastSlot; m += SLOT_INTERVAL) {
      const hh = String(Math.floor(m / 60)).padStart(2, "0");
      const mm = String(m % 60).padStart(2, "0");
      const time = `${hh}:${mm}`;

      slots.push({
        value: `${dateStr}T${time}`,
        date: dateStr,
        time,
        dayLabel,
      });
    }

    if (slots.length > 0) {
      groups.push({ date: dateStr, dayLabel, shortDate, slots });
    }
  }

  return groups;
}
