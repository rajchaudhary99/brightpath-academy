const items = [
  "🎯 JEE Main & Advanced",
  "🩺 NEET Preparation",
  "🎓 CUET Coaching",
  "📚 Class 9 – 12",
  "✅ 500+ Students Guided",
  "⭐ Expert Faculty",
  "📝 Regular Test Series",
  "🏆 Proven Results",
  "💬 Personal Mentorship",
  "📖 Study Material Included",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#0f2557] py-2.5 overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f2557] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f2557] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-white/80 text-xs font-medium mx-6">
            {item}
            <span className="text-blue-400 mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
