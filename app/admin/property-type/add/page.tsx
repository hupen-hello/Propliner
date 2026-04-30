"use client";

import React, { useState } from "react";
// Icons for Editor and Amenities
import { 
  FaBold, FaItalic, FaStrikethrough, FaListUl, FaListOl, FaLink, FaImage, FaTable,
  FaPowerOff, FaCompass, FaSnowflake, FaShieldAlt, FaCloudShowersHeavy, 
  FaParking, FaUtensils, FaTools, FaChargingStation, FaCar, 
  FaWifi, FaStore, FaUsers, FaFireExtinguisher 
} from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";

export default function AddPropertyType() {
  // Dummy state for file upload text
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  // Amenities Data Array with Icons
  const amenitiesList = [
    { name: "Power Back-Up", icon: <FaPowerOff className="text-gray-600" /> },
    { name: "Vaastu Compliant", icon: <FaCompass className="text-gray-600" /> },
    { name: "Air Conditioned", icon: <FaSnowflake className="text-gray-600" /> },
    { name: "24 X 7 Security", icon: <FaShieldAlt className="text-gray-600" /> },
    { name: "Rain Water Harvesting", icon: <FaCloudShowersHeavy className="text-gray-600" /> },
    { name: "Reserved Parking", icon: <FaParking className="text-gray-600" /> },
    { name: "Common Cafeteria", icon: <FaUtensils className="text-gray-600" /> },
    { name: "Maintenance Staff", icon: <FaTools className="text-gray-600" /> },
    { name: "EV Charging", icon: <FaChargingStation className="text-gray-600" /> },
    { name: "Visitor Parking", icon: <FaCar className="text-gray-600" /> },
    { name: "High Speed Lifts", icon: <MdOutlineElevator className="text-gray-600 text-lg" /> },
    { name: "High Speed Internet", icon: <FaWifi className="text-gray-600" /> },
    { name: "Retail", icon: <FaStore className="text-gray-600" /> },
    { name: "Co Working", icon: <FaUsers className="text-gray-600" /> },
    { name: "Fire Fighting Work", icon: <FaFireExtinguisher className="text-red-500" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Property Type</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form className="space-y-8">
          
          {/* ================= TOP SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
              <input 
                type="text" 
                placeholder="Title" 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Image</label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <label className="bg-gray-50 border-r border-gray-200 px-4 py-2.5 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
                  Choose File
                  <input type="file" className="hidden" onChange={handleFileChange} accept=".png, .jpg, .jpeg" />
                </label>
                <span className="px-4 text-sm text-gray-500 truncate flex-1">{fileName}</span>
              </div>
              <p className="text-xs text-blue-500 mt-1.5 font-medium">
                ( png , jpg , jpeg || size max 2mb || 1500 px X 900 px )
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Alt */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Alt</label>
              <input 
                type="text" 
                placeholder="Alt" 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Slug (optional)</label>
              <input 
                type="text" 
                placeholder="slug" 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
              />
            </div>

            {/* Order No */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Order no</label>
              <input 
                type="text" 
                placeholder="order_no" 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
              />
            </div>
          </div>

          {/* ================= DESCRIPTION (WYSIWYG) ================= */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Toolbar Placeholder */}
              <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-3 text-gray-600">
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaBold /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaItalic /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaStrikethrough /></button>
                <div className="w-px h-5 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaListUl /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaListOl /></button>
                <div className="w-px h-5 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaLink /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaImage /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><FaTable /></button>
                <select className="border border-gray-300 rounded text-xs px-1 py-1 bg-white ml-2">
                  <option>Format</option>
                  <option>Heading 1</option>
                  <option>Heading 2</option>
                </select>
              </div>
              {/* Textarea Area */}
              <textarea 
                className="w-full h-40 p-4 text-sm focus:outline-none text-gray-700 resize-y" 
                placeholder="Type your description here..."
              ></textarea>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* ================= AMENITIES ================= */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
              {amenitiesList.map((amenity, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" 
                  />
                  {amenity.icon}
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {amenity.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* ================= SEO / META DATA ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Meta Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Title (optional)</label>
              <input 
                type="text" 
                placeholder="meta Title" 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
              />
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description (optional)</label>
              <textarea 
                placeholder="Enter a description..." 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-11 resize-none" 
              />
            </div>

            {/* Meta Keyword */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Keyword (optional)</label>
              <textarea 
                placeholder="Enter a keyword..." 
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-11 resize-none" 
              />
            </div>
          </div>

          {/* Schema Data */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Schema data (optional)</label>
            <textarea 
              placeholder="Enter schema data..." 
              className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 h-28" 
            />
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