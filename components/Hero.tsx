import React from 'react';
import { ArrowUpRight, Play, Instagram } from 'lucide-react';

const instagramUrl = "https://www.instagram.com/swapnilpandeyg?igsh=MW92Nnk3dWgxbzVwYQ==";

// 👉 Change this image anytime
const heroImage = "/hero.jpg"; // place image inside public folder

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10">

          {/* Badge */}
          <div className="inline-block px-4 py-1.5 glass rounded-full mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">
              India • Influencer • Digital Creator
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-gradient">
            INFLUENCING THE <br /> DIGITAL <br /> GENERATION.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/50 mb-10 font-light max-w-md leading-relaxed">
            Fashion • Travel • Lifestyle. Building authentic connections with over 1M+ followers through relatable storytelling and high-impact collaborations.
          </p>

          {/* Stats */}
          {/* Stats */}
<div className="grid grid-cols-3 gap-10 mb-14">

  {[
    { value: "1M+", label: "Followers" },
    { value: "5%+", label: "Engagement" },
    { value: "200K+", label: "Avg Reel Views" },
  ].map((stat, index) => (
    <div
      key={index}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
    >
      <div className="text-3xl md:text-4xl font-bold transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-white/60 group-hover:bg-clip-text">
        {stat.value}
      </div>

      <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mt-2 transition-colors duration-500 group-hover:text-white/80">
        {stat.label}
      </div>
    </div>
  ))}

</div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center group hover:bg-white/90 transition-all rounded-sm">
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
              className="px-8 py-4 glass text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:bg-white/5 transition-all rounded-sm"
            >
              Visit Instagram
              <Instagram className="ml-2" size={18} />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <img
              src={heroImage}
              alt="Swapnil Pandey"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </a>

          {/* Decorative accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-white/10 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-white/10 -z-10"></div>
        </div>

      </div>

      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] -z-10"></div>
    </section>
  );
};

export default Hero;
