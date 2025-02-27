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

  // Extract numeric value for blur (assumes the blur value is in pixels)
  const blurValue = parseInt(blur, 10) || 40;

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden mix-blend-screen ${className}`}
      style={{
        background: gradient,
        opacity: opacity,
        // Standard CSS filter
        filter: `blur(${blur})`,
        // Vendor prefixes for various browsers
        WebkitFilter: `blur(${blur})`,
        // MozFilter: `blur(${blur})`,
        // OFilter: `blur(${blur})`,
        // IE (legacy) syntax
        msFilter: `progid:DXImageTransform.Microsoft.Blur(PixelRadius=${blurValue})`,
        // Force hardware acceleration in Safari
        transform: "translate3d(0,0,0)",
        WebkitTransform: "translate3d(0,0,0)",
        willChange: "filter",
      }}
    />
  );
};

export default Glow;
