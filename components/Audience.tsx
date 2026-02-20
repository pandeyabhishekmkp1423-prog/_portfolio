import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* -------- COUNT HOOK -------- */
const useCountUp = (end: number, duration: number = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

/* -------- CARD -------- */
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    whileHover={{
      y: -10,
      boxShadow: "0px 40px 120px rgba(255,255,255,0.06)",
    }}
    className="
      group relative overflow-hidden rounded-3xl
      p-8 md:p-12
      bg-white/[0.03]
      backdrop-blur-2xl
      border border-white/10
      transition-all duration-500
    "
  >
    {/* Gradient Accent Line */}
    <div className="
      absolute top-0 left-0 h-full w-1
      bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500
    "></div>

    {/* Subtle Glow Overlay */}
    <div className="
      absolute inset-0
      bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "></div>

    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Audience: React.FC = () => {
  const ageStart = useCountUp(18);
  const ageEnd = useCountUp(34);
  const male = useCountUp(55);
  const female = useCountUp(45);

  return (
    <section id="audience" className="relative py-28 md:py-40 px-6 overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-500/10 via-blue-500/6 to-transparent blur-3xl opacity-40"></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20 md:mb-28 relative z-10">
        <span className="text-white/35 uppercase tracking-[0.6em] text-xs font-semibold block mb-6">
          Insights
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Audience{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Breakdown
          </span>
        </h2>

        <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">

        {/* Age Group */}
        <Card>
          <div className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
            Core Age Group
          </div>

          <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            {ageStart}–{ageEnd}
          </div>

          <div className="text-white/60 text-base md:text-lg">
            Years • Gen Z & Millennials
          </div>
        </Card>

        {/* Gender */}
        <Card>
          <div className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
            Gender Split
          </div>

          <div className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            {male}%
          </div>

          <div className="text-lg text-white/70 mb-3">
            Male
          </div>

          <div className="text-lg text-white/60">
            {female}% Female
          </div>
        </Card>

        {/* Location */}
        <Card>
          <div className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
            Primary Location
          </div>

          <div className="text-xl md:text-3xl font-semibold mb-6">
            Tier 1 & Tier 2 Indian Cities
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </div>
        </Card>

        {/* Interests */}
        <Card>
          <div className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
            Key Interests
          </div>

          <div className="space-y-4 text-white/80 text-base md:text-lg">
            <div className="hover:text-white transition-colors duration-300">• Fashion & Grooming</div>
            <div className="hover:text-white transition-colors duration-300">• Fitness & Lifestyle</div>
            <div className="hover:text-white transition-colors duration-300">• Aspirational Travel</div>
            <div className="hover:text-white transition-colors duration-300">• Productivity & Personal Branding</div>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default Audience;