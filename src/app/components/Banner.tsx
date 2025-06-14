import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 flex flex-col items-center">
      {/* Image */}
      <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/banner_image.webp"
          alt="Quizinema Banner"
          width={1200}
          height={400}
          layout="responsive"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
      </div>
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4 mt-8 mb-4 text-gray-900 animate-fade-in">
        Welcome to QuiZinema
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 italic mb-6 animate-fade-in-delay">
        The Ultimate Movie Quiz Experience!
      </p>

      {/* Text and Button Below Image */}
      <div className="text-center px-4 max-w-5xl mx-auto mt-8 mb-12">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
          At QuiZinema, we bring you the most exciting movie quiz games, designed for fans who live and breathe cinema. Whether you&apos;re a Bollywood buff or a trivia addict, our games will test your film knowledge in the most entertaining way possible.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
          Our flagship release, QuiZinema – Bollywood Edition, is a one-of-a-kind Bollywood quiz app where you guess movies from iconic scenes, legendary dialogues, and unforgettable characters. It&apos;s a fun movie guessing game perfect for solo players or for a game night with friends.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
          Scroll down to explore our full lineup of film quiz games, and download them now on the App Store or Google Play to start your cinematic challenge.
        </p>
        <Link
          href="/movies"
          className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-800 hover:to-black transition duration-300 transform hover:scale-105 shadow-md"
        >
          Join the Adventure
        </Link>
      </div>
    </section>
  );
}