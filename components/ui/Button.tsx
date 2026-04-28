import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "outline" | "outline-white" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-ink)] text-white border border-transparent hover:bg-[var(--color-ink-muted)] active:scale-[0.98]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-ink)] border border-transparent font-semibold hover:bg-[var(--color-gold-bright)] active:scale-[0.98] shadow-[0_0_20px_0_rgba(212,160,23,0.3)] hover:shadow-[0_0_28px_0_rgba(212,160,23,0.45)]",
  outline:
    "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white active:scale-[0.98]",
  "outline-white":
    "border border-white/30 text-white hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] active:scale-[0.98]",
  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-off)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  "px-4 py-2 text-sm rounded-[var(--radius-sm)]",
  md:  "px-6 py-3 text-sm rounded-[var(--radius-sm)]",
  lg:  "px-8 py-3.5 text-base rounded-[var(--radius-sm)]",
  xl:  "px-10 py-4.5 text-base rounded-[var(--radius-sm)]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      {children}
    </button>
  );
}
