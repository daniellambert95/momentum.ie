"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3 px-6 md:px-12 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-md shadow-sm' 
        : darkMode 
          ? 'bg-gray-900' 
          : 'bg-white'
    }`}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-primary blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <Logo />
          </div>
          <span className="text-2xl font-bold ml-2 gradient-text">Momentum</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`hover:text-primary transition-colors font-medium relative group ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services" className={`hover:text-primary transition-colors font-medium relative group ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className={`hover:text-primary transition-colors font-medium relative group ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className={`hover:text-primary transition-colors font-medium relative group ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:bg-gray-200 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <Link href="/book-call" className="btn-primary whitespace-nowrap relative overflow-hidden group">
            <span className="relative z-10">Book a Call</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 mr-2 rounded-full hover:bg-gray-200 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className={`rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 shadow-lg z-20 ${
          darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md' 
            : 'bg-white/95 backdrop-blur-md'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800 hover:text-primary' : 'text-gray-900 hover:bg-gray-100 hover:text-primary'} transition-colors duration-200`}>
              Home
            </Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800 hover:text-primary' : 'text-gray-900 hover:bg-gray-100 hover:text-primary'} transition-colors duration-200`}>
              Services
            </Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800 hover:text-primary' : 'text-gray-900 hover:bg-gray-100 hover:text-primary'} transition-colors duration-200`}>
              About
            </Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800 hover:text-primary' : 'text-gray-900 hover:bg-gray-100 hover:text-primary'} transition-colors duration-200`}>
              Contact
            </Link>
            <Link href="/book-call" className="btn-primary text-center mt-4 block relative overflow-hidden group">
              <span className="relative z-10">Book a Call</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 