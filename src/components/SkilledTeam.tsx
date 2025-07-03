import Image from 'next/image';

export default function SkilledTeamSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Our Skilled Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the creators behind our games. With them, your gaming experience is in great hands.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team1.jpg" // Replace with actual image
              alt="Evan Ray"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
              className="w-full h-64 rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Evan Ray</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team2.jpg" // Replace with actual image
              alt="Ben Cole"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
              className="w-full h-64 rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Ben Cole</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team3.jpg" // Replace with actual image
              alt="Jane Ford"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
              className="w-full h-64 rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Jane Ford</h3>
            <p className="text-gray-600">Community Manager</p>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/team4.jpg" // Replace with actual image
              alt="Mia Lee"
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
              className="w-full h-64 rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Mia Lee</h3>
            <p className="text-gray-600">Game Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}