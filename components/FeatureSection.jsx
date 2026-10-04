"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gauge, Cpu, Layers } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Kinetic Scrub Precision",
    description:
      "GSAP ScrollTrigger binds scroll momentum directly to transform matrices with sub-pixel interpolation and zero lag.",
    tag: "SCRUB ENGINE",
  },
  {
    icon: Cpu,
    title: "Composite Performance",
    description:
      "Strictly animates GPU-accelerated transforms and opacity properties to preserve locked 60+ FPS render fidelity.",
    tag: "GPU ACCELERATED",
  },
  {
    icon: Layers,
    title: "Adaptive Viewport Bounds",
    description:
      "Dynamic matchMedia transforms prevent overflow on mobile displays while maximizing cinematic sweep on ultra-wide screens.",
    tag: "RESPONSIVE PHYSICS",
  },
];

export default function FeatureSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered reveal for feature cards when section scrolls into view
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="designed-for-movement"
      ref={sectionRef}
      className="relative z-30 w-full min-h-screen bg-[#070709] border-t border-white/5 py-24 sm:py-32 px-4 sm:px-8"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-4 uppercase tracking-widest">
            <span>Philosophy & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Designed for movement
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            A cohesive fusion of frontend mechanics and tactile physics. Every
            scroll increment informs trajectory, scale, and spatial depth
            without distracting from primary narrative content.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="feature-card group relative p-6 sm:p-8 rounded-2xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Header: Icon & tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                    {feature.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom subtle edge illumination */}
                <div className="absolute inset-x-6 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-400/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Technical evaluation summary banner */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c0e12] via-[#10141a] to-[#0c0e12] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
              Architecture Status
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Deterministic Scroll & Zero Layout Shifts
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Engineered with clean React lifecycle bindings and complete GSAP context teardowns.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-neutral-300">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              Scrub: 1.2
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              FPS: 60+
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              Clean Context
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
