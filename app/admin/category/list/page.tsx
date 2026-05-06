"use client";

import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function CategoryTypeList() {
  // Dummy Data - API connect hone ke baad ye data backend se aayega
  const [CategoryTypes, setCategoryTypes] = useState([
    { id: 1, title: "IT/Corporate Parks", status: "Active" },
    { id: 2, title: "Office Space", status: "Active" },
    { id: 3, title: "Co-working", status: "Active" },
    { id: 4, title: "Industrial Category", status: "Active" },
  ]);

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Category Type List</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        
        {/* ================= TOP FILTER BAR ================= */}
        <div className="flex items-center gap-4 mb-6">
          <input 
            type="text" 
            placeholder="Keyword" 
            className="w-64 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
          />
          <input 
            type="number" 
            defaultValue={20} 
            className="w-24 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" 
          />
          <button 
            className="bg-[#0052FF] hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Search
          </button>
        </div>

        {/* ================= TABLE AREA ================= */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead className="bg-[#F8FAFC] border-b border-gray-200 text-sm font-bold text-gray-800">
              <tr>
                <th className="p-4 w-24">Sr No</th>
                <th className="p-4">Title</th>
                <th className="p-4 w-32">Status</th>
                <th className="p-4 w-32">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-sm text-gray-700">
              {CategoryTypes.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index === CategoryTypes.length - 1 ? 'border-none' : ''}`}
                >
                  <td className="p-4 text-gray-500">{item.id}</td>
                  <td className="p-4">{item.title}</td>
                  
                  {/* Status Badge */}
                  <td className="p-4">
                    <span className="bg-[#22C55E] text-white px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide">
                      {item.status}
                    </span>
                  </td>
                  
                  {/* Action Buttons (Edit & Delete) */}
                  <td className="p-4 flex items-center gap-2">
                    <button 
                      className="bg-green-50 hover:bg-green-100 text-green-500 p-2 rounded-md transition-colors"
                      title="Edit"
                    >
                      <FaRegEdit className="text-base" />
                    </button>
                    <button 
                      className="bg-red-50 hover:bg-red-100 text-red-500 p-2 rounded-md transition-colors"
                      title="Delete"
                    >
                      <FaRegTrashAlt className="text-base" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>

      </div>
    </div>
  );
}