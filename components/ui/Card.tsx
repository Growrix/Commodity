import { clsx } from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  dark?: boolean;
  bordered?: boolean;
}

const paddingStyles = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  dark = false,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-[var(--radius-lg)]",
        paddingStyles[padding],
        dark
          ? "bg-[var(--color-ink-soft)] text-white"
          : "bg-white text-[var(--color-text-primary)]",
        bordered && (dark
          ? "border border-white/8"
          : "border border-[var(--color-border)]"),
        hover && [
          "transition-all duration-300 cursor-pointer",
          dark
            ? "hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-ink-muted)]"
            : "hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
