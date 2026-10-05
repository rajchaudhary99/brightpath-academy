import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "Class 9–10 Coaching | BrightPath Academy",
  description: "Strong foundation building for Class 9 and 10 students aligned with CBSE curriculum.",
};

export default function Classes910Page() {
  return (
    <CourseDetailPage
      title="Class 9–10 Foundation Program"
      tagline="School Foundation"
      description="A strong foundation program for Class 9 and 10 students. We align with the CBSE curriculum while building the conceptual depth needed for future competitive exam success."
      color="orange"
      duration="1 Year"
      batchSize="Small Batches (20–25 students)"
      whoShouldJoin={[
        "Class 9 students wanting a strong academic foundation",
        "Class 10 students preparing for board exams",
        "Students who want to build early competitive exam readiness",
        "Students looking for structured school-level coaching",
      ]}
      learningOutcomes={[
        "Strong conceptual foundation in Science and Mathematics",
        "Complete CBSE syllabus coverage for Class 9 and 10",
        "Board exam preparation and scoring strategies",
        "Early exposure to competitive exam thinking",
        "Improved academic confidence and performance",
      ]}
      subjects={[
        { name: "Mathematics", topics: ["Number Systems", "Algebra", "Geometry", "Trigonometry", "Statistics"] },
        { name: "Science", topics: ["Physics", "Chemistry", "Biology", "Environmental Science"] },
        { name: "English", topics: ["Grammar", "Reading Comprehension", "Writing Skills", "Literature"] },
      ]}
      features={[
        "Complete CBSE Class 9–10 syllabus",
        "Regular chapter-wise tests",
        "Board exam preparation",
        "Doubt-clearing sessions",
        "Study material and notes",
        "Parent progress reports",
        "Career guidance sessions",
      ]}
      batches={[
        { name: "Morning Batch", timing: "7:00 AM – 9:00 AM", days: "Mon–Sat", seats: "Limited" },
        { name: "Afternoon Batch", timing: "2:00 PM – 4:00 PM", days: "Mon–Sat", seats: "Limited" },
        { name: "Weekend Batch", timing: "9:00 AM – 12:00 PM", days: "Sat–Sun", seats: "Limited" },
      ]}
      faqs={[
        { q: "Is Class 9 coaching necessary?", a: "Class 9 is when concepts become more advanced. Early coaching helps students build a strong foundation that makes Class 10 boards and future competitive exams much easier." },
        { q: "Do you cover all CBSE subjects?", a: "We primarily focus on Mathematics and Science (Physics, Chemistry, Biology). English support is also available. Please enquire for the current subject offerings." },
        { q: "How are Class 10 board exams prepared for?", a: "We conduct regular mock tests in board exam format, cover previous year papers and provide exam strategy guidance in the months leading up to the boards." },
        { q: "Will this help in JEE/NEET preparation later?", a: "Absolutely. Our Class 9–10 program is designed to build the conceptual foundation that makes JEE and NEET preparation much smoother in Class 11–12." },
      ]}
    />
  );
}
