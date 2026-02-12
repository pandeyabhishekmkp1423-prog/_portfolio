
import React from 'react';
import { Play, Instagram } from 'lucide-react';

const reelData = [
  { img: 'https://picsum.photos/id/101/400/700', views: '450K' },
  { img: 'https://picsum.photos/id/102/400/700', views: '1.2M' },
  { img: 'https://picsum.photos/id/103/400/700', views: '890K' },
  { img: 'https://picsum.photos/id/104/400/700', views: '320K' },
];

const Reels: React.FC = () => {
  return (
    <section id="reels" className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Viral Reels</h2>
          <a href="#" className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">
            <Instagram size={14} />
            <span>Visit Profile</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {reelData.map((reel, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-white/5">
                <img 
                  src={reel.img} 
                  alt="Reel Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-4 bg-white/20 backdrop-blur rounded-full">
                    <Play fill="white" size={32} />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Reel #{idx+1}</span>
                <span className="text-xs font-bold text-white/80">{reel.views} Views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;
