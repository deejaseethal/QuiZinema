import Image from 'next/image';

export default function OurJourneySection() {
  return (
    <section className="w-full from-gray-900 to-black py-16 flex items-center justify-center">
      <div className="relative w-full max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/journey_pic.png" // Replace with your actual image path
            alt="Castle by the sea"
            width={600}
            height={400} // Adjusted height to match aspect ratio better
            layout="responsive"
            style={{ objectFit: 'cover' }}
            className="rounded-xl"
            priority
          />
        </div>

        {/* Text Overlay */}
        <div className="w-full md:w-1/2 bg-black bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg z-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200 animate-fade-in">
            🎬 Why We Built QuiZinema?
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-medium text-yellow-400">🧩 The Problem</span><br />
              Bollywood fans are everywhere — quoting lines, humming songs, living the drama. But where&apos;s the real challenge? Where can true fans prove their Bollywood knowledge?
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-medium text-yellow-400">💡 The Spark</span><br />
              It all began with one epic movie night that turned into a full-blown trivia war. From guessing scenes to debating actors, we realized: this needs to be a game!
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-medium text-yellow-400">🌠 The Vision</span><br />
              We imagined a game where fans could guess movies, actors, and dialogues, while reliving the magic of Bollywood&apos;s most iconic moments — all through visuals, sounds, and clever clues.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-medium text-yellow-400">🚀 The Mission</span><br />
              QuiZinema is built for those who speak fluent Bollywood. Test your memory. Compete with friends. Celebrate cinema — one quiz at a time.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}