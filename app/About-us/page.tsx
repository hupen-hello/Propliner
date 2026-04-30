"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FaArrowRight, FaHome, FaAngleDoubleRight, FaPlay, } from "react-icons/fa";
import Clientsection from "@/components/Clientsection";

function page() {

    const clientLogos = [
    {
      id: 1,
      name: "Homeopathy",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 2,
      name: "Paree",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 3,
      name: "Prakash Books",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 4,
      name: "T-Series",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 5,
      name: "GIIS",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 6,
      name: "Lin Scan",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 7,
      name: "Stellar",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
    {
      id: 7,
      name: "Stellar",
      src: "https://propliners.in/public/uploads/client/1753853325_19.webp",
    },
  ];
  
  return (
    <div>
      {/* --- INNER PAGE HERO & BREADCRUMB --- */}
      <section className="relative w-full h-[200px] md:h-[350px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[10px] lg:mt-0">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            // Dummy image - aap yahan apne server/backend ki image laga sakte hain
            src="https://propliners.in/assets/img/breadcrumb/01.webp"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
          {/* Black Overlay: Iske bina text aur background mix ho jayega */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Content & Breadcrumb Layer (z-10) */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            About Us
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[15px] font-medium">
            {/* Home Link */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>

            {/* Divider Icon (Double Arrow) */}
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />

            {/* Current Page (Red Color) */}
            <span className="text-[#EF4444]">About Us</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: ABOUT US --- */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#EF4444] z-0"></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 z-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#EF4444 2px, transparent 2px)",
                backgroundSize: "10px 10px",
              }}
            ></div>

            {/* Main Image */}
            <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://propliners.in/public/uploads/homepage/1768370914_1754897184_01.webp"
                alt="Propliners Realty Office"
                fill
                className="object-cover"
              />
            </div>

            {/* 15+ Years Experience Badge */}
            <div className="absolute -bottom-8 left-8 md:-left-8 bg-[#EF4444] text-white w-32 h-32 rounded-full flex flex-col items-center justify-center border-[6px] border-white shadow-xl z-20">
              <span className="text-3xl font-extrabold border-b border-white/50 pb-1 mb-1 leading-none">
                15+
              </span>
              <span className="text-xs font-medium text-center px-2 leading-tight">
                Years
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h4 className="text-[#EF4444] text-sm font-bold uppercase tracking-wider mb-2">
              ABOUT US
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Propliners Realty -{" "}
              <span className="text-[#EF4444]">
                A 6 Sigma Following Company
              </span>
            </h2>

            <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed mb-8">
              <p>
                <strong>Propliners Realty</strong> is a prominent Consultancy
                firm which provides all type of Commercial & Industrial
                Real-estate solutions. We have a team of highly qualified and
                experienced professionals who have decades of experience in
                setting up the industry, office spaces for various corporate &
                FDI companies across the world.
              </p>
              <p>
                We take complete care of our investors and buyers as we are
                taking the properties for our own selves. Thus we take care of
                all aspects related to the properties like legal check, proper
                documentation as per the local authority norms and most
                important guaranteed best prices/rentals.
              </p>
              <p>
                We are working in this industry from long time hence most of our
                developers are well known to us hence we have the largest and
                updated property portfolio for all your real estate needs.
              </p>
            </div>

            {/* Discover More Button */}
            <Link
              href="/About-us"
              className="inline-flex bg-[#EF4444] hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold items-center gap-3 transition-transform hover:scale-105 shadow-md"
            >
              <span className="text-sm">DISCOVER MORE</span>
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <FaArrowRight className="text-[#EF4444] text-sm" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          
          <div className="relative w-full h-[350px] md:h-[450px] rounded-lg shadow-md mb-20 group">
            
            {/* Main Office Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image 
                src="https://propliners.in/assets/img/video-2-1.webp" 
                alt="Propliners Office Culture"
                fill
                
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>

            
            <div className="absolute bottom-0 right-8 md:right-16 translate-y-1/2 z-10 cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                <FaPlay className="text-[#EF4444] text-xl ml-1" />
              </div>
            </div>

          </div>

          {/* 2. Three Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-8">
            
            {/* Column 1: Main Highlight Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Empowering Growth Through Exceptional Service.
              </h2>
            </div>
            
            {/* Column 2: Mission */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                We follows the same statement as being a part of service industry we believe if our customer will grow or get good return on their investment then we will also grow. One satisfied customer use to give us 3-4 reference due to our high end satisfactory services and we would like to increase that number count.
              </p>
            </div>
            
            {/* Column 3: Vision */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                Real estate broking sector is one of the largest un-organized market of India as it starts from Local Paan wala's to the IPC's. we want that Propliners should be a symbol of trust by creating trust and transparency in all our deals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 1: OUR CLIENTS  --- */}
      <Clientsection/>
      
    </div>
  );
}

export default page;
