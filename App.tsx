import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Reels from "./components/Reels";
import Stats from "./components/Stats";
import Audience from "./components/Audience";
import FloatingGallery from "./components/FloatingGallery";
import Collections from "./components/Collections";
import Brands from "./components/Brands";
import Press from "./components/Press";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import ThemeLab from "./components/ThemeLab"; // ✅ Added back

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = appRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    appRef.current?.style.setProperty("--x", `${x}px`);
    appRef.current?.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={appRef}
      onMouseMove={handleMouseMove}
      className="global-spotlight relative text-white min-h-screen"
    >
      {/* Background / Experimental Layer */}
      <ThemeLab />

      <Header />

      {/* Authority */}
      <Hero />

      {/* Story */}
      <About />

      {/* Visual Proof */}
      <Reels />

      {/* Performance */}
      <Stats />

      {/* Audience Insight */}
      <Audience />

      {/* Campaign Case Studies */}
      <FloatingGallery />

      {/* Content Strategy */}
      <Collections />

      {/* Brand Collaborations */}
      <Brands />

      {/* Media Recognition */}
      <Press />

      {/* Conversion */}
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default App;