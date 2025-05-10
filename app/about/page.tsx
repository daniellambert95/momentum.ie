import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <h1 className="text-4xl font-bold mb-8">About <span className="gradient-text">Momentum</span></h1>
        <div className="prose lg:prose-xl dark:prose-invert max-w-4xl">
          <p className="text-xl">
            We&apos;re a creative digital content agency focused on delivering impactful solutions that elevate your brand&apos;s presence.
          </p>
          <p>
            At Momentum, we believe in the power of great content to transform businesses and connect with audiences. Our team of experienced content creators, designers, and strategists work together to bring your digital vision to life.
          </p>
        </div>
      </div>
    </main>
  );
} 