"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-light" | "tertiary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  onClick,
  disabled,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isSecLight = variant === "secondary-light";
  const isTertiary = variant === "tertiary";

  const hasDoubleBorder = isPrimary || isSecondary || isSecLight;

  const sizeMap = {
    sm: { padding: "8px 16px", minHeight: "var(--btn-sm-min-height)" },
    md: { padding: "12px 24px", minHeight: "var(--btn-min-height)" },
    lg: { padding: "16px 32px", minHeight: "var(--btn-lg-min-height)" },
  };

  const s = sizeMap[size];

  let bgColor: string;
  let textColor: string;
  let borderColor: string;

  if (isPrimary) {
    bgColor = "var(--btn-primary-bg)";
    textColor = "var(--btn-primary-text)";
    borderColor = "var(--btn-primary-text)";
  } else if (isSecondary) {
    bgColor = "transparent";
    textColor = "var(--btn-secondary-text)";
    borderColor = "var(--btn-secondary-border)";
  } else if (isSecLight) {
    bgColor = "transparent";
    textColor = "var(--btn-sec-light-text)";
    borderColor = "var(--btn-sec-light-border)";
  } else {
    bgColor = "transparent";
    textColor = "var(--btn-tertiary-text)";
    borderColor = "transparent";
  }

  const style = {
    position: "relative" as const,
    display: "inline-flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-sm)",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tracking-wider)",
    padding: s.padding,
    minHeight: s.minHeight,
    backgroundColor: bgColor,
    color: textColor,
    border: "none",
    borderRadius: "0px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : undefined,
    pointerEvents: disabled ? "none" as const : undefined,
    transition: "all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)",
    "--btn-border-color": borderColor,
  } as React.CSSProperties;

  const innerContent = (
    <>
      {hasDoubleBorder && (
        <span aria-hidden="true" className="btn-border-wrap">
          <span className="btn-border-line btn-border-top" />
          <span className="btn-border-line btn-border-right" />
          <span className="btn-border-line btn-border-bottom" />
          <span className="btn-border-line btn-border-left" />
        </span>
      )}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </>
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-double ${className}`}
        style={style}
      >
        {innerContent}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={`btn-double ${className}`} style={style}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`btn-double ${className}`} style={style}>
      {innerContent}
    </button>
  );
}
