"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <>
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#F5E6D3]">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col space-y-8 text-center items-center py-20">

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight animate-fade-in-delayed text-[#142929]">
              CONTENT THAT CONNECTS
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-delayed-more text-[#142929]/70 font-medium pt-4">
              Authentic, story-driven video and photo content for brands and local businesses across Ireland
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-delayed-most">
              <Link
                href="#our-work"
                className="group relative overflow-hidden px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">See Our Work</span>
              </Link>
              <Link
                href="/contact"
                className="group relative overflow-hidden px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 border-2 border-[#142929] text-[#142929] hover:bg-[#142929] hover:text-[#F5E6D3] hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Ticker at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#142929] text-[#C8D5B9] py-6 overflow-hidden z-20">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-12 px-6">
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
          </div>
          <div className="flex items-center space-x-12 px-6">
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">CONTENT CREATION MADE EASY</span>
            <span className="text-2xl">—</span>
            <span className="text-2xl font-bold">YOUR STORY, OUR CRAFT</span>
            <span className="text-2xl">—</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
