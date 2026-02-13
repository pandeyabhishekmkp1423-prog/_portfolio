import React, { useState, useEffect } from "react";
import {
  Palette,
  RotateCcw,
  Download,
  X,
  Type,
  Sparkles,
  Check
} from "lucide-react";

/* ================================
   FONT OPTIONS
================================ */

const fonts = {
  Inter: "'Inter', sans-serif",
  Poppins: "'Poppins', sans-serif",
  Montserrat: "'Montserrat', sans-serif",
  Playfair: "'Playfair Display', serif"
};

/* ================================
   BACKGROUND SWATCHES
================================ */

const backgrounds = [
  "#000000",
  "#0b0f19",
  "#0f172a",
  "#111827",
  "#1f2937",
  "#1e1b4b",
  "#140f1f",
  "#0a192f",
  "#052e2b",
  "#1c1917",
  "#2b0f18",
  "#ffffff"
];

/* ================================
   GRADIENT SWATCHES
================================ */

const gradients = [
  ["#60a5fa","#a78bfa","#ec4899"],
  ["#22d3ee","#6366f1","#8b5cf6"],
  ["#10b981","#14b8a6","#3b82f6"],
  ["#fb923c","#ec4899","#ef4444"],
  ["#fbbf24","#f59e0b","#d97706"],
  ["#7c3aed","#9333ea","#c084fc"],
  ["#ff7e5f","#feb47b","#ff9966"],
  ["#38bdf8","#818cf8","#c084fc"],
  ["#00f5d4","#f15bb5","#fee440"],
  ["#065f46","#047857","#10b981"],
  ["#b91c1c","#ef4444","#f87171"],
  ["#ffffff","#cccccc","#999999"]
];

const DEFAULT_THEME = {
  "--bg-main": "#111827",
  "--gradient-1": "#60a5fa",
  "--gradient-2": "#a78bfa",
  "--gradient-3": "#ec4899",
  "--font-main": "'Inter', sans-serif"
};

const STORAGE_KEY = "swapnil-theme";

const ThemeLab: React.FC = () => {
  const [open,setOpen] = useState(false);
  const [activeBg,setActiveBg] = useState("");
  const [activeFont,setActiveFont] = useState("");
  const [activeGradient,setActiveGradient] = useState<string[]>([]);

  /* ================================
     APPLY THEME TO DOM
  ================================= */

  const applyTheme = (theme: Record<string,string>) => {
    Object.entries(theme).forEach(([key,value])=>{
      document.documentElement.style.setProperty(key,value);
    });
  };

  const saveTheme = () => {
    const styles = getComputedStyle(document.documentElement);
    const theme:Record<string,string> = {};
    Object.keys(DEFAULT_THEME).forEach(key=>{
      theme[key] = styles.getPropertyValue(key);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  };

  const setVar = (name:string,value:string) => {
    document.documentElement.style.setProperty(name,value);
    saveTheme();
  };

  const resetTheme = () => {
    applyTheme(DEFAULT_THEME);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_THEME));
    setActiveBg(DEFAULT_THEME["--bg-main"]);
    setActiveFont(DEFAULT_THEME["--font-main"]);
    setActiveGradient([
      DEFAULT_THEME["--gradient-1"],
      DEFAULT_THEME["--gradient-2"],
      DEFAULT_THEME["--gradient-3"]
    ]);
  };

  /* ================================
     LOAD SAVED THEME ON REFRESH
  ================================= */

  useEffect(()=>{
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){
      const parsed = JSON.parse(saved);
      applyTheme(parsed);
      setActiveBg(parsed["--bg-main"]);
      setActiveFont(parsed["--font-main"]);
      setActiveGradient([
        parsed["--gradient-1"],
        parsed["--gradient-2"],
        parsed["--gradient-3"]
      ]);
    } else {
      applyTheme(DEFAULT_THEME);
      setActiveBg(DEFAULT_THEME["--bg-main"]);
      setActiveFont(DEFAULT_THEME["--font-main"]);
      setActiveGradient([
        DEFAULT_THEME["--gradient-1"],
        DEFAULT_THEME["--gradient-2"],
        DEFAULT_THEME["--gradient-3"]
      ]);
    }
  },[]);

  const exportCSS = () => {
    const styles = getComputedStyle(document.documentElement);
    let output=":root {\n";
    Object.keys(DEFAULT_THEME).forEach(token=>{
      output+=`  ${token}: ${styles.getPropertyValue(token)};\n`;
    });
    output+="}";
    alert(output);
  };

  return (
    <>
      {/* ===== FLOATING BUTTON (MINIMIZED) ===== */}

      <button
        onClick={()=>setOpen(true)}
        className="
          fixed bottom-8 right-8 z-[999]
          w-12 h-12 flex items-center justify-center
          rounded-full
          backdrop-blur-2xl
          bg-white/10 border border-white/20
          shadow-[0_10px_35px_rgba(0,0,0,0.4)]
          hover:scale-110 transition-all duration-300
        "
      >
        <Palette size={18}/>
      </button>

      {/* ===== PANEL ===== */}

      {open && (
        <div className="
          fixed right-0 top-0 h-full w-[420px]
          bg-black/85 backdrop-blur-3xl
          border-l border-white/10
          p-10
          z-[998]
          overflow-y-auto
          text-white
        ">

          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-xl font-semibold tracking-wide flex items-center gap-3">
                <Sparkles size={18}/> Theme Studio
              </h2>
              <p className="text-white/40 text-sm mt-2">
                Live visual customization
              </p>
            </div>

            <button onClick={()=>setOpen(false)}>
              <X size={20} className="text-white/60 hover:text-white"/>
            </button>
          </div>

          {/* Background */}
          <Section icon={<Palette size={14}/>} title="Background">
            <div className="grid grid-cols-6 gap-3">
              {backgrounds.map((color,index)=>(
                <div
                  key={index}
                  onClick={()=>{
                    setVar("--bg-main",color);
                    setActiveBg(color);
                  }}
                  className={`
                    relative w-10 h-10 rounded-xl cursor-pointer
                    border transition-all
                    ${activeBg===color
                      ? "ring-2 ring-white scale-110"
                      : "border-white/20 hover:scale-110"}
                  `}
                  style={{background:color}}
                >
                  {activeBg===color && (
                    <Check size={14}
                      className="absolute inset-0 m-auto text-white"/>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Gradient */}
          <Section icon={<Sparkles size={14}/>} title="Hover Gradient">
            <div className="grid grid-cols-3 gap-4">
              {gradients.map((g,index)=>{
                const isActive =
                  activeGradient[0]===g[0] &&
                  activeGradient[1]===g[1] &&
                  activeGradient[2]===g[2];

                return (
                  <div
                    key={index}
                    onClick={()=>{
                      setVar("--gradient-1",g[0]);
                      setVar("--gradient-2",g[1]);
                      setVar("--gradient-3",g[2]);
                      setActiveGradient(g);
                    }}
                    className={`
                      relative h-10 rounded-xl cursor-pointer
                      transition-all
                      ${isActive
                        ? "ring-2 ring-white scale-105"
                        : "border border-white/20 hover:scale-105"}
                    `}
                    style={{
                      background:`linear-gradient(90deg,${g[0]},${g[1]},${g[2]})`
                    }}
                  >
                    {isActive && (
                      <Check size={14}
                        className="absolute inset-0 m-auto text-white"/>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Fonts */}
          <Section icon={<Type size={14}/>} title="Font Family">
            {Object.entries(fonts).map(([name,value])=>(
              <button
                key={name}
                onClick={()=>{
                  setVar("--font-main",value);
                  setActiveFont(value);
                }}
                className={`
                  relative block w-full text-left mb-3 text-sm
                  transition-all px-3 py-2 rounded-lg
                  ${activeFont===value
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white"}
                `}
              >
                {name}
                {activeFont===value && (
                  <Check size={14} className="absolute right-3 top-1/2 -translate-y-1/2"/>
                )}
              </button>
            ))}
          </Section>

          {/* Actions */}
          <div className="mt-12 space-y-4">

            <button
              onClick={resetTheme}
              className="w-full flex items-center justify-center gap-2
                         py-3 rounded-xl
                         bg-white/10 border border-white/20
                         hover:bg-white/20 transition-all"
            >
              <RotateCcw size={16}/> Reset to Default
            </button>

            <button
              onClick={exportCSS}
              className="w-full flex items-center justify-center gap-2
                         py-3 rounded-xl
                         bg-white text-black font-medium
                         hover:opacity-90 transition-all"
            >
              <Download size={16}/> Export CSS
            </button>

          </div>

        </div>
      )}
    </>
  );
};

/* ================================
   SECTION WRAPPER
================================ */

const Section:React.FC<{
  icon:React.ReactNode;
  title:string;
  children:React.ReactNode;
}> = ({icon,title,children}) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6 text-white/60 text-xs uppercase tracking-widest">
      {icon}
      {title}
    </div>
    {children}
  </div>
);

export default ThemeLab;
