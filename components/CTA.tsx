import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { WHATSAPP_URL } from "@/lib/data";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTA({
  title = "Ready To Start Your Preparation?",
  subtitle = "Book a free counselling session and find the right program for your goals.",
  primaryLabel = "Book Free Counselling",
  primaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn animation="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            {title}
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={150}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryHref} className="btn-accent text-base px-8 py-3.5 justify-center">
              {primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-outline text-base px-8 py-3.5 justify-center">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
