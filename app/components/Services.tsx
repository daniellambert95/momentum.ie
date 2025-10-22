"use client";

import { useState } from "react";
import { FiVideo, FiCamera, FiMessageSquare, FiTrendingUp, FiEdit3, FiUsers } from "react-icons/fi";

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
      title: "Social Media Consultancy",
      icon: <FiTrendingUp className="w-8 h-8" />,
      description: "We help businesses develop clear content strategies, refine their tone of voice, and plan consistent posting that converts. Whether you manage your own social or want to strengthen your approach, we guide you with clarity and direction."
    },
    {
      id: 5,
      title: "Graphic Design",
      icon: <FiEdit3 className="w-8 h-8" />,
      description: "Led by our designer Adam, we craft bold, cohesive visuals that tie everything together - from social graphics and packaging to menus, posters, and campaign materials. Our design work ensures your brand looks as good as it feels."
    },
    {
      id: 6,
      title: "Brand & Community Storytelling",
      icon: <FiUsers className="w-8 h-8" />,
      description: "We bring out the human side of your brand, creating connection through story — from local businesses to national campaigns."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D5B9]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4E7C5]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#142929]">
            WHAT WE DO
          </h2>
          <p className="text-lg md:text-xl text-[#142929]/70">
            We craft impactful visual content that feels real — built around people, places, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group p-6 text-[#142929]"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="mb-4 relative">
                <div className="w-16 h-16 rounded-full bg-[#142929] flex items-center justify-center text-[#C8D5B9] transform group-hover:-translate-y-1 group-hover:bg-[#4A7C7E] transition-all duration-300">
                  {service.icon}
                </div>
                <div className={`absolute inset-0 bg-[#C8D5B9] rounded-full scale-0 opacity-0 group-hover:scale-[1.8] group-hover:opacity-20 transition-all duration-500 ease-out ${activeService === service.id ? 'animate-pulse' : ''}`}></div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A7C7E] transition-colors duration-300">{service.title}</h3>
              <p className="text-[#142929]/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/contact" className="btn-primary inline-flex items-center space-x-2 group">
            Get Started
          </a>
        </div>`
      </div>
    </section>
  );
};

export default Services; 