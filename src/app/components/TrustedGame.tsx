import Image from 'next/image';

export default function TrustedGamersSection() {
  return (
    <section className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8">
          Trusted by Gamers Worldwide
        </h2>

         {/* Logo Icons */}
        <div className="flex justify-center flex-wrap space-x-6 mb-12">
          <Image
            src="/logo1.png" // Replace with actual logo image
            alt="Logo 1"
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
          <Image
            src="/logo2.png" // Replace with actual logo image
            alt="Logo 2"
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
          <Image
            src="/logo3.png" // Replace with actual logo image
            alt="Logo 3"
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
          <Image
            src="/logo4.png" // Replace with actual logo image
            alt="Logo 4"
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
          <Image
            src="/logo5.png" // Replace with actual logo image
            alt="Logo 5"
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl">100K+</h3>
            <p className="text-lg mt-2">Active Players</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl">30d</h3>
            <p className="text-lg mt-2">Average Game Release Time</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-4xl">4.8</h3>
            <p className="text-lg mt-2">Player Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}