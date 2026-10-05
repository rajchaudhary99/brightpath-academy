import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, Eye, Heart, ArrowRight } from "lucide-react";
import FacultyCard from "@/components/FacultyCard";
import CTA from "@/components/CTA";
import { AnimateIn, AnimatedCounter } from "@/components/AnimateIn";
import { faculty } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | BrightPath Academy",
  description: "Learn about BrightPath Academy's mission, vision and teaching approach.",
};

const values = [
  { icon: Target, title: "Our Mission",  desc: "To provide every student with the structured guidance, expert teaching and personal mentorship needed to achieve their academic goals.", color: "blue" },
  { icon: Eye,    title: "Our Vision",   desc: "To be the most trusted coaching institute in Delhi/Rohini, known for genuine student outcomes and a student-first approach.", color: "purple" },
  { icon: Heart,  title: "Our Approach", desc: "We believe in concept-first teaching, small batch sizes and regular feedback — not just covering syllabus but building real understanding.", color: "green" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600", purple: "bg-purple-50 text-purple-600", green: "bg-green-50 text-green-600",
};

const whyUs = [
  "Experienced faculty with proven track records",
  "Small batch sizes for personalised attention",
  "Regular tests and detailed performance analysis",
  "Dedicated doubt-clearing sessions",
  "Comprehensive study material included",
  "Regular parent-teacher communication",
  "Flexible batch timings including weekends",
  "Career counselling and university guidance",
];

const statsGrid = [
  { value: "500+", label: "Students Guided",    color: "bg-blue-600" },
  { value: "10+",  label: "Years Experience",   color: "bg-green-600" },
  { value: "25+",  label: "Expert Mentors",     color: "bg-purple-600" },
  { value: "95%",  label: "Sample Success Rate",color: "bg-orange-500" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="demo-badge mx-auto w-fit mb-4">Demo Content — For Demonstration Purposes</div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              About BrightPath Academy
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              A coaching institute built on the belief that every student deserves expert guidance, personal attention and a clear path to success.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn animation="fade-left">
              <div className="section-badge">Our Story</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Dedicated to Student Success Since Day One
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>BrightPath Academy was founded with a simple but powerful belief: that quality coaching should be accessible, personalised and genuinely effective. We started with a small team of passionate educators and a commitment to putting students first.</p>
                <p>Over the years, we have helped hundreds of students prepare for JEE, NEET, CUET and board exams. Our approach combines experienced faculty, structured curriculum and the kind of personal attention that makes a real difference.</p>
                <p>We are located in Rohini, Delhi, and serve students from across the region who are serious about their academic goals.</p>
              </div>
              <div className="mt-6 demo-badge">⚠️ This is sample content created for demonstration purposes</div>
            </AnimateIn>

            <AnimateIn animation="fade-right">
              <div className="grid grid-cols-2 gap-4">
                {statsGrid.map((stat, i) => (
                  <AnimateIn key={stat.label} animation="zoom-in" delay={i * 80}>
                    <div className={`${stat.color} rounded-2xl p-6 text-center text-white`}>
                      <p className="text-4xl font-bold mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <AnimatedCounter target={stat.value} />
                      </p>
                      <p className="text-white/80 text-sm">{stat.label}</p>
                    </div>
                  </AnimateIn>
                ))}
                <p className="col-span-2 text-center text-slate-400 text-xs">* Sample statistics for demonstration</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>What Drives Us</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimateIn key={title} animation="fade-up" delay={i * 120}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center card-hover h-full">
                  <div className={`w-14 h-14 ${colorMap[color]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn animation="fade-left">
              <div className="section-badge">Why Students Choose Us</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
                The BrightPath Difference
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUs.map((point, i) => (
                  <AnimateIn key={point} animation="fade-up" delay={i * 50}>
                    <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{point}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-right">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Our Teaching Philosophy</h3>
                <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                  <p>We believe that understanding beats memorisation. Our faculty focuses on building genuine conceptual clarity rather than just covering syllabus.</p>
                  <p>Every student learns differently. That's why we keep batch sizes small and encourage students to ask questions freely.</p>
                  <p>Regular testing is not about pressure — it's about identifying gaps early and addressing them before they become problems.</p>
                </div>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  Book a Free Counselling <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge">Our Team</div>
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Meet Our Faculty</h2>
            <p className="text-slate-500 mt-3"><span className="demo-badge">Demo faculty profiles for demonstration purposes</span></p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {faculty.map((m, i) => (
              <AnimateIn key={m.name} animation="fade-up" delay={i * 100} className="h-full">
                <FacultyCard member={m} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
