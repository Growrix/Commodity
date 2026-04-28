import { ShieldCheck, Award, Globe, Truck, FileCheck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "ISO 9001 Certified" },
  { icon: Award, label: "20+ Years Trading" },
  { icon: Globe, label: "60+ Countries Served" },
  { icon: Truck, label: "Full Logistics Coverage" },
  { icon: FileCheck, label: "Compliant Documentation" },
];

interface TrustStripProps {
  dark?: boolean;
}

export default function TrustStrip({ dark = false }: TrustStripProps) {
  const bg = dark ? "bg-[#0a1628]" : "bg-[#f8f9fa]";
  const border = dark ? "border-white/10" : "border-[#e5e7eb]";
  const textColor = dark ? "text-gray-300" : "text-[#374151]";
  const iconColor = dark ? "text-[#c8a84b]" : "text-[#0f2040]";

  return (
    <div className={`${bg} border-y ${border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
              <span className={`text-sm font-medium ${textColor}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
