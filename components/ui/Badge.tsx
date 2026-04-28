import { clsx } from "clsx";
import { ReactNode } from "react";

type BadgeVariant = "default" | "gold" | "success" | "info" | "muted" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--color-ink)] text-white",
  gold:    "bg-[var(--color-gold)] text-[var(--color-ink)] font-bold",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  info:    "bg-sky-50 text-sky-700 border border-sky-200",
  muted:   "bg-[var(--color-surface-off)] text-[var(--color-text-muted)] border border-[var(--color-border)]",
  outline: "border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-transparent",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
