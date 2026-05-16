"use client";

import React,{ useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaBuilding, 
  FaRulerCombined, FaCheckCircle, FaCar, FaWind, 
  FaLayerGroup, FaArrowRight, FaTools, FaShieldAlt, 
  FaTree, FaDumbbell, FaCoffee, FaFireExtinguisher,
  FaSubway, FaBus, FaPlane, FaBriefcase, 
  FaUtensils, FaHotel, FaShoppingBag, FaChevronDown, FaTimes, FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import { MdOutlineElevator, MdOutlineLocalAirport, MdOutlineSubway } from "react-icons/md";
import { MdTrain } from "react-icons/md";




  


export default function PropertyDetail() {

  const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", // Main Image
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", // Small 1
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80", // Small 2
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80", // Small 3
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80", // Overlay Image (Small 4)
    // Extra images for slider when user clicks "+8 Photos"
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    "https://images.unsplash.com/photo-1524230572899-a752b65a1dc8?w=1200&q=80"
  ];

  // 2. States for Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Navigation Functions
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Lightbox band na ho isliye
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  // State for active tabs
  const [activeTransport, setActiveTransport] = useState("Metro");
  const [activeCategory, setActiveCategory] = useState("Connectivity");

  // Dummy data for the dropdown card inside the map
  const nearbyPlaces = [
    { name: "Sector 55-56", time: "8 mins", distance: "(2.9 km)" },
    { name: "Sector 54 Chowk", time: "18 mins", distance: "(7.9 km)" },
  ];

  const categories = [
    { id: "Connectivity", icon: <MdTrain className="text-2xl" />, label: "Connectivity" },
    { id: "Business", icon: <FaBriefcase className="text-2xl" />, label: "Business" },
    { id: "Dining", icon: <FaUtensils className="text-2xl" />, label: "Dining" },
    { id: "Hospitality", icon: <FaHotel className="text-2xl" />, label: "Hospitality" },
    { id: "Shopping", icon: <FaShoppingBag className="text-2xl" />, label: "Shopping" },
  ];
  // Dummy Data for At a Glance section
  const atAGlanceData = [
    { icon: <FaMapMarkerAlt />, label: "Address", value: "Plot No- A-9" },
    { icon: <FaLayerGroup />, label: "Floors", value: "Basement + Stilt + GF + 6 Floors" },
    { icon: <FaRulerCombined />, label: "Built-up Area", value: "20,000 sq.ft." },
    { icon: <FaBuilding />, label: "Typical Floor Plate", value: "Approx. 7,867 sq.ft." },
    { icon: <FaCar />, label: "Parking Ratio", value: "1:1000 sq.ft." },
    { icon: <MdOutlineSubway />, label: "Nearest Metro Stn.", value: "Noida Sector 137" },
    { icon: <MdOutlineLocalAirport />, label: "Nearest Airport", value: "Indira Gandhi International Airport" },
    { icon: <FaBuilding />, label: "Built Year", value: "2024" },
    { icon: <MdOutlineElevator />, label: "Lifts", value: "2" },
    { icon: <FaWind />, label: "Air-Conditioning", value: "Split" },
    // { icon: <FaCompass />, label: "Facing", value: "South-East" },
    { icon: <FaRulerCombined />, label: "Plot Area", value: "1,950 sqm." },
  ];

  // Dummy Data for Amenities
  const amenities = [
    { name: "Visitors Parking", icon: <FaCar /> },
    { name: "Maintenance Staff", icon: <FaTools /> },
    { name: "Air Conditioned", icon: <FaWind /> },
    { name: "Gym", icon: <FaDumbbell /> },
    { name: "Waste Disposal", icon: <FaBuilding /> },
    { name: "Waiting Lounge", icon: <FaCoffee /> },
    { name: "Park", icon: <FaTree /> },
    { name: "Reserved Parking", icon: <FaCar /> },
    { name: "24x7 Security", icon: <FaShieldAlt /> },
    { name: "Power Back-Up", icon: <FaBuilding /> },
    { name: "Conference Room", icon: <FaBuilding /> },
    { name: "Service/Goods Lift", icon: <MdOutlineElevator /> },
    { name: "Lift", icon: <MdOutlineElevator /> },
    { name: "Fire Fighting Work", icon: <FaFireExtinguisher /> },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-12">
      
      {/* ================= TOP SCROLLABLE TAGS ================= */}
      <div className="bg-white border-b border-gray-200 py-3 overflow-x-auto whitespace-nowrap px-4 sm:px-8 custom-scrollbar">
        <div className="flex items-center gap-6 text-sm text-gray-600 font-medium max-w-7xl mx-auto">
          <span className="hover:text-red-600 cursor-pointer">Sector-62 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-63 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Film City Noida</span>
          <span className="text-red-600 font-bold border-b-2 border-red-600 pb-1 cursor-pointer">Sector-136 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-2 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-125 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-3 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-142 Noida</span>
          <span className="hover:text-red-600 cursor-pointer">Sector-16 Noida</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* ================= BREADCRUMB & HEADER ================= */}
        <div className="text-sm text-gray-500 mb-4">
          Noida | Sector-136 Noida | <span className="text-gray-900 font-medium">The Grent</span>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <div className="flex gap-2 mb-3">
              <span className="text-red-600 text-xs font-bold bg-red-50 px-2.5 py-1 rounded">For Lease</span>
              <span className="text-gray-600 text-xs font-semibold bg-gray-100 px-2.5 py-1 rounded">Commercial Building</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">The Grent</h1>
            <p className="flex items-center text-gray-500 text-sm gap-1.5">
              <FaMapMarkerAlt className="text-red-500" /> Sector-136 Noida, Noida
            </p>
          </div>
          <button className="bg-[#D32F2F] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
            Enquire Now <FaArrowRight />
          </button>
        </div>

        {/* ================= QUICK STATS BAR ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase mb-1">Built-Up Area</p>
            <p className="text-lg font-bold text-gray-900">20,000 sq.ft.</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase mb-1">Typical Floor</p>
            <p className="text-lg font-bold text-gray-900">7,867 sq.ft.</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase mb-1">Certification</p>
            <p className="text-lg font-bold text-gray-900">On request</p>
          </div>
        </div>

        {/* ================= MAIN 2-COLUMN LAYOUT ================= */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ================= LEFT COLUMN (MAIN CONTENT) ================= */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Photo Gallery Grid */}
            {/* ================= NORMAL GRID VIEW ================= */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
        
        {/* Main Big Image */}
        <div 
          onClick={() => openLightbox(0)} 
          className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden bg-gray-200 cursor-pointer group"
        >
          <img src={images[0]} alt="Building" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
        </div>

        {/* 3 Small Images */}
        <div onClick={() => openLightbox(1)} className="col-span-1 row-span-1 relative bg-gray-200 cursor-pointer group overflow-hidden">
          <img src={images[1]} alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        </div>
        <div onClick={() => openLightbox(2)} className="col-span-1 row-span-1 relative rounded-tr-xl overflow-hidden bg-gray-200 cursor-pointer group">
          <img src={images[2]} alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        </div>
        <div onClick={() => openLightbox(3)} className="col-span-1 row-span-1 relative bg-gray-200 cursor-pointer group overflow-hidden">
          <img src={images[3]} alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        </div>

        {/* Plus More Overlay (Clicking opens index 4) */}
        <div onClick={() => openLightbox(4)} className="col-span-1 row-span-1 relative rounded-br-xl overflow-hidden bg-gray-900 cursor-pointer group">
          <img src={images[4]} alt="Interior" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
            + {images.length - 4} Photos
          </div>
        </div>

      </div>

      {/* ================= FULL SCREEN LIGHTBOX ================= */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-10"
          onClick={closeLightbox} // Background par click karne se band ho jayega
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50 transition-colors"
          >
            <FaTimes />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full z-50">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-10 text-white/50 hover:text-white text-4xl sm:text-5xl z-50 transition-all hover:scale-110 p-2"
          >
            <FaChevronLeft />
          </button>

          {/* Main Display Image */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex]} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-10 text-white/50 hover:text-white text-4xl sm:text-5xl z-50 transition-all hover:scale-110 p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      )}

            {/* About Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About this building</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The Grent is premium commercial office space in one of the emerging business location of Noida aimed at provide a contemporary and efficient workspace for forward looking businesses. With an area of 1950 sq. m., the building has a total built-up area of 20,000 sq. ft. with large typical floor plates measuring around 7867 sq. ft. to accommodate more flexible planning for a range of offices.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The building is structured as Basement + Stilt + Ground Floor + 6 upper floors, with external balconies on each floor to provide natural light and ventilation. In addition to balconies there is also a property maintained garden and landscaped terraces designed with multiple levels of planting to add green, relaxing spaces to work.
              </p>
            </div>

            {/* At a Glance Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">At a Glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                {atAGlanceData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-red-500 text-2xl mt-1">{item.icon}</div>
                    <div>
                      <p className="text-gray-400 text-xs font-semibold">{item.label}</p>
                      <p className="text-sm text-gray-900 font-medium mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Units */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Available units</h2>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 text-xs uppercase">
                      <th className="py-3 font-semibold">Super Area</th>
                      <th className="py-3 font-semibold">Seats</th>
                      <th className="py-3 font-semibold">Price</th>
                      <th className="py-3 font-semibold text-right">Enquiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 text-sm">
                      <td className="py-4 font-bold text-gray-800">7867 sq.ft.</td>
                      <td className="py-4 text-gray-600">78 seats</td>
                      <td className="py-4 text-gray-600">5-10 lacs</td>
                      <td className="py-4 text-right">
                        <button className="text-red-600 font-medium hover:text-red-700 flex items-center gap-2 justify-end w-full">
                          <FaWhatsapp className="text-green-500 text-lg" /> Send WhatsApp
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="text-red-500 text-lg">{item.icon}</div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interested Banner */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Interested in this building?</h3>
                <p className="text-sm text-gray-600 mt-1">Get a callback from our leasing team within 30 minutes.</p>
              </div>
              <button className="bg-white text-red-600 font-bold border border-red-200 shadow-sm py-2.5 px-6 rounded-lg hover:bg-red-50 transition flex items-center gap-2">
                <FaPhoneAlt /> Talk to an Expert
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
      
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 mb-1">Neighbourhood</h2>
      <p className="text-sm text-gray-500 mb-6">
        Nearby business conveniences and connectivity around this building.
      </p>

      {/* ================= MAP CONTAINER ================= */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 mb-6 bg-gray-100">
        
        {/* Placeholder Map (Iframe) - Replace with real Google Maps API later */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112148.65584557764!2d77.30606352932971!3d28.552931481977717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale-[20%]" 
          loading="lazy"
          title="Map Placeholder"
        ></iframe>

        {/* Floating Info Card (Bottom Left inside Map) */}
        <div className="absolute bottom-4 left-4 right-14 sm:right-auto sm:w-[450px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-10">
          
          {/* Card Header */}
          <div className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <MdTrain className="text-blue-500 text-xl" />
              <span className="font-semibold text-gray-800 text-sm">2 Metro around Magnum Tower</span>
            </div>
            <FaChevronDown className="text-gray-400 text-xs" />
          </div>

          {/* Card Body (List) */}
          <div className="px-4 pb-4 pt-1 bg-white">
            <div className="space-y-3">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{place.name}</span>
                  <span className="text-gray-600">
                    {place.time} <span className="text-gray-400">{place.distance}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRANSPORT PILLS ================= */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {["Metro", "Bus", "Airport"].map((transport) => (
          <button
            key={transport}
            onClick={() => setActiveTransport(transport)}
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeTransport === transport
                ? "bg-[#D32F2F] text-white border-[#D32F2F]"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {transport}
          </button>
        ))}
      </div>

      {/* ================= CATEGORY TABS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center py-4 px-2 rounded-xl border transition-all ${
                isActive
                  ? "border-[#D32F2F] text-[#D32F2F] bg-red-50/30"
                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="mb-2">{category.icon}</div>
              <span className={`text-xs font-medium ${isActive ? "text-[#D32F2F]" : "text-gray-600"}`}>
                {category.label}
              </span>
            </button>
          );
        })}
      </div>


          </div>
          </div>

          {/* ================= RIGHT COLUMN (STICKY LEAD FORM) ================= */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              
              {/* Advisor Card */}
              {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Your Advisor</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                     <img src="https://i.pravatar.cc/150?img=11" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">tosh</h4>
                    <p className="text-xs text-green-600 flex items-center gap-1 font-medium mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Replies in minutes
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-lg flex justify-center items-center gap-2 text-sm transition shadow-sm">
                    <FaWhatsapp className="text-green-500 text-lg" /> WhatsApp
                  </button>
                  <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-lg flex justify-center items-center gap-2 text-sm transition shadow-sm">
                    <FaPhoneAlt className="text-gray-400" /> +9112345678
                  </button>
                </div>
              </div> */}

              {/* Lead Form */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Send a query</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <input type="email" placeholder="E-mail" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none">
                      <option>IN +91</option>
                    </select>
                    <input type="text" placeholder="Mobile Number" className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <textarea placeholder="Type your Message Here" rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
                  <button type="button" className="w-full bg-[#D32F2F] hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Send Query
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

        {/* ================= FULL WIDTH SECTION: SIMILAR PROPERTIES ================= */}
        <div className="mt-16 mb-8">
          <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-6 text-sm">Similar Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Property Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition">
              <div className="relative h-48">
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded z-10">FOR RENT</span>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">Ready to Move 7000 sq.ft. Furnished Office for Rent in Sector-136 Noida</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3"><FaMapMarkerAlt /> Sector-136 Noida</p>
                <div className="flex gap-4 text-xs text-gray-600 mb-4">
                   <p className="flex items-center gap-1"><FaBuilding className="text-red-500"/> Office Space</p>
                   <p className="flex items-center gap-1"><FaRulerCombined className="text-red-500"/> 7,000 sq.ft.</p>
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-auto">
                   <p className="text-red-600 font-bold">₹3.85 lac</p>
                   <span className="text-xs font-semibold text-gray-500 hover:text-gray-900">Know More</span>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition">
              <div className="relative h-48">
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded z-10">FOR RENT</span>
                <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">16000 sq.ft. Premium Office for Rent in Sovereign Corporate Tower</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3"><FaMapMarkerAlt /> Sector-136 Noida</p>
                <div className="flex gap-4 text-xs text-gray-600 mb-4">
                   <p className="flex items-center gap-1"><FaBuilding className="text-red-500"/> Office Space</p>
                   <p className="flex items-center gap-1"><FaRulerCombined className="text-red-500"/> 16,000 sq.ft.</p>
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-auto">
                   <p className="text-red-600 font-bold">₹9.6 lac</p>
                   <span className="text-xs font-semibold text-gray-500 hover:text-gray-900">Know More</span>
                </div>
              </div>
            </div>

            {/* Duplicate for demo filling */}
            <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition">
              <div className="relative h-48 bg-gray-200">
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded z-10">FOR RENT</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">Fully Furnished 7000 sq.ft. Office Space...</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3"><FaMapMarkerAlt /> Sector-63 Noida</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-auto">
                   <p className="text-red-600 font-bold">₹5.6 lac</p>
                   <span className="text-xs font-semibold text-gray-500">Know More</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition">
              <div className="relative h-48 bg-gray-200">
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded z-10">FOR RENT</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">1,00,000 sq.ft. Independent Office Building...</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3"><FaMapMarkerAlt /> Sector-135 Noida</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-auto">
                   <p className="text-red-600 font-bold">₹50 lac</p>
                   <span className="text-xs font-semibold text-gray-500">Know More</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}