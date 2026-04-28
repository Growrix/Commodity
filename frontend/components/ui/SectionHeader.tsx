import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-text-primary" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {!centered && <span className="gold-rule" />}
      {centered && (
        <div className="flex justify-center mt-3 mb-0">
          <span className="block w-12 h-0.5 bg-gold" />
        </div>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-text-secondary" : "text-text-secondary"
          } max-w-prose ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
