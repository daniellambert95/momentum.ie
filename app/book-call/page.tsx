"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookCallPage() {
  useEffect(() => {
    // Redirect to Calendly
    window.location.href = 'https://calendly.com/andrewmowatt11';
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-32 mt-20 flex-1 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-[#142929]"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#142929]">
            Redirecting to Calendly...
          </h1>
          <p className="text-lg text-[#142929]/70 mb-8">
            You&apos;ll be redirected to our scheduling page in a moment.
          </p>
          <a
            href="https://calendly.com/andrewmowatt11"
            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl inline-block"
          >
            Click here if you&apos;re not redirected
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
} 