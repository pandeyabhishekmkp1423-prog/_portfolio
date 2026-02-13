import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Coca Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  },
  {
    name: "Flipkart",
    logo: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
  },
  {
    name: "Amazon Fashion",
    logo: "https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png",
  },
  {
    name: "MG Hector",
    logo: "https://logo-teka.com/wp-content/uploads/2025/07/mg-motor-logo.png",
  },
  {
    name: "Hero MotoCorp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hero_MotoCorp_Logo.svg",
  },
  {
    name: "Spencers",
    logo: "https://companieslogo.com/img/orig/SPENCERS.NS_BIG-9b99c75c.png?t=1720244494",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Brands: React.FC = () => {
  return (
    <section
      id="brands"
      className="relative py-40 px-6 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Depth Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Section Label */}
        <span className="text-white/25 uppercase tracking-[0.6em] text-xs font-semibold block mb-8">
          Brand Collaborations
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-20 leading-[1.1]">
          Brands That Trust{" "}
          <span className="italic font-light text-white/50">
            Swapnil
          </span>
        </h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-12"
        >
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]"
            >
              {/* Soft Inner Shadow Layer */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />

              {/* Logo */}
              <div className="flex items-center justify-center h-24">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Brand Name */}
              <p className="mt-8 text-xs tracking-[0.3em] uppercase text-white/35 group-hover:text-white/70 transition-colors duration-300">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statement */}
        <p className="mt-28 text-white/40 text-lg leading-relaxed max-w-3xl mx-auto">
          Over{" "}
          <span className="text-white font-semibold">
            50+ high-impact collaborations
          </span>{" "}
          spanning fashion, lifestyle, automotive, and retail —
          delivering campaigns built on authenticity, performance,
          and meaningful audience engagement.
        </p>

      </div>
    </section>
  );
};

export default Brands;
