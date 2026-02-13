import React from "react";
import { ArrowUpRight, Instagram } from "lucide-react";

const instagramUrl =
  "https://www.instagram.com/swapnilpandeyg?igsh=MW92Nnk3dWgxbzVwYQ==";

const heroImage = "/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="z-10">

          {/* Badge */}
          <div className="inline-block px-5 py-2 glass rounded-full mb-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-primary)]/80">
              India • Influencer • Digital Creator
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-[0.92] tracking-tighter">
            INFLUENCING THE <br />
            DIGITAL <br />
            GENERATION.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-10 font-light max-w-lg leading-relaxed">
            Fashion • Travel • Lifestyle. Building authentic connections with
            over 1M+ followers through relatable storytelling and high-impact
            collaborations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mb-12">
            {[
              { value: "1M+", label: "Followers" },
              { value: "5%+", label: "Engagement" },
              { value: "200K+", label: "Avg Reel Views" },
            ].map((stat, index) => (
              <div key={index} className="group relative cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>

                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] mt-2">
                  {stat.label}
                </div>

                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              className="
                px-8 py-4
                bg-[var(--text-primary)]
                text-[var(--bg-main)]
                font-bold uppercase tracking-widest text-xs sm:text-sm
                flex items-center justify-center group
                hover:opacity-90 transition-all rounded-sm
              "
            >
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
              className="
                px-8 py-4
                glass
                text-[var(--text-primary)]
                font-bold uppercase tracking-widest text-xs sm:text-sm
                flex items-center justify-center
                rounded-sm
              "
            >
              Visit Instagram
              <Instagram className="ml-2" size={18} />
            </a>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative mt-14 lg:mt-0">

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block aspect-[4/5]
              relative overflow-hidden
              rounded-3xl
              shadow-[0_40px_80px_rgba(0,0,0,0.5)]
              group
            "
          >
            <img
              src={heroImage}
              alt="Swapnil Pandey"
              className="
                w-full h-full object-cover
                transition-transform duration-700
                md:group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-dark)] to-transparent"></div>
          </a>

          <div className="absolute -top-8 -right-8 w-32 h-32 border-t border-r border-[var(--border-soft)] -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b border-l border-[var(--border-soft)] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
