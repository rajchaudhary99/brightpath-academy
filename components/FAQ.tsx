"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem { q: string; a: string; }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${
            open === i
              ? "border-blue-200 shadow-md shadow-blue-50"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
              open === i ? "bg-blue-50" : "bg-white hover:bg-slate-50"
            }`}
            aria-expanded={open === i}
          >
            <span className={`font-semibold text-sm pr-4 transition-colors duration-200 ${
              open === i ? "text-blue-700" : "text-slate-900"
            }`}>
              {item.q}
            </span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              open === i ? "bg-blue-600 text-white rotate-0" : "bg-slate-100 text-slate-500"
            }`}>
              {open === i
                ? <Minus className="w-3.5 h-3.5" />
                : <Plus className="w-3.5 h-3.5" />
              }
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-400"
            style={{ maxHeight: open === i ? "200px" : "0px", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            <p className="px-6 py-4 text-slate-600 text-sm leading-relaxed border-t border-blue-100 bg-white">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
