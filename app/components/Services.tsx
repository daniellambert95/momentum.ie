"use client";

import { FiVideo, FiCamera, FiMessageSquare, FiTrendingUp, FiEdit3, FiUsers, FiCalendar } from "react-icons/fi";
import Link from 'next/link';

const Services = () => {

  const services = [
    {
      id: 1,
      title: "Video Production",
      icon: <FiVideo className="w-8 h-8" />,
      description: "From short-form Reels to full campaign shoots, we produce cinematic, high-impact video content that captures attention and drives engagement."
    },
    {
      id: 2,
      title: "Photography & Lifestyle Shoots",
      icon: <FiCamera className="w-8 h-8" />,
      description: "Clean, eye-catching imagery for social, web, and print - capturing the personality behind every product, space, and story."
    },
    {
      id: 3,
      title: "Social Media Content",
      icon: <FiMessageSquare className="w-8 h-8" />,
      description: "Scroll-stopping videos and posts designed to move smoothly, built to connect with your audience and grow your brand presence."
    },
    {
      id: 4,
      title: "Content Management",
      icon: <FiCalendar className="w-8 h-8" />,
      description: "Let us handle the heavy lifting. Our content management service ensures your posts are scheduled, your campaigns are on track, and your messaging stays consistent. We'll manage everything from publishing to performance monitoring, so you can focus on growing your business."
    },
    {
      id: 5,
      title: "Social Media Consultancy",
      icon: <FiTrendingUp className="w-8 h-8" />,
      description: "We help businesses develop clear content strategies, refine their tone of voice, and plan consistent posting that converts. Whether you manage your own social or want to strengthen your approach, we guide you with clarity and direction."
    },
    {
      id: 6,
      title: "Graphic Design",
      icon: <FiEdit3 className="w-8 h-8" />,
      description: "Led by our designer Adam, we craft bold, cohesive visuals that tie everything together - from social graphics and packaging to menus, posters, and campaign materials. Our design work ensures your brand looks as good as it feels."
    },
    {
      id: 7,
      title: "Brand & Community Storytelling",
      icon: <FiUsers className="w-8 h-8" />,
      description: "We bring out the human side of your brand, creating connection through story — from local businesses to national campaigns."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D5B9]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4E7C5]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#142929]">
            WHAT WE DO
          </h2>
          <p className="text-lg md:text-xl text-[#142929]/70">
            We craft impactful visual content that feels real — built around people, places, and purpose.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl bg-white border-2 border-[#C8D5B9] hover:border-[#4A7C7E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8D5B9]/5 to-[#D4E7C5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex-grow">
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${
                    index % 2 === 0 ? 'bg-[#C8D5B9]' : 'bg-[#D4E7C5]'
                  } text-[#142929]`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#142929] group-hover:text-[#4A7C7E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#142929]/70 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4E7C5]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#4A7C7E] text-[#F5E6D3] hover:bg-[#142929] hover:scale-105 hover:shadow-xl inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 