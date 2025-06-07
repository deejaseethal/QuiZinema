"use client";

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from './components/footer'
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-6">
            <div className="relative w-[100px] h-[40px]">
              <Image
                src="/CineQuest.webp"
                alt="Quizinema Logo"
                fill
                className="object-contain"
              />
            </div>

          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-gray-800 focus:outline-none mr-4"
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

          {/* Navigation Links */}
          <div
            className={`${isOpen ? 'block' : 'hidden'
              } sm:flex sm:items-center sm:space-x-4 w-full sm:w-auto absolute sm:static top-16 left-0 sm:left-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
          >
            <Link href="/" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              Home
            </Link>
            <Link href="/services" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              Services
            </Link>
            <Link href="/pricing" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              Pricing
            </Link>
            <Link href="/news" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              News
            </Link>
            <Link href="/success-stories" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              Success Stories
            </Link>
            <Link href="/about" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              About Us
            </Link>
            <Link href="/jobs" className="block sm:inline-block text-gray-600 hover:text-gray-800 py-2 sm:py-0">
              Jobs
            </Link>
          </div>
        </div>

        {/* Right Side: Search, Phone, Sign In, Contact Us */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <Link href="/search" className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>

          {/* Phone Number */}
          <Link
            href="tel:+15555555556"
            className="text-gray-600 hover:text-gray-800 hidden sm:block"
          >
            +1 555-555-5556
          </Link>

          {/* Sign In */}
          <Link href="/signin" className="text-gray-600 hover:text-gray-800 hidden sm:block">
            Sign In
          </Link>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
          >
            Contact Us
          </Link>
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