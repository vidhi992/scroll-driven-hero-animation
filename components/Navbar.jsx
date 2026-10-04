"use client";

import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-[#0a0a0d]/70 border border-white/10 rounded-full px-5 py-2.5 shadow-2xl">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-sky-500/20">
            FZ
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider text-white">
              ITZ FIZZ
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400">
              Interactive Lab
            </span>
          </div>
        </div>

        {/* Center Tag / Context */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>GSAP SCROLLTRIGGER ENGINE</span>
        </div>

        {/* Right Action / Info */}
        <div className="flex items-center gap-3">
          <a
            href="#designed-for-movement"
            className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
}
