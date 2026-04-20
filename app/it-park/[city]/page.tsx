import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import all necessary icons for amenities
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
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaHome,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default async function CityPropertyDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = await params;
  const displayCityName =
    resolvedParams.city.charAt(0).toUpperCase() + resolvedParams.city.slice(1);

  // ==========================================
  // DUMMY BACKEND DATA STRUCTURE
  // Future me ye data aapki API se aayega
  // ==========================================
  const pageData = {
    title: `Office Space for Rent in IT Parks ${displayCityName}`,
    description: `Looking for office space for rent in IT Parks ${displayCityName}? ${displayCityName}, popularly known as India's fastest-growing corporate hubs. With its world-class infrastructure, thriving IT ecosystem, and strategic proximity to Delhi, ${displayCityName} has become a preferred destination for startups, SMEs, and multinational corporations. Renting office space in ${displayCityName}'s IT parks gives businesses access to premium infrastructure, excellent connectivity, and a professional ecosystem that fosters growth and innovation.`,
    featuredImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crophttps://propliners.in/public/uploads/category/1768374848_1758524017_office space for rent IT parks in gurgaon (1).webp", // Add your real image URL here

    // Amenities List (Backend se sirf names aayenge, Icons hum frontend me map karenge)
    amenities: [
      {
        name: "Power Back-Up",
        icon: <FaPowerOff className="text-gray-700 text-lg" />,
      },
      {
        name: "Vaastu Compliant",
        icon: <FaCompass className="text-gray-700 text-lg" />,
      },
      {
        name: "Air Conditioned",
        icon: <FaSnowflake className="text-gray-700 text-lg" />,
      },
      {
        name: "24 X 7 Security",
        icon: <FaShieldAlt className="text-gray-700 text-lg" />,
      },
      {
        name: "Rain Water Harvesting",
        icon: <FaWater className="text-gray-700 text-lg" />,
      },
      {
        name: "Reserved Parking",
        icon: <FaParking className="text-gray-700 text-lg" />,
      },
      {
        name: "Common Cafeteria",
        icon: <FaCoffee className="text-gray-700 text-lg" />,
      },
      {
        name: "EV Charging",
        icon: <FaCarBattery className="text-gray-700 text-lg" />,
      },
      {
        name: "High Speed Lifts",
        icon: <FaArrowsAltV className="text-gray-700 text-lg" />,
      },
      {
        name: "High Speed Internet",
        icon: <FaWifi className="text-gray-700 text-lg" />,
      },
      { name: "Retail", icon: <FaStore className="text-gray-700 text-lg" /> },
      {
        name: "Co Working",
        icon: <FaUsers className="text-gray-700 text-lg" />,
      },
      {
        name: "Fire Fighting Work",
        icon: <FaFireExtinguisher className="text-red-500 text-lg" />,
      },
    ],

    // Location Filters
    locationFilters: [
      "DLF Cyber City",
      "Sector 16 Noida",
      "Sector-65 Gurgaon",
      "Sector-48 Gurgaon",
      "Sector-21 Gurgaon",
    ],
  };

  const projects = [
    {
      id: 1,
      title: "DLF Downtown",
      location: "Gurgaon",
      tenants: ["Amazon", "Microsoft", "LinkedIn"],
      description: "DLF Downtown Cyber City is a next-generation commercial project being developed by DLF Ltd.",
      // Replace this with your actual building image
      image: "https://propliners.in/public/uploads/property/1758527629_dlf downtown block 1 cyber city gurgaon.webp" 
    },
    {
      id: 2,
      title: "Max Square",
      location: "Sector 129, Noida",
      tenants: ["TCS", "Infosys", "HCL"],
      description: "A premium IGBC Platinum certified green building offering world-class office spaces and amenities.",
      image: "https://propliners.in/public/uploads/property/1758527629_dlf downtown block 1 cyber city gurgaon.webp"
    },
    {
      id: 3,
      title: "Cyber Park",
      location: "DLF Phase 3, Gurgaon",
      tenants: ["Google", "Meta", "Gartner"],
      description: "State-of-the-art IT Park equipped with modern infrastructure and excellent metro connectivity.",
      image: "https://propliners.in/public/uploads/property/1758527629_dlf downtown block 1 cyber city gurgaon.webp"
    }
  ];

  return (
    <main className="bg-white min-h-screen ">
      {/* --- 1. TOP SECTION: Text & Image with Breadcrumb --- */}
      <section className="relative w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[70px] lg:mt-0">
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
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-4 tracking-wide uppercase">
            Office Space for Rent in IT Parks in {displayCityName} | Propliners
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
            <span className="text-[#EF4444] text-white">IT/Corporate Parks</span>

            {/* Divider Icon (Double Arrow) */}
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />

            {/* Current Page (Red Color) */}
            <span className="text-[#EF4444]">{displayCityName}</span>
          </div>
        </div>
      </section>

      {/* --- 1. TOP SECTION: Text & Image --- */}
      <section className="max-w-7xl mx-auto px-4 mb-20 pt-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Text Block */}
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

      {/* --- 3. LOCATION FILTER SECTION --- */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Location Filter
        </h3>

        {/* Slider Container for Tags */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-gray-800 transition-colors">
            <FaChevronLeft className="text-xl" />
          </button>

          <div className="flex-1 overflow-hidden flex gap-3">
            {pageData.locationFilters.map((location, idx) => (
              <span
                key={idx}
                className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm rounded cursor-pointer hover:border-[#EF4444] hover:text-[#EF4444] transition-colors"
              >
                {location}
              </span>
            ))}
          </div>

          <button className="p-2 text-gray-400 hover:text-gray-800 transition-colors">
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </section>

      {/* --- 4. MORE OPTIONS SECTION --- */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            More Options
          </h2>

          <div className="flex justify-start">
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#EF4444] text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors shadow-md"
            >
              <span className="text-sm font-bold tracking-wide">
                DLF Cyber City {displayCityName}
              </span>
              <div className="bg-white rounded-full p-1">
                <FaArrowRight className="text-[#EF4444] text-xs" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid (1 column on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
            >
              
              {/* Card Image Container */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Title & Location */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">
                  {project.location}
                </p>

                {/* Tenants Row (Pill Tags) */}
                {project.tenants && project.tenants.length > 0 && (
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    <span className="text-[11px] font-bold text-[#EF4444]">
                      Few Tenants :
                    </span>
                    {project.tenants.map((tenant, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-medium"
                      >
                        {tenant}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description - line-clamp-2 ensures it doesn't break the layout if text is too long */}
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3 text-justify">
                  {project.description}
                </p>

                {/* View Detail Button */}
                <div className="mt-auto">
                  <Link 
                    href="#" 
                    className="inline-block bg-[#EF4444] hover:bg-red-600 text-white text-[12px] font-bold px-5 py-2 rounded shadow-sm transition-colors"
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
    </main>
  );
}
