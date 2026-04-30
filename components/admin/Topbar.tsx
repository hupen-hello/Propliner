"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaUserCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';

export default function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Dummy user data (Aap isko baad me database se bhi laa sakte hain)
  const user = {
    name: "Admin User",
    email: "propline@gmail.com",
    role: "Superadmin"
  };

  // Jab user bahar click kare toh dropdown band ho jaye
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout Function
  const handleLogout = async () => {
    try {
      // 1. API hit karke cookie delete karein
      await fetch('/api/auth/logout', { method: 'POST' });
      
      // 2. Dropdown band karein
      setIsDropdownOpen(false);
      
      // 3. Login page par bhejein aur refresh karein
      router.push('/superlogin');
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 border-b border-gray-100 sticky top-0 z-10">
      
      {/* Left Side: Hamburger Menu */}
      <button className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors p-2 rounded-lg hover:bg-gray-100">
        <FaBars className="text-xl" />
      </button>
      
      {/* Right Side: Profile & Dropdown */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        
        {/* User Avatar Button */}
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-lg transition-colors focus:outline-none"
        >
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-gray-700 leading-none">{user.name}</p>
            <p className="text-xs text-gray-500 mt-1">{user.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 cursor-pointer shadow-sm">
            <FaUserCircle className="text-2xl" />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-gray-50">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
            </div>

            {/* Menu Links */}
            <div className="py-1">
              <button 
                onClick={() => { setIsDropdownOpen(false); /* Add Settings Route later */ }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
              >
                <FaCog className="text-gray-400" />
                Account Settings
              </button>
            </div>

            <div className="border-t border-gray-50 my-1"></div>

            {/* Logout Button */}
            <div className="py-1">
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors font-medium"
              >
                <FaSignOutAlt className="text-red-500" />
                Sign Out
              </button>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}