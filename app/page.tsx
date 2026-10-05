import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, MessageCircle, Users, TrendingUp, Clock, Award,
  BookOpen, ClipboardList, UserCheck, HelpCircle, FileText, BarChart3,
  Star, CheckCircle2, Sparkles,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TiltCard from "@/components/TiltCard";
import { AnimateIn, AnimatedCounter } from "@/components/AnimateIn";
import { courses, faculty, testimonials, faqs, WHATSAPP_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "BrightPath Academy | JEE, NEET & CUET Coaching",
  description: "Demo coaching institute website offering structured preparation, expert guidance and student-focused learning.",
};

const stats = [
  { value: "500+", label: "Students Guided",     icon: Users },
  { value: "95%",  label: "Sample Success Rate", icon: TrendingUp },
  { value: "10+",  label: "Years of Experience", icon: Clock },
  { value: "25+",  label: "Expert Mentors",      icon: Award },
];

const features = [
  { icon: BookOpen,     title: "Experienced Faculty",   desc: "Learn from subject experts with years of competitive exam coaching experience.",          color: "blue" },
  { icon: ClipboardList,title: "Regular Test Series",   desc: "Structured weekly and monthly tests to track progress and build exam temperament.",       color: "green" },
  { icon: UserCheck,    title: "Personal Mentorship",   desc: "One-on-one guidance sessions to address individual learning gaps and goals.",             color: "purple" },
  { icon: HelpCircle,   title: "Doubt Resolution",      desc: "Dedicated doubt-clearing sessions so no question goes unanswered.",                       color: "orange" },
  { icon: FileText,     title: "Study Material",        desc: "Comprehensive notes, practice sheets and previous year papers included.",                 color: "red" },
  { icon: BarChart3,    title: "Performance Tracking",  desc: "Detailed performance reports shared with students and parents regularly.",                 color: "indigo" },
];

const featureColors: Record<string, string> = {
  blue:   "bg-blue-50 text-blue-600",
  green:  "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
  red:    "bg-red-50 text-red-600",
  indigo: "bg-indigo-50 text-indigo-600",
};

const topResults = [
  { score: "98.4%ile", exam: "JEE Main",  color: "text-blue-700" },
  { score: "645/720",  exam: "NEET",      color: "text-green-700" },
  { score: "96.2%",    exam: "CUET",      color: "text-purple-700" },
  { score: "97.8%",    exam: "Class 12",  color: "text-orange-700" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-navy min-h-[88vh] flex items-center">
        {/* Background blobs + particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full" />
          {/* Particle dots */}
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${10 + (i * 37) % 80}%`,
                top:  `${15 + (i * 53) % 70}%`,
                animation: `particle-drift ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <div>
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Delhi / Rohini's Premier Coaching Institute
                </div>
              </div>

              <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                Turn Your Potential Into Your{" "}
                <span className="text-amber-400">Success</span>
              </h1>

              <p className="animate-fade-in-up delay-200 text-blue-100 text-lg sm:text-xl leading-relaxed mb-6 max-w-xl">
                Expert coaching, personal guidance and structured preparation for students who aim higher.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 mb-10">
                {["JEE", "NEET", "CUET", "Classes 9–12"].map((tag) => (
                  <span key={tag}
                    className="bg-white/15 border border-white/25 text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-white/25 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent text-base px-8 py-4 justify-center">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-outline text-base px-8 py-4 justify-center">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right visual card */}
            <div className="hidden lg:flex justify-center animate-fade-in delay-500">
              <TiltCard className="relative">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center animate-float">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>BrightPath</p>
                    <p className="text-blue-200 text-sm">Academy</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {topResults.map((r) => (
                        <div key={r.exam} className="bg-white rounded-xl p-3 text-center">
                          <p className={`font-bold text-sm ${r.color}`}>{r.score}</p>
                          <p className="text-slate-500 text-xs">{r.exam}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-blue-300 text-xs mt-3">Sample Results</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 text-center animate-bounce-subtle delay-200">
                  <p className="text-blue-700 font-bold text-lg">500+</p>
                  <p className="text-slate-500 text-xs">Students</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-amber-400 rounded-xl shadow-lg px-4 py-2 text-center animate-bounce-subtle delay-400">
                  <p className="text-white font-bold text-lg">10+</p>
                  <p className="text-white/80 text-xs">Years</p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-3">
              <span className="demo-badge">⚠️ Sample statistics for demonstration purposes only</span>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimateIn key={label} animation="zoom-in" delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-[#0f2557] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <AnimatedCounter target={value} />
                  </p>
                  <p className="text-slate-500 text-sm">{label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge"><BookOpen className="w-3.5 h-3.5" /> Our Programs</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Programs Designed For Your Success
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Structured courses for every stage of your academic journey.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <AnimateIn key={course.id} animation="fade-up" delay={i * 80}>
                <CourseCard course={course} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={200} className="text-center mt-10">
            <Link href="/courses" className="btn-primary text-sm px-8">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <AnimateIn animation="fade-left">
              <div className="section-badge"><Star className="w-3.5 h-3.5" /> Why BrightPath</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                What Makes Us Different
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We combine experienced teaching, structured curriculum and personalised attention to help every student reach their potential.
              </p>
              <div className="space-y-4">
                {[
                  "Concept-first teaching methodology",
                  "Small batch sizes for personal attention",
                  "Regular parent-teacher communication",
                  "Flexible batch timings",
                ].map((point, i) => (
                  <div key={point} className="flex items-center gap-3"
                    style={{ animationDelay: `${i * 80}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-8 text-sm">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateIn>

            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc, color }, i) => (
                <AnimateIn key={title} animation="zoom-in" delay={i * 70}>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 card-hover h-full">
                    <div className={`w-10 h-10 rounded-xl ${featureColors[color]} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-4">
            <div className="section-badge"><TrendingUp className="w-3.5 h-3.5" /> Student Results</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Results That Inspire
            </h2>
            <div className="mt-3 demo-badge mx-auto w-fit">
              ⚠️ All results shown are sample/demo content — not real student results
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {topResults.map((r, i) => (
              <AnimateIn key={r.exam} animation="zoom-in" delay={i * 100}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center card-hover">
                  <p className={`text-4xl font-bold mb-2 ${r.color}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                    {r.score}
                  </p>
                  <p className="text-slate-600 font-medium text-sm">{r.exam}</p>
                  <p className="text-slate-400 text-xs mt-1">Sample Result</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={200} className="text-center mt-10">
            <Link href="/results" className="btn-primary text-sm px-8">
              View All Results <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge"><UserCheck className="w-3.5 h-3.5" /> Our Faculty</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Learn From Experienced Mentors
            </h2>
            <p className="text-slate-500 mt-3">
              <span className="demo-badge">Demo faculty profiles for demonstration purposes</span>
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {faculty.map((m, i) => (
              <AnimateIn key={m.name} animation="fade-up" delay={i * 100} className="h-full">
                <FacultyCard member={m} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={200} className="text-center mt-10">
            <Link href="/faculty" className="btn-primary text-sm px-8">
              Meet All Faculty <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge"><Star className="w-3.5 h-3.5" /> Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              What Students Say
            </h2>
            <p className="text-slate-500 mt-3">
              <span className="demo-badge">⚠️ Sample testimonials — fictional content for demonstration only</span>
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} animation="fade-up" delay={i * 120}>
                <TestimonialCard t={t} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTA />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge"><HelpCircle className="w-3.5 h-3.5" /> FAQ</div>
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={100}>
            <FAQ items={faqs} />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
