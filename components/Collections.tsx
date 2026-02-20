import React, { useRef } from "react";
import { Camera, Map, Shirt, Mic, ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const collectionData = [
  {
    title: "Fashion",
    icon: <Shirt size={20} />,
    desc: "Men’s styling, grooming routines, and brand-led lookbooks crafted for modern audiences.",
    video: "/reel9.mp4",
    link: "https://www.instagram.com/reel/DJJ0TMQSQ7t"
  },
  {
    title: "Travel",
    icon: <Map size={20} />,
    desc: "Destination snippets, local culture, and immersive vlog-style reels.",
    video: "/reel10.mp4",
    link: "https://www.instagram.com/reel/DLCj7JxyMHB/?igsh=ejB5MTZ3aXpubXlh"
  },
  {
    title: "Lifestyle",
    icon: <Camera size={20} />,
    desc: "Fitness, productivity, personal growth, and aspirational daily content.",
    video: "/reel11.mp4",
    link: "https://www.instagram.com/reel/C8mMPgIyDoD/?igsh=MW92MzR6bXQ4M2Jsdw=="
  },
  {
    title: "Trendy & Relatable Reels",
    icon: <Mic size={20} />,
    desc: "POVs, humor, storytelling, and content that connects instantly with Gen Z.",
    video: "/reel12.mp4",
    link: "https://www.instagram.com/reel/DUa0Qm4j28I/?igsh=MW82dGd3ZXU2ZXJibg=="
  }
];

const Collections: React.FC = () => {
  return (
    <section id="content" className="relative py-44 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-28">
          <span className="text-white/30 uppercase tracking-[0.7em] text-xs font-semibold block mb-6">
            Content Strategy
          </span>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Content Pillars
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {collectionData.map((item, idx) => {
            const cardRef = useRef<HTMLAnchorElement>(null);

            return (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                ref={cardRef}
                className="group relative rounded-3xl overflow-hidden
                  bg-[#0f172a]
                  border border-white/10
                  shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                  hover:shadow-[0_60px_160px_rgba(0,0,0,0.9)]
                  transition-all duration-500"
              >

                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition duration-500 pointer-events-none"></div>

                {/* VIDEO CONTAINER */}
                <div className="relative">

                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-[9/16] object-cover"
                  />

                  {/* EDGE VIGNETTE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none"></div>

                  {/* TOP LIGHT GLASS */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400 pointer-events-none">
                    <div className="p-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
                      <Play fill="white" size={20} />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 bg-gradient-to-b from-transparent to-[#0f172a]">

                  <div className="mb-5 inline-flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-white">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition">
                    View Reel <ArrowUpRight size={14} />
                  </div>

                </div>

              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Collections;