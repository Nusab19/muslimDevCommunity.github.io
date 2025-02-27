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
  // Generate the radial gradient background
  const gradient = `radial-gradient(${type}, ${colors
    .map((color, index) => `${color} ${index * 30}%`)
    .join(", ")})`;

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden mix-blend-screen ${className}`}
      style={{
        background: gradient,
        opacity: opacity,
        WebkitFilter: `blur(${blur})`,
        filter: `blur(${blur})`,
      }}
    />
  );
};

export default Glow;