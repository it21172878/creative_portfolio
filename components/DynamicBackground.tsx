"use client";
import React, { useEffect, useState } from "react";

const DynamicBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = maxScroll > 0 ? (position / maxScroll) * 100 : 0;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  // Calculate gradient positions based on scroll
  const blueX = 10 + scrollPosition * 0.3; // Moves from 10% to 40%
  const blueY = 10 + scrollPosition * 0.2; // Moves down slightly

  const purpleX = 90 - scrollPosition * 0.2; // Moves from 90% to 70%
  const purpleY = 5 + scrollPosition * 0.4; // Moves down more

  const whiteX = 50 + Math.sin(scrollPosition * 0.05) * 15; // Oscillates left-right
  const whiteY = 95 - scrollPosition * 0.15; // Moves up

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background:
            "linear-gradient(180deg, #0a0a0f 0%, #0d0d1f 50%, #0a0a0f 100%)",
          transition: "background 0.3s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* Blue Glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `radial-gradient(ellipse 800px 600px at ${blueX}% ${blueY}%, rgba(62, 198, 255, 0.15), transparent 50%)`,
          transition: "background 0.5s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* Purple Glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `radial-gradient(ellipse 600px 500px at ${purpleX}% ${purpleY}%, rgba(162, 89, 255, 0.15), transparent 50%)`,
          transition: "background 0.5s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* White Accent */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `radial-gradient(ellipse 1000px 400px at ${whiteX}% ${whiteY}%, rgba(255, 255, 255, 0.03), transparent 60%)`,
          transition: "background 0.5s ease-out",
          pointerEvents: "none",
        }}
      />

      {/* Noise Texture */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/></filter><rect width="400" height="400" filter="url(%23noiseFilter)" opacity="0.15"/></svg>\')',
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Smooth Grain Texture Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 3px
            )
          `,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Dot Pattern */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      {/* Smooth Glass Effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.02) 0%,
              transparent 40%,
              transparent 60%,
              rgba(255, 255, 255, 0.02) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default DynamicBackground;
