import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "JEE Preparation | BrightPath Academy",
  description: "Comprehensive JEE Main & Advanced coaching with concept-first teaching and rigorous practice.",
};

export default function JEEPage() {
  return (
    <CourseDetailPage
      title="JEE Main & Advanced Preparation"
      tagline="Engineering Entrance"
      description="A comprehensive, concept-first coaching program for JEE Main and Advanced aspirants. We focus on building strong fundamentals, problem-solving skills and exam temperament."
      color="blue"
      duration="1–2 Years"
      batchSize="Small Batches (20–25 students)"
      whoShouldJoin={[
        "Class 11 students starting early preparation",
        "Class 12 students targeting JEE this year",
        "Droppers / repeaters aiming for improvement",
        "Students targeting top NITs and IITs",
      ]}
      learningOutcomes={[
        "Strong conceptual foundation in Physics, Chemistry and Mathematics",
        "Ability to solve complex JEE-level problems independently",
        "Exam strategy and time management skills",
        "Confidence through regular mock tests and analysis",
        "Complete coverage of JEE Main and Advanced syllabus",
      ]}
      subjects={[
        { name: "Physics", topics: ["Mechanics", "Electrodynamics", "Optics", "Modern Physics", "Thermodynamics"] },
        { name: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Reaction Mechanisms"] },
        { name: "Mathematics", topics: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry", "Vectors"] },
      ]}
      features={[
        "Complete JEE Main & Advanced syllabus coverage",
        "Weekly chapter-wise tests",
        "Full-length mock tests every month",
        "Previous year paper analysis",
        "Doubt-clearing sessions",
        "Comprehensive study material included",
        "Performance tracking and reports",
      ]}
      batches={[
        { name: "Morning Batch", timing: "7:00 AM – 10:00 AM", days: "Mon–Sat", seats: "Limited" },
        { name: "Afternoon Batch", timing: "2:00 PM – 5:00 PM", days: "Mon–Sat", seats: "Limited" },
        { name: "Weekend Batch", timing: "9:00 AM – 1:00 PM", days: "Sat–Sun", seats: "Limited" },
      ]}
      faqs={[
        { q: "When should I start JEE preparation?", a: "Ideally from Class 11. Starting early gives you more time to build concepts and practice. However, Class 12 students and droppers can also achieve great results with focused preparation." },
        { q: "What is the difference between JEE Main and Advanced?", a: "JEE Main is the qualifying exam for NITs and other engineering colleges. JEE Advanced is for IIT admissions and is taken by top JEE Main scorers." },
        { q: "How many hours of study are required daily?", a: "We recommend 6–8 hours of focused study daily, including classroom time. Quality of study matters more than quantity." },
        { q: "Is study material provided?", a: "Yes, comprehensive study material including theory notes, practice sheets and previous year papers are provided to all enrolled students." },
      ]}
    />
  );
}
