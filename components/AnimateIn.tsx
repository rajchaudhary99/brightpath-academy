"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";

interface AnimateInProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;       // ms
  duration?: number;    // ms
  className?: string;
  threshold?: number;
}

const variants: Record<Animation, { hidden: string; visible: string }> = {
  "fade-up":    { hidden: "opacity-0 translate-y-8",  visible: "opacity-100 translate-y-0" },
  "fade-in":    { hidden: "opacity-0",                visible: "opacity-100" },
  "fade-left":  { hidden: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
  "fade-right": { hidden: "opacity-0 translate-x-8",  visible: "opacity-100 translate-x-0" },
  "zoom-in":    { hidden: "opacity-0 scale-95",        visible: "opacity-100 scale-100" },
};

export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.12,
}: AnimateInProps) {
  const { ref, visible } = useScrollAnimation(threshold);
  const v = variants[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ${v.hidden} ${visible ? v.visible : ""} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

// Animated number counter
interface CounterProps {
  target: string;   // e.g. "500+" or "95%"
  duration?: number;
}

export function AnimatedCounter({ target, duration = 1800 }: CounterProps) {
  const { ref, visible } = useScrollAnimation(0.3);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const suffix = target.replace(/[\d.]/g, "");
    const num = parseFloat(target.replace(/[^\d.]/g, ""));
    const isDecimal = target.includes(".");
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay((isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix);
      if (step >= steps) { setDisplay(target); clearInterval(timer); }
    }, interval);

    return () => clearInterval(timer);
  }, [visible, target, duration]);

  return <span ref={ref}>{display}</span>;
}
