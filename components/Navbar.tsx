"use client"; // Ye zaroori hai kyunki hum react state (mobile menu) use karenge

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-300.webp";
import { FaPlus, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links ka data taaki code clean rahe
  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About Us", href: "/About-us", hasDropdown: false },
    { name: "IT/Corporate Parks", href: "#", hasDropdown: true },
    { name: "Office Space", href: "#", hasDropdown: true },
    { name: "Co-working", href: "#", hasDropdown: true },
    { name: "Industrial Property", href: "#", hasDropdown: true },
  ];

  return (
    // Sticky header taaki scroll karne par Navbar upar fix rahe
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 1. Logo Section */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            {/* Note: Asli logo aap public folder me rakh kar path change kar lena */}
            {/* <Image src="/logo.png" alt="PL Realty Logo" width={150} height={50} /> */}
            <h1 className="text-2xl font-extrabold flex flex-col leading-tight">
              {/* <span className="text-black flex items-center gap-1">
                <span className="text-red-500 text-3xl">P</span>L PROPLINERS
              </span>
              <span className="text-red-500 text-sm tracking-widest text-center border-t border-black mt-1">REALTY</span> */}
              <Image src={logo} alt="Logo" width={180} height={50} />
            </h1>
          </Link>
        </div>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group py-2">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[#333333] font-semibold hover:text-red-500 transition-colors text-[15px]"
              >
                {link.name}
                {link.hasDropdown && (
                  <FaPlus className="text-[10px] font-bold" />
                )}
              </Link>

              {/* Simple CSS-based Dropdown (Hover karne par dikhega) */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/it-park/noida"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                      >
                        Noida
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                      >
                        Option 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                      >
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 3. Contact Us Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/Contact-Us"
            // Thodi padding adjust ki hai taaki circle acha dikhe
            className="bg-[#EF4444] hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-md"
          >
            <span>CONTACT US</span>

            {/* White Circle Container */}
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              <FaArrowRight className="text-[#EF4444] text-sm" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-800 font-medium text-lg flex justify-between items-center border-b border-gray-50 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && (
                  <FaPlus className="text-xs text-gray-400" />
                )}
              </Link>
            ))}
            <Link
              href="/Contact-Us"
              className="bg-red-500 text-white text-center py-3 rounded-md font-bold flex justify-center items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US <FaArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
