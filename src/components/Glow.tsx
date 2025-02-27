import React from "react";

interface GlowProps {
  colors?: string[];
  opacity?: number;
  className?: string;
  blur?: string;
  type?: string;
}

const Glow: React.FC<GlowProps> = ({
  colors = ["#219ebc", "#003049", "#ffd166"],
  opacity = 0.3,
  blur = "40px",
  className = "",
  type = "ellipse",
}) => {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(${type}, ${colors
          .map((color, index) => `${color} ${index * 30}%`)
          .join(", ")})`,
        opacity: opacity,
        // Add both WebkitFilter and filter for Safari compatibility
        WebkitFilter: `blur(${blur})`,
        filter: `blur(${blur})`,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default Glow;