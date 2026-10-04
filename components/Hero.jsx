"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VisualElement from "./VisualElement";
import Stats from "./Stats";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const headlineRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for automatic cleanup on unmount
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Check if user has reduced motion enabled
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        // Reduced motion: simple fade-in, no aggressive parallax
        gsap.to(".headline-char", { opacity: 1, duration: 0.5, stagger: 0.02 });
        gsap.to(".stat-card", { opacity: 1, duration: 0.5, stagger: 0.1 });
        gsap.to(".visual-container", { opacity: 1, duration: 0.5 });
        gsap.to(scrollIndicatorRef.current, { opacity: 1, duration: 0.5 });
        return;
      }

      // --------------------------------------------------
      // 1. INITIAL PAGE LOAD ANIMATION
      // --------------------------------------------------
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Headline staggered reveal from below
      introTl.fromTo(
        ".headline-char",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.03,
        }
      );

      // Main visual element enters smoothly
      introTl.fromTo(
        ".visual-container",
        { scale: 0.92, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: "power2.out" },
        "-=0.6"
      );

      // Statistics cards reveal sequentially
      introTl.fromTo(
        ".stat-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.7"
      );

      // Subtle scroll prompt fades in
      introTl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      // --------------------------------------------------
      // 2. SCROLL-DRIVEN ANIMATION VIA SCROLLTRIGGER
      // --------------------------------------------------

      // DESKTOP & TABLET ANIMATION (Screens >= 768px)
      mm.add("(min-width: 768px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            pin: pinRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 0% -> 20%: Scroll indicator quickly dissolves
        scrollTl.to(
          scrollIndicatorRef.current,
          { opacity: 0, y: 15, duration: 0.2, ease: "power1.out" },
          0
        );

        // 0% -> 60%: Speed trail shoots out from rear of vehicle
        scrollTl.fromTo(
          ".speed-trail",
          { width: "0px", opacity: 0 },
          { width: "350px", opacity: 0.85, duration: 0.5, ease: "power2.inOut" },
          0.1
        );

        // 10% -> 85%: Visual element moves horizontally, rotates dynamically, and scales
        scrollTl.to(
          ".visual-container",
          {
            xPercent: 38,
            scale: 1.18,
            rotation: -2.5,
            duration: 0.6,
            ease: "power1.inOut",
          },
          0.15
        );

        // Dynamic pitch level out near end
        scrollTl.to(
          ".visual-container",
          {
            xPercent: 62,
            scale: 1.24,
            rotation: 1.2,
            duration: 0.4,
            ease: "power1.out",
          },
          0.7
        );

        // Headline shifts left and dims to background layer
        scrollTl.to(
          headlineRef.current,
          {
            x: -120,
            opacity: 0.1,
            filter: "blur(4px)",
            duration: 0.65,
            ease: "power2.out",
          },
          0.15
        );

        // Differential Parallax Speeds for the 3 Statistics cards:
        // Card 1 moves moderately
        scrollTl.to(
          ".stat-card-1",
          {
            y: -110,
            opacity: 0,
            scale: 0.94,
            duration: 0.55,
            ease: "power2.out",
          },
          0.2
        );

        // Card 2 moves slower with lingering presence
        scrollTl.to(
          ".stat-card-2",
          {
            y: -70,
            opacity: 0,
            scale: 0.96,
            duration: 0.65,
            ease: "power2.out",
          },
          0.25
        );

        // Card 3 moves fastest with high vertical displacement
        scrollTl.to(
          ".stat-card-3",
          {
            y: -160,
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.out",
          },
          0.18
        );

        // Fade out speed trail toward completion
        scrollTl.to(
          ".speed-trail",
          {
            opacity: 0,
            width: "50px",
            duration: 0.3,
            ease: "power1.out",
          },
          0.75
        );
      });

      // MOBILE ANIMATION (Screens < 768px)
      mm.add("(max-width: 767px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: pinRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        mobileTl.to(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.2 },
          0
        );

        // Contained translation to prevent viewport blowout on mobile
        mobileTl.to(
          ".visual-container",
          {
            xPercent: 12,
            scale: 1.1,
            rotation: -1.5,
            duration: 0.8,
            ease: "power1.inOut",
          },
          0.1
        );

        mobileTl.to(
          headlineRef.current,
          {
            y: -50,
            opacity: 0.15,
            duration: 0.6,
            ease: "power2.out",
          },
          0.1
        );

        mobileTl.to(
          ".stat-card",
          {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
          },
          0.15
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split headline text into individual character spans
  // "W E L C O M E   I T Z   F I Z Z"
  const titlePart1 = "WELCOME";
  const titlePart2 = "ITZ FIZZ";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#070709] text-white"
    >
      {/* Pinned Viewport Stage */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 select-none"
      >
        {/* Subtle Background Glows & Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-spotlight pointer-events-none" />

        {/* Ambient Top Horizon Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-sky-500/10 via-sky-500/0 to-transparent blur-2xl pointer-events-none" />

        {/* ----------------- TOP: HERO HEADLINE ----------------- */}
        <div className="relative z-10 w-full text-center mt-2 sm:mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-[10px] sm:text-xs text-neutral-300 tracking-widest uppercase">
              AERODYNAMIC SCROLL ARCHITECTURE
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="font-black text-2xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.25em] sm:tracking-[0.45em] md:tracking-[0.6em] text-white uppercase will-change-transform leading-none overflow-hidden drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10">
              <span className="inline-flex">
                {titlePart1.split("").map((char, index) => (
                  <span
                    key={`part1-${index}`}
                    className="headline-char inline-block will-change-transform hover:text-sky-400 transition-colors"
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-sky-300 to-white">
                {titlePart2.split("").map((char, index) => (
                  <span
                    key={`part2-${index}`}
                    className="headline-char inline-block will-change-transform"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </div>
          </h1>

          <p className="mt-3 text-xs sm:text-sm font-mono text-neutral-400 tracking-wider max-w-xl mx-auto px-4">
            Precision kinetic telemetry driven by GSAP ScrollTrigger
          </p>
        </div>

        {/* ----------------- CENTER: MAIN VISUAL ELEMENT ----------------- */}
        <div className="relative z-20 w-full my-auto flex items-center justify-center">
          <VisualElement />
        </div>

        {/* ----------------- BOTTOM: STATISTICS & SCROLL PROMPT ----------------- */}
        <div className="relative z-30 w-full flex flex-col items-center gap-4 sm:gap-6">
          {/* 3 Impact Statistics */}
          <Stats />

          {/* Minimal UX Scroll Prompt */}
          <div
            ref={scrollIndicatorRef}
            className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 hover:text-sky-300 transition-colors cursor-pointer group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-1 transition-transform animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
