"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workImages = [
    "/momentum-work/chef-at-work.webp",
    "/momentum-work/trail-running-ireland.webp",
    "/momentum-work/centra-greystones-deal.webp",
    "/momentum-work/birra-moretti-ireland.webp",
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % workImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [workImages.length]);

  return (
    <>
      <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-[#F5E6D3]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#D4E7C5] to-[#F5E6D3] animate-gradient-shift"></div>

        {/* Subtle floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-[#C8D5B9]/30 animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#D4A5A5]/20 animate-float-slower"></div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* Left: Content - Takes up 7 columns on large screens */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h1
                  className="pt-12 md:pt-0 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight text-[#142929] leading-[1.05] animate-fade-in-up"
                  style={{ fontFamily: 'var(--font-lexend-deca)', fontWeight: 700 }}
                >
                  CONTENT THAT CONNECTS
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-[#142929]/70 font-medium animate-fade-in-up-delay-1 mx-auto lg:mx-0">
                  Authentic, story-driven video and photo content for brands and local businesses across Ireland
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 md:gap-4 pt-2 animate-fade-in-up-delay-3">
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

            {/* Right: Image Showcase - Takes up 5 columns on large screens */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in-up-delay-1">
              {/* Main rotating image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                {workImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Work showcase ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4A7C7E] rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C8D5B9] rounded-full blur-xl opacity-40 animate-pulse-slower"></div>
            </div>

          </div>
        </div>

        {/* Mobile Scrolling Text Ticker (Fast) */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0 bg-[#142929] text-[#C8D5B9] overflow-hidden z-20 cursor-grab active:cursor-grabbing select-none py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)}
        >
          <div className={`flex whitespace-nowrap animate-scroll-mobile ${isPaused ? 'paused' : ''}`}>
            {[...Array(6)].map((_, setIndex) => (
              <div key={`mobile-${setIndex}`} className="flex items-center shrink-0">
                {["CONTENT CREATION MADE EASY", "YOUR STORY, OUR CRAFT"].map((text, textIndex) => (
                  <div key={`mobile-${setIndex}-${textIndex}`} className="flex items-center">
                    <span className="font-bold px-4 text-lg">
                      {text}
                    </span>
                    <span className="px-4 text-lg">
                      —
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Scrolling Text Ticker */}
        <div
          className="hidden md:block absolute bottom-0 left-0 right-0 bg-[#142929] text-[#C8D5B9] overflow-hidden z-20 cursor-grab active:cursor-grabbing select-none py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)}
        >
          <div className={`flex whitespace-nowrap animate-scroll ${isPaused ? 'paused' : ''}`}>
            {[...Array(3)].map((_, setIndex) => (
              <div key={`desktop-${setIndex}`} className="flex items-center shrink-0">
                {["CONTENT CREATION MADE EASY", "YOUR STORY, OUR CRAFT"].map((text, textIndex) => (
                  <div key={`desktop-${setIndex}-${textIndex}`} className="flex items-center">
                    <span className="font-bold px-8 text-3xl">
                      {text}
                    </span>
                    <span className="px-8 text-3xl">
                      —
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
