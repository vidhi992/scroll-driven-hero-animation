# Scroll-Driven Hero Animation

> Interactive scroll-driven hero section built with Next.js, React, Tailwind CSS, GSAP and ScrollTrigger.

A modern, high-performance scroll-driven interactive hero section built for a frontend internship evaluation. Inspired by kinetic scroll experiences, this project delivers an original, production-grade frontend architecture with fluid scrub interpolation, differential parallax telemetry, and zero layout thrashing.

---

## 🌐 Live Demo

- **Live Deployment**: [https://scroll-driven-hero-animation.vercel.app](https://scroll-driven-hero-animation.vercel.app) *(Replace with your deployed Vercel URL)*

---

## ⚡ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router, JavaScript)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine**: [GSAP](https://greensock.com/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Features

### 1. Pinned Scroll-Driven Hero Section
- **Viewport Stage Pinning**: The hero viewport is pinned during user scroll across a `h-[280vh]` scroll track (`pin: pinRef.current`), transforming scroll progress directly into kinetic motion.
- **Scroll-Synchronized Scrubbing**: GSAP ScrollTrigger with `scrub: 1.2` for fluid momentum.
- **Dynamic Transforms**:
  - Horizontal translation (`xPercent`) across the stage.
  - Smooth scale progression (`1.0 -> 1.24`).
  - Subtle rotational pitch (`-2.5deg -> +1.2deg`).
  - Kinetic speed-trail emission stretching behind the vehicle during scroll.
- **Differential Parallax Statistics**:
  - `01 | 95% User Engagement` (moderate parallax)
  - `02 | 80% Faster Experience` (lingering parallax)
  - `03 | 70% Interaction Growth` (rapid parallax)
- **Headline Shift & Dissolve**: `"W E L C O M E   I T Z   F I Z Z"` with wide letter spacing shifts and blurs as user descends.

### 2. Initial Page Load Animation
- Staggered entrance timeline via GSAP:
  - Headline characters reveal with upward translation (`y: 45 -> 0`) and subtle stagger (`stagger: 0.03`).
  - Vehicle visual glides into starting position with soft scale-in.
  - Statistics cards stagger into visibility.
  - Interactive `"SCROLL TO EXPLORE ↓"` indicator pulses into place.

### 3. Second Section: "Designed for Movement"
- Seamless exit transition from the pinned hero into narrative content.
- 3 minimalist cards highlighting scroll synchronicity, GPU composite acceleration, and responsive physics.
- ScrollTrigger reveal on entry.

### 4. Responsiveness & Accessibility
- **GSAP matchMedia**: Responsive breakpoints dynamically adapt transformation coordinates for mobile, tablet, and desktop screens, preventing horizontal overflow or clipped graphics.
- **Prefers-Reduced-Motion**: Detects user accessibility settings and falls back to a clean, static, accessible presentation without aggressive motion.
- **Zero Memory Leaks**: Scoped GSAP timelines with `ctx.revert()` in component unmount lifecycle.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css          # Dark-theme tokens, custom scrollbars, grid patterns
│   ├── layout.js            # Root layout with typography and metadata
│   └── page.js              # Page composition (Navbar, Hero, FeatureSection, Footer)
├── components/
│   ├── Navbar.jsx           # Minimalist top navigation bar
│   ├── Hero.jsx             # Pinned viewport hero with GSAP ScrollTrigger
│   ├── Stats.jsx            # 3 impact metrics with differential parallax
│   ├── VisualElement.jsx    # Aerodynamic vehicle graphic, speed trail & fallback
│   ├── FeatureSection.jsx   # Second section ("Designed for movement")
│   └── Footer.jsx           # Minimal footer
├── lib/
│   └── animations.js        # GSAP initialization & accessibility helpers
└── public/
    └── car.svg              # Custom high-fidelity vector hypercar asset
```

---

## 🛠️ How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/vidhi992/scroll-driven-hero-animation.git
cd scroll-driven-hero-animation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in terminal) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```
