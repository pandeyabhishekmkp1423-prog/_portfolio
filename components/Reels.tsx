import React from "react";
import { Play, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const reelData = [
  {
    video: "/reel1.mp4",
    views: "1.4M",
    title: "MG Motors (Morris Garages)",
    desc: "Premium automotive storytelling campaign showcasing performance engineering, modern design aesthetics, and aspirational lifestyle positioning to elevate brand perception and drive engagement.",
    instagram: "https://www.instagram.com/reel/C0COsZOSnGf/?igsh=MTF4anQ2cmMxYTdqaA=="
  },
  {
    video: "/reel2.mp4",
    views: "2.1M",
    title: "Kingfisher",
    desc: "High-energy beverage activation blending celebration culture, vibrant visuals, and lifestyle integration to maximize audience recall and strengthen youthful brand identity.",
    instagram: "https://www.instagram.com/reel/DIs34GIyEzJ/?igsh=emVhbzY0Y2hkNmV0"
  },
  {
    video: "/reel3.mp4",
    views: "3.8M",
    title: "Amazon",
    desc: "Conversion-driven e-commerce storytelling focused on product discovery, trust-building messaging, and seamless call-to-action execution to enhance performance metrics.",
    instagram: "https://www.instagram.com/reel/C4Lej6wSBpT/"
  },
  {
    video: "/reel4.mp4",
    views: "2.5M",
    title: "Flipkart",
    desc: "Strategic festive campaign emphasizing value-driven shopping, urgency triggers, and audience-centric narrative design to improve conversion velocity and engagement scale.",
    instagram: "https://www.instagram.com/reel/DGLJ1T3y-Yc/"
  },
  {
    video: "/reel5.mp4",
    views: "950K",
    title: "Shopsy",
    desc: "Affordable commerce storytelling crafted for tier-2 and tier-3 audiences, highlighting accessibility, price advantage, and simplified user experience positioning.",
    instagram: "https://www.instagram.com/reel/DO2oLEGkd98/?igsh=MWQ5b3NqZ21sdzk0eg=="
  },
  {
    video: "/reel6.mp4",
    views: "780K",
    title: "Flo Mattress",
    desc: "Comfort-first product narrative emphasizing sleep innovation, ergonomic design, and lifestyle-focused visual storytelling to enhance brand differentiation in the wellness segment.",
    instagram: "https://www.instagram.com/reel/DTzXKLijwrn/?igsh=ZzJwMnVva3JoeXlw"
  },
  {
    video: "/reel7.mp4",
    views: "1.1M",
    title: "Max Healthcare",
    desc: "Impact-driven healthcare awareness initiative focused on trust-building, patient-centric communication, and emotionally resonant storytelling to reinforce institutional credibility.",
    instagram: "https://www.instagram.com/reel/DPMFOJmD_lO/?igsh=NjcwOGR4MmtlcjZ5"
  },
  {
    video: "/reel8.mp4",
    views: "4.2M",
    title: "Thums Up",
    desc: "Adrenaline-charged beverage campaign leveraging bold action visuals, high-intensity framing, and aspirational brand messaging to amplify youth engagement and recall impact.",
    instagram: "https://www.instagram.com/reel/DBtXZIHyk0L/"
  },
];

const Reels: React.FC = () => {

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="reels" className="relative py-24 px-6">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-20">

        <span className="text-white/60 uppercase tracking-[0.5em] text-xs block mb-6">
          Brand Collaborations
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white">
          Strategic Partnerships
        </h2>

        <p className="text-white/85 leading-relaxed text-base md:text-lg mb-10 max-w-xl mx-auto">
          Collaborating with leading brands to create performance-driven
          short-form campaigns blending authenticity, storytelling,
          and measurable audience impact.
        </p>

        <a
          href="https://www.instagram.com/swapnilpandeyg"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-6 py-3
            border border-white/40
            text-white
            uppercase tracking-[0.35em] text-xs
            transition-all duration-300
            hover:border-white hover:bg-white hover:text-black
          "
        >
          <Instagram size={16} />
          View Instagram
        </a>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {reelData.map((reel, idx) => (
          <div key={idx} className="flex flex-col group">

            {/* VIDEO CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => handleRedirect(reel.instagram)}
              className="
                cursor-pointer
                relative rounded-3xl overflow-hidden
                border border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              "
            >

              <video
                src={reel.video}
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full aspect-[9/16] object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              {/* Play Icon */}
              <div className="
                absolute inset-0 flex items-center justify-center
                opacity-0 hover:opacity-100
                transition duration-400
              ">
                <div className="p-4 bg-white/25 backdrop-blur-md rounded-full border border-white/30">
                  <Play fill="white" size={22} />
                </div>
              </div>

              {/* Views */}
              <div className="
                absolute bottom-4 left-4
                px-3 py-1 text-xs font-semibold
                bg-black/40 backdrop-blur-sm
                rounded-full border border-white/20
                text-white
              ">
                {reel.views}
              </div>

            </motion.div>

            {/* TEXT SECTION */}
            <div className="mt-6 text-center px-4">

              <h3 className="
                text-xl md:text-2xl font-bold mb-4
                bg-gradient-to-r from-white via-gray-200 to-white
                bg-clip-text text-transparent
                drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]
                relative inline-block
              ">
                {reel.title}
                <span className="
                  absolute left-0 -bottom-2 h-[2px] w-0
                  bg-gradient-to-r from-white to-transparent
                  transition-all duration-500
                  group-hover:w-full
                "></span>
              </h3>

              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                {reel.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* WORK WITH US */}
      <div className="text-center mt-24">

        <a
          href="mailto:your@email.com"
          className="
            inline-flex items-center gap-2 px-6 py-3
            border border-white/40
            text-white
            uppercase tracking-[0.35em] text-xs
            transition-all duration-300
            hover:border-white hover:bg-white hover:text-black
          "
        >
          Work With Us
        </a>

      </div>

    </section>
  );
};

export default Reels;
