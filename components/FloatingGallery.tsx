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
    <section className="relative py-40 px-6 bg-black overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* CENTERED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-32"
        >
          <span className="text-white/25 uppercase tracking-[0.7em] text-xs font-semibold block mb-8">
            Featured Work
          </span>

          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Campaign{" "}
            <span className="italic font-light text-white/50">
              Highlights
            </span>
          </motion.h2>
        </motion.div>

        {/* CAMPAIGNS */}
        <div className="space-y-48">

          {campaigns.map((item, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`grid lg:grid-cols-2 gap-24 items-center ${
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
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_80px_200px_rgba(0,0,0,0.95)]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />

                    {/* Subtle ambient glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]"></div>
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="max-w-xl"
                >
                  <motion.h3
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 text-lg leading-relaxed mb-10"
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    whileHover={{ letterSpacing: "0.15em" }}
                    transition={{ duration: 0.3 }}
                    className="text-white/40 uppercase tracking-widest text-xs"
                  >
                    {item.impact}
                  </motion.div>

                  <div className="mt-10 h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-700"></div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FloatingGallery;
