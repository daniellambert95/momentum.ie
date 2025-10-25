import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function ContactPage() {
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
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-primary">andrewmowatt11@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p>+353 87 966 2828</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/book-call" className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl inline-block">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="service-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl">Send Message</button>
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