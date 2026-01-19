'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#658E9C]">
          <Link href="/">
   <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768502260/Open%20Path/Logo2_v86wol.png`}
                alt="Logo"
                width={175}
                height={59}
              />         </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#658E9C] transition-colors">
            Home
          </Link>
          <Link href="/providers" className="text-gray-700 hover:text-[#658E9C] transition-colors">
            Providers
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#658E9C] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#658E9C] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-700 hover:text-[#658E9C] transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/providers"
            className="block text-gray-700 hover:text-[#658E9C] transition-colors"
            onClick={toggleMenu}
          >
            Providers
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-[#658E9C] transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-[#658E9C] transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;