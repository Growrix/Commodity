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
  const textColor = dark ? "text-gray-300" : "text-gray-500";
  const activeColor = dark ? "text-[#c8a84b]" : "text-[#0f2040]";
  const hoverColor = dark ? "hover:text-white" : "hover:text-[#0f2040]";

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
          <ChevronRight className={`w-3.5 h-3.5 ${textColor} flex-shrink-0`} />
          {item.href ? (
            <Link
              href={item.href}
              className={`${textColor} ${hoverColor} transition-colors`}
            >
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
