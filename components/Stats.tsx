import React from "react";
import { motion } from "framer-motion";

const Stats: React.FC = () => {
  return (
    <section className="py-36 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-white/30 uppercase tracking-[0.4em] text-xs font-semibold block mb-4">
            Performance
          </span>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            By The Numbers
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT BIG BLOCK */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="group relative p-16 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            <div className="text-8xl md:text-9xl font-black tracking-tight 
                            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                            bg-clip-text text-transparent mb-6">
              1M+
            </div>

            <div className="text-sm uppercase tracking-[0.4em] text-white/50">
              Followers
            </div>

            <p className="mt-6 text-white/40 max-w-md leading-relaxed">
              A highly engaged community across Gen Z & Millennial audiences
              driving strong brand recall and conversion.
            </p>
          </motion.div>

          {/* RIGHT BIG BLOCK */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="group relative p-16 rounded-3xl border border-white/10 bg-white/[0.02]"
          >
            <div className="text-8xl md:text-9xl font-black tracking-tight 
                            bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                            bg-clip-text text-transparent mb-6">
              5%+
            </div>

            <div className="text-sm uppercase tracking-[0.4em] text-white/50">
              Engagement Rate
            </div>

            <p className="mt-6 text-white/40 max-w-md leading-relaxed">
              Consistent interaction metrics significantly above industry
              average for lifestyle influencers.
            </p>
          </motion.div>

        </div>

        {/* Bottom Row Smaller Stats */}
        <div className="grid sm:grid-cols-2 gap-12 mt-20">

          <motion.div
            whileHover={{ y: -8 }}
            className="p-12 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              200K+
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4">
              Avg Reel Views
            </div>
            <p className="text-white/40 text-sm">
              Strong short-form content performance across lifestyle,
              fashion and travel.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-12 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className="text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              3-4/week
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-white/50 mb-4">
              Content Frequency
            </div>
            <p className="text-white/40 text-sm">
              Strategic weekly publishing cadence ensuring consistent
              audience engagement.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Stats;
