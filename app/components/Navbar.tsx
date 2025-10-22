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
          ? 'bg-[#F5E6D3]/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 my-2">
        <div className="flex h-20 items-center">
          {/* Left: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <Link
              href="/"
              className="font-medium transition-colors text-[#142929] hover:text-[#4A7C7E]"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-medium transition-colors text-[#142929] hover:text-[#4A7C7E]"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors text-[#142929] hover:text-[#4A7C7E]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium transition-colors text-[#142929] hover:text-[#4A7C7E]"
            >
              Contact
            </Link>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="hidden md:flex items-center gap-2 group flex-1 justify-center">
            <Logo />
            <span className="text-2xl font-bold transition-colors text-[#142929]">
              Momentum
            </span>
          </Link>

          {/* Mobile: Logo (left aligned) */}
          <Link href="/" className="flex md:hidden items-center gap-2 group">
            <Logo />
            <span className="text-2xl font-bold transition-colors text-[#142929]">
              Momentum
            </span>
          </Link>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <Link
              href="/book-call"
              className="px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E]"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md transition-colors text-[#142929] hover:bg-[#C8D5B9]/30"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 bg-[#F5E6D3]">
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                className="px-4 py-2 rounded-md font-medium text-[#142929] hover:bg-[#C8D5B9]/30 hover:text-[#4A7C7E]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 rounded-md font-medium text-[#142929] hover:bg-[#C8D5B9]/30 hover:text-[#4A7C7E]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-md font-medium text-[#142929] hover:bg-[#C8D5B9]/30 hover:text-[#4A7C7E]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md font-medium text-[#142929] hover:bg-[#C8D5B9]/30 hover:text-[#4A7C7E]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/book-call"
                className="mx-4 mt-2 px-6 py-2.5 rounded-full font-semibold text-center transition-all bg-[#142929] text-[#F5E6D3]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
