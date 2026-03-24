"use client";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  note?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

const fieldStyles: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body)",
  color: "var(--color-kecap)",
  backgroundColor: "var(--color-rice)",
  borderRadius: 4,
  outline: "none",
  transition: "border-color 200ms ease",
};

export function FormField({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
  placeholder,
  note,
  options,
  rows = 3,
}: FormFieldProps) {
  const borderColor = error
    ? "var(--color-bandung-red)"
    : "var(--color-rice-dark)";

  const sharedStyle: React.CSSProperties = {
    ...fieldStyles,
    border: `1.5px solid ${borderColor}`,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-1 font-medium"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-kecap)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--color-bandung-red)", marginLeft: 2 }}>
            *
          </span>
        )}
      </label>
      {note && (
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-caption)",
            color: "var(--color-kecap)",
            opacity: 0.5,
            margin: "0 0 4px",
          }}
        >
          {note}
        </p>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          style={{ ...sharedStyle, resize: "vertical" }}
        />
      ) : type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          style={{
            ...sharedStyle,
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%231A1410' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: 40,
          }}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={sharedStyle}
        />
      )}

      {error && (
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-caption)",
            color: "var(--color-bandung-red)",
            margin: "4px 0 0",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
