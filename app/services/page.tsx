import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12">
        <Services />
      </div>
      <Footer />
    </main>
  );
} 