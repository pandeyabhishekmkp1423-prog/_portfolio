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
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const Collections: React.FC = () => {
  return (
    <section id="content" className="relative py-32 px-6 bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-white/30 uppercase tracking-[0.4em] text-xs font-semibold block mb-4">
              Content Strategy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Content Pillars
            </h2>
          </div>

          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            A structured content ecosystem designed to balance aspirational storytelling with high engagement relatability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

              const rotateX = -(y - centerY) / 25;
              const rotateY = (x - centerX) / 25;

              card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                scale(1.05)
              `;
            };

            const handleMouseLeave = () => {
              const card = cardRef.current;
              if (!card) return;

              card.style.transform = `
                perspective(1000px)
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
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-white/10"
              >
                <div className="aspect-[4/5] relative overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-70 group-hover:opacity-100"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                  <div className="mb-4 text-white p-3 bg-white/10 backdrop-blur-md inline-flex items-center justify-center w-fit rounded-xl border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.desc}
                  </p>

                  <div className="mt-6 h-px w-0 bg-white/40 group-hover:w-12 transition-all duration-500"></div>

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
