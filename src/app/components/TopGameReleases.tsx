import Image from 'next/image';

export default function TopGamesReleases() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
          Our game releases
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Some of the latest games we had the pleasure to develop
          </p>
        </div>

       {/* Images and Titles */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Game 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/game1.webp" // Replace with an image that includes the phone mockup
              alt="3-Actors-1-Movie-BOLLYWOOD"
              width={100}
              height={200}
              style={{ objectFit: 'contain' }}
              className="w-full h-96"
            />
            <h3 className="text-xl text-gray-800 mt-4">
             QuiZinema - Bollywood
            </h3>
            <p className="text-gray-500 text-sm">2025</p>
          </div>

          {/* Game 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/game2.webp" // Replace with an image that includes the phone mockup
              alt="Movie Trivia Challenge"
              width={100}
              height={200}
              style={{ objectFit: 'contain' }}
              className="w-full h-96"
            />
            <h3 className="text-xl text-gray-800 mt-4">
            QuiZinema - Hollywood
            </h3>
            <p className="text-gray-500 text-sm">2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}