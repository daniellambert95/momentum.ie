"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "CONTENT THAT CONNECTS";

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80); // Speed of typing (80ms per character)
      return () => clearTimeout(timeout);
    } else {
      // Typing is complete, trigger the rest of the content to fade in
      setIsTypingComplete(true);
    }
  }, [displayedText]);

  return (
    <>
    <section className="relative h-[100vh] flex flex-col overflow-hidden bg-[#F5E6D3]">
      {/* Soft pastel background with organic shapes */}
      <div className="absolute inset-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#D4E7C5] to-[#F5E6D3]"></div>
      </div>

      {/* Organic blob shapes - left side (soft sage/mint) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-60">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <path
            d="M0,300 Q150,150 300,200 T600,300 L600,0 L0,0 Z"
            fill="#C8D5B9"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Organic blob shapes - right side (soft terracotta/rose) */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-60">
        <svg viewBox="0 0 700 700" className="w-full h-full">
          <path
            d="M700,400 Q550,300 400,350 T0,400 L0,700 L700,700 Z"
            fill="#D4A5A5"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Additional soft floating shapes for depth */}
      <div className="absolute top-40 right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#D4E7C5]/40"></div>
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none bg-[#C9ADA7]/30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pb-32 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col space-y-5 md:space-y-8 text-center items-center">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl pt-16 tracking-tight text-[#142929] min-h-[1.2em]" style={{ fontFamily: 'var(--font-lexend-deca)', fontWeight: 700 }}>
              {displayedText}
              <span className={`inline-block w-[0.05em] h-[0.9em] ml-1 bg-[#142929] align-middle ${isTypingComplete ? 'opacity-0' : 'animate-cursor-blink'}`}></span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-delayed text-[#142929]/70 font-medium pt-2 md:pt-4">
              Authentic, story-driven video and photo content for brands and local businesses across Ireland
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-3 md:pt-8 animate-fade-in-delayed-more">
              <Link
                href="#our-work"
                className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:shadow-xl hover:scale-105"
              >
                See Our Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 border-2 border-[#142929] text-[#142929] hover:bg-[#142929] hover:text-[#F5E6D3] hover:scale-105 hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Ticker at Bottom */}
      <div
        className="absolute bottom-16 sm:bottom-0 left-0 right-0 bg-[#142929] text-[#C8D5B9] overflow-x-auto overflow-y-hidden z-20 cursor-grab active:cursor-grabbing select-none"
        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-scroll'}`}>
          <div className="flex items-center space-x-6 md:space-x-12 px-6">
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
          </div>
          <div className="flex items-center space-x-6 md:space-x-12 px-6">
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-xl md:text-3xl">—</span>
            <span className="text-xl md:text-3xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-xl md:text-3xl">—</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
