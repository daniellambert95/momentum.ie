'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-32 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#142929]">
            Cookie Policy
          </h1>

          <div className="space-y-8 text-lg text-[#142929]/80">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#142929]">Our Approach to Cookies</h2>
              <p className="leading-relaxed">
                At Momentum, we believe in transparency and respecting your privacy. We want to make it clear:
                <strong className="text-[#4A7C7E]"> we do not use cookies or store any tracking data on your device.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#142929]">What This Means for You</h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed">
                <li>We don&apos;t track your browsing behavior</li>
                <li>We don&apos;t store any personal information in cookies</li>
                <li>We don&apos;t use third-party tracking or analytics cookies</li>
                <li>Your visit to our website is completely private</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#142929]">Contact Forms</h2>
              <p className="leading-relaxed">
                When you submit a contact form on our website, the information you provide (name, email, and message)
                is sent directly to us via a secure form submission service. This data is only used to respond to your
                inquiry and is not stored in cookies or tracked across websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#142929]">External Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to external sites (such as our social media profiles or WhatsApp).
                Please note that these third-party sites have their own privacy policies and cookie practices,
                which we do not control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#142929]">Questions?</h2>
              <p className="leading-relaxed">
                If you have any questions about our cookie policy or privacy practices, please don&apos;t hesitate to
                contact us at <a href="mailto:andrewmowatt11@gmail.com" className="text-[#4A7C7E] hover:text-[#142929] font-semibold underline">andrewmowatt11@gmail.com</a>.
              </p>
            </section>

            <section className="pt-8 border-t border-[#C8D5B9]">
              <p className="text-sm text-[#142929]/60">
                Last updated: November 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
