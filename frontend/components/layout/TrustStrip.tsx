import Container from "@/components/ui/Container";

const trustItems = [
  { label: "ISO 9001 Certified", icon: "✓" },
  { label: "40+ Countries Served", icon: "🌐" },
  { label: "4 Commodity Sectors", icon: "📦" },
  { label: "GAFTA & FOSFA Member", icon: "✓" },
  { label: "10+ Years in Operation", icon: "✓" },
  { label: "SGS Inspected Cargoes", icon: "✓" },
];

export default function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`border-y border-border bg-surface ${className}`}>
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 lg:gap-0">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-gold text-xs">{item.icon}</span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider whitespace-nowrap">
                {item.label}
              </span>
              {idx < trustItems.length - 1 && (
                <span className="hidden lg:block w-px h-4 bg-border-light ml-4" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
