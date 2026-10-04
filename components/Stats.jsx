"use client";

import React from "react";

const statsData = [
  {
    id: "01",
    value: "95%",
    title: "User Engagement",
    detail: "Retention boosted through fluid scroll feedback",
  },
  {
    id: "02",
    value: "80%",
    title: "Faster Experience",
    detail: "Hardware-accelerated composite performance",
  },
  {
    id: "03",
    value: "70%",
    title: "Interaction Growth",
    detail: "Direct user engagement via kinetic timeline",
  },
];

export default function Stats() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
        {statsData.map((stat, idx) => (
          <div
            key={stat.id}
            className={`stat-card stat-card-${idx + 1} relative group overflow-hidden rounded-xl border border-white/10 bg-[#0f1115]/60 backdrop-blur-md p-4 sm:p-5 transition-colors duration-300 hover:border-sky-500/30`}
          >
            {/* Top row: Indicator index and subtle pulse */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-neutral-400 tracking-wider">
                {stat.id} // METRIC
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80 group-hover:scale-125 transition-transform" />
            </div>

            {/* Impact metric value */}
            <div className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mb-1 group-hover:text-sky-300 transition-colors">
              {stat.value}
            </div>

            {/* Title */}
            <div className="text-sm font-semibold tracking-wide text-neutral-200">
              {stat.title}
            </div>

            {/* Believable supporting line */}
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              {stat.detail}
            </p>

            {/* Subtle bottom border gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent group-hover:via-sky-400/60 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
