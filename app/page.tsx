"use client";

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Services from './components/Services';
import PreAnimation from './components/PreAnimation';
import AboutUsVideo from './components/AboutUsVideo';
import SlideShowcase from './components/SlideShowcase';
import ReelsShowcase from './components/ReelsShowcase';
import ClientsCollaborations from './components/ClientsCollaborations';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setShowContent(true);
    // The PreAnimation component will handle its own fade out
  };

  return (
    <main className="min-h-screen flex flex-col">
      {!showContent && <PreAnimation onComplete={handleAnimationComplete} />}

      {showContent && (
        <>
          <Navbar />
          <Hero />
          <CTASection />
          <Services />
          <ReelsShowcase />
          <ClientsCollaborations />
          <SlideShowcase />
          <AboutUsVideo />
        </>
      )}
    </main>
  );
}
