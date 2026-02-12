import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-24 pb-12 px-6 border-t border-white/10 overflow-hidden">

      {/* Subtle radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 mb-24">

          {/* ================= BRAND (UNCHANGED) ================= */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter uppercase leading-none">
                Swapnil
              </span>
              <span className="text-2xl font-light tracking-widest uppercase text-white/60 leading-none">
                Pandey
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Influencer & digital storyteller collaborating with global brands
              across fashion, lifestyle, and travel. Creating impactful,
              aspirational content with authentic audience engagement.
            </p>
          </div>

          {/* ================= CONNECT ================= */}
          <div className="flex flex-col justify-start">

            <h4 className="text-xs uppercase tracking-[0.45em] text-white/50 mb-10">
              Connect
            </h4>

            <div className="space-y-6 text-white/40 text-sm">

              <a
                href="mailto:pandeyswapnil426@gmail.com"
                className="group relative inline-block transition-all duration-300 hover:text-white"
              >
                pandeyswapnil426@gmail.com
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#"
                className="group relative inline-block transition-all duration-300 hover:text-white"
              >
                Press & Media Kit
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
              </a>

            </div>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className="flex flex-col justify-start">

            <h4 className="text-xs uppercase tracking-[0.45em] text-white/50 mb-10">
              Follow
            </h4>

            <div className="flex items-center gap-6">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/swapnilpandeyg?igsh=MW92Nnk3dWgxbzVwYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-white/30"
              >
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-400/20 blur-md"></span>

                <Instagram
                  size={20}
                  className="relative z-10 text-white/50 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-400 group-hover:bg-clip-text"
                />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="group relative p-3 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-red-500/40"
              >
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-red-500/20 blur-md"></span>

                <Youtube
                  size={20}
                  className="relative z-10 text-white/50 transition-all duration-300 group-hover:text-red-500"
                />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="group relative p-3 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-400/20 blur-md"></span>

                <Twitter
                  size={20}
                  className="relative z-10 text-white/50 transition-all duration-300 group-hover:text-blue-400"
                />
              </a>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] uppercase tracking-[0.35em] text-white/30">

            <p className="hover:text-white/60 transition-colors duration-300 text-center md:text-left">
              © {new Date().getFullYear()} Swapnil Pandey
            </p>

            <div className="flex gap-10">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
