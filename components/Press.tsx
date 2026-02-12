import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    quote:
      "Swapnil Pandey is redefining fashion influence with a signature blend of authenticity and aspirational storytelling.",
    source: "Mid-Day",
  },
  {
    quote:
      "One of India's most promising digital storytellers to watch this decade.",
    source: "The Asian Age",
  },
  {
    quote:
      "His visual aesthetics and relatability create a benchmark for modern lifestyle creators.",
    source: "Hindustan Times",
  },
];

const Press: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 px-6 bg-black overflow-hidden">

      {/* Soft Background Energy */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-white/40 uppercase tracking-[0.6em] text-xs font-semibold block mb-6">
            Media Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Press{" "}
            <span className="italic font-light text-white/60">
              & Features
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="
                group relative rounded-3xl p-8 md:p-10
                bg-white/[0.02]
                border border-white/10
                backdrop-blur-xl
                transition-all duration-500
                hover:border-white/30
              "
            >

              {/* Mobile always subtle glow */}
              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5
                md:opacity-0 md:group-hover:opacity-100
                transition-opacity duration-500
              "></div>

              {/* Big Quote Mark */}
              <div className="relative z-10">
                <div className="text-[60px] md:text-[80px] leading-none text-white/10 mb-6 font-serif">
                  “
                </div>

                <blockquote className="
                  text-base sm:text-lg md:text-xl
                  leading-relaxed
                  text-white/75 md:text-white/80
                  mb-8
                  transition-colors duration-300
                  group-hover:text-white
                ">
                  {item.quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-white/30"></div>

                  <cite className="
                    not-italic uppercase
                    tracking-[0.25em]
                    text-[10px] md:text-xs
                    font-semibold
                    text-white/50
                    transition-colors duration-300
                    group-hover:text-white
                  ">
                    {item.source}
                  </cite>
                </div>
              </div>

              {/* Bottom subtle sweep line */}
              <div className="
                absolute bottom-0 left-0
                h-[2px] w-12 md:w-0
                bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                md:group-hover:w-full
                transition-all duration-700
              "></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Press;
