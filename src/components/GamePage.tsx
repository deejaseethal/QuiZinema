
"use client";


import Image from "next/image";

export default function GameReleases() {


  const editions = [

    {
      id: "world",
      title: "Bollywood Edition",
      image: "/bollywood.webp",
      description: "Explore the rich diversity of international cinema. From Bollywood to European art films, discover movies from every corner of the world.",
      features: [
        "8,000+ Global Movies",
        "Multi-language Support",
        "Cultural Cinema Insights",
        "Monthly Festival Collections",
      ],
      isPopular: true,
    },
    {
      id: "hollywood",
      title: "Hollywood Edition",
      image: "/hollywood.webp",
      description: "Dive into the glamorous world of Hollywood cinema with our flagship edition. Test your knowledge of blockbusters, classics, and award-winning films.",
      features: [
        "10,000+ Movie Questions",
        "Exclusive Hollywood Trivia",
        "Behind-the-Scenes Content",
        "Weekly Updates",
      ],
      isNew: true,
    },
  ];


  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold  text-[#543855] mb-4">Game Releases</h2>
        <p className="text-lg text-gray-600 mb-8">Choose your perfect edition and start your cinematic journey today</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editions.map((edition) => (
            <div
            key={edition.id}
            className="flex flex-col lg:flex-row items-center bg-[#BDB3DA]/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition duration-300 hover:scale-105 w-full max-w-3xl mx-auto"
          >
            {/* Image */}
            <div className="relative w-full sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-[3/4] mb-4 md:mb-0 md:mr-6 shrink-0">
              <Image
                src={edition.image}
                alt={`${edition.title} Cover`}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 220px"
              />
              {edition.isPopular && (
                <span className="absolute top-1 left-1 bg-yellow-400 text-gray-800 text-xs font-extralight px-1 py-1 rounded">
                  Most Popular
                </span>
              )}
              {edition.isNew && (
                <span className="absolute top-1 left-2 bg-green-500 text-white text-xs font-extralight px-1 py-1 rounded">
                  New Release
                </span>
              )}
            </div>
          
            {/* Text Content */}
            <div className="w-full md:flex-1 text-left">
              <h3 className="text-xl text-gray-800 font-semibold lg:mt-1 mb-2">{edition.title}</h3>
              <p className="text-gray-500 text-base font-light mb-4">{edition.description}</p>
              <ul className="text-gray-600 mb-4 space-y-2">
                {edition.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}