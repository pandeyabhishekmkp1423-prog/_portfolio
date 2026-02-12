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
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-white/30 uppercase tracking-[0.4em] text-xs font-semibold block mb-4">
            Media Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Press & Features
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="group relative rounded-2xl p-10 bg-black border border-white/10 overflow-hidden"
            >

              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Big quote mark */}
                <div className="text-[80px] leading-none text-white/10 mb-6">
                  “
                </div>

                <blockquote className="text-lg md:text-xl leading-relaxed text-white/80 mb-10 group-hover:text-white transition-colors duration-200">
                  {item.quote}
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-px bg-white/20 group-hover:bg-white transition-colors duration-200"></div>
                  <cite className="not-italic uppercase tracking-[0.3em] text-xs font-semibold text-white/40 group-hover:text-white transition-colors duration-200">
                    {item.source}
                  </cite>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Press;
