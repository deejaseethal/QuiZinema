import Image from 'next/image';

export default function Services() {
  return (
      <section className="py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
              <Image
                src="/services1.jpg"
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
            <div className="bg-white text-black rounded-lg  shadow-md overflow-hidden">
              <Image
                src="/services2.jpg"
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
            <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
              <Image
                src="/services3.jpg"
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
      </section>
  )}