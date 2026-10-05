"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-400 transition-all duration-100 z-10"
          style={{ width: `${progress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-9 h-9 rounded-lg gradient-navy flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#0f2557] leading-none block" style={{ fontFamily: "Poppins, sans-serif" }}>
                  BrightPath
                </span>
                <span className="text-xs text-slate-500 leading-none">Academy</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0.5 left-4 right-4 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors flex items-center gap-1.5 group"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-ping" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5 relative overflow-hidden group"
              >
                <span className="relative z-10">Enquire Now</span>
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all duration-200 active:scale-90"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className={`transition-all duration-300 ${menuOpen ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}>
                <Menu className="w-5 h-5" />
              </div>
              <div className={`transition-all duration-300 ${menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}>
                <X className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href) ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50 hover:pl-6"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-50 text-green-700 font-medium text-sm hover:bg-green-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn-primary justify-center text-sm">
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="h-16" />
    </>
  );
}
