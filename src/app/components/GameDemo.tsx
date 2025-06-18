import Link from 'next/link';

export default function GameDemo() {
  return (
    <section className="bg-black text-white py-6 px-4 rounded-lg mx-4 my-6 md:py-12 md:px-6 md:mx-8 md:my-12 lg:py-14 lg:px-8 lg:mx-12 lg:my-16">
      <div className="text-center">
        <h2 className="text-3xl mb-3 md:text-5xl md:mb-4 lg:text-6xl lg:mb-6">Interested in our games?</h2>
        <p className="text-base mb-4 md:text-lg md:mb-6 lg:text-xl lg:mb-8">Let&;s discuss how we can enhance your gaming experience</p>
        <Link href="/schedule-demo" className="text-white hover:text-gray-300 text-base md:text-lg lg:text-xl">
          Schedule a demo
        </Link>
      </div>
    </section>
  );
}