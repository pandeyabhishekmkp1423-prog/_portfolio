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
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
  },
  {
    name: "MG Hector",
    logo: "https://www.carlogos.org/logo/MG-logo-red-2010-1920x1080.png",
  },
  {
    name: "Hero MotoCorp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hero_MotoCorp_Logo.svg",
  },
];

const Brands: React.FC = () => {
  return (
    <section id="brands" className="relative py-32 px-6 bg-black overflow-hidden">

      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        <span className="text-white/30 uppercase tracking-[0.4em] text-xs font-semibold block mb-6">
          Brand Collaborations
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Brands That Trust Swapnil
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.12,
                y: -10,
                rotateX: 6,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="relative group perspective"
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-[2px]"></div>

              <div className="relative flex items-center justify-center p-10 bg-black border border-white/10 rounded-2xl transition-all duration-200 group-hover:border-transparent">

                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 object-contain grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-200"
                />

              </div>
            </motion.div>
          ))}

        </div>

        <p className="mt-20 text-white/30 text-sm italic tracking-wide max-w-2xl mx-auto">
          50+ high-impact collaborations blending creativity, influence, and measurable performance.
        </p>

      </div>
    </section>
  );
};

export default Brands;
