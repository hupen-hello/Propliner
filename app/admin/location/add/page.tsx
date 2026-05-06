"use client";

import React from "react";

export default function AddLocationFilter() {
  // Saare locations ka array (taaki map karne me aasaani ho)
  const locations = [
    "Office Space (Delhi)",
    "IT/Corporate Parks (Delhi)",
    "Co-working (Delhi)",
    "IT/Corporate Parks (DLF Cyber City Gurgaon)",
    "Industrial Property (Factory In Greater Noida)",
    "Industrial Property (Factory space)",
    "Office Space (Film City Noida)",
    "Office Space (Gurgaon)",
    "IT/Corporate Parks (Gurgaon)",
    "Co-working (Gurgaon)",
    "Industrial Property (Industrial Property)",
    "Industrial Property (Industrial Shed)",
    "IT/Corporate Parks (Noida)",
    "Co-working (Noida)",
    "Office Space (Noida)",
    "Office Space (Noida Expressway)",
    "Office Space (Noida Office Market Report Q1 2026)",
    "Office Space (Noida Sector 62)",
    "Office Space (Office Space In Phase 1 Noida)",
    "Office Space (Office Space In Phase 3 Noida)",
    "Industrial Property (Warehouse Space)"
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Location Filter</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form className="space-y-8">
          
          {/* ================= CHECKBOX GRID SECTION ================= */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              For section
            </label>
            
            {/* 4 Columns Grid for Desktop, 2 for Tablet, 1 for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <label 
                  key={index} 
                  className={`flex items-start gap-3 p-3 rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors ${
                    // Last item ko center karne ke liye ek choti si trick agar wo akela bache
                    index === locations.length - 1 ? 'lg:col-start-2 lg:col-span-2 mx-auto w-full md:col-auto md:w-auto md:mx-0' : ''
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer flex-shrink-0" 
                  />
                  <span className="text-sm text-gray-700 leading-tight">
                    {location}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* ================= INPUT FIELDS SECTION ================= */}
          <div className="space-y-6">
            
            {/* Row 1: Location Filter & Meta Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Locationfilter</label>
                <input 
                  type="text" 
                  placeholder="locationfilter" 
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-300" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title (optional)</label>
                <input 
                  type="text" 
                  placeholder="meta Title" 
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-300" 
                />
              </div>
            </div>

            {/* Row 2: Meta Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description (optional)</label>
              <textarea 
                placeholder="Enter a description..." 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-20 resize-y" 
              />
            </div>

            {/* Row 3: Meta Keyword */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Keyword (optional)</label>
              <textarea 
                placeholder="Enter a keyword..." 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-20 resize-y" 
              />
            </div>
            
          </div>

          {/* ================= SUBMIT BUTTON ================= */}
          <div className="pt-2">
            <button 
              type="button" 
              className="bg-[#0052FF] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md transition-colors shadow-sm"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}