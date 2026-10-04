"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-30 w-full border-t border-white/5 bg-[#050507] py-12 px-4 sm:px-8 text-neutral-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-[10px]">
            FZ
          </div>
          <span className="text-white font-bold tracking-wider">ITZ FIZZ</span>
          <span className="text-neutral-500">|</span>
          <span>Scroll-Driven Hero Project</span>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <span>GSAP 3.15 + ScrollTrigger</span>
          <span>Next.js 16</span>
          <span>Tailwind CSS</span>
        </div>

        <div className="text-neutral-400">
          Frontend Internship Evaluation
        </div>
      </div>
    </footer>
  );
}
