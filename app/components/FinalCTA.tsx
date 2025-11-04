"use client";

import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FinalCTA = () => {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5E6D3]/30 to-white"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#C8D5B9]/20 animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[#D4E7C5]/20 animate-float-slower"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#142929] mb-6 tracking-tight animate-fade-in-up"
            style={{ fontFamily: 'var(--font-lexend-deca)' }}
          >
            Let&apos;s create some magic together
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[#142929]/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Ready to tell your story? We&apos;re here to bring your vision to life with authentic, compelling content.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-2">
            <a
              href="mailto:andrewmowatt11@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#142929] text-[#F5E6D3] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-2xl"
            >
              <FiMail className="w-6 h-6" />
              <span>Get in Touch</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/353879662828?text=Hi%20Momentum,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-[#142929] text-[#142929] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#142929] hover:text-[#F5E6D3] hover:scale-105 hover:shadow-2xl"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>WhatsApp Us</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Small Text */}
          <p className="text-[#142929]/60 text-sm mt-10 animate-fade-in-up-delay-3">
            Based in Ireland, working with brands nationwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
