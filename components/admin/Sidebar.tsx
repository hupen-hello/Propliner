"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  FaRegListAlt, FaTags, FaMapMarkedAlt, FaWifi, 
  FaBuilding, FaLink, FaInfoCircle, FaStar, 
  FaQuestionCircle, FaBriefcase, FaChevronRight, FaChevronDown, FaSignOutAlt 
} from 'react-icons/fa';
import Image from "next/image";
import logo from "@/public/logo-300.webp"; 

export default function Sidebar({ isOpen, setIsOpen }: { isOpen?: boolean, setIsOpen?: (val: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Kis menu ko khula rakhna hai, usko track karne ke liye state
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Property Type');

  // Updated Menu Items with subItems (Exact like your design)
  const menuItems = [
    { 
      title: 'Property Type', 
      icon: FaRegListAlt, 
      subItems: [
        { title: 'Add Property Type', href: '/admin/property-type/add', dotColor: 'bg-blue-500' },
        { title: 'Property Type List', href: '/admin/property-type/list', dotColor: 'bg-orange-400' }
      ]
    },
    { 
      title: 'Category', 
      icon: FaTags, 
      subItems: [
        { title: 'Add Category', href: '/admin/category/add', dotColor: 'bg-blue-500' },
        { title: 'Category List', href: '/admin/category/list', dotColor: 'bg-orange-400' }
      ]
    },
    { 
      title: 'Location Filter', 
      icon: FaMapMarkedAlt, 
      subItems: [
        { title: 'Add Location', href: '/admin/location/add', dotColor: 'bg-blue-500' },
        { title: 'Location List', href: '/admin/location/list', dotColor: 'bg-orange-400' }
      ]
    },
    { 
      title: 'Amenities', 
      icon: FaWifi, 
      subItems: [
        { title: 'Add Amenities', href: '/admin/amenities/add', dotColor: 'bg-blue-500' },
        { title: 'Amenities List', href: '/admin/amenities/list', dotColor: 'bg-orange-400' }
      ]
    },
    { 
      title: 'Property', 
      icon: FaBuilding, 
      subItems: [
        { title: 'Add Property', href: '/admin/property/add', dotColor: 'bg-blue-500' },
        { title: 'Property List', href: '/admin/property/list', dotColor: 'bg-orange-400' }
      ]
    },
    { 
      title: 'Hot-Links', 
      icon: FaLink, 
      subItems: [
        { title: 'Add Hot-Link', href: '/admin/hot-links/add', dotColor: 'bg-blue-500' },
        { title: 'Hot-Links List', href: '/admin/hot-links/list', dotColor: 'bg-orange-400' }
      ]
    },
  ];

  const homePageItems = [
    { title: 'About Us', icon: FaInfoCircle, href: '/admin/about' },
    { title: 'About Feature', icon: FaStar, href: '/admin/feature' },
    { title: 'Why Choose Us', icon: FaQuestionCircle, href: '/admin/why-choose' },
    { title: 'Workspace', icon: FaBriefcase, href: '/admin/workspace' },
  ];

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/superlogin');
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleLinkClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  // Toggle Function for Dropdown Menus
  const toggleMenu = (title: string) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  return (
    <div className={`w-64 bg-white border-r border-gray-100 h-screen flex flex-col fixed left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${isOpen === false ? '-translate-x-full' : 'translate-x-0'} lg:translate-x-0`}>
      
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <Image src={logo} alt="Propliners Logo" width={180} height={50} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4 flex flex-col">
        
        {/* Active Dashboard Button */}
        <div className="px-4 mb-4">
          <Link 
            href="/admin" 
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium shadow-sm transition-colors ${pathname === '/admin' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
          >
            Admin Dashboard
          </Link>
        </div>

        {/* First Menu Section (Dropdowns) */}
        <div className="flex flex-col gap-1 px-4 mb-6">
          {menuItems.map((item, index) => {
            const isExpanded = expandedMenu === item.title;
            
            return (
              <div key={index} className="flex flex-col gap-1">
                {/* Parent Button */}
                <button 
                  onClick={() => toggleMenu(item.title)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium w-full ${isExpanded ? 'bg-[#3B82F6] text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`text-lg ${isExpanded ? 'text-white' : 'text-gray-400'}`} />
                    {item.title}
                  </div>
                  {isExpanded ? <FaChevronDown className="text-xs" /> : <FaChevronRight className="text-xs" />}
                </button>

                {/* Sub Items (Expandable) */}
                <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {item.subItems.map((sub, subIndex) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link 
                        key={subIndex} 
                        href={sub.href}
                        onClick={handleLinkClick}
                        className={`flex items-center gap-3 pl-11 pr-4 py-2 rounded-lg text-sm transition-colors ${isSubActive ? 'text-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                      >
                        {/* Colored Dot from image */}
                        <div className={`w-1.5 h-1.5 rounded-full ${sub.dotColor}`}></div>
                        {sub.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Header */}
        <h3 className="px-8 text-sm font-bold text-gray-800 mb-2 mt-4">Home Page</h3>

        {/* Second Menu Section (Direct Links) */}
        <div className="flex flex-col gap-1 px-4 mb-6">
          {homePageItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={index} 
                href={item.href} 
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors text-sm font-medium group ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`text-lg ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                  {item.title}
                </div>
                <FaChevronRight className={`text-xs ${isActive ? 'text-blue-600' : 'text-gray-300'}`} />
              </Link>
            )
          })}
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-auto px-4 pt-4 border-t border-gray-100 pb-4">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2.5 rounded-lg transition-colors text-sm font-bold"
          >
            <FaSignOutAlt className="text-lg" />
            Logout Account
          </button>
        </div>

      </div>
    </div>
  );
}