"use client";

import { usePathname } from 'next/navigation';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaArrowRight, 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaChevronRight, 
  FaSearch 
} from "react-icons/fa";


import logo from "@/public/logo-300.webp"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mobile ke nested menus ke states
  const [mobilePropOpen, setMobilePropOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);

  // Advanced Navigation Data Structure
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About-us" },
    {
      name: "Properties",
      href: "#",
      hasDropdown: true,
      subItems: [
        {
          name: "IT / Corporate parks",
          href: "#",
          hasSubDropdown: true, // Iske andar bhi menu hai
          cities: [
            { name: "Noida", href: "/it-park/noida" },
            { name: "Delhi", href: "/it-park/delhi" },
            { name: "Gurugram", href: "/it-park/gurugram" },
          ]
        },
        {
          name: "Office Space",
          href: "#",
          hasSubDropdown: true, // Iske andar bhi menu hai
          cities: [
            { name: "Noida", href: "/office-space/noida" },
            { name: "Delhi", href: "/office-space/delhi" },
            { name: "Gurugram", href: "/office-space/gurugram" },
          ]
        },
        {
          name: "Co-Working ",
          href: "#",
          hasSubDropdown: true, // Iske andar bhi menu hai
          cities: [
            { name: "Noida", href: "/co-working/noida" },
            { name: "Delhi", href: "/co-working/delhi" },
            { name: "Gurugram", href: "/co-working/gurugram" },
          ]
        },
        {
          name: "Industrial Property",
          href: "#",
          hasSubDropdown: true, // Iske andar bhi menu hai
          cities: [
            { name: "Factory Space", href: "/industrial/factory-space" },
            { name: "Warehouse Space", href: "/industrial/warehous" },
            { name: "Industrial Shed", href: "/industrial/industrial-shed" },
            { name: "Industrial Property", href: "/industrial/industrial-property" },
          ]
        },
      ]
    },
    { name: "Blog", href: "#blog" },
    { name: "Calculator", href: "/Calculator" },

    
  ];
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  if (pathname?.startsWith("/superlogin")) {
    return null;
  }


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* 1. Logo Section */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Propliners Logo" width={180} height={50} />
          </Link>
        </div>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group py-4">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[#333333] font-semibold hover:text-red-500 transition-colors text-[15px]"
              >
                {link.name}
                {link.hasDropdown && <FaChevronDown className="text-[10px] ml-1 transition-transform group-hover:rotate-180" />}
              </Link>

              {/* LEVEL 1: Properties Dropdown */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-2">
                    {link.subItems?.map((subItem, subIndex) => (
                      
                      /* LEVEL 2: Sub-dropdown (Office/IT) */
                      <li key={subIndex} className="relative group/sub">
                        <Link
                          href={subItem.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                        >
                          {subItem.name}
                          {subItem.hasSubDropdown && <FaChevronRight className="text-[10px]" />}
                        </Link>

                        {/* LEVEL 3: Cities Dropdown (Noida, Delhi, Gurugram) */}
                        {subItem.hasSubDropdown && (
                          <div className="absolute top-0 left-full w-48 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                            <ul className="py-2">
                              {subItem.cities?.map((city, cityIndex) => (
                                <li key={cityIndex}>
                                  <Link
                                    href={city.href}
                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                                  >
                                    {city.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>

                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 3. Right Side Actions (Search + Contact Us) */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Quick Search Icon / Input */}
          <div className="relative group flex items-center">
             <button className="text-gray-600 hover:text-[#EF4444] transition-colors p-2">
                <FaSearch className="text-lg" />
             </button>
             {/* Hover Search Bar */}
             <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 flex items-center">
                <input type="text" placeholder="Search properties..." className="w-full text-sm outline-none px-2 py-1" />
                <button className="bg-red-50 text-[#EF4444] p-2 rounded hover:bg-[#EF4444] hover:text-white transition-colors">
                  <FaSearch className="text-sm" />
                </button>
             </div>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/Contact-Us"
            className="bg-[#EF4444] hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-md"
          >
            <span>CONTACT US</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              <FaArrowRight className="text-[#EF4444] text-sm" />
            </div>
          </Link>
        </div>

        {/* ========================================== */}
        {/* Mobile Menu Toggle Button */}
        {/* ========================================== */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-800 focus:outline-none p-2"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* Mobile Menu Dropdown */}
      {/* ========================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            
            <Link href="/" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/About-us" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            
            {/* Properties (Mobile Toggle) */}
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobilePropOpen(!mobilePropOpen)}
                className="w-full text-left text-gray-800 font-semibold text-lg py-2 flex justify-between items-center"
              >
                Properties
                <FaChevronDown className={`text-sm text-gray-400 transition-transform ${mobilePropOpen ? 'rotate-180 text-red-500' : ''}`} />
              </button>
              
              {mobilePropOpen && (
                <div className="pl-4 pb-2 space-y-2 bg-gray-50 rounded-md p-2 mt-1">
                  
                  {/* Office/IT (Mobile Toggle) */}
                  <div>
                    <button 
                      onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                      className="w-full text-left text-gray-700 font-medium text-base py-2 flex justify-between items-center"
                    >
                      IT/Corporate Parks
                      <FaChevronDown className={`text-xs text-gray-400 transition-transform ${mobileOfficeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileOfficeOpen && (
                      <div className="pl-4 py-1 space-y-2 border-l-2 border-red-200 ml-2">
                        <Link href="/it-park/noida" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Noida</Link>
                        <Link href="/it-park/delhi" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Delhi</Link>
                        <Link href="/it-park/gurugram" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Gurugram</Link>
                      </div>
                    )}
                  </div>
                  <div>
                    <button 
                      onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                      className="w-full text-left text-gray-700 font-medium text-base py-2 flex justify-between items-center"
                    >
                      Office Space
                      <FaChevronDown className={`text-xs text-gray-400 transition-transform ${mobileOfficeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileOfficeOpen && (
                      <div className="pl-4 py-1 space-y-2 border-l-2 border-red-200 ml-2">
                        <Link href="/it-park/noida" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Noida</Link>
                        <Link href="/it-park/delhi" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Delhi</Link>
                        <Link href="/it-park/gurugram" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Gurugram</Link>
                      </div>
                    )}
                  </div>
                  <div>
                    <button 
                      onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                      className="w-full text-left text-gray-700 font-medium text-base py-2 flex justify-between items-center"
                    >
                      Co-Working
                      <FaChevronDown className={`text-xs text-gray-400 transition-transform ${mobileOfficeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileOfficeOpen && (
                      <div className="pl-4 py-1 space-y-2 border-l-2 border-red-200 ml-2">
                        <Link href="/it-park/noida" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Noida</Link>
                        <Link href="/it-park/delhi" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Delhi</Link>
                        <Link href="/it-park/gurugram" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Gurugram</Link>
                      </div>
                    )}
                  </div>
                  <div>
                    <button 
                      onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                      className="w-full text-left text-gray-700 font-medium text-base py-2 flex justify-between items-center"
                    >
                      Industrial Property
                      <FaChevronDown className={`text-xs text-gray-400 transition-transform ${mobileOfficeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileOfficeOpen && (
                      <div className="pl-4 py-1 space-y-2 border-l-2 border-red-200 ml-2">
                        <Link href="/it-park/noida" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Noida</Link>
                        <Link href="/it-park/delhi" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Delhi</Link>
                        <Link href="/it-park/gurugram" className="block text-gray-600 text-sm py-1" onClick={() => setIsMobileMenuOpen(false)}>Gurugram</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/calculator" className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Calculator</Link>
            
            {/* Mobile Contact & Search */}
            <div className="pt-4 pb-2">
               <div className="flex bg-gray-100 rounded-md overflow-hidden mb-4">
                  <input type="text" placeholder="Search here..." className="w-full bg-transparent px-4 py-3 outline-none text-sm" />
                  <button className="bg-gray-200 px-4 text-gray-600"><FaSearch /></button>
               </div>
              <Link
                href="/Contact-Us"
                className="bg-red-500 text-white text-center py-3.5 rounded-md font-bold flex justify-center items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US <FaArrowRight />
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;