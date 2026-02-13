import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <span>{count}</span>;
};

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      group relative overflow-hidden rounded-2xl
      p-8 md:p-12
      bg-gradient-to-br from-white/[0.04] to-white/[0.02]
      border border-white/10
      transition-all duration-500
      md:hover:border-white/30
    "
  >
    {/* Accent line */}
    <div className="
      absolute top-0 left-0 h-full w-1
      bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500
      opacity-100 md:opacity-70 md:group-hover:opacity-100
      transition-opacity
    "></div>

    {/* Subtle inner glow */}
    <div className="
      absolute inset-0
      bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10
      md:opacity-0 md:group-hover:opacity-100
      transition-opacity duration-500
    "></div>

    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-24 md:py-32 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-white/50 md:text-white/40 uppercase tracking-[0.4em] text-xs font-bold block mb-4 md:mb-6">
          Insights
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Audience Breakdown
        </h2>

        <div className="w-16 md:w-24 h-[1px] bg-white/20 mx-auto"></div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">

        {/* Age Group */}
        <Card>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8">
            Core Age Group
          </div>

          <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-3 md:mb-4">
            <Counter value={18} />–<Counter value={34} />
          </div>

          <div className="text-white/70 md:text-white/50 text-base md:text-lg">
            Years • Gen Z & Millennials
          </div>
        </Card>

        {/* Gender */}
        <Card>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8">
            Gender Split
          </div>

          <div className="text-5xl md:text-6xl font-black mb-4 md:mb-6">
            55%{" "}
            <span className="text-white/60 md:text-white/40 font-light text-2xl md:text-3xl">
              Male
            </span>
          </div>

          <div className="text-xl md:text-2xl text-white/70 md:text-white/50">
            45% Female
          </div>
        </Card>

        {/* Location */}
        <Card>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8">
            Primary Location
          </div>

          <div className="text-xl md:text-4xl font-semibold mb-5 md:mb-6">
            Tier 1 & Tier 2 Indian Cities
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </div>
        </Card>

        {/* Interests */}
        <Card>
          <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8">
            Key Interests
          </div>

          <div className="space-y-3 md:space-y-4 text-white/85 md:text-white/80 text-base md:text-lg">
            <div>• Fashion & Grooming</div>
            <div>• Fitness & Lifestyle</div>
            <div>• Aspirational Travel</div>
            <div>• Productivity & Personal Branding</div>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default Audience;
