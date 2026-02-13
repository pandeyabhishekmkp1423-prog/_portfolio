import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

const instagramUrl = "https://www.instagram.com/swapnilpandeyg?igsh=MW92Nnk3dWgxbzVwYQ==";
const heroImage = "/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10">

          {/* Badge */}
          <div className="inline-block px-4 py-1.5 glass rounded-full mb-5">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--text-primary)]/90 md:text-[var(--text-primary)]/80">
              India • Influencer • Digital Creator
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-5 leading-[0.95] tracking-tighter text-gradient">
            INFLUENCING THE <br /> DIGITAL <br /> GENERATION.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 font-light max-w-md leading-relaxed">
            Fashion • Travel • Lifestyle. Building authentic connections with over 1M+ followers through relatable storytelling and high-impact collaborations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-10">

            {[
              { value: "1M+", label: "Followers" },
              { value: "5%+", label: "Engagement" },
              { value: "200K+", label: "Avg Reel Views" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-500 md:hover:-translate-y-2"
              >
                <div className="
                  text-2xl sm:text-3xl md:text-4xl font-bold
                  bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-secondary)]
                  bg-clip-text text-transparent
                  md:text-[var(--text-primary)] md:bg-none
                  md:group-hover:text-transparent
                  md:group-hover:bg-gradient-to-r
                  md:group-hover:from-[var(--text-primary)]
                  md:group-hover:via-[var(--text-primary)]
                  md:group-hover:to-[var(--text-secondary)]
                  md:group-hover:bg-clip-text
                ">
                  {stat.value}
                </div>

                <div className="
                  text-[10px] sm:text-[11px] uppercase tracking-[0.25em]
                  text-[var(--text-secondary)] mt-2
                  md:group-hover:text-[var(--text-primary)]
                  transition-colors duration-500
                ">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <button className="px-7 py-3.5 bg-[var(--text-primary)] text-[var(--bg-main)] font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center group hover:opacity-90 transition-all rounded-sm">
              Work With Me
              <ArrowUpRight
                className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={18}
              />
            </button>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 glass text-[var(--text-primary)] font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center transition-all rounded-sm"
            >
              Visit Instagram
              <Instagram className="ml-2" size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-12 lg:mt-0">

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <img
              src={heroImage}
              alt="Swapnil Pandey"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-dark)] to-transparent"></div>
          </a>

          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-28 h-28 md:w-40 md:h-40 border-t-2 border-r-2 border-[var(--border-soft)] -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 md:w-40 md:h-40 border-b-2 border-l-2 border-[var(--border-soft)] -z-10"></div>
        </div>

      </div>

      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--border-soft)] blur-[120px] -z-10"></div>
    </section>
  );
};

export default Hero;
