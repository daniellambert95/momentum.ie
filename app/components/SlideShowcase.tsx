"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './SlideShowcase.css';

const SlideShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

    // Setup observer to watch for dark mode changes
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

  const slides = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/mo-slides/${i + 1}.jpeg`,
  }));

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Big Bold Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl font-extrabold text-primary mb-6">Our Journey</h2>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            Discover the moments that define us. <br />
            <span className="text-primary font-bold">Experience the story behind every image.</span>
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
            className="main-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-72 md:h-96">
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