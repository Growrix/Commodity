import { clsx } from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-block text-xs font-bold uppercase tracking-widest mb-3",
            dark ? "text-[#c8a84b]" : "text-[#c8a84b]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight",
          dark ? "text-white" : "text-[#0f2040]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-gray-300" : "text-[#6b7280]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
