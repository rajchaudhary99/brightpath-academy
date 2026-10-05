import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "CUET Preparation | BrightPath Academy",
  description: "Targeted CUET coaching for central university admissions with domain and general test preparation.",
};

export default function CUETPage() {
  return (
    <CourseDetailPage
      title="CUET Preparation"
      tagline="Central University Entrance"
      description="Targeted CUET coaching covering domain subjects, general test and language sections to help you secure admission in top central universities including DU, JNU and BHU."
      color="purple"
      duration="6–12 Months"
      batchSize="Small Batches (15–20 students)"
      whoShouldJoin={[
        "Class 12 students targeting DU, JNU, BHU admissions",
        "Students aiming for central university undergraduate programs",
        "Students who want structured CUET preparation",
        "Students targeting multiple domain subjects",
      ]}
      learningOutcomes={[
        "Complete domain subject preparation aligned with CUET pattern",
        "Strong performance in the General Test section",
        "Language section proficiency",
        "Exam strategy for attempting multiple sections",
        "University selection and application guidance",
      ]}
      subjects={[
        { name: "Domain Subjects", topics: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics"] },
        { name: "General Test", topics: ["Quantitative Reasoning", "Logical Reasoning", "General Knowledge", "Current Affairs"] },
        { name: "Language Section", topics: ["Reading Comprehension", "Vocabulary", "Grammar", "Writing Skills"] },
      ]}
      features={[
        "Domain subject preparation",
        "General Test coaching",
        "Language section practice",
        "CUET mock tests",
        "University selection guidance",
        "Application process support",
        "Study material included",
      ]}
      batches={[
        { name: "Regular Batch", timing: "10:00 AM – 1:00 PM", days: "Mon–Fri", seats: "Limited" },
        { name: "Weekend Batch", timing: "9:00 AM – 1:00 PM", days: "Sat–Sun", seats: "Limited" },
        { name: "Intensive Batch", timing: "9:00 AM – 3:00 PM", days: "Mon–Sat", seats: "Limited" },
      ]}
      faqs={[
        { q: "Which universities accept CUET scores?", a: "All 45 central universities including Delhi University, JNU, BHU, Jamia Millia Islamia and many others accept CUET scores for undergraduate admissions." },
        { q: "How many domain subjects can I choose?", a: "You can choose up to 6 domain subjects in CUET. We help you select the right combination based on your target university and program." },
        { q: "Is CUET harder than board exams?", a: "CUET tests similar concepts but in an MCQ format with time pressure. With proper preparation and practice, students can score well in CUET." },
        { q: "Can I prepare for CUET alongside board exams?", a: "Yes, CUET syllabus largely overlaps with Class 12 board syllabus. Our program is designed to help you prepare for both simultaneously." },
      ]}
    />
  );
}
