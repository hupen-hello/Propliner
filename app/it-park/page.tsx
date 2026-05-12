import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPowerOff,
  FaCompass,
  FaSnowflake,
  FaShieldAlt,
  FaWater,
  FaParking,
  FaCoffee,
  FaCarBattery,
  FaArrowsAltV,
  FaWifi,
  FaStore,
  FaUsers,
  FaFireExtinguisher,
  FaHome,
  FaAngleDoubleRight,
  
} from "react-icons/fa";

function page() {

const pageData = {
    title: `IT/Corporate Parks`,
    description: `IT/Corporate Parks are modern, well-planned business hubs designed to accommodate multiple companies, especially in the IT, corporate, and service sectors. They serve as central points for innovation, collaboration, and economic development.`,
    featuredImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crophttps://propliners.in/public/uploads/category/1768374848_1758524017_office space for rent IT parks in gurgaon (1).webp", // Add your real image URL here

    amenities: [
      {
        name: "Power Back-Up",
        icon: <FaPowerOff className="text-red-500 text-lg" />,
      },
      {
        name: "Vaastu Compliant",
        icon: <FaCompass className="text-red-500 text-lg" />,
      },
      {
        name: "Air Conditioned",
        icon: <FaSnowflake className="text-red-500 text-lg" />,
      },
      {
        name: "24 X 7 Security",
        icon: <FaShieldAlt className="text-red-500 text-lg" />,
      },
      {
        name: "Rain Water Harvesting",
        icon: <FaWater className="text-red-500 text-lg" />,
      },
      {
        name: "Reserved Parking",
        icon: <FaParking className="text-red-500 text-lg" />,
      },
      {
        name: "Common Cafeteria",
        icon: <FaCoffee className="text-red-500 text-lg" />,
      },
      {
        name: "EV Charging",
        icon: <FaCarBattery className="text-red-500 text-lg" />,
      },
      {
        name: "High Speed Lifts",
        icon: <FaArrowsAltV className="text-red-500 text-lg" />,
      },
      {
        name: "High Speed Internet",
        icon: <FaWifi className="text-red-500 text-lg" />,
      },
      { name: "Retail", icon: <FaStore className="text-red-500 text-lg" /> },
      {
        name: "Co Working",
        icon: <FaUsers className="text-red-500 text-lg" />,
      },
      {
        name: "Fire Fighting Work",
        icon: <FaFireExtinguisher className="text-red-500 text-lg" />,
      },
    ],

  };

  return (
    <div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide uppercase">
           IT/Corporate Parks
          </h2>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />
            <span className="text-[#EF4444]">IT/Corporate Parks</span>
          </div>
        </div>
      </section>

      {/* --- 1. TOP SECTION: Text & Image --- */}
      <section className="max-w-7xl mx-auto px-4 mb-20 pt-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {pageData.title}
            </h1>
            <p className="text-gray-500 text-[15px] leading-relaxed text-justify">
              {pageData.description}
            </p>
          </div>

          {/* Right Image Block */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border-4 border-white">
              <img
                src={pageData.featuredImage}
                alt={pageData.title}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. AMENITIES SECTION --- */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Amenities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pageData.amenities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-8 flex justify-center">{item.icon}</div>
                <span className="text-sm font-semibold text-gray-700">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default page;
