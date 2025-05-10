"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCompass, FaBullseye } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about-us" className="relative overflow-hidden bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Image Group */}
          <div className="lg:w-1/2">
            <Image
              src="/images/image.png"
              alt="Monail at the beach"
              width={440}
              height={560}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <span className="inline-block text-sm font-semibold tracking-wider text-primary-light uppercase mt-12 mb-3">About Momentum</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary dark:text-gray-200">We help your content work harder for you</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            From brainstorming ideas to creating, posting, and managing your content, we keep it simple, effective, and stress-free. Local impact, national reach.

Whatever you need, we&apos;ve got your back.
            </p>
            
            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <FaCompass className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;re on a mission to sprinkle some digital fairy dust on businesses, helping them grow and making their customers fall head over heels for them. No magic wands needed, just pure digital awesomeness!
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <FaBullseye className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Picture this: We want to be the cool kids of the digital world - the ones everyone wants to hang out with because we make amazing things happen. We&apos;re not just here to build websites; we&apos;re here to build success stories!
                  </p>
                </div>
              </li>
            </ul>
            
            <Link 
              href="/about" 
              className="inline-block px-8 py-3 bg-gradient-primary text- font-medium rounded-full transition-transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
