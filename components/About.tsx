import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.08);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 30;
    const rotateY = (x - centerX) / 30;

    frame.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.transform = `
      perspective(1400px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="about" className="relative py-48 px-6 bg-black overflow-hidden">
      {/* Watermark */}
      <motion.div
        style={{ transform: `translateY(${offsetY}px)` }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <span className="text-[15vw] font-black tracking-tight text-white/[0.025] select-none">
          SWAPNIL
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-32 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden transition-transform duration-300 ease-out shadow-[0_70px_180px_rgba(0,0,0,0.95)]"
            >
              <img
                src="/images/about.jpg"
                alt="Swapnil Pandey"
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-105 hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 bg-black border border-white/15 p-8 rounded-2xl backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-white/40 group-hover:w-full transition-all duration-500"></div>
              <p className="text-sm italic text-white/70 leading-relaxed tracking-wide">
                “Influence isn’t about visibility. It’s about impact, emotion, and the stories that stay.”
              </p>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-white/35 uppercase tracking-[0.6em] text-xs font-semibold block mb-12">
              Meet Swapnil
            </span>

            <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-[1.05] tracking-tight">
              Influence Built Through{" "}
              <span className="italic font-light text-white/60">
                Authentic Energy
              </span>
            </h2>

            {[
              "Swapnil Pandey is a digital creator who transformed a passion project during lockdown into a nationally recognized personal brand.",
              "Rooted in authenticity and relatability, his content speaks directly to India’s culturally aware Gen Z and Millennial audiences.",
              "With over 1M+ followers and strong engagement metrics, his storytelling bridges aspirational lifestyle visuals with emotionally resonant narratives.",
              "Every collaboration is strategically crafted — blending performance-driven creativity with genuine audience trust."
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={paragraphVariant}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="group relative max-w-2xl mb-8 cursor-default"
              >
                <p className="text-white/60 leading-relaxed text-lg transition-all duration-300 group-hover:text-white/85 group-hover:tracking-[0.02em]">
                  {text}
                </p>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}

            {/* INFO GRID */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-20">
              {[
                {
                  title: "Core Focus",
                  content:
                    "Fashion • Travel • Lifestyle • Relatable Reels",
                },
                {
                  title: "Primary Audience",
                  content:
                    "18–34 Years • Urban & Tier 2 Indian Cities",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="group relative"
                >
                  <div className="text-3xl font-bold text-white/20 mb-6">
                    0{index + 1}
                  </div>

                  <h4 className="text-white font-semibold uppercase tracking-[0.4em] text-xs mb-5">
                    {item.title}
                  </h4>

                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {item.content}
                  </p>

                  <div className="mt-6 h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
