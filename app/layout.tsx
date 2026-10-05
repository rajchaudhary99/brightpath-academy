import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MarqueeBanner from "@/components/MarqueeBanner";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "BrightPath Academy | JEE, NEET & CUET Coaching",
  description: "Demo coaching institute website offering structured preparation, expert guidance and student-focused learning for JEE, NEET, CUET and Classes 9–12.",
  keywords: "JEE coaching, NEET coaching, CUET coaching, coaching institute Delhi, Rohini coaching",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <MarqueeBanner />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
