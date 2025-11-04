"use client";

import Link from 'next/link';
import { FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Video Production', href: '/services#video' },
      { label: 'Photography', href: '/services#photo' },
      { label: 'Social Content', href: '/services#social' },
      { label: 'Consultancy', href: '/services#consultancy' },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/itismomentum', icon: <FiInstagram /> },
      { label: 'Email', href: 'mailto:andrewmowatt11@gmail.com', icon: <FiMail /> },
    ]
  };

  return (
    <footer className="relative bg-[#142929] overflow-hidden">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#F5E6D3]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#F5E6D3]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-4xl font-black text-[#C8D5B9]">Momentum</span>
              </Link>
              <p className="text-[#C8D5B9]/80 text-lg mb-6 max-w-md leading-relaxed">
                Creating authentic, story-driven video and photo content for brands and local businesses across Ireland.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:andrewmowatt11@gmail.com"
                  className="flex items-center gap-3 text-[#C8D5B9] hover:text-[#D4E7C5] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C8D5B9]/20 flex items-center justify-center group-hover:bg-[#C8D5B9] transition-colors">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">andrewmowatt11@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/353879662828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#C8D5B9] hover:text-[#D4E7C5] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4E7C5]/20 flex items-center justify-center group-hover:bg-[#D4E7C5] transition-colors">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <span className="font-medium">WhatsApp Us</span>
                </a>
                <div className="flex items-center gap-3 text-[#C8D5B9]">
                  <div className="w-10 h-10 rounded-full bg-[#C9ADA7]/20 flex items-center justify-center">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Ireland</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold text-[#C8D5B9] mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-[#C8D5B9]/70 hover:text-[#D4E7C5] transition-colors font-medium hover:translate-x-1 inline-block transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl font-bold text-[#C8D5B9] mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-[#C8D5B9]/70 hover:text-[#D4E7C5] transition-colors font-medium hover:translate-x-1 inline-block transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider with Wave Pattern */}
          <div className="relative h-1 bg-gradient-to-r from-[#C8D5B9] via-[#D4E7C5] to-[#C9ADA7] rounded-full mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-[#C8D5B9]/60 text-sm">
                © {currentYear} Momentum. All rights reserved.
              </p>
              <p className="text-[#C8D5B9]/60 text-sm">
                Web Design by{' '}
                <a
                  href="https://www.siteandsight.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8D5B9] hover:text-[#D4E7C5] transition-colors font-medium underline decoration-[#C8D5B9]/40 hover:decoration-[#D4E7C5]"
                >
                  Site&Sight
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/itismomentum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#C8D5B9] text-[#142929] flex items-center justify-center hover:bg-[#D4E7C5] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FiInstagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:andrewmowatt11@gmail.com"
                className="w-12 h-12 rounded-full bg-[#C8D5B9] text-[#142929] flex items-center justify-center hover:bg-[#D4E7C5] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/353879662828"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#C8D5B9] text-[#142929] flex items-center justify-center hover:bg-[#D4E7C5] hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-[#C8D5B9]/60 hover:text-[#D4E7C5] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#C8D5B9]/30">•</span>
              <Link href="/terms" className="text-[#C8D5B9]/60 hover:text-[#D4E7C5] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-[#C8D5B9]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#D4E7C5]/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
