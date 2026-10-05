import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "NEET Preparation | BrightPath Academy",
  description: "Structured NEET coaching with NCERT-focused approach for Biology, Physics and Chemistry.",
};

export default function NEETPage() {
  return (
    <CourseDetailPage
      title="NEET Preparation"
      tagline="Medical Entrance"
      description="A structured NEET coaching program with deep NCERT focus, regular testing and personalised mentorship to help you secure a seat in your dream medical college."
      color="green"
      duration="1–2 Years"
      batchSize="Small Batches (20–25 students)"
      whoShouldJoin={[
        "Class 11 students aspiring for MBBS/BDS",
        "Class 12 students targeting NEET this year",
        "Droppers aiming for a better NEET score",
        "Students targeting government medical colleges",
      ]}
      learningOutcomes={[
        "Complete NCERT mastery for Biology, Physics and Chemistry",
        "Strong conceptual understanding of all NEET topics",
        "Ability to attempt 180 questions accurately in 3 hours",
        "Confidence through regular NEET-pattern mock tests",
        "Clarity on exam strategy and question selection",
      ]}
      subjects={[
        { name: "Biology", topics: ["Cell Biology", "Genetics", "Human Physiology", "Plant Physiology", "Ecology", "Biotechnology"] },
        { name: "Physics", topics: ["Mechanics", "Optics", "Electrostatics", "Modern Physics", "Thermodynamics"] },
        { name: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Biomolecules"] },
      ]}
      features={[
        "Complete NEET syllabus coverage",
        "NCERT line-by-line analysis",
        "Weekly Biology special sessions",
        "Full-length NEET mock tests",
        "Previous year NEET paper practice",
        "Doubt-clearing sessions",
        "Study material and notes included",
      ]}
      batches={[
        { name: "Morning Batch", timing: "7:00 AM – 10:00 AM", days: "Mon–Sat", seats: "Limited" },
        { name: "Evening Batch", timing: "5:00 PM – 8:00 PM", days: "Mon–Sat", seats: "Limited" },
        { name: "Weekend Batch", timing: "9:00 AM – 1:00 PM", days: "Sat–Sun", seats: "Limited" },
      ]}
      faqs={[
        { q: "Is NCERT enough for NEET?", a: "NCERT is the foundation and most NEET questions are directly from NCERT. However, additional practice and concept clarity beyond NCERT is also important for a high score." },
        { q: "How many attempts are allowed for NEET?", a: "As per current NMC guidelines, there is no restriction on the number of NEET attempts. Please verify the latest guidelines from the official NTA website." },
        { q: "What score is needed for a government medical college?", a: "Generally, a score above 600/720 improves your chances for government medical colleges. The exact cutoff varies by state and category." },
        { q: "Do you provide Biology special batches?", a: "Yes, we have dedicated Biology sessions given its high weightage in NEET. Special focus is given to Botany and Zoology chapters." },
      ]}
    />
  );
}
