import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/85 border-b border-white/10 h-14 md:h-16"
          : "backdrop-blur-xl bg-black/70 border-b border-white/5 h-16 md:h-20"
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
            transition={{ duration: 0.4 }}
            className="block text-lg md:text-xl font-bold uppercase leading-none tracking-tight"
          >
            Swapnil
          </motion.span>

          <motion.span
            variants={{
              initial: { letterSpacing: "0.3em", opacity: 0.6 },
              hover: { letterSpacing: "0.4em", opacity: 1 }
            }}
            transition={{ duration: 0.4 }}
            className="block text-lg md:text-xl font-light uppercase text-white/60 leading-none"
          >
            Pandey
          </motion.span>

          {/* Desktop underline */}
          <motion.div
            variants={{
              initial: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-1 left-0 h-[1px] bg-white/40 hidden md:block"
          />

          {/* Mobile subtle glow underline */}
          <div className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 md:hidden" />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase text-white/70">
          {["about", "content", "reels", "brands", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3 md:space-x-5">

          {/* Instagram (FIXED PROPERLY) */}
          <a
            href="https://www.instagram.com/swapnilpandeyg"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <Instagram
              size={20}
              strokeWidth={2.2}
              className="
                transition-all duration-300

                /* MOBILE – Always bright */
                text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]

                /* DESKTOP default */
                md:text-white/80 md:drop-shadow-none

                /* DESKTOP hover */
                md:group-hover:text-pink-500
                md:group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]
              "
            />
          </a>

          {/* Mail */}
          <a
            href="mailto:pandeyswapnil426@gmail.com"
            className="group p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
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

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/10"
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 space-y-5 uppercase tracking-widest text-sm">
              {["about", "content", "reels", "brands", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-pink-400"
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
