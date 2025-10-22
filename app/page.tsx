"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Services from './components/Services';
import AboutUsVideo from './components/AboutUsVideo';
import SlideShowcase from './components/SlideShowcase';
import ReelsShowcase from './components/ReelsShowcase';
import ClientsCollaborations from './components/ClientsCollaborations';

export default function Home() {


  return (
    <main className="min-h-screen flex flex-col">

      { (
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
