"use client";

import Link from 'next/link';

const ClientsCollaborations = () => {

  // Client logos - uncomment when you have logo files
  // const clients = [
  //   { name: 'SuperValu', logo: '/clients/supervalu.png' },
  //   { name: 'Centra', logo: '/clients/centra.png' },
  //   { name: 'Musgrave', logo: '/clients/musgrave.png' },
  //   { name: 'AMOC Jewellery', logo: '/clients/amoc.png' },
  // ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8D5B9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4E7C5]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#142929]">
            CLIENTS & COLLABORATIONS
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#142929]/70">
            We work with brands and independents that care about community, creativity, and quality.
          </p>
          <p className="text-base md:text-lg mt-4 text-[#142929]/60">
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
              bgColor: 'bg-[#C8D5B9]/20'
            },
            {
              title: 'Independent Shops',
              description: 'Story-driven content for local businesses and community brands',
              bgColor: 'bg-[#D4E7C5]/20'
            },
            {
              title: 'Lifestyle Brands',
              description: 'Product photography and social content for emerging Irish brands',
              bgColor: 'bg-[#F5E6D3]/40'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white border-2 border-transparent hover:border-[#C8D5B9]"
            >
              {/* Background overlay on hover */}
              <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-[#142929]">
                  {item.title}
                </h3>
                <p className="text-[#142929]/60">
                  {item.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#142929] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
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
