import type { Metadata } from "next";
import ResultCard from "@/components/ResultCard";
import CTA from "@/components/CTA";
import { AnimateIn, AnimatedCounter } from "@/components/AnimateIn";
import { results } from "@/lib/data";
import { TrendingUp, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Results | BrightPath Academy",
  description: "Sample student results and achievements at BrightPath Academy.",
};

const highlights = [
  { score: "98.4%ile", exam: "JEE Main",      color: "text-blue-700",   bg: "bg-blue-50 border-blue-200" },
  { score: "645/720",  exam: "NEET",           color: "text-green-700",  bg: "bg-green-50 border-green-200" },
  { score: "96.2%",    exam: "CUET",           color: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
  { score: "97.8%",    exam: "Class 12 CBSE",  color: "text-orange-700", bg: "bg-orange-50 border-orange-200" },
];

const statsData = [
  { value: "500+", label: "Students Guided",    sub: "Across all programs" },
  { value: "95%",  label: "Sample Success Rate", sub: "Demo statistic" },
  { value: "10+",  label: "Years Experience",    sub: "In coaching" },
  { value: "25+",  label: "Expert Mentors",      sub: "Across subjects" },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" /> Student Results
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Results That Inspire
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              A showcase of what focused preparation and expert guidance can achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Important Disclaimer:</strong> All statistics and student results shown on this demo website are fictional sample content created for demonstration purposes only. These do not represent real student results from any actual coaching institute.
            </p>
          </div>
        </div>
      </section>

      {/* Top Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Sample Top Scores</h2>
            <p className="text-slate-500 text-sm mt-2">Illustrative scores showing what students can achieve</p>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <AnimateIn key={h.exam} animation="zoom-in" delay={i * 100}>
                <div className={`rounded-2xl border-2 ${h.bg} p-8 text-center card-hover`}>
                  <p className={`text-4xl sm:text-5xl font-bold mb-2 ${h.color}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                    {h.score}
                  </p>
                  <p className="text-slate-700 font-semibold text-sm">{h.exam}</p>
                  <p className="text-slate-400 text-xs mt-2">Sample Result</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Result Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Sample Result Cards</h2>
            <div className="mt-2 demo-badge mx-auto w-fit">All results are fictional demo content</div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <AnimateIn key={r.name} animation="fade-up" delay={i * 70}>
                <ResultCard result={r} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Sample Statistics</h2>
            <div className="mt-2 demo-badge mx-auto w-fit">⚠️ Sample statistics for demonstration only</div>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {statsData.map((s, i) => (
              <AnimateIn key={s.label} animation="zoom-in" delay={i * 100}>
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <p className="text-4xl font-bold text-[#0f2557] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <AnimatedCounter target={s.value} />
                  </p>
                  <p className="text-slate-700 font-medium text-sm">{s.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{s.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
