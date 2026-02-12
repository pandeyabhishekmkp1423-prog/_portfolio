import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Interactive: React.FC<Props> = ({ children, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`inline-block transition-all duration-300 ${
        hovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${className} transition-all duration-300 ${
          hovered
            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Interactive;
