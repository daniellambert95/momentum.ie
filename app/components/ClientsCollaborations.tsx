"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const ClientsCollaborations = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Client logos - uncomment when you have logo files
  // const clients = [
  //   { name: 'SuperValu', logo: '/clients/supervalu.png' },
  //   { name: 'Centra', logo: '/clients/centra.png' },
  //   { name: 'Musgrave', logo: '/clients/musgrave.png' },
  //   { name: 'AMOC Jewellery', logo: '/clients/amoc.png' },
  // ];

  return (
    <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0e7490]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Clients & <span className="gradient-text font-extrabold">Collaborations</span>
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We work with brands and independents that care about community, creativity, and quality.
          </p>
          <p className={`text-base md:text-lg mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Our work includes projects with SuperValu, Centra, Musgrave, AMOC Jewellery, and independent retailers across Ireland.
          </p>
        </div>

        {/* Client Logos Grid - Placeholder for when you have logos */}
        {/*
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
              }`}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        */}

        {/* Featured Work Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {[
            {
              title: 'National Retailers',
              description: 'Campaign content for SuperValu and Centra stores across Ireland',
              color: 'from-primary to-[#357a67]'
            },
            {
              title: 'Independent Shops',
              description: 'Story-driven content for local businesses and community brands',
              color: 'from-[#0e7490] to-primary'
            },
            {
              title: 'Lifestyle Brands',
              description: 'Product photography and social content for emerging Irish brands',
              color: 'from-[#357a67] to-[#0e7490]'
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>View Our Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsCollaborations;
