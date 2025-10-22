import Navbar from '../components/Navbar';
import Link from 'next/link';
import AboutUs from '../components/AboutUs';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20 mt-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="gradient-text">Momentum</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Momentum is a content creation agency operating out of County Wicklow, Ireland.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We specialise in creating authentic, story-driven video and photo content for brands and local businesses — the kind of content that connects with people, not just algorithms.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="text-xl md:text-2xl font-medium">
            From national retailers to independent shops, we help businesses capture what makes them unique — and turn it into content that builds connection, drives engagement, and grows awareness.
          </p>

          <p>
            From national retailers and household names to independent shops and community-driven brands, we help businesses bring their stories to life through impactful visuals, creative strategy, and consistent social presence.
          </p>

          <p>
            Our work blends cinematic production with an understanding of what makes audiences care. Whether it&apos;s a short-form Reel for a local Centra, a lifestyle shoot for a jewellery brand, or a full campaign rollout for a nationwide retailer, we create content that feels human, grounded, and memorable.
          </p>

          <p>
            We understand the rhythm of real businesses - from local shops to national brands - and the stories that connect them to their communities. That mix of scale and sincerity is where we thrive.
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
            href="/#our-work"
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>See Our Work</span>
          </Link>
        </div>
      </div>

      {/* AboutUs Component */}
      <AboutUs />
    </main>
  );
} 