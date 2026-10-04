"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function VisualElement() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="visual-container relative w-full max-w-[550px] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[950px] mx-auto select-none pointer-events-none will-change-transform">
      {/* Dynamic Speed Trail / Kinetic Light Stream behind the car */}
      <div className="speed-trail absolute top-1/2 left-0 w-0 h-[3px] -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-400 to-cyan-300 opacity-0 blur-[1px] -z-10 rounded-full" />
      
      {/* Ambient Glow halo */}
      <div className="absolute -inset-10 bg-radial from-sky-500/10 via-sky-900/5 to-transparent blur-3xl -z-10 rounded-full" />

      {/* Main Vehicle Graphic */}
      <div className="relative w-full aspect-[1000/380] flex items-center justify-center">
        {!imageError ? (
          <Image
            src="/car.svg"
            alt="Futuristic Aerodynamic Hypercar Silhouette"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 950px"
            priority
            className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-quality CSS/SVG Fallback if external/local asset ever fails */
          <div className="w-full h-48 rounded-2xl bg-neutral-900/80 border border-sky-500/30 flex items-center justify-center p-8 text-center text-neutral-300">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-sky-400 text-sm tracking-widest uppercase">
                AERODYNAMIC PROTOTYPE // VECTOR
              </span>
              <div className="w-64 h-12 rounded-full bg-gradient-to-r from-neutral-800 via-sky-600/40 to-neutral-800 border border-sky-400/40 shadow-inner" />
            </div>
          </div>
        )}
      </div>

      {/* Speedometer telemetry badge floating below vehicle */}
      <div className="visual-badge absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neutral-950/80 border border-white/10 backdrop-blur-md flex items-center gap-3 font-mono text-[10px] sm:text-xs text-neutral-400 tracking-wider">
        <span className="flex items-center gap-1.5 text-sky-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
          KINETIC PROTOTYPE
        </span>
        <span className="text-neutral-500">|</span>
        <span>AERODYNAMIC DRAG: 0.19 Cd</span>
      </div>
    </div>
  );
}
