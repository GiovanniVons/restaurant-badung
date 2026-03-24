interface KawungDividerProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Kawung batik divider -- traditional Javanese overlapping petal motif.
 * "light" = kunyit petals on rice backgrounds. "dark" = rice petals on daun backgrounds.
 */
export function KawungDivider({ variant = "light", className = "" }: KawungDividerProps) {
  const color = variant === "light" ? "var(--color-kunyit)" : "var(--color-rice)";
  const opacity = variant === "light" ? 0.18 : 0.12;

  return (
    <div
      className={`flex items-center justify-center overflow-hidden py-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 40"
        className="w-full max-w-xs"
        style={{ opacity }}
        fill={color}
      >
        {/* 5 kawung motifs in a row */}
        {[0, 1, 2, 3, 4].map((i) => {
          const cx = 32 + i * 64;
          return (
            <g key={i} transform={`translate(${cx}, 20)`}>
              {/* Four petals (ellipses at 0, 90, 180, 270 degrees) */}
              <ellipse cx="0" cy="-8" rx="5" ry="8" />
              <ellipse cx="8" cy="0" rx="8" ry="5" />
              <ellipse cx="0" cy="8" rx="5" ry="8" />
              <ellipse cx="-8" cy="0" rx="8" ry="5" />
              {/* Center dot */}
              <circle cx="0" cy="0" r="3" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
