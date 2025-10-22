"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";

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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero/woodlands-trail-video.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay - Green tint with gradient */}
        <div className={`absolute inset-0 ${
          darkMode
            ? 'bg-gradient-to-br from-[#065f46]/20 via-[#1f2937]/25 to-[#047857]/20'
            : 'bg-gradient-to-br from-[#357a67]/20 via-[#047857]/25 to-[#10b981]/20'
        }`}></div>

        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Organic shapes layer - subtle enhancement */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,300 Q400,150 800,280 L1200,320 L1200,400 L0,400 Z"
              fill={darkMode ? "#047857" : "#10b981"}
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Floating organic elements - green focused */}
      <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse pointer-events-none ${
        darkMode
          ? 'bg-gradient-to-br from-[#10b981]/25 to-[#0e7490]/15'
          : 'bg-gradient-to-br from-[#10b981]/35 to-[#047857]/25'
      }`}></div>

      <div className={`absolute bottom-32 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse pointer-events-none ${
        darkMode
          ? 'bg-gradient-to-tr from-[#047857]/20 to-[#357a67]/15'
          : 'bg-gradient-to-tr from-[#357a67]/30 to-[#10b981]/25'
      }`} style={{animationDelay: '1.5s'}}></div>

      {/* Subtle texture overlay */}
      <div className={`absolute inset-0 pointer-events-none ${darkMode ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat'
      }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto sm:mx-0">
          <div className="flex flex-col space-y-8 text-center items-center">
            <h1 className="mb-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight sm:leading-[1.1] tracking-tight animate-fade-in text-white drop-shadow-2xl">
              Momentum <SparklesText colors={{ first: "#10b981", second: "#0e7490" }}>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block bg-gradient-to-r from-[#10b981] via-[#0e7490] to-[#047857] bg-clip-text text-transparent drop-shadow-lg">
                  Content That Connects
                </span>
              </SparklesText>
            </h1>

            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold animate-fade-in-delayed max-w-3xl mx-auto text-white drop-shadow-lg">
              We create authentic, story-driven video and photo content for brands and local businesses across Ireland.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 animate-fade-in-delayed-most w-full max-w-[300px] xs:max-w-xs mx-auto sm:max-w-none">
              <Link
                href="#our-work"
                className="text-center group relative overflow-hidden w-full sm:w-auto px-6 py-3 text-xs xs:text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-[#047857] via-[#10b981] to-[#0e7490] text-white hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">See Our Work</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-center group relative overflow-hidden w-full sm:w-auto px-6 py-3 text-xs xs:text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-[#047857] hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
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
