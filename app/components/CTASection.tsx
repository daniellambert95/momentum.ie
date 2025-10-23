"use client";

import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-[#F5E6D3] py-32">
      {/* Value Proposition */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center leading-tight text-[#142929] mb-12">
            FROM NATIONAL RETAILERS TO INDEPENDENT SHOPS
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-center leading-relaxed text-[#142929]/70 font-medium">
            We help businesses capture what makes them unique — and turn it into content that builds connection, drives engagement, and grows awareness.
          </p>
        </div>
      </div>

      {/* CTA Box - Full Width */}
      <div className="w-full bg-[#142929] py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8D5B9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A7C7E]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#C8D5B9] mb-6 leading-tight text-center md:text-left">
              INTERESTED IN WORKING WITH US ON YOUR NEXT PROJECT?
            </h3>
            <p className="text-lg sm:text-xl text-[#C8D5B9]/80 mb-8 text-center md:text-left">
              Write us an email or schedule a meeting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="mailto:hello@momentum.ie"
                className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#C8D5B9] text-[#142929] hover:bg-[#D4E7C5] hover:scale-105 hover:shadow-xl text-center"
              >
                Send Email
              </Link>
              <Link
                href="/book-call"
                className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 border-2 border-[#C8D5B9] text-[#C8D5B9] hover:bg-[#C8D5B9] hover:text-[#142929] hover:scale-105 hover:shadow-xl text-center"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
