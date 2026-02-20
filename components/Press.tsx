import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    quote:
      "Swapnil Pandey is redefining fashion influence with a signature blend of authenticity and aspirational storytelling.",
    source: "Mid-Day",
    link: "https://www.mid-day.com/brand-media/article/swapnil-pandey-brimming-up-with-experience-across-reigns-of-travel-fashion-and-lifestyle-23205222"
  },
  {
    quote:
      "One of India's most promising digital storytellers to watch this decade.",
    source: "The Asian Age",
    link: "https://newsable.asianetnews.com/business/swapnil-pandey-decodes-how-influencer-marketing-is-a-crucial-aspect-of-business-growth-vpn-r7rbm4"
  },
  {
    quote:
      "His visual aesthetics and relatability create a benchmark for modern lifestyle creators.",
    source: "Hindustan Times",
    link: "https://www.hindustantimes.com/brand-stories/swapnil-pandey-talks-about-how-brands-and-influencers-can-remain-compliant-101649684238430.html"
  }
];

const Press: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-500/10 via-blue-500/6 to-transparent blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-white/30 uppercase tracking-[0.7em] text-xs font-semibold block mb-6">
            Media Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Press & Features
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                group relative rounded-3xl p-8 md:p-10
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-2xl
                transition-all duration-500
                cursor-pointer
                shadow-[0_50px_140px_rgba(0,0,0,0.6)]
                hover:border-white/30
              "
            >

              {/* Hover Gradient Overlay (FIXED) */}
              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                pointer-events-none
                z-0
              "></div>

              {/* Content */}
              <div className="relative z-10">

                <div className="text-[60px] md:text-[80px] leading-none text-white/10 mb-6 font-serif">
                  “
                </div>

                <blockquote className="
                  text-base sm:text-lg md:text-xl
                  leading-relaxed
                  text-white/70
                  mb-8
                  transition-colors duration-300
                  group-hover:text-white
                ">
                  {item.quote}
                </blockquote>

                <div className="flex items-center justify-between mt-6">

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-white/30"></div>

                    <cite className="
                      not-italic uppercase
                      tracking-[0.25em]
                      text-[10px] md:text-xs
                      font-semibold
                      text-white
                    ">
                      {item.source}
                    </cite>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 group-hover:text-white transition-colors duration-300"
                  />
                </div>

              </div>

              {/* Bottom Gradient Sweep (FIXED) */}
              <div className="
                absolute bottom-0 left-0
                h-[2px] w-0
                bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                group-hover:w-full
                transition-all duration-700
                pointer-events-none
                z-0
              "></div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Press;