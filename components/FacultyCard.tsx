import type { Faculty } from "@/lib/data";

const colorMap: Record<string, { bg: string; ring: string; badge: string }> = {
  blue:   { bg: "from-blue-500 to-blue-700",     ring: "ring-blue-200",   badge: "bg-blue-50 text-blue-700" },
  green:  { bg: "from-green-500 to-green-700",   ring: "ring-green-200",  badge: "bg-green-50 text-green-700" },
  purple: { bg: "from-purple-500 to-purple-700", ring: "ring-purple-200", badge: "bg-purple-50 text-purple-700" },
  orange: { bg: "from-orange-400 to-orange-600", ring: "ring-orange-200", badge: "bg-orange-50 text-orange-700" },
};

export default function FacultyCard({ member }: { member: Faculty }) {
  const c = colorMap[member.color] || colorMap.blue;
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center flex flex-col h-full
      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">

      {/* Avatar with ring pulse on hover */}
      <div className="relative mx-auto mb-4 w-fit">
        <div className={`w-20 h-20 bg-gradient-to-br ${c.bg} rounded-full flex items-center justify-center
          transition-transform duration-300 group-hover:scale-110 ring-4 ring-transparent group-hover:${c.ring} ring-offset-2`}>
          <span className="text-white text-2xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
            {member.initials}
          </span>
        </div>
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full
          transition-transform duration-300 group-hover:scale-125" />
      </div>

      <h3 className="font-bold text-slate-900 text-lg mb-1 transition-colors duration-200 group-hover:text-blue-700"
        style={{ fontFamily: "Poppins, sans-serif" }}>
        {member.name}
      </h3>

      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-1 ${c.badge}
        transition-transform duration-200 group-hover:scale-105`}>
        {member.subject}
      </span>

      <p className="text-slate-500 text-xs mb-3">{member.experience}</p>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{member.description}</p>
      <div className="mt-4 demo-badge mx-auto w-fit flex-shrink-0">Demo Profile</div>
    </div>
  );
}
