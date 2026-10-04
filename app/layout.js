import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ITZ FIZZ // Scroll-Driven Kinetic Experience",
  description:
    "Interactive scroll-driven hero section built with Next.js, React, Tailwind CSS, and GSAP ScrollTrigger for frontend internship evaluation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070709] text-white">
        {children}
      </body>
    </html>
  );
}
