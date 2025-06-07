
import { Metadata } from 'next';
import Pricing from '../components/Pricing';

export const metadata: Metadata = {
  title: 'Pricing | Quizinema',
  description: 'Explore the pricing plans offered by Quizinema for gamers of all levels.',
};

const PricingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-start"
        style={{ backgroundImage: "url('/cover.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Pricing</h1>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />
    </>
  );
};

export default PricingPage;