import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4 mt-8 mb-6 text-gray-800">
      We are QuiZinema Studios.
      </h1>

      {/* Image */}
      <div className="w-full">
        <Image
          //src="/cover.png"
          src="/quiZBanner.jpg"
          alt="Quizinema Banner"
          width={1200}
          height={400}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          className="w-full h-auto rounded-lg shadow-md"
          priority
        />
      </div>

      {/* Text and Button Below Image */}
      <div className="text-center px-4 mt-6 mb-12">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-semibold">
        At QuiZinema, we have a great selection of games that all revolve around your favorite movies 
        and TV series. <br></br>
        Our number-one game is 3-Actors-1-Movie-BOLLYWOOD .<br></br>
        Scroll down this page to see our entire lineup and download the games from the App Store 
        or Play store. <br></br>

        </p>
        <Link
          href="/movies"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
        >
          Join the Adventure
        </Link>
      </div>
    </section>
  );
}