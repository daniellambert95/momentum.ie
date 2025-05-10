"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden sm:my-0">
      {/* Animated background elements */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-0",
          "from-primary-600/80 via-primary-600/80 to-primary opacity-80"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-emerald-600/40 transition-colors duration-200"
      />
      <div className="absolute -top-12 -right-12 w-36 h-36 xs:w-48 xs:h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-12 -left-12 w-36 h-36 xs:w-48 xs:h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-[#0e7490]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto sm:mx-0">
          <div className="flex flex-col space-y-8 text-center sm:text-left">
            <h1 className="my-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight sm:leading-[1.1] tracking-tight animate-fade-in">
              Crafting <SparklesText colors={{ first: "#047857", second: "#0e7490" }}><span className="gradient-text text-6xl sm:text-6xl md:text-7xl lg:text-8xl inline-block">Brand Stories</span></SparklesText> 
              <span className="mt-4 sm:mt-0 inline-block">That Drive Real Results</span>
            </h1>
            
            <p className={`text-sm xs:text-base sm:text-base md:text-lg font-medium italic ${darkMode ? 'text-primary-light' : 'text-primary'} animate-fade-in-delayed-more max-w-xl mx-auto sm:mx-0`}>
              Let&apos;s create something great together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 animate-fade-in-delayed-most w-full max-w-[300px] xs:max-w-xs mx-auto sm:mx-0 sm:max-w-none">
              <Link href="/contact" className="btn-primary text-center group relative overflow-hidden w-full sm:w-auto px-5 py-2.5 text-xs xs:text-sm sm:text-base">
                <span className="relative z-10">Let&apos;s Connect</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link href="/book-call" className="btn-secondary text-center group relative overflow-hidden w-full sm:w-auto px-5 py-2.5 text-xs xs:text-sm sm:text-base">
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