"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormData {
  name: string; phone: string; email: string;
  classLevel: string; course: string; message: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", classLevel: "", course: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit mobile number";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.classLevel) e.classLevel = "Please select a class";
    if (!form.course) e.course = "Please select a course";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const field = (key: keyof FormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center animate-zoom-in">
        {/* Animated success ring */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-40" />
          <div className="relative w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          Enquiry Submitted!
        </h3>
        <p className="text-slate-600 text-sm mb-6">
          Thank you for your interest. Our counsellor will contact you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="btn-primary text-sm"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const inputBase = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2";
  const inputClass = (key: keyof FormData) =>
    `${inputBase} ${errors[key]
      ? "border-red-400 bg-red-50 focus:ring-red-200"
      : "border-slate-200 bg-white focus:border-blue-400 focus:ring-blue-100 hover:border-slate-300"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { key: "name" as const,  label: "Full Name *",      type: "text",  placeholder: "Your full name" },
          { key: "phone" as const, label: "Phone Number *",   type: "tel",   placeholder: "10-digit mobile number" },
        ].map(({ key, label, type, placeholder }, i) => (
          <div key={key} className="animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
            <input type={type} placeholder={placeholder} value={form[key]}
              onChange={(e) => field(key, e.target.value)} className={inputClass(key)} />
            {errors[key] && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />{errors[key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
        <input type="email" placeholder="your@email.com" value={form.email}
          onChange={(e) => field("email", e.target.value)} className={inputClass("email")} />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
            <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />{errors.email}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          {
            key: "classLevel" as const, label: "Class / Level *",
            options: ["Class 9", "Class 10", "Class 11", "Class 12", "Dropper / Repeater"],
            placeholder: "Select class",
          },
          {
            key: "course" as const, label: "Course Interested In *",
            options: ["JEE Preparation", "NEET Preparation", "CUET Preparation", "Class 9–10", "Class 11–12"],
            placeholder: "Select course",
          },
        ].map(({ key, label, options, placeholder }, i) => (
          <div key={key} className="animate-fade-in-up" style={{ animationDelay: `${180 + i * 60}ms` }}>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
            <select value={form[key]} onChange={(e) => field(key, e.target.value)} className={inputClass(key)}>
              <option value="">{placeholder}</option>
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
            {errors[key] && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
                <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />{errors[key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
        <textarea rows={4} placeholder="Any specific questions or requirements..."
          value={form.message} onChange={(e) => field("message", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none transition-all duration-200
            focus:ring-2 focus:ring-blue-100 focus:border-blue-400 hover:border-slate-300 resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-70 relative overflow-hidden group">
        <span className="relative z-10 flex items-center gap-2">
          {loading
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
            : <><Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" /> Submit Enquiry</>
          }
        </span>
        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
      </button>
    </form>
  );
}
