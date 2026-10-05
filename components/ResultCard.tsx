import type { Result } from "@/lib/data";

const colorMap: Record<string, { border: string; score: string; badge: string; glow: string; bar: string }> = {
  blue:   { border: "border-blue-200",   score: "text-blue-700",   badge: "bg-blue-50 text-blue-700",   glow: "hover:shadow-blue-100 hover:border-blue-400",   bar: "bg-blue-500" },
  green:  { border: "border-green-200",  score: "text-green-700",  badge: "bg-green-50 text-green-700", glow: "hover:shadow-green-100 hover:border-green-400", bar: "bg-green-500" },
  purple: { border: "border-purple-200", score: "text-purple-700", badge: "bg-purple-50 text-purple-700",glow: "hover:shadow-purple-100 hover:border-purple-400",bar: "bg-purple-500" },
  orange: { border: "border-orange-200", score: "text-orange-700", badge: "bg-orange-50 text-orange-700",glow: "hover:shadow-orange-100 hover:border-orange-400",bar: "bg-orange-500" },
};

export default function ResultCard({ result }: { result: Result }) {
  const c = colorMap[result.color] || colorMap.blue;
  return (
    <div className={`bg-white rounded-2xl border-2 ${c.border} p-6 text-center
      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${c.glow} group relative overflow-hidden`}>

      {/* Animated top bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${c.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${c.badge}
        transition-transform duration-200 group-hover:scale-105`}>
        {result.exam}
      </div>

      <div className={`text-3xl font-bold mb-2 ${c.score} transition-all duration-300 group-hover:scale-110`}
        style={{ fontFamily: "Poppins, sans-serif" }}>
        {result.score}
      </div>

      <p className="text-slate-600 text-sm font-medium">{result.name}</p>
      <p className="text-slate-400 text-xs mt-1">{result.year}</p>
      <div className="mt-3 demo-badge mx-auto w-fit">Sample Result</div>
    </div>
  );
}
