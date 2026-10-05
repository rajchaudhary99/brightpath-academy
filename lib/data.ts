export interface Course {
  id: string;
  title: string;
  description: string;
  features: string[];
  duration: string;
  icon: string;
  color: string;
  href: string;
}

export interface Faculty {
  name: string;
  subject: string;
  experience: string;
  description: string;
  initials: string;
  color: string;
}

export interface Testimonial {
  name: string;
  course: string;
  text: string;
  score: string;
  initials: string;
}

export interface Result {
  name: string;
  exam: string;
  score: string;
  year: string;
  color: string;
}

export const WHATSAPP_NUMBER = "919999999999";
export const WHATSAPP_MESSAGE = "Hi, I would like to know more about the courses and admission process.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_INFO = {
  phone: "+91 99999 99999",
  email: "info@brightpathacademy.in",
  address: "Plot No. 12, Sector 9, Rohini, New Delhi – 110085",
};

export const courses: Course[] = [
  {
    id: "jee",
    title: "JEE Preparation",
    description: "Comprehensive preparation for JEE Main & Advanced with concept-first teaching and rigorous practice.",
    features: ["Physics, Chemistry & Maths", "Weekly Mock Tests", "Previous Year Papers", "Doubt Sessions"],
    duration: "1–2 Years",
    icon: "Atom",
    color: "blue",
    href: "/courses/jee",
  },
  {
    id: "neet",
    title: "NEET Preparation",
    description: "Structured NEET coaching covering Biology, Physics and Chemistry with NCERT-focused approach.",
    features: ["Biology, Physics & Chemistry", "NCERT Deep Dive", "Chapter-wise Tests", "Biology Special Batches"],
    duration: "1–2 Years",
    icon: "Stethoscope",
    color: "green",
    href: "/courses/neet",
  },
  {
    id: "cuet",
    title: "CUET Preparation",
    description: "Targeted CUET coaching for central university admissions with domain and general test preparation.",
    features: ["Domain Subjects", "General Test", "Language Section", "University Guidance"],
    duration: "6–12 Months",
    icon: "GraduationCap",
    color: "purple",
    href: "/courses/cuet",
  },
  {
    id: "classes-9-10",
    title: "Class 9–10",
    description: "Strong foundation building for Class 9 and 10 students aligned with CBSE curriculum.",
    features: ["All Core Subjects", "CBSE Aligned", "Regular Assessments", "Board Exam Prep"],
    duration: "1 Year",
    icon: "BookOpen",
    color: "orange",
    href: "/courses/classes-9-10",
  },
  {
    id: "classes-11-12",
    title: "Class 11–12",
    description: "Board exam excellence and competitive exam foundation for Class 11 and 12 students.",
    features: ["PCM / PCB Streams", "Board + Entrance Prep", "Practical Guidance", "Career Counselling"],
    duration: "1–2 Years",
    icon: "Trophy",
    color: "red",
    href: "/courses/classes-11-12",
  },
];

export const faculty: Faculty[] = [
  {
    name: "Dr. Amit Sharma",
    subject: "Physics",
    experience: "12+ Years Experience",
    description: "Specialises in mechanics and electrodynamics. Known for making complex concepts simple and intuitive.",
    initials: "AS",
    color: "blue",
  },
  {
    name: "Priya Verma",
    subject: "Chemistry",
    experience: "9+ Years Experience",
    description: "Expert in Organic and Physical Chemistry with a student-first teaching philosophy.",
    initials: "PV",
    color: "green",
  },
  {
    name: "Rahul Mehta",
    subject: "Mathematics",
    experience: "10+ Years Experience",
    description: "Passionate about problem-solving and building strong mathematical foundations for competitive exams.",
    initials: "RM",
    color: "purple",
  },
  {
    name: "Ananya Kapoor",
    subject: "Biology",
    experience: "8+ Years Experience",
    description: "NEET specialist with deep expertise in Botany and Zoology, focused on NCERT mastery.",
    initials: "AK",
    color: "orange",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rohan S. (Sample)",
    course: "JEE Preparation",
    text: "This is a sample testimonial created for demonstration purposes. The teaching methodology shown here represents the kind of structured, concept-focused approach a quality coaching institute would offer.",
    score: "Sample Score",
    initials: "RS",
  },
  {
    name: "Meera P. (Sample)",
    course: "NEET Preparation",
    text: "Sample testimonial for demo purposes. This represents how a student might describe their experience with personalised mentorship, regular tests and doubt-clearing sessions at a coaching institute.",
    score: "Sample Score",
    initials: "MP",
  },
  {
    name: "Arjun K. (Sample)",
    course: "Class 11–12",
    text: "Demo testimonial content. This illustrates the kind of feedback a student might give about board exam preparation, study material quality and faculty support at a professional coaching centre.",
    score: "Sample Score",
    initials: "AK",
  },
];

export const results: Result[] = [
  { name: "Sample Student A", exam: "JEE Main", score: "98.4 Percentile", year: "2024", color: "blue" },
  { name: "Sample Student B", exam: "NEET", score: "645 / 720", year: "2024", color: "green" },
  { name: "Sample Student C", exam: "CUET", score: "96.2%", year: "2024", color: "purple" },
  { name: "Sample Student D", exam: "Class 12 CBSE", score: "97.8%", year: "2024", color: "orange" },
  { name: "Sample Student E", exam: "JEE Advanced", score: "AIR 1240 (Sample)", year: "2024", color: "blue" },
  { name: "Sample Student F", exam: "NEET", score: "620 / 720", year: "2024", color: "green" },
  { name: "Sample Student G", exam: "CUET", score: "94.5%", year: "2023", color: "purple" },
  { name: "Sample Student H", exam: "Class 12 CBSE", score: "95.4%", year: "2023", color: "orange" },
];

export const faqs = [
  {
    q: "Which courses do you offer?",
    a: "We offer coaching for JEE Main & Advanced, NEET, CUET, and school-level classes for Class 9 to 12 (PCM/PCB streams).",
  },
  {
    q: "Do you provide demo classes?",
    a: "Yes, prospective students can attend a free demo class before enrolling. Contact us to schedule your demo session.",
  },
  {
    q: "Are weekend batches available?",
    a: "Yes, we offer weekend batches for students who cannot attend on weekdays. Please enquire for current batch timings.",
  },
  {
    q: "How can I enquire about admission?",
    a: "You can fill the enquiry form on our website, call us directly, or WhatsApp us. Our counsellors will guide you through the admission process.",
  },
  {
    q: "Do you provide study material?",
    a: "Yes, comprehensive study material including theory notes, practice sheets and previous year papers are provided to all enrolled students.",
  },
  {
    q: "How are tests conducted?",
    a: "We conduct regular chapter-wise tests, unit tests and full-length mock tests. Performance reports are shared with students and parents.",
  },
];
