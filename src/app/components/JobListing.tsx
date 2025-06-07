interface JobListing {
    title: string;
    description: string;
    location: string;
    applyLink: string;
  }
  
  const JobListing: React.FC = () => {
    const jobListings: JobListing[] = [
      {
        title: 'Senior Game Developer',
        description: 'Join our team to create cutting-edge games that captivate players worldwide. We’re looking for a passionate developer with experience in Unity and C#.',
        location: 'Remote',
        applyLink: '#',
      },
      {
        title: 'UI/UX Designer',
        description: 'Design intuitive and visually stunning interfaces for our gaming platforms. Experience with Figma and a passion for gaming is a must.',
        location: 'New York, NY',
        applyLink: '#',
      },
      {
        title: 'Marketing Specialist',
        description: 'Drive our marketing campaigns to reach gamers globally. We need a creative individual with experience in digital marketing and social media.',
        location: 'London, UK',
        applyLink: '#',
      },
      {
        title: 'QA Engineer',
        description: 'Ensure our games are bug-free and deliver a seamless experience. Experience in automated testing and a keen eye for detail are required.',
        location: 'Remote',
        applyLink: '#',
      },
    ];
  
    return (
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
            Explore opportunities at Quizinema and help us shape the future of gaming.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3">{job.description}</p>
                <p className="text-gray-500 text-sm mb-4">Location: {job.location}</p>
                <a
                  href={job.applyLink}
                  className="inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default JobListing;