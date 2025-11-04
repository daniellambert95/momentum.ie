"use client";

import Image from "next/image";
import { useState } from "react";

const BrandsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const brands = [
    {
      name: "Centra",
      logo: "/brands/centra-ireland-logo.webp",
    },
    {
      name: "AMOC Jewellery",
      logo: "/brands/amoc-jewellery-ireland-logo.webp",
    },
    {
      name: "SuperValu",
      logo: "/brands/super-value-ireland-logo.webp",
    },
    {
      name: "Musgrave",
      logo: "/brands/musgrave-logo.webp",
    },
    {
      name: "Frank and Honest",
      logo: "/brands/frank-and-honest.webp",
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#F5E6D3] to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold tracking-wider text-[#142929]/60 uppercase">
            Trusted By Leading Brands
          </h2>
        </div>

        {/* Infinite Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex overflow-hidden">
            {/* First set of brands */}
            <div className={`flex animate-scroll-brands ${isPaused ? 'paused' : ''}`}>
              {brands.map((brand, idx) => (
                <div
                  key={`${brand.name}-1-${idx}`}
                  className="flex-shrink-0 mx-6 md:mx-8"
                  style={{ width: '200px' }}
                >
                  <div className="relative h-32 md:h-40 flex items-center justify-center group">
                    <div className="relative w-full h-full flex items-center justify-center p-6 rounded-lg bg-white border border-[#C8D5B9] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#4A7C7E]">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-4 transition-all duration-300"
                        sizes="200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className={`flex animate-scroll-brands ${isPaused ? 'paused' : ''}`}>
              {brands.map((brand, idx) => (
                <div
                  key={`${brand.name}-2-${idx}`}
                  className="flex-shrink-0 mx-6 md:mx-8"
                  style={{ width: '200px' }}
                >
                  <div className="relative h-32 md:h-40 flex items-center justify-center group">
                    <div className="relative w-full h-full flex items-center justify-center p-6 rounded-lg bg-white border border-[#C8D5B9] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#4A7C7E]">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-4 transition-all duration-300"
                        sizes="200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third set for extra smoothness */}
            <div className={`flex animate-scroll-brands ${isPaused ? 'paused' : ''}`}>
              {brands.map((brand, idx) => (
                <div
                  key={`${brand.name}-3-${idx}`}
                  className="flex-shrink-0 mx-6 md:mx-8"
                  style={{ width: '200px' }}
                >
                  <div className="relative h-32 md:h-40 flex items-center justify-center group">
                    <div className="relative w-full h-full flex items-center justify-center p-6 rounded-lg bg-white border border-[#C8D5B9] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#4A7C7E]">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-4 transition-all duration-300"
                        sizes="200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-brands {
          animation: scroll-brands 30s linear infinite;
        }

        .animate-scroll-brands.paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandsSection;
