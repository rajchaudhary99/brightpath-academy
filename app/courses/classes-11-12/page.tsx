import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "Class 11–12 Coaching | BrightPath Academy",
  description: "Board exam excellence and competitive exam foundation for Class 11 and 12 students.",
};

export default function Classes1112Page() {
  return (
    <CourseDetailPage
      title="Class 11–12 Program"
      tagline="Board & Entrance Prep"
      description="A dual-focus program for Class 11 and 12 students covering CBSE board exam preparation alongside the foundation needed for JEE, NEET and CUET entrance exams."
      color="red"
      duration="1–2 Years"
      batchSize="Small Batches (20–25 students)"
      whoShouldJoin={[
        "Class 11 students in PCM or PCB stream",
        "Class 12 students targeting board exams",
        "Students preparing for JEE, NEET or CUET alongside boards",
        "Students who want structured school + entrance coaching",
      ]}
      learningOutcomes={[
        "Complete CBSE Class 11–12 syllabus mastery",
        "Strong board exam preparation and scoring strategy",
        "Competitive exam foundation for JEE/NEET/CUET",
        "Time management for balancing boards and entrance prep",
        "Career clarity and stream-specific guidance",
      ]}
      subjects={[
        { name: "PCM Stream", topics: ["Physics", "Chemistry", "Mathematics", "Computer Science (optional)"] },
        { name: "PCB Stream", topics: ["Physics", "Chemistry", "Biology", "Biotechnology (optional)"] },
        { name: "Board Prep", topics: ["CBSE Pattern Practice", "Previous Year Papers", "Practical Guidance", "Project Support"] },
      ]}
      features={[
        "CBSE board + entrance exam dual preparation",
        "PCM and PCB stream options",
        "Regular chapter-wise and unit tests",
        "Board exam mock tests",
        "Career counselling sessions",
        "Study material included",
        "Parent-teacher meetings",
      ]}
      batches={[
        { name: "Morning Batch", timing: "7:00 AM – 10:00 AM", days: "Mon–Sat", seats: "Limited" },
        { name: "Afternoon Batch", timing: "2:00 PM – 5:00 PM", days: "Mon–Sat", seats: "Limited" },
        { name: "Weekend Batch", timing: "9:00 AM – 1:00 PM", days: "Sat–Sun", seats: "Limited" },
      ]}
      faqs={[
        { q: "Can I prepare for boards and JEE/NEET simultaneously?", a: "Yes, our program is specifically designed for this. The Class 11–12 syllabus overlaps significantly with JEE and NEET, so with the right approach, both can be prepared together." },
        { q: "Which stream should I choose — PCM or PCB?", a: "PCM is for engineering aspirants (JEE) and PCB is for medical aspirants (NEET). We provide career counselling to help you make the right choice." },
        { q: "How important are Class 11 marks?", a: "Class 11 marks are not counted in board percentages but the concepts are crucial for Class 12 and entrance exams. We ensure strong Class 11 foundations." },
        { q: "Do you provide practical guidance?", a: "Yes, we provide guidance for CBSE practicals and help students prepare for practical exams alongside theory." },
      ]}
    />
  );
}
