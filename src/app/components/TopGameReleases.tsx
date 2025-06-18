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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-1">
          {/* Game 1 */}
          <div className="flex flex-col items-center sm:items-end px-2 sm:px-6">
            <div className="w-[250px] h-[375px] relative rounded-2xl shadow-lg overflow-hidden animate-fade-in">
              <Image
                src="/bollywood.webp"
                alt="3-Actors-1-Movie-BOLLYWOOD"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-xl text-gray-800 mt-4">QuiZinema - Bollywood</h3>
            <p className="text-gray-500 text-sm">2025</p>
          </div>

          {/* Game 2 */}
          <div className="flex flex-col items-center sm:items-start px-2 sm:px-6">
            <div className="w-[250px] h-[375px] relative rounded-2xl shadow-lg overflow-hidden animate-fade-in">
              <Image
                src="/hollywood.webp"
                alt="Movie Trivia Challenge"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-xl text-gray-800 mt-4">QuiZinema - Hollywood</h3>
            <p className="text-gray-500 text-sm">2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}