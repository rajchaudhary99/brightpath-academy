import type { Metadata } from "next";
import FacultyCard from "@/components/FacultyCard";
import CTA from "@/components/CTA";
import { AnimateIn } from "@/components/AnimateIn";
import { faculty } from "@/lib/data";
import { UserCheck, BookOpen, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty | BrightPath Academy",
  description: "Meet the experienced faculty at BrightPath Academy.",
};

const approach = [
  { icon: BookOpen,  title: "Concept-First Teaching",  desc: "We focus on building genuine understanding before moving to problem-solving." },
  { icon: Users,     title: "Student-Centred Classes", desc: "Small batches ensure every student gets attention and can ask questions freely." },
  { icon: Award,     title: "Continuous Improvement",  desc: "Our faculty regularly updates their teaching methods and stays current with exam patterns." },
  { icon: UserCheck, title: "Personal Mentorship",     desc: "Beyond classroom teaching, our faculty mentors students on study strategies and goals." },
];

export default function FacultyPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <UserCheck className="w-4 h-4" /> Our Team
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Learn From Experienced Mentors
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Our faculty brings deep subject expertise and a genuine passion for student success.
            </p>
            <div className="mt-4 demo-badge mx-auto w-fit">
              ⚠️ Demo faculty profiles — fictional content for demonstration purposes
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {faculty.map((m, i) => (
              <AnimateIn key={m.name} animation="fade-up" delay={i * 100} className="h-full">
                <FacultyCard member={m} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="text-center mb-12">
            <div className="section-badge">Our Approach</div>
            <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>How We Teach</h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ icon: Icon, title, desc }, i) => (
              <AnimateIn key={title} animation="zoom-in" delay={i * 100}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center card-hover h-full">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
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
