import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  socialLinks?: { platform: string; url: string; icon: string }[];
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Tony Fred',
      position: 'Chief Executive Officer',
      description: 'Founder and chief visionary, Tony is the driving force behind the company. He loves to keep a deep hands full by participating in the development of the games, marketing, and customer experience strategies.',
      image: '/team1.jpg',
    },
    {
      name: 'Alex Johnson',
      position: 'Chief Gaming Officer',
      description: 'Our team of gaming enthusiasts is dedicated to creating the best gaming experience for our users. With years of experience in the gaming industry, our team is among the best minds in the business.',
      image: '/team2.jpg',
    },
    {
      name: 'Aline Turner',
      position: 'Chief Technical Officer',
      description: 'Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house game developers and looks after the community of thousands of gamers.',
      image: '/team3.jpg',
    },
    {
      name: 'Iris Joe',
      position: 'Chief Financial Officer',
      description: 'Iris, with her international experience, helps us easily understand the financials and improves them. She is determined to drive success and delivers her professional acumen to bring the company to the next level.',
      image: '/team4.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Your Gaming Destination</h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 max-w-2xl mx-auto">
          Meet our gaming team
        </p>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-2xl mx-auto mb-12">
          Dedicated professionals driving our gaming success
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-700 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="pt-14">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3">{member.position}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;