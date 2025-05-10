"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PreAnimation from './components/PreAnimation';
import AboutUsVideo from './components/AboutUsVideo';
import SlideShowcase from './components/SlideShowcase';
import AboutUs from './components/AboutUs';

export default function Home() {
  const [showPreAnimation, setShowPreAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setShowContent(true);
    // The PreAnimation component will handle its own fade out
  };

  return (
    <main className="min-h-screen flex flex-col">
      {showPreAnimation && <PreAnimation onComplete={handleAnimationComplete} />}
      
      {showContent && (
        <>
          <Navbar />
          <Hero />
          <SlideShowcase />
          <AboutUs />
          <Services />
          <AboutUsVideo />
        </>
      )}
    </main>
  );
}
