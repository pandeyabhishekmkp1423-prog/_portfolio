import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* IMAGE SIDE */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden glass p-3">
              <img 
                src="https://picsum.photos/id/91/600/800" 
                alt="Swapnil Pandey Profile" 
                className="w-full h-full object-cover rounded shadow-inner transition-all duration-700"
              />
            </div>

            {/* QUOTE BADGE */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-lg max-w-[240px]">
              <p className="text-sm italic text-white/70 leading-relaxed">
                “I create memories, not just posts.”
              </p>
            </div>
          </div>
          
          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 pt-4">
            
            <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold block mb-4">
              Meet Swapnil
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Content Creator | Creative Visionary | Relatable Personality
            </h2>

            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              
              <p>
                From the streets of Jaunpur to a digital presence across India, 
                Swapnil Pandey has crafted a personal brand that resonates deeply 
                with Gen Z and Millennial audiences.
              </p>

              <p>
                What began during the lockdown transformed into a powerful digital journey 
                rooted in authenticity, hustle, and real connection. With over 1M+ followers 
                and a consistently high engagement rate, his content blends fashion, travel, 
                lifestyle, and storytelling into meaningful digital experiences.
              </p>

              <p>
                Every collaboration is thoughtfully executed — ensuring that brand goals 
                align seamlessly with audience interests while maintaining his signature 
                relatable and aspirational tone.
              </p>

            </div>
            
            {/* INFO GRID */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">
                  Core Focus
                </h4>
                <p className="text-white/40 text-sm">
                  Fashion, Travel, Lifestyle, Relatable Reels
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">
                  Audience
                </h4>
                <p className="text-white/40 text-sm">
                  18–34 | Tier 1 & Tier 2 Indian Cities
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
