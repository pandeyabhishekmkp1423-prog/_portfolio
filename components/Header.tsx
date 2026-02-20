import React, { useState, useEffect } from "react";
import { Instagram, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg-main) 92%, black)"
          : "color-mix(in srgb, var(--bg-main) 75%, transparent)",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.35)"
          : "none",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl border-b ${
        scrolled ? "border-white/10 h-16" : "border-white/5 h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 h-full flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative cursor-pointer select-none"
        >
          <motion.span
            variants={{
              initial: { letterSpacing: "-0.05em", y: 0 },
              hover: { letterSpacing: "0.05em", y: -2 }
            }}
            transition={{ duration: 0.35 }}
            className="block text-lg md:text-xl font-bold uppercase leading-none tracking-tight"
          >
            Swapnil
          </motion.span>

          <motion.span
            variants={{
              initial: { letterSpacing: "0.3em", opacity: 0.6 },
              hover: { letterSpacing: "0.4em", opacity: 1 }
            }}
            transition={{ duration: 0.35 }}
            className="block text-lg md:text-xl font-light uppercase text-white/60 leading-none"
          >
            Pandey
          </motion.span>

          <motion.div
            variants={{
              initial: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.35 }}
            className="absolute -bottom-1 left-0 h-[1px] bg-white/40 hidden md:block"
          />

          <div className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 md:hidden" />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-[0.2em] uppercase text-white/70">
          {["about", "content", "reels", "brands", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group transition-colors duration-300 hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white/80 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3 md:space-x-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/swapnilpandeyg"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 hover:border-pink-400/40"
          >
            <Instagram
              size={20}
              strokeWidth={2.2}
              className="
                transition-all duration-300
                text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]
                md:text-white/80 md:drop-shadow-none
                md:group-hover:text-pink-500
                md:group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]
              "
            />
          </a>

          {/* Mail */}
          <a
            href="mailto:pandeyswapnil426@gmail.com"
            className="group p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 hover:border-red-400/40"
          >
            <Mail
              size={20}
              className="
                transition-all duration-300
                text-red-400
                md:text-white/80
                md:group-hover:text-red-500
              "
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/10 transition-all duration-300 hover:border-white/30"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "color-mix(in srgb, var(--bg-main) 92%, black)",
            }}
            className="md:hidden border-t border-white/10 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col items-center py-8 space-y-6 uppercase tracking-[0.25em] text-sm">
              {["about", "content", "reels", "brands", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="relative text-pink-400 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;