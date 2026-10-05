import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col relative overflow-hidden
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">

      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <Quote className="w-16 h-16 text-blue-600 fill-blue-600" />
      </div>

      {/* Stars with stagger */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400 transition-transform duration-200 hover:scale-125"
            style={{ transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>

      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic relative z-10">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0
          transition-transform duration-300 group-hover:scale-110">
          <span className="text-white text-sm font-bold">{t.initials}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.course}</p>
        </div>
        <div className="ml-auto demo-badge">Demo</div>
      </div>
    </div>
  );
}
