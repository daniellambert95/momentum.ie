"use client";

import { useEffect, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

const PreAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [startTransition, setStartTransition] = useState(false);
  
  useEffect(() => {
    // Animation completes after 3 seconds
    const animationTimer = setTimeout(() => {
      // Add a 0.3 second pause before starting the transition
      const pauseTimer = setTimeout(() => {
        setStartTransition(true);
        onComplete();
      }, 900); // 0.3 seconds pause
      
      return () => clearTimeout(pauseTimer);
    }, 3000);
    
    return () => clearTimeout(animationTimer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background px-4 transition-opacity duration-500 ${
        startTransition ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-3xl">
        {/* Text animation container */}
        <div className="flex flex-col items-center justify-center text-center max-w-[90vw] mx-auto">
          <TextAnimate 
            animation="blurInUp" 
            by="character" 
            duration={1.5} 
            className="text-[#10b981] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter md:tracking-tight leading-none"
          >
            Let&apos;s Create Together
          </TextAnimate>
        </div>
        
        {/* Animated elements */}
        <div className="absolute -z-10 inset-0 -m-8 sm:-m-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-48 sm:h-60 border border-[var(--primary-light)] rounded-full opacity-20 animate-ping" style={{ animationDuration: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 border border-[var(--gradient-end)] rounded-full opacity-10 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PreAnimation; 