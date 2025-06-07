import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Left Section - Description */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl mb-4">Designed for companies</h3>
            <p className="text-sm md:text-base">
              We are a team of passionate people whose goal is to improve everyone’s life through disruptive products. 
              We build great products to solve your business problems. Our products are designed for small to medium size 
              companies willing to optimize their performance.
            </p>
          </div>
          {/* Right Section - Contact Info */}
          <div className="md:w-1/3 text-center md:text-left">
            <h4 className="text-lg md:text-xl mb-3">My Company</h4>
            <p className="text-sm md:text-base">
              250 Executive Park BLV, Suite 3400
              <br />
              San Francisco CA 94134
              <br />
              United States
              <br />
              <Link href="tel:+14155550123" className="text-white hover:text-gray-300 flex items-center gap-2 mt-4 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.77 15.77 0 006.59 6.59l2.2-2.2a1 1 0 011.13-.27 11.48 11.48 0 005.29 1.29 1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 22 2 13.71 2 2a1 1 0 011-1h3.5a1 1 0 011 1 11.48 11.48 0 001.29 5.29 1 1 0 01-.27 1.13l-2.2 2.2z" />
                </svg>
                +1 (415) 555-0123
              </Link>
              <Link href="mailto:info@aitechsoftwaresolution.com" className="text-white hover:text-gray-300 flex items-center gap-2 mt-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.41 2L12 10.83 5.41 6H19.59zM4 18V8.83l8 5.33 8-5.33V18H4z" />
                </svg>
                info@aitechsoftwaresolution.com
              </Link>
            </p>
          </div>
        </div>
        {/* Bottom Section - Copyright and Powered By */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-center md:text-left">
          <p>Copyright © Quizinema</p>
          <p className="mt-2 md:mt-0">
            Powered by{' '}
            <Link href="https://aitechsoftwaresolution.com" className="text-white hover:text-gray-300">
              aitechsoftwaresolution
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}