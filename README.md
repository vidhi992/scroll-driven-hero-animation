# Scroll-Driven Hero Animation

An interactive scroll-driven hero section built with **Next.js, React, Tailwind CSS, and GSAP ScrollTrigger**.

The project focuses on creating a smooth, responsive scrolling experience where the hero animation, vehicle movement, statistics, and typography respond directly to the user's scroll position.

## 🌐 Live Demo

**Live Website:**  
https://scroll-driven-hero-animation-azure.vercel.app/

**GitHub Repository:**  
https://github.com/vidhi992/scroll-driven-hero-animation

---

## ✨ Features

- **Scroll-Driven Hero Animation**  
  The main hero section is pinned while scrolling and the animation progresses according to the user's scroll position.

- **Animated Vehicle Movement**  
  The vehicle moves horizontally across the screen with smooth scaling and rotation effects.

- **Speed Trail Effect**  
  A dynamic trail effect appears behind the vehicle during scrolling to enhance the sense of motion.

- **Animated Statistics**  
  Statistics cards use different parallax speeds to create depth and visual hierarchy.

- **Animated Typography**  
  The hero headline changes position, spacing, and opacity as the user scrolls.

- **Smooth Scroll Interaction**  
  GSAP ScrollTrigger is used to synchronize animations with scroll progress.

- **Responsive Design**  
  Animation values and layouts adapt to different screen sizes.

- **Reduced Motion Support**  
  Users who prefer reduced motion receive a simplified static experience.

- **Clean Component Structure**  
  The application is divided into reusable React components for easier maintenance.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework and application structure |
| **React** | Component-based UI development |
| **Tailwind CSS** | Styling and responsive layouts |
| **GSAP** | Animation engine |
| **GSAP ScrollTrigger** | Scroll-based animation control |
| **Lucide React** | Interface icons |
| **JavaScript** | Application logic |

---

## 🎬 How the Animation Works

The main hero section uses **GSAP ScrollTrigger** to connect the animation timeline with the user's scroll position.

As the user scrolls:

1. The hero section remains pinned to the viewport.
2. Scroll progress controls the animation timeline.
3. The vehicle moves horizontally across the screen.
4. The vehicle gradually scales and rotates.
5. The speed trail changes according to the animation progress.
6. Statistics cards move at different speeds to create a parallax effect.
7. The headline shifts and gradually fades as the user progresses through the hero section.
8. The next section is revealed after the hero animation completes.

This creates an interaction where **scrolling becomes the controller for the animation instead of using a traditional autoplay animation**.

---

## 📁 Project Structure

```text
scroll-driven-hero-animation/
│
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── VisualElement.jsx
│   ├── FeatureSection.jsx
│   └── Footer.jsx
│
├── lib/
│   └── animations.js
│
├── public/
│   └── car.svg
│
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/vidhi992/scroll-driven-hero-animation.git
```

### 2. Navigate to the project

```bash
cd scroll-driven-hero-animation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Create a production build

```bash
npm run build
```

### 6. Start the production server

```bash
npm run start
```

---

## 📱 Responsive Design

The animation is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

GSAP responsive utilities are used to adjust animation values based on screen size and prevent unwanted horizontal overflow.

---

## ♿ Accessibility

The project includes support for users who have enabled **reduced motion** in their system settings.

When reduced motion is preferred, the intensive scroll-based animations are simplified so that the content remains accessible without relying on motion.

---

## ⚡ Performance Considerations

The animation primarily uses transform-based properties such as:

- `translate`
- `scale`
- `rotate`

This helps keep animation work efficient and reduces unnecessary layout changes.

GSAP ScrollTrigger is also used to synchronize the animation with scrolling rather than manually running animation logic on every scroll event.

---

## 🎯 Purpose

This project was developed as a **frontend internship assignment** to demonstrate practical skills in:

- React development
- Next.js
- Responsive UI design
- GSAP animations
- Scroll-based interactions
- Component-based architecture
- Accessibility
- Frontend performance optimization

---

## 👩‍💻 Author

**Vidhi Jain**

GitHub:  
https://github.com/vidhi992

---

## 📄 License

This project is created for educational and portfolio purposes.
