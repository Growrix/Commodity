import { ReactNode } from "react";
import Link from "next/link";

type Variant = "gold" | "outline-gold" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  gold: "bg-gold text-background font-semibold hover:bg-gold-light active:scale-[0.98]",
  "outline-gold": "border border-gold text-gold font-semibold hover:bg-gold-muted",
  ghost: "text-text-secondary font-medium hover:text-text-primary hover:bg-surface-elevated",
  white: "bg-white text-background font-semibold hover:bg-gray-100 active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded gap-1.5",
  md: "px-6 py-3 text-sm rounded gap-2",
  lg: "px-8 py-4 text-base rounded gap-2",
};

export default function Button({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
