"use client";

import { useState, useEffect } from "react";
import { FiEdit3, FiCalendar, FiMessageSquare, FiMoreHorizontal } from "react-icons/fi";

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

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

  const services = [
    {
      id: 1,
      title: "Content Creation",
      icon: <FiEdit3 className="w-8 h-8" />,
      description: "Bring your brand's vision to life with content that captivates. From eye-catching visuals and professional video production to dynamic social media assets, we create content that tells your story and grabs attention, helping your business stand out in a crowded market."
    },
    {
      id: 2,
      title: "Content Management",
      icon: <FiCalendar className="w-8 h-8" />,
      description: "Let us handle the heavy lifting. Our content management service ensures your posts are scheduled, your campaigns are on track, and your messaging stays consistent. We'll manage everything from publishing to performance monitoring, so you can focus on growing your business."
    },
    {
      id: 3,
      title: "Consultancy",
      icon: <FiMessageSquare className="w-8 h-8" />,
      description: "Whether you need fresh ideas, guidance on structure, or help refining your content, our consultancy service is here to support you. We offer expert advice, practical solutions, and hands on guidance to ensure your social media and content creation align perfectly with your brand's goals. Let's work together to create content that connects and delivers."
    },
    {
      id: 4,
      title: "Other Services",
      icon: <FiMoreHorizontal className="w-8 h-8" />,
      description: "Looking for something different? We offer a range of additional creative services tailored to your unique needs. From bespoke projects to out-of-the-box ideas, we're here to help bring your vision to life. Get in touch with us today to discuss how we can support your next creative adventure!"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0e7490]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="gradient-text font-extrabold">Services</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card group p-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="mb-4 relative">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className={`absolute inset-0 bg-primary-light rounded-full scale-0 opacity-0 group-hover:scale-[1.8] group-hover:opacity-20 transition-all duration-500 ease-out ${activeService === service.id ? 'animate-pulse' : ''}`}></div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/contact" className="btn-primary inline-flex items-center space-x-2 group">
            Get Started
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>`
      </div>
    </section>
  );
};

export default Services; 