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
          ? "backdrop-blur-2xl bg-black/80 border-b border-white/10 h-16"
          : "backdrop-blur-xl bg-black/60 border-b border-white/5 h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

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
            className="block text-xl font-bold uppercase leading-none tracking-tight"
          >
            Swapnil
          </motion.span>

          <motion.span
            variants={{
              initial: { letterSpacing: "0.3em", opacity: 0.6 },
              hover: { letterSpacing: "0.4em", opacity: 1 }
            }}
            transition={{ duration: 0.4 }}
            className="block text-xl font-light uppercase text-white/60 leading-none"
          >
            Pandey
          </motion.span>

          {/* Underline animation */}
          <motion.div
            variants={{
              initial: { width: 0 },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-1 left-0 h-[1px] bg-white/40"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase text-white/70">
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#content" className="relative group">
            Content
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#reels" className="relative group">
            Reels
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#brands" className="relative group">
            Brands
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/swapnilpandeyg"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <Instagram
              size={20}
              className="text-white/80 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-400 group-hover:bg-clip-text"
            />
          </a>

          {/* Gmail */}
          <a
            href="mailto:pandeyswapnil426@gmail.com"
            className="group p-2 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <Mail
              size={20}
              className="text-white/80 transition-all duration-300 group-hover:text-red-500"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 space-y-6 uppercase tracking-widest text-white/70 text-sm">
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#content" onClick={() => setOpen(false)}>Content</a>
              <a href="#reels" onClick={() => setOpen(false)}>Reels</a>
              <a href="#brands" onClick={() => setOpen(false)}>Brands</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
