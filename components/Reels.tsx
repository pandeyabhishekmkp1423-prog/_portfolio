import React from "react";
import { Play, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const reelData = [
  {
    video: "/reel1.mp4",
    views: "450K",
    title: "Max HealthCare",
    desc: "Strategic healthcare campaign focused on awareness storytelling, building trust, driving engagement, and strengthening brand credibility through authentic lifestyle integration.",
    instagram: "https://www.instagram.com/reel/DPMFOJmD_lO/?igsh=NjcwOGR4MmtlcjZ5"
  },
  {
    video: "/reel2.mp4",
    views: "1.2M",
    title: "Quorfit Band",
    desc: "Performance-focused fitness collaboration highlighting product functionality, improving brand recall, increasing engagement metrics, and driving measurable conversion growth.",
    instagram: "https://www.instagram.com/reel/DULZmsMD_Zr/?igsh=c3BrNjNqd3BlOGpx"
  },
  {
    video: "/reel3.mp4",
    views: "890K",
    title: "District",
    desc: "Culture-driven brand activation blending youth trends, premium visuals, relatable storytelling, and strategic positioning to maximize audience engagement impact.",
    instagram: "https://www.instagram.com/reel/DS7Q4SyDw3i/?igsh=MTMxbjI2MTIxNXMxOQ=="
  },
  {
    video: "/reel4.mp4",
    views: "320K",
    title: "Antigravity Mattress",
    desc: "High-impact product storytelling emphasizing comfort innovation, cinematic framing, emotional appeal, and thoughtful messaging to enhance consumer consideration.",
    instagram: "https://www.instagram.com/reel/DTzXKLijwrn/?igsh=ZzJwMnVva3JoeXlw"
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
          <div key={idx} className="flex flex-col">

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

            {/* TEXT SECTION (Now completely stable) */}
            <div className="mt-6 text-center px-4">

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {reel.title}
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
