
import Services from '../components/services';
import TrustedGamersSection from '../components/TrustedGame';

export const metadata = {
  title: 'Our Services | Quizinema',
  description: 'Explore the services offered by Quizinema, including expertly designed games, tailored development, and groundbreaking innovations.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-40 md:h-56 bg-no-repeat bg-center bg-cover flex items-center justify-start"
        style={{ backgroundImage: "url('/quiZBanner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
        </div>
      </section>

      <Services />
     <TrustedGamersSection/>
    </>
  );
}