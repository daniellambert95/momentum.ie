"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

    // Setup observer to watch for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-0",
          "from-primary-600/80 via-primary-600/80 to-primary opacity-80"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-emerald-600/40 transition-colors duration-200"
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0e7490]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl">
          <div className="flex flex-col space-y-8">
            <h1 className="text-7xl md:text-8xl font-black leading-[0.95] tracking-tight animate-fade-in">
              Crafting  <SparklesText className="text-7xl md:text-8xl" colors={{ first: "#047857", second: "#0e7490" }}><span className="gradient-text text-9xl">Brand Stories</span></SparklesText> That Drive Real Results
            </h1>
            
            <p className={`text-xl font-medium italic ${darkMode ? 'text-primary-light' : 'text-primary'} animate-fade-in-delayed-more`}>
              Let's create something great together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delayed-most">
              <Link href="/contact" className="btn-primary text-center group relative overflow-hidden">
                <span className="relative z-10">Let's Connect</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link href="/book-call" className="btn-secondary text-center group relative overflow-hidden">
                <span className="relative z-10">Schedule a Call</span>
                <span className="absolute inset-0 bg-gradient-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero; 