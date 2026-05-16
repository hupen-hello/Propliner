"use client";

import React, { useState, useMemo, use } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FaThLarge,
  FaListUl,
  FaHome,
  FaAngleDoubleRight,
  FaSearch, FaPhoneAlt, FaWhatsapp,
} from "react-icons/fa";

const allProjects = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  title: `Premium Office Space ${i + 1}`,
  location: i % 2 === 0 ? "Sector-136 Noida" : "Film City Noida",
  furnishing: i % 3 === 0 ? "Furnished" : i % 3 === 1 ? "Un-Furnished" : "Semi Furnished",
  tenants: ["TCS", "Infosys"],
  description: "A premium commercial office space in one of the emerging business locations of Noida aimed at providing a contemporary workspace.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
}));

const furnishingList = ["Furnished", "Un-Furnished", "Semi Furnished"];

const locationsList = [
  "Sector 62 Noida", "Sector 63 Noida", "Film City Noida", 
  "Sector 136 Noida", "Sector 2 Noida", "Sector 125 Noida"
];

export default function CityPropertyDetailPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = use(params);
  const displayCityName =
    resolvedParams.city.charAt(0).toUpperCase() + resolvedParams.city.slice(1);

  const pageData = {
    title: `Office Space for Rent in IT Parks ${displayCityName}`,
    description: `Looking for office space for rent in IT Parks ${displayCityName}? ${displayCityName}, popularly known as India's fastest-growing corporate hubs. With its world-class infrastructure, thriving IT ecosystem, and strategic proximity to Delhi, ${displayCityName} has become a preferred destination for startups, SMEs, and multinational corporations. Renting office space in ${displayCityName}'s IT parks gives businesses access to premium infrastructure, excellent connectivity, and a professional ecosystem that fosters growth and innovation.`,
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

  // --- STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFurnishing, setSelectedFurnishing] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- FILTER LOGIC ---
  const toggleSelection = (item: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocations([]);
    setSelectedFurnishing([]);
    setCurrentPage(1);
  };

  // --- APPLY FILTERS ---
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchLocation = selectedLocations.length === 0 || selectedLocations.some(loc => project.location.includes(loc.split(" ")[0])); // Basic matching logic
      
      const matchFurnishing = selectedFurnishing.length === 0 || selectedFurnishing.includes(project.furnishing);

      return matchSearch && matchLocation && matchFurnishing;
    });
  }, [searchQuery, selectedLocations, selectedFurnishing]);

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <main className="bg-white min-h-screen ">
      {/* --- 1. TOP SECTION: Text & Image with Breadcrumb --- */}
      <section className="relative w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[10px] lg:mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://propliners.in/assets/img/breadcrumb/01.webp"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4 tracking-wide uppercase">
            Office Space for Rent in IT Parks in {displayCityName} | Propliners
          </h2>

          <div className="flex items-center gap-2 text-[15px] font-medium">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>

            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />

            <span className="text-[#EF4444] text-white">IT/Corporate Parks</span>

            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />

            <span className="text-[#EF4444]">{displayCityName}</span>
          </div>
        </div>
      </section>

      {/* --- 1. TOP SECTION: Text & Image --- */}
      <section className="max-w-7xl mx-auto px-4 mb-5 pt-5">
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
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Amenities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pageData.amenities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
      <section className="py-5 max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Location Filter
        </h3>

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
      {/* <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            More Options
          </h2>

          <div className="flex justify-start gap-4">
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
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#EF4444] text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors shadow-md"
            >
              <span className="text-sm font-bold tracking-wide">
                Sector 16 {displayCityName}
              </span>
              <div className="bg-white rounded-full p-1">
                <FaArrowRight className="text-[#EF4444] text-xs" />
              </div>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#EF4444] text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors shadow-md"
            >
              <span className="text-sm font-bold tracking-wide">
                Sector 62 {displayCityName}
              </span>
              <div className="bg-white rounded-full p-1">
                <FaArrowRight className="text-[#EF4444] text-xs" />
              </div>
            </Link>
          </div>
        </div>
      </section> */}
      

      {/* feature section  */}
      <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= LEFT SIDEBAR (FILTERS) ================= */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm sticky top-24">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-gray-800">Filters</h3>
                <button onClick={resetFilters} className="text-red-500 text-xs font-semibold hover:underline">
                  Reset All
                </button>
              </div>

              {/* Search */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Search</label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
                  <input 
                    type="text" 
                    placeholder="Search office, building..." 
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Budget</label>
                <div className="flex gap-2">
                  <select className="w-1/2 p-2 text-sm border border-gray-200 rounded-lg text-gray-600 focus:outline-none">
                    <option>Min</option>
                  </select>
                  <select className="w-1/2 p-2 text-sm border border-gray-200 rounded-lg text-gray-600 focus:outline-none">
                    <option>Max</option>
                  </select>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-gray-600">Locations</label>
                  <span className="text-[10px] text-gray-400 cursor-pointer hover:text-red-500">Show more v</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {locationsList.map(loc => (
                    <button 
                      key={loc}
                      onClick={() => toggleSelection(loc, selectedLocations, setSelectedLocations)}
                      className={`px-3 py-1.5 text-[11px] rounded-full border transition-colors ${
                        selectedLocations.includes(loc) 
                          ? 'bg-red-50 border-red-500 text-red-600 font-semibold' 
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Furnishing */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Furnishing</label>
                <div className="flex flex-wrap gap-2">
                  {furnishingList.map(furn => (
                    <button 
                      key={furn}
                      onClick={() => toggleSelection(furn, selectedFurnishing, setSelectedFurnishing)}
                      className={`px-3 py-1.5 text-[11px] rounded-full border transition-colors ${
                        selectedFurnishing.includes(furn) 
                          ? 'bg-red-50 border-red-500 text-red-600 font-semibold' 
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {furn}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100 mb-4" />

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-xs font-semibold transition-colors">
                  <FaPhoneAlt className="text-red-500" /> Call Now
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-xs font-semibold transition-colors">
                  <FaWhatsapp className="text-green-500 text-sm" /> WhatsApp
                </button>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE (RESULTS & GRID) ================= */}
          <div className="w-full lg:w-3/4">
            
            {/* Top Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">{filteredProjects.length}</span> results | Office in Noida
                </p>
                {(selectedLocations.length > 0 || selectedFurnishing.length > 0) && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">Applied Filters:</span>
                    {[...selectedLocations, ...selectedFurnishing].map(f => (
                      <span key={f} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-[10px] font-semibold">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600 focus:outline-none">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button className="bg-red-500 text-white px-3 py-1.5"><FaThLarge /></button>
                  <button className="bg-white text-gray-400 hover:bg-gray-50 px-3 py-1.5"><FaListUl /></button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.length > 0 ? (
                paginatedProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-[10px] font-bold px-2 py-1 rounded z-10 shadow-sm">FOR LEASE</span>
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-base font-bold text-gray-900 leading-tight truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 mb-3">
                        <span className="text-red-500 mr-1">📍</span>{project.location}
                      </p>

                      {project.tenants && project.tenants.length > 0 && (
                        <div className="flex items-center flex-wrap gap-1.5 mb-3">
                          <span className="text-[10px] font-bold text-gray-500">Tenants:</span>
                          {project.tenants.map((tenant, idx) => (
                            <span key={idx} className="bg-gray-50 border border-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-medium">
                              {tenant}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-3">
                        <span className="text-[11px] font-semibold text-gray-500">View Units</span>
                        <Link href="#" className="text-red-600 hover:text-red-700 text-[12px] font-bold transition-colors">
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-10 text-center text-gray-500">
                  No properties found matching your filters.
                </div>
              )}
            </div>

            {/* ================= PAGINATION ================= */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex justify-center items-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 flex justify-center items-center rounded-full text-sm font-semibold transition-colors ${
                      currentPage === idx + 1 
                        ? 'bg-red-500 text-white border-red-500' 
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex justify-center items-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
