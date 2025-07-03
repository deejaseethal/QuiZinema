import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white  flex flex-col items-center">
      {/* Image */}
      <div className="w-full overflow-hidden"> {/* Constrain max height */}
        <Image
          src="/bannernew.jpg"
          alt="Quizinema Banner"
          width={1800}
          height={815} // Updated to a reasonable height for 3:1 ratio
          layout="responsive"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
      </div>
      {/* Title */}
      <h1   className="text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 mt-8 mb-4 text-gray-900 animate-fade-in">
        Welcome to QuiZinema
      </h1>
      <p className="text-xl sm:text-2xl text-[#543855]  italic mb-6 text-center animate-fade-in-delay">
        The Ultimate Movie Quiz Experience!
      </p>

      {/* Text and Button Below Image */}
      <div className="text-center px-4 max-w-5xl mx-auto mt-8 mb-12">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
          At QuiZinema, we bring you the most exciting movie quiz games, designed for fans who live and breathe cinema. Whether you&apos;re a Bollywood buff or a trivia addict, our games will test your film knowledge in the most entertaining way possible.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
          Our flagship release, QuiZinema – Bollywood Edition, is a one-of-a-kind Bollywood quiz app where you guess movies from iconic scenes, legendary dialogues, and unforgettable characters. Its a fun movie guessing game perfect for solo players or for a game night with friends.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
          Scroll down to explore our full lineup of film quiz games, and download them now on the App Store or Google Play to start your cinematic challenge.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.apple.com/app-store/" // Replace with your App Store URL
            className="inline-block transform transition-transform hover:scale-110"
          >
            <Image
              src="/app_store.png" // Replace with your App Store badge image path
              alt="Download on the App Store"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
              className="object-contain"
            />
          </Link>
          <Link
            href="https://play.google.com/store" // Replace with your Google Play URL
            className="inline-block transform transition-transform hover:scale-110"
          >
            <Image
              src="/play_store.png" // Replace with your Google Play badge image path
              alt="Get it on Google Play"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}