import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs ${className}`}>
      <Link href="/" className="text-text-muted hover:text-gold transition-colors duration-200">
        Home
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
          {item.href && idx < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-text-muted hover:text-gold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className={idx === items.length - 1 ? "text-text-secondary" : "text-text-muted"}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
