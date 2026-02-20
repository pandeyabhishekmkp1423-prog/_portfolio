import React from "react";
import { motion } from "framer-motion";

const campaigns = [
  {
    image: "/images/gallery1.jpg",
    title: "Streetwear Evolution",
    description:
      "A high-impact streetwear collaboration capturing the cultural pulse of India’s Gen Z audience through dynamic visuals, urban aesthetics, and aspirational styling.",
    impact:
      "2.3M+ Views • 180K Engagement • 5.1% Interaction Rate",
  },
  {
    image: "/images/gallery2.jpg",
    title: "Cinematic Travel Story",
    description:
      "A storytelling-driven travel campaign blending immersive visuals with emotional narrative — crafted to inspire exploration while maintaining strong audience relatability.",
    impact:
      "1.8M+ Reach • 140K Saves • 4.8% Engagement",
  },
  {
    image: "/images/gallery3.jpg",
    title: "Lifestyle Performance Series",
    description:
      "A performance-focused lifestyle campaign integrating fashion, fitness, and authenticity — driving both aspirational positioning and measurable brand ROI.",
    impact:
      "3.1M+ Impressions • 220K Engagement • 6% Reel Completion",
  },
];

const FloatingGallery: React.FC = () => {
  return (
    <section className="relative py-28 md:py-44 px-6 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-500/10 via-blue-500/6 to-transparent blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-white/35 uppercase tracking-[0.7em] text-xs font-semibold block mb-6">
            Featured Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Campaign{" "}
            <span className="italic font-light text-white/80 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-500">
              Highlights
            </span>
          </h2>
        </motion.div>

        {/* CAMPAIGNS */}
        <div className="space-y-24 md:space-y-36">

          {campaigns.map((item, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className={`grid lg:grid-cols-2 gap-12 md:gap-24 items-center ${
                  reversed ? "lg:grid-flow-dense" : ""
                }`}
              >

                {/* IMAGE */}
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className={`relative group ${
                    reversed ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="
                    relative rounded-3xl overflow-hidden
                    border border-white/10
                    shadow-[0_60px_140px_rgba(0,0,0,0.7)]
                    transition-all duration-500
                    group-hover:shadow-[0_80px_180px_rgba(0,0,0,0.8)]
                  ">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full aspect-[4/5] object-cover
                        transition-all duration-700
                        group-hover:scale-105 group-hover:brightness-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="max-w-xl group"
                >
                  <h3 className="
                    text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 tracking-tight
                    text-white
                    group-hover:bg-gradient-to-r
                    group-hover:from-blue-400
                    group-hover:via-purple-400
                    group-hover:to-pink-500
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                    transition-all duration-500
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-white/65 text-base md:text-lg leading-relaxed mb-10
                    group-hover:text-white/85
                    transition-colors duration-500
                  ">
                    {item.description}
                  </p>

                  <div className="
                    text-white/40 uppercase tracking-[0.25em] text-xs
                    group-hover:tracking-[0.35em]
                    transition-all duration-500
                  ">
                    {item.impact}
                  </div>

                  <div className="
                    mt-8 h-[2px] w-0
                    bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500
                    group-hover:w-full
                    transition-all duration-700
                  "></div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
    </section>
  );
};

export default FloatingGallery;