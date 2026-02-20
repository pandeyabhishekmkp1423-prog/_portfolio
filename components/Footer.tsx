import React from "react";
import { Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 md:pb-10 px-6 border-t border-white/10 overflow-hidden">

      {/* Subtle radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-14 md:mb-16">

          {/* BRAND */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-5">
              <span className="text-2xl font-bold tracking-tight uppercase leading-none">
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

          {/* CONNECT */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.45em] text-white/50 mb-6">
              Connect
            </h4>

            <div className="space-y-4 text-white/40 text-sm">

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

          {/* SOCIAL */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.45em] text-white/50 mb-6">
              Follow
            </h4>

            <div className="flex items-center">

              <a
                href="https://www.instagram.com/swapnilpandeyg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <Instagram
                  size={20}
                  strokeWidth={2}
                  className="text-white/60 transition-all duration-300 group-hover:text-pink-500"
                />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 md:pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-white/30">

            <p className="hover:text-white/60 transition-colors duration-300">
              © {new Date().getFullYear()} Swapnil Pandey
            </p>

            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
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