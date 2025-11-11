"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsSection from './components/BrandsSection';
import CTASection from './components/CTASection';
import Services from './components/Services';
import SlideShowcase from './components/SlideShowcase';
import ReelsShowcase from './components/ReelsShowcase';
import ClientsCollaborations from './components/ClientsCollaborations';
import WorkShowcase from './components/WorkShowcase';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col">

      { (
        <>
          <Navbar />
          <Hero />
          <CTASection />
          <BrandsSection />
          <Services />
          <ReelsShowcase />
          <WorkShowcase />
          <ClientsCollaborations />
          <SlideShowcase />
          {/* <AboutUsVideo /> */}
          <FinalCTA />
          <Footer />
        </>
      )}
    </main>
  );
}
