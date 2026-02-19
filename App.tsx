import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Audience from "./components/Audience";
import Collections from "./components/Collections";
import Brands from "./components/Brands";
import Press from "./components/Press";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import FloatingGallery from "./components/FloatingGallery";
import Reels from "./components/Reels";
import ThemeLab from "./components/ThemeLab";

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
      <ThemeLab />
      <Header />
      <Hero />
      <About />
      <Reels />
      <Stats />
      <Audience />
      <FloatingGallery />
      <Collections />
      <Brands />
      <Press />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default App;
