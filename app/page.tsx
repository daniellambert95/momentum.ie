"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsSection from './components/BrandsSection';
import CTASection from './components/CTASection';
import Services from './components/Services';
import AboutUsVideo from './components/AboutUsVideo';
import SlideShowcase from './components/SlideShowcase';
import ReelsShowcase from './components/ReelsShowcase';
import ClientsCollaborations from './components/ClientsCollaborations';
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
          <ClientsCollaborations />
          <SlideShowcase />
          <AboutUsVideo />
          <Footer />
        </>
      )}
    </main>
  );
}
