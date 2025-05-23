import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-8">Get in <span className="gradient-text">Touch</span></h1>
            <p className="text-xl mb-8">
              Ready to take your content to the next level? We&apos;re here to help. 
              Reach out to us and let&apos;s start creating something amazing together.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-primary">hello@momentum.ie</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p>+353 (0) 123 456 789</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/book-call" className="btn-primary inline-flex items-center space-x-2 group">
                <span className="relative z-10">Book a Call</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
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
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 