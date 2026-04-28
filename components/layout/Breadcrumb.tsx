import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const textColor = dark ? "text-white/35" : "text-[var(--color-text-muted)]";
  const activeColor = dark ? "text-[var(--color-gold)]" : "text-[var(--color-ink)]";
  const hoverColor = dark ? "hover:text-white" : "hover:text-[var(--color-ink)]";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        href="/"
        className={`${textColor} ${hoverColor} transition-colors flex items-center`}
      >
        <Home className="w-3.5 h-3.5" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className={`w-3 h-3 ${textColor} flex-shrink-0`} />
          {item.href ? (
            <Link href={item.href} className={`${textColor} ${hoverColor} transition-colors`}>
              {item.label}
            </Link>
          ) : (
            <span className={`${activeColor} font-medium`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
