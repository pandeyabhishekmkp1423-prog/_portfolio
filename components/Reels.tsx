import React from "react";
import { Play, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const reelData = [
  {
    img: "https://picsum.photos/id/101/600/1000",
    views: "450K",
    title: "Streetwear Transition",
    desc: "High-retention outfit transformation engineered for share velocity."
  },
  {
    img: "https://picsum.photos/id/102/600/1000",
    views: "1.2M",
    title: "Luxury Travel Frame",
    desc: "Cinematic destination storytelling with aspirational composition."
  },
  {
    img: "https://picsum.photos/id/103/600/1000",
    views: "890K",
    title: "Relatable POV",
    desc: "Trend-aligned narrative content connecting instantly with Gen Z."
  },
  {
    img: "https://picsum.photos/id/104/600/1000",
    views: "320K",
    title: "Lifestyle Edit",
    desc: "Minimal daily aesthetic blending authenticity with polish."
  },
];

const Reels: React.FC = () => {
  return (
    <section id="reels" className="relative py-20 md:py-28 px-6 bg-black">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">

        <span className="text-white/40 md:text-white/20 uppercase tracking-[0.6em] text-xs block mb-4 md:mb-6">
          Social Performance
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8">
          <span className="
            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent
          ">
            Viral Reels
          </span>
        </h2>

        <p className="
          text-white/70 md:text-white/50
          leading-relaxed text-sm sm:text-base md:text-lg
          mb-8 md:mb-10
          max-w-xl mx-auto
        ">
          High-performing short-form content blending storytelling,
          cultural relatability, and aspirational aesthetics —
          crafted to drive measurable audience impact.
        </p>

        {/* CENTERED CTA */}
        <a
          href="https://www.instagram.com/swapnilpandeyg"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-5 py-3
            border border-white/30 md:border-white/20
            text-white md:text-white/70
            uppercase tracking-[0.35em] text-xs
            transition-all duration-300
            md:hover:text-white md:hover:border-white/40
          "
        >
          <Instagram size={16} />
          Visit Profile
        </a>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

        {reelData.map((reel, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="group relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">

              <img
                src={reel.img}
                alt={reel.title}
                className="
                  w-full aspect-[9/16] object-cover
                  md:grayscale md:group-hover:grayscale-0
                  transition-all duration-700
                  md:group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Glow (always visible on mobile) */}
              <div className="
                absolute inset-0
                opacity-40 md:opacity-0
                md:group-hover:opacity-100
                transition-opacity duration-500
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]
              "></div>

              {/* Play button */}
              <div className="
                absolute inset-0 flex items-center justify-center
                opacity-70 md:opacity-0
                md:group-hover:opacity-100
                transition-opacity duration-500
              ">
                <div className="p-3 bg-white/20 backdrop-blur rounded-full border border-white/20">
                  <Play fill="white" size={20} />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 text-xs font-semibold text-white tracking-wide">
                {reel.views}
              </div>
            </div>

            <div className="mt-4 md:mt-5 text-center px-1">
              <h3 className="
                text-sm sm:text-base md:text-lg
                font-semibold mb-2 tracking-tight
                text-white md:text-white/90
                transition-all duration-300
                md:group-hover:text-white
              ">
                {reel.title}
              </h3>

              <p className="
                text-white/70 md:text-white/50
                text-xs sm:text-sm leading-relaxed
                md:group-hover:text-white/75
                transition-all duration-300
              ">
                {reel.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Reels;
