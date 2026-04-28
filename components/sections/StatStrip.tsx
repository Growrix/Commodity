interface Stat {
  value: string;
  label: string;
  detail?: string;
}

interface StatStripProps {
  stats: Stat[];
  dark?: boolean;
}

export default function StatStrip({ stats, dark = false }: StatStripProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px ${dark ? "border-white/10" : "border-[var(--color-border)]"}`}>
      {stats.map(({ value, label, detail }, i) => (
        <div
          key={label}
          className={`text-center py-8 px-4 ${
            i !== stats.length - 1 ? (dark ? "border-r border-white/8 last:border-r-0" : "border-r border-[var(--color-border)] last:border-r-0") : ""
          }`}
        >
          <div
            className={`text-4xl sm:text-5xl font-bold tracking-tight mb-1.5 ${
              dark ? "text-[var(--color-gold)]" : "text-[var(--color-ink)]"
            }`}
          >
            {value}
          </div>
          <div className={`text-sm font-medium ${dark ? "text-white" : "text-[var(--color-ink)]"}`}>
            {label}
          </div>
          {detail && (
            <div className={`text-xs mt-1 ${dark ? "text-white/35" : "text-[var(--color-text-muted)]"}`}>
              {detail}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
