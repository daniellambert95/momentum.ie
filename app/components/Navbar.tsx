"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#142929]/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 my-2">
        <div className="flex h-20 items-center">
          {/* Left: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-[#C8D5B9] hover:text-[#D4E7C5]'
                  : 'text-[#142929] hover:text-[#4A7C7E]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-[#C8D5B9] hover:text-[#D4E7C5]'
                  : 'text-[#142929] hover:text-[#4A7C7E]'
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-[#C8D5B9] hover:text-[#D4E7C5]'
                  : 'text-[#142929] hover:text-[#4A7C7E]'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-[#C8D5B9] hover:text-[#D4E7C5]'
                  : 'text-[#142929] hover:text-[#4A7C7E]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Logo - Centered on Desktop, Left on Mobile */}
          <Link href="/" className="flex items-center gap-2 group md:flex-1 md:justify-center">
            <Logo />
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#C8D5B9]' : 'text-[#142929]'
            }`}>
              Momentum
            </span>
          </Link>

          {/* Right: CTA Button (Desktop) / Hamburger (Mobile) */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <Link
              href="/book-call"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? 'bg-[#C8D5B9] text-[#142929] hover:bg-[#D4E7C5]'
                  : 'bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E]'
              }`}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors z-50 relative ${
                isScrolled
                  ? 'text-[#C8D5B9] hover:bg-[#C8D5B9]/20'
                  : 'text-[#142929] hover:bg-[#C8D5B9]/30'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#F5E6D3] z-40 transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link
              href="/"
              className={`text-3xl font-semibold text-[#142929] hover:text-[#4A7C7E] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '100ms' : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-3xl font-semibold text-[#142929] hover:text-[#4A7C7E] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '200ms' : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-3xl font-semibold text-[#142929] hover:text-[#4A7C7E] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-3xl font-semibold text-[#142929] hover:text-[#4A7C7E] transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book-call"
              className={`mt-4 px-8 py-3.5 rounded-full text-xl font-semibold text-center transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '500ms' : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
