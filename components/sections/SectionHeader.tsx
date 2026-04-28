import { clsx } from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "font-bold leading-[1.12] tracking-tight",
          "text-3xl sm:text-4xl lg:text-[2.8rem]",
          dark ? "text-white" : "text-[var(--color-ink)]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-white/50" : "text-[var(--color-text-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
