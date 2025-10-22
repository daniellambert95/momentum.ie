"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SlideShowcase = () => {
  const slides = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/mo-slides/${i + 1}.jpeg`,
  }));

  return (
    <section className="py-16 bg-[#142929]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Big Bold Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#C8D5B9] mb-6">OUR JOURNEY</h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#C8D5B9]/80 max-w-md mx-auto md:mx-0">
            Discover the moments that define us. <br />
            <span className="text-[#C8D5B9] font-bold">
              Experience the story behind every image.
            </span>
          </p>
        </div>
        {/* Right: Slideshow */}
        <div className="flex-1 max-w-2xl w-full">
          <Swiper
            spaceBetween={10}
            navigation={false}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="main-swiper bg-brand-green"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="bg-brand-green">
                <div className="relative w-full h-72 md:h-96 bg-brand-green">
                  <Image
                    src={slide.src}
                    alt={`Slide ${slide.id}`}
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    priority={slide.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SlideShowcase; 