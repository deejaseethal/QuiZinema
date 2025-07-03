
import { Metadata } from 'next';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
  title: 'About Us | Quizinema',
  description: 'Learn more about Quizinema, our mission, and the team behind our innovative gaming solutions.',
};

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-48 sm:h-64 md:h-80 flex items-center justify-start"
        style={{ backgroundImage: "url('/cover.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>
      <TeamSection/>
    </>
  );
};

export default AboutPage;