import React, { useRef } from 'react';
import { Camera, Map, Shirt, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const INSTAGRAM_LINK = "https://www.instagram.com/swapnilpandeyg";

const collectionData = [
  {
    title: 'Fashion',
    icon: <Shirt size={24} />,
    desc: 'Men’s styling, grooming routines, and brand-led lookbooks crafted for modern audiences.',
    img: 'https://picsum.photos/id/157/600/400'
  },
  {
    title: 'Travel',
    icon: <Map size={24} />,
    desc: 'Destination snippets, local culture, and immersive vlog-style reels.',
    img: 'https://picsum.photos/id/10/600/400'
  },
  {
    title: 'Lifestyle',
    icon: <Camera size={24} />,
    desc: 'Fitness, productivity, personal growth, and aspirational daily content.',
    img: 'https://picsum.photos/id/106/600/400'
  },
  {
    title: 'Trendy & Relatable Reels',
    icon: <Mic size={24} />,
    desc: 'POVs, humor, storytelling, and content that connects instantly with Gen Z.',
    img: 'https://picsum.photos/id/225/600/400'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const Collections: React.FC = () => {
  return (
    <section id="content" className="relative py-44 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-32">
          <span className="text-white/25 uppercase tracking-[0.6em] text-xs font-semibold block mb-6">
            Content Strategy
          </span>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Content{" "}
            <span className="italic font-light text-white/50">
              Pillars
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {collectionData.map((item, idx) => {
            const cardRef = useRef<HTMLAnchorElement>(null);

            const handleMouseMove = (e: React.MouseEvent) => {
              const card = cardRef.current;
              if (!card) return;

              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const rotateX = -(y - centerY) / 30;
              const rotateY = (x - centerX) / 30;

              card.style.transform = `
                perspective(1500px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-14px)
                scale(1.04)
              `;
            };

            const handleMouseLeave = () => {
              const card = cardRef.current;
              if (!card) return;

              card.style.transform = `
                perspective(1500px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
                scale(1)
              `;
            };

            return (
              <motion.a
                key={idx}
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 7 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 cursor-pointer shadow-[0_60px_180px_rgba(0,0,0,0.6)] hover:border-white/30"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />

                  {/* Softer bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                  {/* Reflective sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[300%] transition-all duration-1000"></div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 pt-6">

                  <div className="mb-5 text-white p-3 bg-white/10 backdrop-blur-md inline-flex items-center justify-center w-fit rounded-xl border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 tracking-tight transition-all duration-500 group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed transition-all duration-500 group-hover:text-white/80">
                    {item.desc}
                  </p>

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.03] blur-3xl opacity-20 pointer-events-none"></div>

    </section>
  );
};

export default Collections;
