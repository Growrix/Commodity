const trustItems = [
  "ISO 9001 Certified",
  "20+ Years Trading",
  "60+ Countries Served",
  "Full Logistics Coverage",
  "Compliant Documentation",
  "$2B+ Annual Volume",
  "Third-Party Inspection",
  "Zero Sanctions Record",
];

export default function TrustStrip() {
  const items = [...trustItems, ...trustItems];

  return (
    <div className="bg-[var(--color-ink-soft)] border-y border-white/6 overflow-hidden py-4">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0 whitespace-nowrap">
            <div className="w-1 h-1 bg-[var(--color-gold)] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
