"use client";

// app/page.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaStar,
  FaUser,
  FaFolderOpen,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import {
  FiTarget,
  FiBarChart2,
  FiFileText,
  FiMapPin,
  FiMessageSquare,
  FiCalendar,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import SearchFilter from "@/components/SearchFilter";
import Enquiry from "@/components/Enquiry";
import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutsection";
import Servicesection from "@/components/Servicesection";
import Locationsection from "@/components/Locationsection";
import Faqsection from "@/components/Faqsection";
import Clientsection from "@/components/Clientsection";

export default function Home() {
  // State for FAQ Section
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const bannerImageFromBackend =
    "https://propliners.in/public/uploads/banner/1768370443_1753854256_slider-1.webp";

  // ==========================================
  // DATA ARRAYS
  // ==========================================
  

  const advantages = [
    {
      id: 1,
      title: "Strategic Planning",
      desc: "Strategic planning helps a company know where it is heading and how it will reach its destination.",
      icon: (
        <FiTarget className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
    {
      id: 2,
      title: "Market Analysis",
      desc: "Premium Offices provides trustworthy market intelligence, reliable data, and consulting services.",
      icon: (
        <FiBarChart2 className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
    {
      id: 3,
      title: "Lease Documentation",
      desc: "Our professionals help the clients arrive at lease documentation which is logical, coherent, precise and accurate to reduce any future risk.",
      icon: (
        <FiFileText className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
    {
      id: 4,
      title: "Relocation",
      desc: "Our priority is to equip every organization seeking relocation with comprehensive knowledge of cost impacts and market.",
      icon: (
        <FiMapPin className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
    {
      id: 5,
      title: "Opinion Matters",
      desc: "In the realm of real estate, each property stands apart, distinguished by its unique location and offerings of various amenities.",
      icon: (
        <FiMessageSquare className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
    {
      id: 6,
      title: "Tenant Representation",
      desc: "Choosing the right commercial tenant representative can greatly impact your success, whether you're relocating or expanding.",
      icon: (
        <FiCalendar className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" />
      ),
    },
  ];

  

  const featuredProperties = [
    {
      id: 1,
      title: "Max Square Noida sector 129",
      plot: "Plot No C-0c Sector 129",
      tenants: ["NDTV", "General Atomics"],
      desc: "Max Square Noida Sector 129 is strategically located on plot no C-0c on Noida expressway.",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
    {
      id: 2,
      title: "Sovereign Capital Gate Film City...",
      plot: "Plot No-FC-57, Sector-16A",
      tenants: ["Microsoft", "Bose"],
      desc: "Sovereign Capital Gate Film City Noida Sector 16A 9899920199.",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
    {
      id: 3,
      title: "Max Towers Sector 16B Noida",
      plot: "C-001/A/1 Sector-16B",
      tenants: ["Yes Bank", "Khaitan & Co"],
      desc: "Max Towers is a commercial office space project located in Noida, India.",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Avantika Singh",
      role: "Founder & CEO",
      text: '"Professional, Prompt, and Highly Reliable" What sets Propliners apart is their professionalism and quick turnaround.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp",
    },
    {
      id: 2,
      name: "Vijay Kumar",
      role: "Founder & CEO",
      text: '"Best Commercial Real Estate Experts in Noida" We were searching for a warehouse, and Propliners guided us with accurate insights.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp",
    },
    {
      id: 3,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp",
    },
    {
      id: 4,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp",
    },
    {
      id: 5,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp",
    },
  ];

  

  // Naya Blog Data
  const blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "REAL ESTATE",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "June 24, 2026",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "BUSINESS",
      title: "7 home trends that will shape your house in 2026",
      date: "June 24, 2026",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "BUSINESS",
      title: "10 Brilliant Ways To Decorate Your Home",
      date: "June 24, 2026",
    },
  ];

  
  

  return (
    <div>
      {/* ========================================== */}
      {/* 1. HERO SECTION (Dark/Image Base) */}
      {/* ========================================== */}
      <Herosection/>

      {/* ========================================== */}
      {/* 2. SEARCH FILTER (Overlap) */}
      {/* ========================================== */}
      {/* <SearchFilter /> */}

      {/* ========================================== */}
      {/* 3. ABOUT US (White Bg) */}
      {/* ========================================== */}
      <Aboutsection/>

      {/* ========================================== */}
      {/* 4. OUR SERVICES (Gray Bg) */}
      {/* ========================================== */}
      <Servicesection/>

      {/* ========================================== */}
      {/* 5. AREA PROPERTIES (White Bg) */}
      {/* ========================================== */}
      <Locationsection/>

      {/* ========================================== */}
      {/* 6. ADVANTAGES (Gray Bg) */}
      {/* ========================================== */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-[#EF4444]">Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div
                key={adv.id}
                className="bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col text-center border border-gray-100"
              >
                {adv.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. FEATURED PROPERTIES (White Bg) */}
      {/* ========================================== */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              FEATURED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Features <span className="text-[#EF4444]">Office Property</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative w-full h-[220px]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{property.plot}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#EF4444]">
                      Few Tenants :
                    </span>
                    {property.tenants.map((tenant, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-[11px] font-medium"
                      >
                        {tenant}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {property.desc}
                  </p>
                  <div>
                    <Link
                      href="#"
                      className="bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold px-5 py-2.5 rounded shadow-sm inline-block transition-colors"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. VIDEO TOUR (Gray Bg) */}
      {/* ========================================== */}
      {/* <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer shadow-xl border-4 border-white">
            <Image src="https://propliners.in/assets/img/video/video.webp" alt="Office Video Tour" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-[#EF4444] text-xl ml-1" />
            </div>
          </div>
        </div>
      </section> */}

      

      

      {/* ========================================== */}
      {/* 13. ENQUIRY SECTION */}
      {/* ========================================== */}
      <div id="enquiry-section">
        <Enquiry />
      </div>

      {/* ========================================== */}
      {/* 11. FAQ SECTION (White Bg - NAYA SECTION) */}
      {/* ========================================== */}
      <Faqsection/>

      {/* ========================================== */}
      {/* 12. OUR CLIENTS (Gray Bg) */}
      {/* ========================================== */}
      <Clientsection/>

      {/* ========================================== */}
      {/* 9. TESTIMONIALS (White Bg) */}
      {/* ========================================== */}
      <section className="py-10 bg-white relative z-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h4 className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              TESTIMONIALS
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What Client <span className="text-[#EF4444]">Say's</span>
            </h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pt-16 pb-16 px-4"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`} className="h-auto">
                <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col mt-8 mb-8">
                  <div className="absolute -top-10 right-6 p-1 rounded-full border border-dashed border-[#EF4444] bg-white">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex gap-1 text-[#EF4444] text-sm mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {review.text}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <h4 className="font-bold text-gray-900 text-[15px]">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* ========================================== */}
      {/* 10. LATEST NEWS & BLOGS (Gray Bg - NAYA SECTION) */}
      {/* ========================================== */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase">
              News & Blogs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Latest News <span className="text-[#EF4444]">Feeds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Tags */}
                  <div className="flex items-center gap-6 mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-[#EF4444]" /> By {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaFolderOpen className="text-[#EF4444]" />{" "}
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-gray-900 leading-snug mb-6 group-hover:text-[#EF4444] transition-colors">
                    <Link href="#">{blog.title}</Link>
                  </h3>

                  {/* Divider */}
                  <hr className="border-gray-100 mt-auto mb-4" />

                  {/* Footer (Date & Read More) */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-500 font-medium">
                      <FaCalendarAlt className="text-[#EF4444]" /> {blog.date}
                    </span>
                    <Link
                      href="#"
                      className="text-[#EF4444] font-bold text-xs uppercase tracking-wide hover:text-red-700 transition-colors"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
