import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

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
    "bg-[#0f2040] text-white hover:bg-[#1a3560] focus:ring-[#0f2040]",
  secondary:
    "bg-[#c8a84b] text-[#0f2040] hover:bg-[#b89438] font-semibold focus:ring-[#c8a84b]",
  outline:
    "border-2 border-[#0f2040] text-[#0f2040] hover:bg-[#0f2040] hover:text-white focus:ring-[#0f2040]",
  ghost:
    "text-[#0f2040] hover:bg-[#f8f9fa] focus:ring-[#0f2040]",
  gold:
    "bg-[#c8a84b] text-white hover:bg-[#b89438] focus:ring-[#c8a84b]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    "inline-flex items-center justify-center gap-2 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  );
}
