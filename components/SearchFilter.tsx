"use client"; // Kyunki isme tabs (click events) hain, isliye ye client component hoga
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBuilding, FaRupeeSign } from 'react-icons/fa';

export default function SearchFilter() {
  const [activeTab, setActiveTab] = useState('Rent');

  return (
    // Negative margin (-mt-24) isko hero banner ke upar overlap karwayega
    <section className="relative z-30 -mt-24 max-w-6xl mx-auto px-4 mb-16">
      
      <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-100">
        
        {/* --- 1. TABS (Rent / Buy) --- */}
        <div className="flex items-center gap-6 mb-6 border-b border-gray-100 pb-3">
          <button 
            onClick={() => setActiveTab('IT')}
            className={`text-sm md:text-base font-bold pb-3 -mb-[14px] transition-colors ${
              activeTab === 'IT' 
                ? 'text-[#EF4444] border-b-2 border-[#EF4444]' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            IT/Corporate Parks
          </button>
          <button 
            onClick={() => setActiveTab('Office')}
            className={`text-sm md:text-base font-bold pb-3 -mb-[14px] transition-colors ${
              activeTab === 'Office' 
                ? 'text-[#EF4444] border-b-2 border-[#EF4444]' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Office Space
          </button>
          <button 
            onClick={() => setActiveTab('Co')}
            className={`text-sm md:text-base font-bold pb-3 -mb-[14px] transition-colors ${
              activeTab === 'Co' 
                ? 'text-[#EF4444] border-b-2 border-[#EF4444]' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
           Co-Working
          </button>
          <button 
            onClick={() => setActiveTab('Industrial')}
            className={`text-sm md:text-base font-bold pb-3 -mb-[14px] transition-colors ${
              activeTab === 'Industrial' 
                ? 'text-[#EF4444] border-b-2 border-[#EF4444]' 
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Industrial Property
          </button>
        </div>

        {/* --- 2. SEARCH FIELDS --- */}
        <form className="flex flex-col lg:flex-row items-center gap-4">
          
          {/* Location Dropdown */}
          <div className="w-full lg:flex-1 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-[#EF4444] text-lg" />
            </div>
            <select className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium appearance-none focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all cursor-pointer">
              <option value="">Select Location</option>
              <option value="noida">Noida (Sector 62, 16A...)</option>
              <option value="gurgaon">Gurgaon (Cyber City...)</option>
              <option value="delhi">Delhi (Connaught Place)</option>
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div className="w-full lg:flex-1 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaBuilding className="text-[#EF4444] text-lg" />
            </div>
            <select className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium appearance-none focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all cursor-pointer">
              <option value="">Property Type</option>
              <option value="office">Office Space</option>
              <option value="coworking">Co-working Space</option>
              <option value="retail">Retail Shop</option>
              <option value="warehouse">Warehouse / Industrial</option>
            </select>
          </div>

          {/* Budget Dropdown */}
          <div className="w-full lg:flex-1 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaRupeeSign className="text-[#EF4444] text-lg" />
            </div>
            <select className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium appearance-none focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-all cursor-pointer">
              <option value="">Select Budget</option>
              <option value="0-50k">Under ₹50,000</option>
              <option value="50k-1L">₹50,000 - ₹1 Lac</option>
              <option value="1L-5L">₹1 Lac - ₹5 Lacs</option>
              <option value="5L+">Above ₹5 Lacs</option>
            </select>
          </div>

          {/* Search Button */}
          <button 
            type="button" 
            className="w-full lg:w-auto bg-[#EF4444] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-red-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-3 shrink-0"
          >
            <FaSearch className="text-sm" />
            <span>Search</span>
          </button>

        </form>
      </div>
    </section>
  );
}