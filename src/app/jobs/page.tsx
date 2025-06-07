
import { Metadata } from 'next';
import JobListing from '../components/JobListing';


export const metadata: Metadata = {
  title: 'Jobs | Quizinema',
  description: 'Explore career opportunities at Quizinema and join our team to shape the future of gaming.',
};

const JobsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-48 sm:h-64 md:h-80 flex items-center justify-start"
        style={{ backgroundImage: "url('/cover.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Jobs</h1>
        </div>
      </section>

      {/* Job Listings Section */}
      <JobListing />
    </>
  );
};

export default JobsPage;