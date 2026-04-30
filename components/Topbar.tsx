"use client"

// components/TopBar.tsx
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaCloud } from 'react-icons/fa6'; // Latest icons ke liye fa6

const TopBar = () => {
  const pathname = usePathname();
    if (pathname?.startsWith("/admin")) {
      return null;
    }
    if (pathname?.startsWith("/superlogin")) {
    return null;
  }
  return (
    // Background Black, Text White, chota font size (text-sm)
    <div className="bg-black text-white text-sm hidden md:block">
      {/* Max-width container taaki content center me rahe */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-6">
          
          {/* Phone Numbers */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-500" />
            <span className="font-medium tracking-wide">
              +91 9899920199 , +91 9899920149
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <a href="mailto:sales@propliners.in" className="hover:text-red-400 transition-colors">
              sales@propliners.in
            </a>
          </div>

        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4 text-base">
          {/* Cloud Icon (Image ke according) */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaCloud />
          </a>
          {/* Facebook */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaFacebookF />
          </a>
          {/* WhatsApp */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaWhatsapp className="text-[1.1rem]" />
          </a>
          {/* LinkedIn */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaLinkedinIn />
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaInstagram className="text-[1.1rem]" />
          </a>
          {/* YouTube */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaYoutube className="text-[1.1rem]" />
          </a>
          {/* X (Twitter) */}
          <a href="#" className="hover:text-red-500 transition-colors">
            <FaXTwitter />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;