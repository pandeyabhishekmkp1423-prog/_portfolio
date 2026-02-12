import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Top Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.5em] text-xs text-white/40 mb-8"
        >
          Collaborate With Swapnil Pandey
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-10"
        >
          LET’S BUILD <br />
          SOMETHING{" "}
          <span className="italic font-light text-white/50">
            ICONIC
          </span>
        </motion.h2>

        {/* Brand Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed mb-16"
        >
          Swapnil Pandey is a fashion-forward digital creator blending 
          lifestyle aesthetics, trend-driven storytelling, and audience-first 
          engagement. From curated fashion campaigns to relatable reels, 
          every collaboration is built for impact, authenticity, and reach.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="mailto:pandeyswapnil426@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="group inline-flex items-center px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-sm rounded-full transition-all duration-500 hover:bg-black hover:text-white border border-white"
        >
          Start a Campaign
          <ArrowRight className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
        </motion.a>

      </div>
    </section>
  );
};

export default ContactCTA;
