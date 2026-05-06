"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaBuilding, 
  FaRulerCombined, FaCheckCircle, FaCar, FaWind, 
  FaLayerGroup, FaArrowRight, FaTools, FaShieldAlt, 
  FaTree, FaDumbbell, FaCoffee, FaFireExtinguisher
} from "react-icons/fa";
import { MdOutlineElevator, MdOutlineLocalAirport, MdOutlineSubway } from "react-icons/md";

export default function PropertyDetail() {
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
          Home | Office for Rent | Noida | Sector-136 Noida | <span className="text-gray-900 font-medium">The Grent</span>
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
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
              {/* Main Big Image */}
              <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Building" className="w-full h-full object-cover" />
              </div>
              {/* 4 Small Images */}
              <div className="col-span-1 row-span-1 relative bg-gray-200"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" className="w-full h-full object-cover" /></div>
              <div className="col-span-1 row-span-1 relative rounded-tr-xl overflow-hidden bg-gray-200"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80" className="w-full h-full object-cover" /></div>
              <div className="col-span-1 row-span-1 relative bg-gray-200"><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&q=80" className="w-full h-full object-cover" /></div>
              {/* Plus More Overlay */}
              <div className="col-span-1 row-span-1 relative rounded-br-xl overflow-hidden bg-gray-900 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  + 8 Photos
                </div>
              </div>
            </div>

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
                      <th className="py-3 font-semibold text-right">Enquiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 text-sm">
                      <td className="py-4 font-bold text-gray-800">7867 sq.ft.</td>
                      <td className="py-4 text-gray-600">78 seats</td>
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

          </div>

          {/* ================= RIGHT COLUMN (STICKY LEAD FORM) ================= */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              
              {/* Advisor Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
              </div>

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