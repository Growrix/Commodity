import { clsx } from "clsx";
import { ReactNode } from "react";

type BadgeVariant = "default" | "gold" | "success" | "info" | "muted";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#0f2040] text-white",
  gold: "bg-[#c8a84b] text-[#0f2040]",
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-800",
  muted: "bg-gray-100 text-gray-700",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
