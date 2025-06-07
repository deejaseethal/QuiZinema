import Image from 'next/image';


export const metadata = {
  title: 'Our Services | Quizinema',
  description: 'Explore the services offered by Quizinema, including expertly designed games, tailored development, and groundbreaking innovations.',
};

export default function Successstories() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-start"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <main className="py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white text-black rounded-lg overflow-hidden">
              <Image
                src="/images/service1.jpg"
                alt="Expertly designed"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Expertly designed</h3>
                <p className="text-sm md:text-base">
                  Gamers should cherish their experiences. Games should be immersive and engaging.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white text-black rounded-lg overflow-hidden">
              <Image
                src="/images/service2.jpg"
                alt="Tailored"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Tailored</h3>
                <p className="text-sm md:text-base">
                  Developed in the heart of Silicon Valley. Cutting-edge graphics & unique gameplay.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white text-black rounded-lg overflow-hidden">
              <Image
                src="/images/service3.jpg"
                alt="Groundbreaking"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Groundbreaking</h3>
                <p className="text-sm md:text-base">
                  Revolutionizing the gaming industry – with a touch of creativity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}