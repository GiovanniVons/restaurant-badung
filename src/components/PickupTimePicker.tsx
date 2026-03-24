"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { generateGroupedSlots } from "@/lib/timeslots";
import { orderCopy } from "@/data/order-copy";

interface PickupTimePickerProps {
  value: string; // selected slot value e.g. "2026-03-24T17:30"
  onChange: (value: string) => void;
  error?: string;
}

export function PickupTimePicker({
  value,
  onChange,
  error,
}: PickupTimePickerProps) {
  const { t } = useLang();
  const groups = useMemo(() => generateGroupedSlots(), []);
  const dayScrollRef = useRef<HTMLDivElement>(null);

  // Auto-select first available day
  const selectedDate = value
    ? value.split("T")[0]
    : groups[0]?.date || "";
  const [activeDay, setActiveDay] = useState(selectedDate);

  // Keep activeDay in sync when value changes externally
  useEffect(() => {
    if (value) {
      setActiveDay(value.split("T")[0]);
    }
  }, [value]);

  const activeGroup = groups.find((g) => g.date === activeDay);

  function handleDayClick(date: string) {
    setActiveDay(date);
    // Clear selection if switching to a different day
    if (value && !value.startsWith(date)) {
      onChange("");
    }
  }

  if (groups.length === 0) {
    return (
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-kecap)",
          opacity: 0.5,
        }}
      >
        {t(orderCopy.pickup.noSlots)}
      </p>
    );
  }

  return (
    <div>
      {/* Label */}
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-body-sm)",
          fontWeight: 600,
          color: "var(--color-kecap)",
          marginBottom: 8,
        }}
      >
        {t(orderCopy.checkout.pickupTime)}{" "}
        <span style={{ color: "var(--color-bandung-red)" }}>*</span>
      </label>

      {/* Day chips -- horizontal scroll */}
      <div
        ref={dayScrollRef}
        className="flex gap-2 pb-2 -mx-1 px-1 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {groups.map((group) => {
          const isActive = group.date === activeDay;
          return (
            <button
              key={group.date}
              type="button"
              onClick={() => handleDayClick(group.date)}
              className="shrink-0 px-3 py-2 rounded-sm transition-all"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-caption)",
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive
                  ? "var(--color-daun)"
                  : "transparent",
                color: isActive
                  ? "var(--color-rice)"
                  : "var(--color-kecap)",
                border: isActive
                  ? "1.5px solid var(--color-daun)"
                  : "1.5px solid var(--color-rice-dark)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <span className="block leading-tight">
                {t(group.dayLabel)}
              </span>
              <span
                className="block leading-tight"
                style={{
                  fontSize: "0.7em",
                  opacity: isActive ? 0.8 : 0.5,
                  marginTop: 1,
                }}
              >
                {group.shortDate}
              </span>
            </button>
          );
        })}
      </div>

      {/* Time slot grid */}
      {activeGroup && (
        <div
          className="grid gap-2 mt-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
          }}
        >
          {activeGroup.slots.map((slot) => {
            const isSelected = slot.value === value;
            return (
              <button
                key={slot.value}
                type="button"
                onClick={() => onChange(slot.value)}
                className="py-2 rounded-sm text-center transition-all"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected
                    ? "var(--color-daun)"
                    : "rgba(26, 20, 16, 0.03)",
                  color: isSelected
                    ? "var(--color-rice)"
                    : "var(--color-kecap)",
                  border: isSelected
                    ? "1.5px solid var(--color-daun)"
                    : "1.5px solid var(--color-rice-dark)",
                  cursor: "pointer",
                }}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      )}

      {/* Error */}
      {error && (
        <p
          className="mt-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-caption)",
            color: "var(--color-bandung-red)",
            margin: "8px 0 0",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
