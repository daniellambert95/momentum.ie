"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SlideShowcase = () => {
  const slides = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/mo-slides/${i + 1}.jpeg`,
  }));

  return (
    <section className="py-24 bg-[#142929] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8D5B9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4E7C5]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left: Big Bold Text - More Centered */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#C8D5B9] mb-8 leading-tight">
              OUR JOURNEY
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#C8D5B9]/80 leading-relaxed">
              Discover the moments that define us.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#C8D5B9] font-bold mt-4">
              Experience the story behind every image.
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex justify-center md:justify-start">
              <div className="w-24 h-1 bg-gradient-to-r from-[#C8D5B9] to-[#D4E7C5] rounded-full"></div>
            </div>
          </div>

          {/* Right: Slideshow - Larger and More Centered */}
          <div className="flex-1 w-full max-w-xl">
            <Swiper
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              initialSlide={0}
              autoplay={false}
              className="main-swiper rounded-2xl shadow-2xl"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-[#142929] rounded-2xl overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={`Slide ${slide.id}`}
                      fill
                      className="object-cover rounded-2xl"
                      priority={slide.id === 1}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142929]/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Decorative frame element */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#C8D5B9]/30 rounded-2xl -z-10"></div>
            <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 border-4 border-[#D4E7C5]/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShowcase; 