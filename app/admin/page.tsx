import React from 'react';
import { 
  FaLightbulb, FaMapMarkerAlt, FaBuilding, 
  FaImage, FaQuoteLeft, FaUsers, FaCheckCircle 
} from 'react-icons/fa';

export default function SuperuserDashboard() {
  // Data array exactly matching your screenshot
  const stats = [
    {
      title: "Total Property Type",
      value: "4",
      trend: "+0",
      icon: FaLightbulb,
      iconBg: "bg-[#1D4ED8]", // Blue
      cardBg: "bg-gradient-to-br from-blue-50/50 to-white",
    },
    {
      title: "Total Categories",
      value: "21",
      trend: "+0",
      icon: FaMapMarkerAlt,
      iconBg: "bg-[#15803D]", // Green
      cardBg: "bg-gradient-to-br from-purple-50/50 to-white",
    },
    {
      title: "Total Properties",
      value: "207",
      trend: "+2",
      icon: FaBuilding,
      iconBg: "bg-[#EAB308]", // Yellow
      cardBg: "bg-gradient-to-br from-indigo-50/50 to-white",
    },
    {
      title: "Total Banners",
      value: "3",
      trend: "+0",
      icon: FaImage,
      iconBg: "bg-[#DC2626]", // Red
      cardBg: "bg-gradient-to-br from-green-50/50 to-white",
    },
    {
      title: "Total Testimonials",
      value: "4",
      trend: "+0",
      icon: FaQuoteLeft,
      iconBg: "bg-[#06B6D4]", // Cyan
      cardBg: "bg-gradient-to-br from-red-50/50 to-white",
    },
    {
      title: "Total Clients",
      value: "27",
      trend: "+0",
      icon: FaUsers,
      iconBg: "bg-[#4B5563]", // Dark Gray
      cardBg: "bg-white",
    },
    {
      title: "Total Amenities",
      value: "15",
      trend: "+0",
      icon: FaCheckCircle,
      iconBg: "bg-[#8B5CF6]",
      cardBg: "bg-white",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.cardBg} rounded-xl border border-gray-100 p-6 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300`}
          >
            <div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <div className="flex items-center text-sm">
                <span className="text-green-500 font-medium text-xs">▲ {stat.trend}</span>
                <span className="text-gray-500 ml-1 text-xs">This month</span>
              </div>
            </div>
            
            {/* Icon Circle */}
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${stat.iconBg} shadow-sm`}>
              <stat.icon className="text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}