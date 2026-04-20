import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';

export default function HotLinksPage() {
  
  // Dummy data list (Original image mein jo Noida properties ke naam hain)
  // Jab backend banega toh ye list database se fetch hogi
  const propertyLinks = [
    "Advant Navis Business Park Sector 142 Noida",
    "Assotech Business Cresterra Sector 135 Noida",
    "ATS Bouquet Sector 132 Noida",
    "Candor Techspace Sector 62 Noida",
    "Candor Techspace Sector 135 Noida",
    "Cosmic Corporate Park Noida Film City",
    "Express Trade Tower Sector 132 Noida",
    "Galaxy Business Park Sector 62 Noida",
    "I-Thum Sector 62 Noida",
    "Logix Cyber Park Sector 62 Noida",
    "Logix Technova Sector 132 Noida",
    "Max Square Noida Sector 129",
    "Max Towers Sector 16B Noida",
    "Okaya Centre Sector 62 Noida",
    "Sovereign Capital Gate Film City Noida",
    "Stellar IT Park Sector 62 Noida",
    "Supertech Supernova Sector 94 Noida",
    "The Corenthum Sector 62 Noida",
    "The Ikon Tower Film City Noida Sector 16A",
    "Wave Silver Tower Sector 18 Noida",
    "Bhutani Alphathum Sector 90 Noida",
    "Bhutani Cyberthum Sector 140A Noida",
    "Embassy Galaxy Business Park Noida",
    "Gour City Center Noida Extension"
  ];

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      
      {/* --- 1. INNER PAGE HERO & BREADCRUMB --- */}
      <section className="relative w-full h-[200px] md:h-[250px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[70px] lg:mt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://propliners.in/assets/img/breadcrumb/01.webp" 
            alt="Hot Links Background"
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide uppercase">
            HOT LINKS
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors">
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />
            <span className="text-[#EF4444]">Hot Links</span>
          </div>
        </div>
      </section>

      {/* --- 2. LINKS GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        
        {/* Main Box Container */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
          
          {/* Red Header Bar */}
          <div className="bg-[#EF4444] px-6 py-4">
            <h2 className="text-white font-bold text-lg tracking-wide">
              Noida Property Links.
            </h2>
          </div>

          {/* Links Grid Body */}
          <div className="p-6 md:p-8">
            {/* 1 Column on Mobile, 2 on Tablet, 4 on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
              
              {propertyLinks.map((linkText, index) => (
                <div key={index} className="flex items-start gap-2 group">
                  {/* Small Chevron Icon */}
                  <FaAngleRight className="text-gray-400 group-hover:text-[#EF4444] text-[10px] mt-1.5 shrink-0 transition-colors" />
                  
                  {/* The Link */}
                  <Link 
                    href="#" 
                    className="text-gray-600 text-sm leading-relaxed group-hover:text-[#EF4444] transition-colors"
                  >
                    {linkText}
                  </Link>
                </div>
              ))}

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}