import Link from "next/link";
import { Atom, Stethoscope, GraduationCap, BookOpen, Trophy, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import type { Course } from "@/lib/data";

const iconMap = { Atom, Stethoscope, GraduationCap, BookOpen, Trophy };

const colorMap: Record<string, { bg: string; icon: string; btn: string; glow: string }> = {
  blue:   { bg: "bg-blue-50",   icon: "text-blue-600 bg-blue-100",    btn: "bg-blue-600 hover:bg-blue-700",   glow: "hover:shadow-blue-200" },
  green:  { bg: "bg-green-50",  icon: "text-green-600 bg-green-100",  btn: "bg-green-600 hover:bg-green-700", glow: "hover:shadow-green-200" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600 bg-purple-100",btn: "bg-purple-600 hover:bg-purple-700",glow: "hover:shadow-purple-200" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600 bg-orange-100",btn: "bg-orange-600 hover:bg-orange-700",glow: "hover:shadow-orange-200" },
  red:    { bg: "bg-red-50",    icon: "text-red-600 bg-red-100",      btn: "bg-red-600 hover:bg-red-700",     glow: "hover:shadow-red-200" },
};

export default function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon as keyof typeof iconMap] || BookOpen;
  const c = colorMap[course.color] || colorMap.blue;

  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden
      transition-all duration-350 hover:-translate-y-2 hover:shadow-xl ${c.glow} hover:border-transparent group`}>

      <div className={`${c.bg} p-6 pb-4`}>
        {/* Icon with pop animation */}
        <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4
          transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-500">
            Duration: <strong className="text-slate-700">{course.duration}</strong>
          </span>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
          {course.features.map((f, i) => (
            <li key={f}
              className="flex items-center gap-2 text-sm text-slate-600 transition-all duration-200"
              style={{ transitionDelay: `${i * 30}ms` }}>
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-auto">
          <Link
            href={course.href}
            className={`flex-1 ${c.btn} text-white text-sm font-medium py-2.5 px-4 rounded-lg text-center
              transition-all duration-200 flex items-center justify-center gap-1.5 relative overflow-hidden group/btn`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              View Course <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </Link>
          <Link
            href="/contact"
            className="flex-1 border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300
              text-sm font-medium py-2.5 px-4 rounded-lg text-center transition-all duration-200"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
