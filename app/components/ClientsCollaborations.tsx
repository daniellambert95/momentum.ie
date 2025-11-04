"use client";

import Link from 'next/link';

const ClientsCollaborations = () => {
  const workTypes = [
    {
      title: 'National Retailers',
      description: 'Campaign content for SuperValu and Centra stores across Ireland',
      bgColor: 'bg-gradient-to-br from-[#C8D5B9] to-[#D4E7C5]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Independent Shops',
      description: 'Story-driven content for local businesses and community brands',
      bgColor: 'bg-gradient-to-br from-[#D4E7C5] to-[#C9ADA7]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Lifestyle Brands',
      description: 'Product photography and social content for emerging Irish brands',
      bgColor: 'bg-gradient-to-br from-[#C9ADA7] to-[#D4A5A5]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8D5B9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4E7C5]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Two Column Layout: Text Left, Cards Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#142929] leading-tight">
              CLIENTS & COLLABORATIONS
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#142929]/70 mb-6">
              We work with brands and independents that care about community, creativity, and quality.
            </p>
            <p className="text-base md:text-lg text-[#142929]/60 mb-8">
              Our work includes projects with SuperValu, Centra, Musgrave, AMOC Jewellery, and independent retailers across Ireland.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#4A7C7E] text-[#F5E6D3] hover:bg-[#142929] hover:scale-105 hover:shadow-xl inline-block"
            >
              Get In Touch
            </Link>
          </div>

          {/* Right: Stacked Cards with Creative Layout */}
          <div className="flex-1 w-full max-w-md relative">
            <div className="space-y-6">
              {workTypes.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white border-2 border-[#C8D5B9] hover:border-[#4A7C7E]"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8D5B9]/5 to-[#D4E7C5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-[#C8D5B9]' : 'bg-[#D4E7C5]'
                    } text-[#142929]`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#142929] group-hover:text-[#4A7C7E] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#142929]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4E7C5]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating decorative element */}
            <div className="hidden lg:block absolute -z-10 -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#C8D5B9]/20 to-[#D4E7C5]/20 rounded-full blur-2xl"></div>
            <div className="hidden lg:block absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#D4A5A5]/20 to-[#C9ADA7]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCollaborations;
