"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 my-2">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo />
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-emerald-400'
                    : 'text-emerald-700'
                  : 'text-white drop-shadow-lg'
              }`}
            >
              Momentum
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-emerald-400'
                    : 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300 drop-shadow'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-emerald-400'
                    : 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300 drop-shadow'
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-emerald-400'
                    : 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300 drop-shadow'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-emerald-400'
                    : 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300 drop-shadow'
              }`}
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isScrolled
                  ? isDark
                    ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
                    : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/book-call"
              className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:shadow-lg hover:scale-105 transition-all"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isScrolled
                  ? isDark
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-emerald-100 text-emerald-700'
                  : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? isDark
                    ? 'text-emerald-400 hover:bg-emerald-500/20'
                    : 'text-emerald-700 hover:bg-emerald-100'
                  : 'text-white hover:bg-white/20'
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden pb-4 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-md font-medium ${
                  isDark
                    ? 'text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`px-4 py-2 rounded-md font-medium ${
                  isDark
                    ? 'text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-md font-medium ${
                  isDark
                    ? 'text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-md font-medium ${
                  isDark
                    ? 'text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/book-call"
                className="mx-4 mt-2 px-6 py-2.5 rounded-lg font-semibold text-center text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600"
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
