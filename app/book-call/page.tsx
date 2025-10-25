import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function BookCallPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-8">Book a <span className="gradient-text">Call</span></h1>
            <p className="text-xl mb-8">
              Ready to discuss your content needs? Schedule a call with our team and let&apos;s talk about how we can help bring your digital vision to life.
            </p>
            
            <div className="service-card p-8">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Call</h2>
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
                  <label className="block text-sm font-medium mb-2" htmlFor="date">Preferred Date</label>
                  <input 
                    id="date" 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="time">Preferred Time</label>
                  <select 
                    id="time" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (After 5pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">What would you like to discuss?</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                    placeholder="Brief description of what you'd like to discuss"
                  ></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#142929] text-[#F5E6D3] hover:bg-[#4A7C7E] hover:scale-105 hover:shadow-xl">
                  Schedule Call
                </button>
              </form>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-full h-96 rounded-2xl gradient-bg opacity-80 transform rotate-3 shadow-xl"></div>
            <div className="absolute inset-0 rounded-2xl shadow-xl backdrop-blur-sm transform -rotate-3 flex items-center justify-center p-6 bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 border border-[var(--primary-light)]/30 dark:border-[var(--primary-dark)]/30">
              <Image
                src="/monail.jpg"
                alt="Momentum Team Member"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 