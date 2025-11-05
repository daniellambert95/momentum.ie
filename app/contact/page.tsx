'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Momentum.ie Contact Form',
          subject: 'New Contact Form Submission from Momentum.ie',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-32 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s Create Something That <span className="gradient-text">Connects</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
              Ready to start your next campaign or shoot?
            </p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
              Reach out — we&apos;d love to bring your story to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <a
                href="mailto:momentum11you@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl"
              >
                <FiMail className="w-6 h-6" />
                <span>Email Us</span>
              </a>
              <a
                href="https://wa.me/353879662828?text=Hi%20Momentum,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#C8D5B9] text-[#142929] hover:bg-[#D4E7C5] hover:scale-105 hover:shadow-xl"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="service-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md">
                Oops! Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your email"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your message"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#C8D5B9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9583.356844829584!2d-6.073283524999999!3d53.14079810000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486773c3b1f41c85%3A0xa00c7a997316c30!2sGreystones%2C%20Co.%20Wicklow%2C%20Ireland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greystones, Wicklow, Ireland"
            ></iframe>
          </div>
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-[#142929] dark:text-[#C8D5B9]">Location:</span> Greystones, County Wicklow, Ireland
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
} 