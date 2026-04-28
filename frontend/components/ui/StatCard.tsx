interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`${className}`}>
      <p className="text-3xl md:text-4xl font-bold text-gold leading-none">{value}</p>
      <p className="text-sm text-text-secondary mt-1.5 leading-snug">{label}</p>
    </div>
  );
}
