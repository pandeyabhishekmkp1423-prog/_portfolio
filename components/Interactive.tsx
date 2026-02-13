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
          hovered ? "brand-gradient" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Interactive;
