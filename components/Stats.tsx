import React from "react";
import { motion } from "framer-motion";

const StatNumber = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          whileHover={{
            scale: 1.25,
            color: "#ffffff",
            textShadow: "0px 0px 25px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 400 }}
          className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="relative py-52 px-6 bg-black overflow-hidden">

      {/* Background Energy Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[600px] -translate-x-1/2 -translate-y-1/2 
                        bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent 
                        blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Header */}
        <div className="mb-32">
          <span className="text-white/25 uppercase tracking-[0.7em] text-xs font-semibold block mb-6">
            Performance
          </span>

          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Influence in{" "}
            <span className="italic font-light text-white/60">
              Motion
            </span>
          </h2>
        </div>

        {/* MAIN HERO STAT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="text-[12rem] md:text-[14rem] leading-none font-black tracking-tight">
            <StatNumber text="1M+" />
          </div>

          <div className="mt-6 text-sm uppercase tracking-[0.6em] text-white/40">
            Followers
          </div>

          <p className="mt-8 text-white/50 max-w-2xl mx-auto leading-relaxed text-lg hover:text-white/75 transition-colors duration-500">
            A culturally aligned community built on authenticity,
            storytelling, and high-impact collaborations across fashion,
            lifestyle, and travel.
          </p>
        </motion.div>

        {/* SECONDARY STATS */}
        <div className="grid md:grid-cols-3 gap-16">

          {[
            {
              number: "5%+",
              label: "Engagement Rate",
              desc: "Consistently outperforming industry averages with meaningful interaction depth."
            },
            {
              number: "200K+",
              label: "Avg Reel Views",
              desc: "High-performing short-form content driving visibility and recall."
            },
            {
              number: "3–4",
              label: "Posts / Week",
              desc: "Strategic publishing cadence maintaining momentum and audience attention."
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                boxShadow: "0px 40px 120px rgba(255,255,255,0.08)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
            >
              <div className="text-6xl font-bold mb-6">
                <StatNumber text={stat.number} />
              </div>

              <div className="text-xs uppercase tracking-[0.6em] text-white/40 mb-6">
                {stat.label}
              </div>

              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-500">
                {stat.desc}
              </p>

              {/* Hover underline sweep */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

    </section>
  );
};

export default Stats;
