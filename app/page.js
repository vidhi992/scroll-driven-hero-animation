"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070709] text-white selection:bg-sky-400 selection:text-black">
      {/* Persistent sleek top navigation */}
      <Navbar />

      {/* Primary Scroll-Driven Hero Section (pinned viewport over scroll track) */}
      <Hero />

      {/* Subsequent Content Section: "Designed for movement" */}
      <FeatureSection />

      {/* Professional minimal footer */}
      <Footer />
    </main>
  );
}
