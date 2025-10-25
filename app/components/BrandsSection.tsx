"use client";

import Image from "next/image";

const BrandsSection = () => {
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
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#F5E6D3] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold tracking-wider text-[#142929]/60 uppercase">
            Trusted By Leading Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative w-full h-32 md:h-40 flex items-center justify-center group"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4 rounded-lg bg-white border border-[#C8D5B9] transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#4A7C7E]">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-3 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
