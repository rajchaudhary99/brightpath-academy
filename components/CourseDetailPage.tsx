import Link from "next/link";
import { CheckCircle2, Clock, Users, BookOpen, ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { WHATSAPP_URL } from "@/lib/data";

interface Subject { name: string; topics: string[] }
interface Batch { name: string; timing: string; days: string; seats: string }
interface FAQItem { q: string; a: string }

interface CourseDetailProps {
  title: string;
  tagline: string;
  description: string;
  color: string;
  duration: string;
  batchSize: string;
  whoShouldJoin: string[];
  learningOutcomes: string[];
  subjects: Subject[];
  features: string[];
  batches: Batch[];
  faqs: FAQItem[];
}

const colorMap: Record<string, { hero: string; badge: string; accent: string; btn: string }> = {
  blue:   { hero: "from-blue-900 to-blue-700",   badge: "bg-blue-100 text-blue-700",   accent: "text-blue-600", btn: "bg-blue-600 hover:bg-blue-700" },
  green:  { hero: "from-green-900 to-green-700",  badge: "bg-green-100 text-green-700",  accent: "text-green-600", btn: "bg-green-600 hover:bg-green-700" },
  purple: { hero: "from-purple-900 to-purple-700", badge: "bg-purple-100 text-purple-700", accent: "text-purple-600", btn: "bg-purple-600 hover:bg-purple-700" },
  orange: { hero: "from-orange-900 to-orange-700", badge: "bg-orange-100 text-orange-700", accent: "text-orange-600", btn: "bg-orange-600 hover:bg-orange-700" },
  red:    { hero: "from-red-900 to-red-700",     badge: "bg-red-100 text-red-700",     accent: "text-red-600", btn: "bg-red-600 hover:bg-red-700" },
};

export default function CourseDetailPage({
  title, tagline, description, color, duration, batchSize,
  whoShouldJoin, learningOutcomes, subjects, features, batches, faqs,
}: CourseDetailProps) {
  const c = colorMap[color] || colorMap.blue;

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${c.hero} py-16 sm:py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${c.badge}`}>{tagline}</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <Clock className="w-4 h-4 text-white/70" />
                <span className="text-white text-sm">{duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <Users className="w-4 h-4 text-white/70" />
                <span className="text-white text-sm">{batchSize}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-accent text-sm px-6 py-3 justify-center">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="btn-outline text-sm px-6 py-3 justify-center">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Who Should Join */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Who Should Join?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {whoShouldJoin.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>What You Will Learn</h2>
              <div className="space-y-3">
                {learningOutcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full ${c.btn} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Subjects Covered</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((sub) => (
                  <div key={sub.name} className="bg-white rounded-xl border border-slate-200 p-4">
                    <h3 className={`font-semibold text-sm mb-3 ${c.accent}`}>{sub.name}</h3>
                    <ul className="space-y-1">
                      {sub.topics.map((t) => (
                        <li key={t} className="text-slate-600 text-xs flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Batch Schedule */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Batch Information</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border border-slate-200">
                      <th className="text-left px-4 py-3 text-slate-600 font-semibold rounded-tl-xl">Batch</th>
                      <th className="text-left px-4 py-3 text-slate-600 font-semibold">Timing</th>
                      <th className="text-left px-4 py-3 text-slate-600 font-semibold">Days</th>
                      <th className="text-left px-4 py-3 text-slate-600 font-semibold rounded-tr-xl">Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batches.map((b, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-900">{b.name}</td>
                        <td className="px-4 py-3 text-slate-600">{b.timing}</td>
                        <td className="px-4 py-3 text-slate-600">{b.days}</td>
                        <td className="px-4 py-3 text-slate-600">{b.seats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-xs mt-2">* Sample batch schedule for demonstration purposes</p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <HelpCircle className="w-6 h-6 text-slate-400" /> Frequently Asked Questions
              </h2>
              <FAQ items={faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Course Highlights</h3>
              <ul className="space-y-3 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`${c.btn} text-white text-sm font-medium py-3 px-4 rounded-xl w-full flex items-center justify-center gap-2 transition-colors`}>
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-green-50 text-green-700 hover:bg-green-100 text-sm font-medium py-3 px-4 rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="font-semibold text-amber-800 text-sm">Free Demo Class</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">
                Attend a free demo class before enrolling. Contact us to schedule your session.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
