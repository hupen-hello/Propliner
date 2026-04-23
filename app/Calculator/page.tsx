"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBuilding, FaUsers, FaCalculator, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function CalculatorPage() {
  const [teamSize, setTeamSize] = useState<string>('');
  const [officeType, setOfficeType] = useState<number>(85); // Default to Premium
  const [isCalculated, setIsCalculated] = useState(false);
  const [results, setResults] = useState({ area: 0, minRent: '0', maxRent: '0' });

  // Calculation Logic
  const calculateRequirement = (e: React.FormEvent) => {
    e.preventDefault();
    
    const team = parseInt(teamSize);
    
    if (team > 0) {
      const area = team * officeType;
      // Based on average rates (₹55 - ₹85/sq.ft.)
      const lowRent = (area * 55).toLocaleString('en-IN'); 
      const highRent = (area * 85).toLocaleString('en-IN');
      
      setResults({
        area: area,
        minRent: lowRent,
        maxRent: highRent
      });
      setIsCalculated(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Header Section */}
      <div className="bg-[#1A1A1A] text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Office Space Calculator</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Plan your workspace efficiently. Get an instant estimate of the required area and expected monthly rental cost based on your team size.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-15">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          
          {/* ========================================== */}
          {/* LEFT: Calculator Form */}
          {/* ========================================== */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 border-t-4 border-[#EF4444]">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-3 rounded-full text-[#EF4444]">
                  <FaCalculator className="text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Needs</h2>
                  <p className="text-sm text-gray-500">For Delhi NCR (Noida/Gurgaon)</p>
                </div>
              </div>

              <form onSubmit={calculateRequirement} className="space-y-6">
                
                {/* Team Size Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Number of Employees:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUsers className="text-gray-400" />
                    </div>
                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="e.g. 25"
                      value={teamSize}
                      onChange={(e) => {
                        setTeamSize(e.target.value);
                        setIsCalculated(false); // Hide results if input changes
                      }}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#EF4444] transition-all"
                    />
                  </div>
                </div>

                {/* Office Type Select */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Office Density / Type:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaBuilding className="text-gray-400" />
                    </div>
                    <select
                      value={officeType}
                      onChange={(e) => {
                        setOfficeType(Number(e.target.value));
                        setIsCalculated(false);
                      }}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#EF4444] transition-all cursor-pointer appearance-none"
                    >
                      <option value={60}>Standard / Efficient (60 sq.ft/person)</option>
                      <option value={85}>Premium / Spacious (85 sq.ft/person)</option>
                      <option value={110}>Luxury / HQ (110 sq.ft/person)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-black text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  Get Instant Estimate <FaArrowRight className="text-sm" />
                </button>

              </form>
            </div>
          </div>

          {/* ========================================== */}
          {/* RIGHT: Results Display (Only shows after calc) */}
          {/* ========================================== */}
          {isCalculated && (
            <div className="w-full lg:w-5/12 animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 h-full flex flex-col border border-gray-100">
                
                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">
                  Your Requirement Estimate
                </h3>
                
                <div className="space-y-6 flex-grow">
                  {/* Area Result */}
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                    <p className="text-sm text-[#EF4444] font-bold uppercase tracking-wide mb-1">Estimated Area</p>
                    <p className="text-3xl font-extrabold text-gray-900">
                      {results.area.toLocaleString('en-IN')} <span className="text-lg text-gray-500 font-medium">sq. ft.</span>
                    </p>
                  </div>

                  {/* Rent Result */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mb-1">Estimated Monthly Rent</p>
                    <p className="text-2xl font-extrabold text-[#1A1A1A]">
                      ₹ {results.minRent} - {results.maxRent}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2">
                      *Based on average rates (₹55-₹85/sq.ft.) depending on building quality and exact location.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/919899920199?text=Hi, I am looking for an office space of approximately ${results.area.toLocaleString('en-IN')} sq.ft. for a team of ${teamSize} people. Can you share some options?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FaWhatsapp className="text-xl" />
                    Check Real Availability
                  </a>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}