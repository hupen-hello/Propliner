"use client";

// app/page.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaLaptop,
  FaWifi,
  FaCubes,
  FaClock,
  FaPlay,
  FaStar,
  FaBuilding,
  FaIndustry,
  FaSmileBeam,
  FaFileContract,
  FaMoneyBillWave,
  FaShieldAlt,
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
import "swiper/css";
import "swiper/css/pagination";

import SearchFilter from "@/components/SearchFilter";
import Enquiry from "@/components/Enquiry";

export default function Home() {
  // State for FAQ Section
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const bannerImageFromBackend =
    "https://propliners.in/public/uploads/banner/1768370443_1753854256_slider-1.webp";

  // ==========================================
  // DATA ARRAYS
  // ==========================================
  const clientLogos = [
    { id: 1, name: "Homeopathy", src: "/1.webp" },
    { id: 2, name: "Paree", src: "/2.webp" },
    { id: 3, name: "Prakash Books", src: "/3.webp" },
    { id: 4, name: "T-Series", src: "/4.webp" },
    { id: 5, name: "GIIS", src: "/5.webp" },
    { id: 6, name: "Lin Scan", src: "/6.webp" },
    { id: 7, name: "Stellar", src: "/7.webp" },
    { id: 8, name: "Stellar", src: "/8.webp" },
    { id: 9, name: "Stellar", src: "/9.webp" },
  ];

  const advantages = [
    { id: 1, title: "Strategic Planning", desc: "Strategic planning helps a company know where it is heading and how it will reach its destination.", icon: <FiTarget className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
    { id: 2, title: "Market Analysis", desc: "Premium Offices provides trustworthy market intelligence, reliable data, and consulting services.", icon: <FiBarChart2 className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
    { id: 3, title: "Lease Documentation", desc: "Our professionals help the clients arrive at lease documentation which is logical, coherent, precise and accurate to reduce any future risk.", icon: <FiFileText className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
    { id: 4, title: "Relocation", desc: "Our priority is to equip every organization seeking relocation with comprehensive knowledge of cost impacts and market.", icon: <FiMapPin className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
    { id: 5, title: "Opinion Matters", desc: "In the realm of real estate, each property stands apart, distinguished by its unique location and offerings of various amenities.", icon: <FiMessageSquare className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
    { id: 6, title: "Tenant Representation", desc: "Choosing the right commercial tenant representative can greatly impact your success, whether you're relocating or expanding.", icon: <FiCalendar className="text-[#EF4444] text-5xl mb-4 mx-auto stroke-1" /> },
  ];

  const services = [
    { id: 1, icon: FaLaptop, title: "Creative Space", desc: "Modern and inspiring workspaces designed to boost creativity and collaboration. Perfect for dynamic and growing businesses." },
    { id: 2, icon: FaWifi, title: "High Speed Wifi", desc: "Stay connected with fast and reliable internet connectivity. Ideal for seamless operations and global communication." },
    { id: 3, icon: FaCubes, title: "Customize Space", desc: "Get workspaces tailored to your business needs and brand identity. We design spaces that grow with your goals." },
    { id: 4, icon: FaClock, title: "24/7 Access", desc: "Access your workspace anytime with full security. Work flexibly—day or night, as per your convenience." },
  ];

  const featuredProperties = [
    { id: 1, title: "Max Square Noida sector 129", plot: "Plot No C-0c Sector 129", tenants: ["NDTV", "General Atomics"], desc: "Max Square Noida Sector 129 is strategically located on plot no C-0c on Noida expressway.", image: "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp" },
    { id: 2, title: "Sovereign Capital Gate Film City...", plot: "Plot No-FC-57, Sector-16A", tenants: ["Microsoft", "Bose"], desc: "Sovereign Capital Gate Film City Noida Sector 16A 9899920199.", image: "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp" },
    { id: 3, title: "Max Towers Sector 16B Noida", plot: "C-001/A/1 Sector-16B", tenants: ["Yes Bank", "Khaitan & Co"], desc: "Max Towers is a commercial office space project located in Noida, India.", image: "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp" },
  ];

  const testimonials = [
    { id: 1, name: "Avantika Singh", role: "Founder & CEO", text: '"Professional, Prompt, and Highly Reliable" What sets Propliners apart is their professionalism and quick turnaround.', image: "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp" },
    { id: 2, name: "Vijay Kumar", role: "Founder & CEO", text: '"Best Commercial Real Estate Experts in Noida" We were searching for a warehouse, and Propliners guided us with accurate insights.', image: "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp" },
    { id: 3, name: "Niharika Mishra", role: "Founder & CEO", text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.', image: "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp" },
    { id: 4, name: "Niharika Mishra", role: "Founder & CEO", text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.', image: "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp" },
    { id: 5, name: "Niharika Mishra", role: "Founder & CEO", text: '"Transparent Deals & Excellent Market Understanding" Choosing Propliners was the best decision for our new setup.', image: "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp" },
  ];

  const workspaces = [
    { id: 1, city: "Noida", title: "Sector 62 IT Hub", count: 12, image: "/noida.jpg" },
    { id: 2, city: "Gurgaon", title: "Cyber City Area", count: 8, image: "/gurgaon.jpg" },
    { id: 3, city: "Delhi", title: "Connaught Place", count: 5, image: "/new-delhi.jpg" },
    { id: 4, city: "Greater Noida", title: "Greater Noida", count: 5, image: "/greater-noida.jpg" },
  ];

  // Naya Blog Data
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "REAL ESTATE",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "June 24, 2026",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "BUSINESS",
      title: "7 home trends that will shape your house in 2026",
      date: "June 24, 2026",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      author: "Admin",
      category: "BUSINESS",
      title: "10 Brilliant Ways To Decorate Your Home",
      date: "June 24, 2026",
    },
  ];

  // Naya FAQ Data
  const faqs = [
    {
      id: 1,
      question: "What types of properties do you deal with?",
      answer: "We primarily deal in commercial real estate including Office Spaces, Co-working spaces, Retail Shops, and Industrial Warehouses across Delhi NCR.",
    },
    {
      id: 2,
      question: "Do you charge any brokerage fees?",
      answer: "Our consulting fees vary depending on the property type and transaction size. However, we ensure complete transparency before initiating any process.",
    },
    {
      id: 3,
      question: "How do you help with lease documentation?",
      answer: "Our legal experts handle end-to-end lease documentation ensuring compliance with local authorities and securing your interests to mitigate future risks.",
    },
    {
      id: 4,
      question: "Can you help with office interior setup?",
      answer: "Yes! Apart from property leasing, we partner with top interior designers to provide a fully furnished, plug-and-play workspace setup tailored to your brand.",
    },
  ];

  return (
    <div>
      {/* ========================================== */}
      {/* 1. HERO SECTION (Dark/Image Base) */}
      {/* ========================================== */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image Layer (Uncomment when needed) */}
        {/* <div className="absolute inset-0 z-0">
          <Image src={bannerImageFromBackend} alt="Premium Workspace Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div> */}

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            Creative Environment For <br />
            <span style={{ color: "#ef4444" }}> Work Space </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto drop-shadow-md">
            The Best Workspace Provider In Delhi/NCR
          </p>
           <Link href="#enquiry-section" className="inline-block bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors shadow-md">
              Talk to An Expert
            </Link>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. SEARCH FILTER (Overlap) */}
      {/* ========================================== */}
      {/* <SearchFilter /> */}

      {/* ========================================== */}
      {/* 3. ABOUT US (White Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2 flex justify-end pb-12 lg:pb-0">
            <div className="absolute top-0 left-0 lg:left-10 w-40 h-40 z-0 opacity-30" style={{ backgroundImage: "radial-gradient(#EF4444 2px, transparent 2px)", backgroundSize: "15px 15px" }}></div>
            <div className="relative z-10 w-11/12 lg:w-[85%] h-[450px] md:h-[550px] rounded-sm overflow-hidden shadow-sm border-[10px] border-white">
              <img src="./about-us.webp" alt="Propliners Realty Office" className="object-cover w-full h-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 md:w-1/2 h-[200px] md:h-[250px] z-20 bg-white p-2 md:p-3 shadow-xl">
              <div className="relative w-full h-full overflow-hidden">
                <img src="./about-us.webp" alt="Office Interior" className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#EF4444] shadow-lg hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Propliners Realty - A 6 Sigma Following<span className="text-[#EF4444]"> Company.</span></h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              <strong>Propliners Realty</strong> is a prominent Consultancy firm which provides all type of Commercial & Industrial Real-estate solutions. We have a team of highly qualified and experienced professionals who have decades of experience in setting up the industry, office spaces for various corporate & FDI companies across the world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2.5 rounded-full text-[#EF4444]"><FaFileContract className="text-lg" /></div>
                <span className="text-sm font-semibold text-gray-700">Proper Documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2.5 rounded-full text-[#EF4444]"><FaMoneyBillWave className="text-lg" /></div>
                <span className="text-sm font-semibold text-gray-700">Guaranteed Best Prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2.5 rounded-full text-[#EF4444]"><FaShieldAlt className="text-lg" /></div>
                <span className="text-sm font-semibold text-gray-700">Complete Legal Check</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2.5 rounded-full text-[#EF4444]"><FaBuilding className="text-lg" /></div>
                <span className="text-sm font-semibold text-gray-700">Updated Portfolio</span>
              </div>
            </div>
            <Link href="/About-us" className="inline-block bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors shadow-md">
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. OUR SERVICES (Gray Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">OUR SERVICE</span>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Main <span className="text-[#EF4444]">Focus</span></h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div key={item.id} className="group bg-white p-8 text-center rounded-xl shadow-sm hover:shadow-lg border-b-4 border-transparent hover:border-[#EF4444] transition-all duration-500 flex flex-col h-full">
                <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-red-100/50 rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                  <item.icon className="text-4xl text-[#EF4444] z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. AREA PROPERTIES (White Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">AREA PROPERTIES</span>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Properties By <span className="text-[#EF4444]">Location</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="bg-white p-4 rounded-sm shadow-sm hover:shadow-lg border border-gray-100 transition-shadow duration-300 group">
                <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden mb-5">
                  <Image src={workspace.image} alt={workspace.city} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">{workspace.count} Properties</span>
                  </div> */}
                </div>
                <div className="px-2 pb-2">
                  <p className="text-gray-500 text-sm mb-1 font-medium">{workspace.city}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-5 leading-tight group-hover:text-[#EF4444] transition-colors">{workspace.title}</h3>
                  {/* <Link href={`/it-park/${workspace.city.toLowerCase()}`} className="inline-flex items-center gap-2 text-[#EF4444] text-sm font-medium hover:text-red-700 transition-colors">
                    View Property <FaArrowRight className="text-xs" />
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. ADVANTAGES (Gray Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose <span className="text-[#EF4444]">Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.id} className="bg-white p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col text-center border border-gray-100">
                {adv.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. FEATURED PROPERTIES (White Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">FEATURED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Features <span className="text-[#EF4444]">Office Property</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="relative w-full h-[220px]">
                  <Image src={property.image} alt={property.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">{property.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">{property.plot}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#EF4444]">Few Tenants :</span>
                    {property.tenants.map((tenant, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-[11px] font-medium">{tenant}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{property.desc}</p>
                  <div>
                    <Link href="#" className="bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold px-5 py-2.5 rounded shadow-sm inline-block transition-colors">View Detail</Link>
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
      {/* 9. TESTIMONIALS (White Bg) */}
      {/* ========================================== */}
      <section className="py-15 bg-white relative z-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h4 className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">TESTIMONIALS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">What Client <span className="text-[#EF4444]">Say's</span></h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]} spaceBetween={32} slidesPerView={1} loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pt-16 pb-16 px-4"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`} className="h-auto">
                <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col mt-8 mb-8">
                  <div className="absolute -top-10 right-6 p-1 rounded-full border border-dashed border-[#EF4444] bg-white">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image src={review.image} alt={review.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex gap-1 text-[#EF4444] text-sm mb-5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{review.text}</p>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <h4 className="font-bold text-gray-900 text-[15px]">{review.name}</h4>
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
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase">
              News & Blogs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Latest News <span className="text-[#EF4444]">Feeds</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col group">
                
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Meta Tags */}
                  <div className="flex items-center gap-6 mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-[#EF4444]" /> By {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaFolderOpen className="text-[#EF4444]" /> {blog.category}
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
                    <Link href="#" className="text-[#EF4444] font-bold text-xs uppercase tracking-wide hover:text-red-700 transition-colors">
                      READ MORE
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 11. FAQ SECTION (White Bg - NAYA SECTION) */}
      {/* ========================================== */}
      <section className="py-15 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Frequently Asked <span className="text-[#EF4444]">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`border rounded-lg transition-all duration-300 ${activeFaq === index ? 'border-[#EF4444] bg-red-50/30' : 'border-gray-200 bg-white'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${activeFaq === index ? 'text-[#EF4444]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-[#EF4444]' : ''}`} />
                </button>
                
                {/* Answer Box (Conditionally Rendered) */}
                <div className={`overflow-hidden transition-all duration-300 px-6 ${activeFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 12. OUR CLIENTS (Gray Bg) */}
      {/* ========================================== */}
      <section className="py-16 bg-gray-50 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-8">OUR CLIENTS</span>
          <Swiper
            modules={[Autoplay]} spaceBetween={30} slidesPerView={2} loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 6 } }}
            className="flex items-center"
          >
            {clientLogos.map((client, index) => (
              <SwiperSlide key={`${client.id}-${index}`} className="flex justify-center items-center py-2">
                <div className="w-36 h-20 bg-white flex items-center justify-center p-3 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer mx-auto grayscale hover:grayscale-0">
                  <Image src={client.src} alt={client.name} width={100} height={50} className="object-contain max-h-full opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ========================================== */}
      {/* 13. ENQUIRY SECTION */}
      {/* ========================================== */}
      <div id="enquiry-section">
        <Enquiry />
      </div>
    </div>
  );
}