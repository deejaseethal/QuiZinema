import Image from 'next/image';

export default function OurVision() {
  return (
    <section id="about-section" className="relative w-full h-auto py-20 text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/job_team.jpg"
          alt="Team Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 mx-auto text-center">
        <h1 className="text-center mb-6 text-gray-100 animate-fade-in">
          <span className="block text-lg sm:text-xl md:text-2xl font-normal py-2">Us,</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl italic font-semibold">
            The Movie Lovers Behind the Screen
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          We&apos;re a small but passionate indie game team from India, brought together by our shared love for Bollywood and storytelling. At QuiZinema, we believe that every movie fan deserves a game that celebrates the joy of cinema — and that&apos;s exactly what we built.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Our goal is simple: to create the best Bollywood trivia game that blends nostalgia, fun, and challenge into one addictive experience. Built with love, designed for film fans like you.
        </p>
      </div>
    </section>
  );
}
