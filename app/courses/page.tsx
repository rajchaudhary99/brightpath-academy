import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import { AnimateIn } from "@/components/AnimateIn";
import { courses } from "@/lib/data";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses | BrightPath Academy",
  description: "Explore JEE, NEET, CUET and school-level coaching programs at BrightPath Academy.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="gradient-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" /> Our Programs
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              All Courses & Programs
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Structured coaching programs designed to help you achieve your academic and competitive exam goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <AnimateIn key={course.id} animation="fade-up" delay={i * 80}>
                <CourseCard course={course} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
