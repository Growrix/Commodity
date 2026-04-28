interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  dark?: boolean;
}

export default function StatStrip({ stats, dark = false }: StatStripProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 gap-6 ${
        dark ? "text-white" : "text-[#0f2040]"
      }`}
    >
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div
            className={`text-3xl sm:text-4xl font-bold mb-1 ${
              dark ? "text-[#c8a84b]" : "text-[#0f2040]"
            }`}
          >
            {value}
          </div>
          <div
            className={`text-sm ${
              dark ? "text-gray-300" : "text-[#6b7280]"
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
