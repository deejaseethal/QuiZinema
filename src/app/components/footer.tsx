import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-[#543855] text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Left Section - Description */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl mb-4">Designed for companies</h3>
            <p className="text-sm md:text-base">
              We are a team of passionate people whose goal is to improve everyone’s life through disruptive products. 
              We build great products to solve your business problems. Our products are designed for small to medium size 
              companies willing to optimize their performance.
            </p>
          </div>
          {/* Right Section - Contact Info */}
          <div className="md:w-1/3 text-center md:text-left">
            <h4 className="text-base md:text-lg mb-3">My Company</h4>
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
        {/* Middle Section - Links and Social Media */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 text-sm">
          <Link href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</Link>
          <Link href="/faq" className="text-white hover:text-gray-300">FAQ</Link>
          <Link href="/credits" className="text-white hover:text-gray-300">Credits</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 text-sm">
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="https://twitter.com" className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 2.6 4.92 4.92 0 00-8.42 4.5A13.89 13.89 0 011.67 2.25a4.93 4.93 0 001.52 6.57A4.9 4.9 0 01.96 6.93v.06a4.92 4.92 0 003.95 4.82 4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.86 9.86 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14V5a10.87 10.87 0 002.65-2.76z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com" className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.324 3.608 1.299.975.975 1.237 2.242 1.299 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.324 2.633-1.299 3.608-.975.975-2.242 1.237-3.608 1.299-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.324-3.608-1.299-.975-.975-1.237-2.242-1.299-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.324-2.633 1.299-3.608.975-.975 2.242-1.237 3.608-1.299 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.738 0 8.334.012 7.05.07c-1.91.085-3.63.568-5.022 1.96C.692 3.42.209 5.14 0 7.05c-.085 1.91-.07 2.324-.07 6.113s-.012 4.203.07 6.113c.085 1.91.568 3.63 1.96 5.022 1.392 1.392 3.112 1.875 5.022 1.96 1.91.085 2.324.07 6.113.07s4.203.012 6.113-.07c1.91-.085 3.63-.568 5.022-1.96 1.392-1.392 1.875-3.112 1.96-5.022.085-1.91.07-2.324.07-6.113s-.012-4.203-.07-6.113c-.085-1.91-.568-3.63-1.96-5.022-1.392-1.392-3.112-1.875-5.022-1.96C15.666.012 15.262 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </Link>
            <Link href="https://facebook.com" className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </Link>
          </div>
        </div>
        {/* Divider */}
        <hr className="border-t border-gray-600 my-4" />
        {/* Bottom Section - Copyright and Powered By */}
        <div className="flex justify-center items-center text-sm text-gray-300 text-center">
          <p>© 2025 QuiZinema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}