"use client";

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from '@/components/footer'
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-3 relative sticky top-0  z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            <div className="relative">
              <Image
                src="/logo_new.jpg"
                alt="Quizinema Logo"
                height={100}
                width={40}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

          </Link>
</div>

{/* Right Side: Hamburger + Contact */}
<div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div
            className={`${isOpen ? 'block' : 'hidden'
              } sm:flex sm:items-center sm:space-x-10 w-full sm:w-auto absolute sm:static top-16 left-0 sm:left-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block sm:inline-block text-base text-[#543855] hover:text-[#D32F2F] py-2 sm:py-0">
              Home
            </Link>
            <Link href="#about-section" onClick={() => setIsOpen(false)} className="block sm:inline-block text-base text-[#543855] hover:text-[#D32F2F] py-2 sm:py-0">
              About Us
            </Link>
            <Link href="/games" onClick={() => setIsOpen(false)} className="block sm:inline-block text-base text-[#543855] hover:text-[#D32F2F] py-2 sm:py-0">
              Games
            </Link>
            <Link href="/jobs" onClick={() => setIsOpen(false)} className="block sm:inline-block text-base text-[#543855] hover:text-[#D32F2F] py-2 sm:py-0">
              Jobs
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block  sm:inline-block text-base text-[#543855] hover:text-[#D32F2F] py-2 sm:py-0">
              Contact Us
            </Link>
          </div>
        

        
          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}