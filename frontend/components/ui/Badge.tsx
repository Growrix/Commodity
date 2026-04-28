import { ReactNode } from "react";

type BadgeVariant = "gold" | "neutral" | "sector";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  gold: "text-gold border-gold/30 bg-gold-muted",
  neutral: "text-text-secondary border-border-light bg-surface-elevated",
  sector: "text-text-primary border-border-medium bg-surface-elevated",
};

export default function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest border px-3 py-1 rounded-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
