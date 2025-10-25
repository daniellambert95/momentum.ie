"use client";

import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FaCompass, FaBullseye } from 'react-icons/fa';
import Image from 'next/image';

function AboutAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      title: "Who We Are",
      content: "We're a creative production and marketing agency with a passion for storytelling and a knack for delivering results. We thrive on helping businesses stand out by crafting content that's meaningful, memorable, and impactful. Whether you're a small business or a growing enterprise, we're here to be your trusted partner."
    },
    {
      title: "What We Do",
      content: "We specialise in end-to-end content production, from ideation and creation to scheduling and publishing. Our services cover everything you need to elevate your brand's presence: engaging visuals and sharp copy that drive engagement and deliver measurable outcomes."
    },
    {
      title: "How We Work",
      content: "We believe in collaboration and simplicity. Our process starts with understanding your vision, then turning it into content that connects with your audience. With a focus on creativity and efficiency, we deliver projects that are as seamless as they are effective."
    },
    {
      title: "Why Choose Us",
      content: "We don't just create content… we craft tailored, personable content and experiences. Our unique mix of creativity, commercial logic, and hands-on care ensures that every project is tailored to your goals. With Momentum, you're choosing a partner who's as invested in your success as you are."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      <div className="grid grid-cols-1 gap-6">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 border-[#C8D5B9] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left transition-all duration-300 hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#142929] pr-4">
                  {item.title}
                </h2>
                <FiChevronDown
                  className={`text-[#142929] text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-gray-50 border-t-2 border-gray-100">
                <p className="text-lg leading-relaxed text-gray-700">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-[#F5E6D3] via-white to-[#D4E7C5]/30">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-20 mt-20">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
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
              <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">About Momentum</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#142929]">We help your content work harder for you</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                From brainstorming ideas to creating, posting, and managing your content, we keep it simple, effective, and stress-free. Local impact, national reach. Whatever you need, we&apos;ve got your back.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We specialise in creating authentic, story-driven video and photo content for brands and local businesses — the kind of content that connects with people, not just algorithms.
              </p>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8D5B9] flex items-center justify-center">
                    <FaCompass className="text-[#142929] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We&apos;re on a mission to sprinkle some digital fairy dust on businesses, helping them grow and making their customers fall head over heels for them. No magic wands needed, just pure digital awesomeness!
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4E7C5] flex items-center justify-center">
                    <FaBullseye className="text-[#142929] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Picture this: We want to be the cool kids of the digital world - the ones everyone wants to hang out with because we make amazing things happen. We&apos;re not just here to build websites; we&apos;re here to build success stories!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content - Four Pillars with Accordion */}
        <AboutAccordion />

        {/* Additional Context */}
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="text-xl md:text-2xl font-medium">
            From national retailers to independent shops, we help businesses capture what makes them unique — and turn it into content that builds connection, drives engagement, and grows awareness.
          </p>

          <p>
            Our work blends cinematic production with an understanding of what makes audiences care. Whether it&apos;s a short-form Reel for a local Centra, a lifestyle shoot for a jewellery brand, or a full campaign rollout for a nationwide retailer, we create content that feels human, grounded, and memorable.
          </p>

          {/* Mission Statement */}
          <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-[#357a67]/10 to-[#0e7490]/10 border-l-4 border-primary">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              At Momentum, we move fast, stay creative, and keep things real.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe content should do more than fill feeds — it should build connection, inspire trust, and move people.
            </p>
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Momentum isn&apos;t just our name — it&apos;s how we work.
          </p>

          <p className="text-xl italic text-primary font-semibold">
            Always moving forward. Always creating. Always connecting.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Link
            href="/book-call"
            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl inline-block"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
} 