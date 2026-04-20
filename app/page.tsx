"use client";

// app/page.tsx
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

import Enquiry from "@/components/Enquiry";

export default function Home() {
  const bannerImageFromBackend =
    "https://propliners.in/public/uploads/banner/1768370443_1753854256_slider-1.webp";

  // 1. Data arrays
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

  const workspaces = [
    {
      id: 1,
      city: "Noida",
      image:
        "https://propliners.in/public/uploads/workspace/1768371637_1754911173_noida.webp",
    },
    {
      id: 2,
      city: "Gurugram",
      image:
        "https://propliners.in/public/uploads/workspace/1768371637_1754911173_noida.webp",
    },
    {
      id: 3,
      city: "Delhi",
      image:
        "https://propliners.in/public/uploads/workspace/1768371637_1754911173_noida.webp",
    },
  ];

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
    {
      id: 4,
      title: "Advant Navis Business Park Noida...",
      plot: "Plot No-07 Sector 142",
      tenants: ["Samsung", "KPMG", "Qualcomm"],
      desc: "Advant navis business park sector 142 Noida is ideally located at the intersection point of two east...",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
    {
      id: 5,
      title: "The Ikon Tower Film City Noida...",
      plot: "Plot No-FC-NO. Sector 16A",
      tenants: ["Hindustan Times etc"],
      desc: "The Ikon Tower Film City Noida, Sector 16A, stands as a testament to architectural innovation and co...",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
    {
      id: 6,
      title: "Candor Techspace Sector-62 Noida",
      plot: "Plot No-B10 Sector-62",
      tenants: ["Amazon", "Barclays"],
      desc: "Noida, a bustling hub of technological advancement and business growth, is home to the remarkable Ca...",
      image:
        "https://propliners.in/public/uploads/property/1753856887_max-square-noida-sector-129-office-on-rent.webp",
    },
  ];

  const stats = [
    {
      id: 1,
      number: "5211",
      label: "+ Offices options",
      icon: <FaBuilding className="text-4xl text-white opacity-90" />,
    },
    {
      id: 2,
      number: "2500",
      label: "+ Industries Options",
      icon: <FaIndustry className="text-4xl text-white opacity-90" />,
    },
    {
      id: 3,
      number: "1241",
      label: "+ Satisfied Customers",
      icon: <FaSmileBeam className="text-4xl text-white opacity-90" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Avantika Singh",
      role: "Founder & CEO",
      text: '"Professional, Prompt, and Highly Reliable" & "Seamless Experience from Start to Finish" What sets Propliners apart is their professionalism and quick turnaround.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp", // Dummy female avatar
    },
    {
      id: 2,
      name: "Vijay Kumar",
      role: "Founder & CEO",
      text: '"Best Commercial Real Estate Experts in Noida" We were searching for a warehouse in Sector 63, and Propliners guided us with accurate insights on location, pricing.',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp", // Dummy male avatar
    },
    {
      id: 3,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" I appreciate the honesty and clarity with which Propliners operates. Choosing Propliners was the best decision for o...',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp", // Dummy female avatar
    },
    {
      id: 4,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" I appreciate the honesty and clarity with which Propliners operates. Choosing Propliners was the best decision for o...',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp", // Dummy female avatar
    },
    {
      id: 5,
      name: "Niharika Mishra",
      role: "Founder & CEO",
      text: '"Transparent Deals & Excellent Market Understanding" I appreciate the honesty and clarity with which Propliners operates. Choosing Propliners was the best decision for o...',
      image:
        "https://propliners.in/public/uploads/testimonial/1753854765_03 (1).webp", // Dummy female avatar
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* 1. Background Image Layer */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src={bannerImageFromBackend}
            alt="Premium Workspace Banner"
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div> */}

        {/* 2. Text & Button Layer (z-10 taaki image ke upar rahe) */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-4 drop-shadow-lg">
            Creative Environment For <br />
            <span style={{ color: "#ef4444" }}> Work Space </span>
          </h1>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto drop-shadow-md">
            The Best Workspace Provider In Delhi/NCR
          </p>

          {/* 3. The Premium Contact Us Button */}
          <Link
            href="/Contact-Us"
            className="bg-[#EF4444] hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl"
          >
            <span>CONTACT US</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              <FaArrowRight className="text-[#EF4444] text-sm" />
            </div>
          </Link>
        </div>
      </section>

      {/* --- SECTION 1: OUR CLIENTS  --- */}
      <section className="py-10 bg-white overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Our <span className="text-[#EF4444]">Clients</span>
          </h2>

          {/* Swiper Container */}
          <Swiper
            modules={[Autoplay, Pagination]} // Kaunse feature use karne hain
            spaceBetween={35} // Slides ke beech ka gap (Tailwind w-6/gap-6 jaisa)
            slidesPerView={2} // Default (mobile) par kitni slides dikhein
            loop={true} // Infinite loop
            autoplay={{
              delay: 2500, // 2.5 seconds mein change ho
              disableOnInteraction: false, // User touch kare toh autoplay band na ho
            }}
            pagination={false} // Neeche chote dots dikhein
            breakpoints={{
              // Jab screen 640px se badi ho (Tablet)
              640: {
                slidesPerView: 3,
              },
              // Jab screen 1024px se badi ho (Desktop)
              1024: {
                slidesPerView: 7, // 5 logos ek saath dikhein
              },
            }}
            className="pb-12" // Pagination dots ke liye space
          >
            {clientLogos.map((client, index) => (
              <SwiperSlide
                // Fix: ID aur Index ko jod diya taaki kabhi duplicate na ho
                key={`${client.id}-${index}`}
                className="flex justify-center items-center"
              >
                <div className="w-44 h-24 bg-white  flex items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer mx-auto">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- SECTION 2: PROFESSIONAL WORKSPACE --- */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Headings */}
          <div className="text-center mb-12">
            <h4 className="text-[#EF4444] text-sm font-bold tracking-wider uppercase mb-2">
              OFFICES SPACE
            </h4>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
              Professional <span className="text-[#EF4444]">Workspace</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workspaces.map((workspace) => (
              <div
                key={workspace.id}
                className="group relative w-full h-[200px] rounded-2xl overflow-hidden cursor-pointer shadow-md"
              >
                {/* Background Image */}
                <Image
                  src={workspace.image}
                  alt={`Office for Rent in ${workspace.city}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-white text-xl font-bold tracking-wide drop-shadow-lg">
                    Office for Rent in {workspace.city}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ABOUT US --- */}
      <section className="py-20 bg-white">
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

      {/* --- SECTION 4: FEATURES GRID (Dark Cards) --- */}
      <section className="pb-20 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#EF4444]/20 w-12 h-12 flex items-center justify-center rounded-md mb-6">
                <FaLaptop className="text-[#EF4444] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">Creative Space</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Modern and inspiring workspaces designed to boost creativity and
                collaboration. Perfect for dynamic and growing businesses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#EF4444]/20 w-12 h-12 flex items-center justify-center rounded-md mb-6">
                <FaWifi className="text-[#EF4444] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">High Speed Wifi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stay connected with fast and reliable internet connectivity.
                Ideal for seamless operations and global communication.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#EF4444]/20 w-12 h-12 flex items-center justify-center rounded-md mb-6">
                <FaCubes className="text-[#EF4444] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">Customize Space</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get workspaces tailored to your business needs and brand
                identity. We design spaces that grow with your goals.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#EF4444]/20 w-12 h-12 flex items-center justify-center rounded-md mb-6">
                <FaClock className="text-[#EF4444] text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-3">24/7 Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access your workspace anytime with full security. Work
                flexibly—day or night, as per your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US (ADVANTAGES) --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Headings */}
          <div className="text-center mb-16">
            <h4 className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mb-2">
              ADVANTAGES
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-[#EF4444]">Us</span>
            </h2>
          </div>

          {/* Advantages Grid */}
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
                <Link
                  href="#"
                  className="text-[#EF4444] font-medium text-sm inline-flex items-center justify-center gap-1 hover:text-red-700 transition-colors"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: FEATURED OFFICE PROPERTIES --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Headings */}
          <div className="text-center mb-16">
            <h4 className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mb-2">
              WORKSPACE
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Features <span className="text-[#EF4444]">Office Property</span>
            </h2>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                {/* Property Image */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Property Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight mb-1">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{property.plot}</p>

                  {/* Tenants Section */}
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

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {property.desc}
                  </p>

                  {/* Action Button */}
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

      {/* --- SECTION 7: HIGHLIGHTED SPACES (ZIG-ZAG OVERLAP) --- */}
      <section className="py-24 bg-[#F8FAFC]">
        {" "}
        {/* Halki si blue/gray background */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20 lg:gap-32">
          {/* --- Block 1: Image Left, Text Right --- */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: Image Container */}
            <div className="w-full lg:w-7/12 relative h-[350px] lg:h-[450px] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://propliners.in/assets/img/noida1.webp" // Dummy Office Image
                alt="Office Space in Noida"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text Box (Overlapping) */}
            {/* lg:-ml-24 se hum text box ko image ke upar left ki taraf khiska rahe hain */}
            <div className="w-[90%] lg:w-5/12 mx-auto bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] z-10 lg:-ml-24 mt-[-50px] lg:mt-0 relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide leading-snug">
                Office Space For Rent In Noida
              </h2>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                Office Space for Rent in Noida are among the topmost priorities
                for an entrepreneur as this city is having fanatic
                infrastructure along with large variety of offices suitable for
                Giant corporate as well as for startups. Metro connectivity,
                Budgeted apartments, modern corporate look, 24 X 7 operational,
                Woman safety are the few features which attracts every
                corporate.
              </p>
            </div>
          </div>

          {/* --- Block 2: Text Left, Image Right --- */}
          <div className="flex flex-col lg:flex-row-reverse items-center">
            {/* Right: Image Container */}
            <div className="w-full lg:w-7/12 relative h-[350px] lg:h-[450px] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://propliners.in/assets/img/noida1.webp" // Dummy Industrial Image
                alt="Industrial Space for Rent"
                fill
                className="object-cover"
              />
            </div>

            {/* Left: Text Box (Overlapping) */}
            {/* lg:-mr-24 se hum text box ko image ke upar right ki taraf khiska rahe hain */}
            <div className="w-[90%] lg:w-5/12 mx-auto bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] z-10 lg:-mr-24 mt-[-50px] lg:mt-0 relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide leading-snug">
                Industrial Space For Rent
              </h2>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                After the Grand success of our PM's initiative as "MAKE IN
                INDIA", SKILL INDIA, DIGITAL INDIA and other various boost up's
                to industrial manufacturing sector the demand in Industrial
                sector is very high in these sectors. Factory For Rent In Noida
                and warehouse for rent in noida area available with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: STATISTICS BANNER --- */}
      <section className="bg-[#3D3D3D] py-12 border-b-4 border-[#EF4444]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center justify-center gap-6"
              >
                <div>{stat.icon}</div>
                <div className="text-left">
                  <h3 className="text-4xl font-extrabold text-white tracking-wide">
                    {stat.number}
                  </h3>
                  <p className="text-white text-xs font-medium tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 9: VIDEO TOUR --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Video Thumbnail Container */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer shadow-xl">
            <Image
              src="https://propliners.in/assets/img/video/video.webp" // Office Interior Image
              alt="Office Video Tour"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for better play button visibility */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-[#EF4444] text-xl ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: TESTIMONIALS (FIXED OVERLAPPING & CUTOFF) --- */}
      <section className="py-20 bg-white relative z-0">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Headings */}
          <div className="text-center mb-10">
            <h4 className="text-[#EF4444] text-xs font-bold tracking-wider uppercase mb-2">
              TESTIMONIALS
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What Client <span className="text-[#EF4444]">Say's</span>
            </h2>
          </div>

          {/* Swiper Carousel for Testimonials */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-custom-bullet-active",
              bulletClass: "swiper-custom-bullet",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            /* FIX 1: pt-20 se avatar ke liye upar jagah banegi, pb-20 se dots ke liye neeche */
            className="pt-20 pb-20 px-4"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`} className="h-auto">
                {/* FIX 2: mb-10 add kiya taaki card aur dots ke beech gap fix rahe */}
                <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col mb-10 mt-4">
                  {/* Overlapping Avatar - Isko right ki jagah center-right bhi kar sakte hain agar chahein */}
                  <div className="absolute -top-12 right-6 p-1 rounded-full border border-dashed border-[#EF4444] bg-white">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#EF4444] text-sm mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {review.text}
                  </p>

                  {/* User Details */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
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

      {/* SECTION 11: ENQUIRY  */}
      <Enquiry/>

    </div>
  );
}
