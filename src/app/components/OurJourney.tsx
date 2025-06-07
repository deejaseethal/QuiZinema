import Image from 'next/image';

export default function OurJourneySection() {
  return (
        <section className="relative flex flex-col md:flex-row items-center justify-center p-4 md:p-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
            <Image
              src="/journey.jpg" // Replace with your actual image name in public folder
              alt="Castle by the sea"
              width={600}
              height={150}
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>
    
          {/* Text Box Overlapping */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:-ml-24 bg-black text-white p-6 md:p-10 rounded-xl shadow-lg z-10">
            <p className="text-lg leading-relaxed">
              Our journey began with a shared love for movies and the thrill of storytelling through games.
              From a small group of film and trivia enthusiasts, we've grown into a passionate team committed
              to blending cinema with gameplay. Together, we strive to create engaging, memory-stirring experiences
              and build a vibrant community of movie lovers and gamers alike.
            </p>
          </div>
        </section>
      );
}