
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter">
          LET’S BUILD THE <br /> NEXT <span className="text-white/40 font-display italic font-light">CAMPAIGN</span> <br /> TOGETHER.
        </h2>
        <button className="inline-flex items-center px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm rounded-full group hover:scale-105 transition-all duration-500 shadow-2xl">
          Contact Now
          <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Aesthetic Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default ContactCTA;
