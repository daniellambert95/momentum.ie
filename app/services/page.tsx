import Navbar from '../components/Navbar';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12">
        <Services />
      </div>
    </main>
  );
} 