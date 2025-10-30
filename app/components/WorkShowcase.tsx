"use client";

import { useState } from "react";
import Image from "next/image";

const WorkShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const workImages = [
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.11.webp",
      alt: "Content creation work 1",
      className: "row-span-2", // Taller
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.12.webp",
      alt: "Content creation work 2",
      className: "row-span-1",
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.13.webp",
      alt: "Content creation work 3",
      className: "row-span-1",
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.13 (1).webp",
      alt: "Content creation work 4",
      className: "row-span-2", // Taller
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.13 (2).webp",
      alt: "Content creation work 5",
      className: "row-span-1",
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.14.webp",
      alt: "Content creation work 6",
      className: "row-span-1",
    },
    {
      src: "/momentum-work/WhatsApp Image 2025-10-27 at 18.15.14 (1).webp",
      alt: "Content creation work 7",
      className: "row-span-2", // Taller
    },
  ];

  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 bg-[#F5E6D3] overflow-hidden" id="our-work">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#D4E7C5] to-[#F5E6D3] opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-[#D4A5A5]/20 animate-float-slow"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#C8D5B9]/20 animate-float-slower"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#142929] tracking-tight"
              style={{ fontFamily: 'var(--font-lexend-deca)' }}
            >
              OUR WORK
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#142929]/70 max-w-3xl mx-auto">
              A showcase of authentic stories we&apos;ve brought to life
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            {workImages.map((image, idx) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${image.className} animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                onClick={() => setSelectedImage(image.src)}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142929]/80 via-[#142929]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl max-h-[90vh] aspect-video">
            <Image
              src={selectedImage}
              alt="Full size work showcase"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkShowcase;
