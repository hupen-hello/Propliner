"use client"; // Animation ke liye zaroori hai
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Framer motion import kiya

function Locationsection() {
  const workspaces = [
    {
      id: 1,
      city: "Noida",
      title: "Sector 62 IT Hub",
      count: 12,
      image: "/noida.jpg",
    },
    {
      id: 2,
      city: "Gurgaon",
      title: "Cyber City Area",
      count: 8,
      image: "/gurgaon.jpg",
    },
    {
      id: 3,
      city: "Delhi",
      title: "Connaught Place",
      count: 5,
      image: "/new-delhi.jpg",
    },
    {
      id: 4,
      city: "Greater Noida",
      title: "Greater Noida",
      count: 5,
      image: "/greater-noida.jpg",
    },
  ];

  // 1. Grid Container ke liye Variants (Ek ke baad ek card aane ke liye)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card ke aane me thoda gap (0.15s)
      },
    },
  };

  // 2. Har ek Card ke liye Variants (Zoom-in effect)
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 }, // Shuru me thoda chota (0.8 scale) aur niche hoga
    visible: {
      opacity: 1,
      scale: 1, // Apne original size me aayega
      y: 0,
      transition: { 
        type: "spring", // Spring effect se zoom in natural lagta hai
        stiffness: 100, 
        damping: 12,
        duration: 0.5 
      },
    },
  };

  // 3. Heading ke liye Fade-down effect
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div>
      {/* overflow-hidden add kiya hai taaki scale hote waqt koi issue na aaye */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* --- Animated Header --- */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Har scroll par reset hoga
            className="text-center mb-12"
          >
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              AREA PROPERTIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Properties By <span className="text-[#EF4444]">Location</span>
            </h2>
          </motion.div>

          {/* --- Animated Cards Grid --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Jaise hi grid thoda sa dikhega, animation shuru
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {workspaces.map((workspace) => (
              <motion.div
                key={workspace.id}
                variants={cardVariants} // Zoom-in variant lagaya
                className="bg-white p-4 rounded-sm shadow-sm hover:shadow-lg border border-gray-100 transition-shadow duration-300 group"
              >
                <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden mb-5">
                  <Image
                    src={workspace.image}
                    alt={workspace.city}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">{workspace.count} Properties</span>
                  </div> */}
                </div>
                
                <div className="px-2 pb-2">
                  {/* <p className="text-gray-500 text-sm mb-1 font-medium">
                    
                  </p> */}
                  <h3 className="text-xl font-bold text-gray-900 mb-5 leading-tight group-hover:text-[#EF4444] transition-colors">
                   {workspace.city}
                  </h3>
                  {/* <Link href={`/it-park/${workspace.city.toLowerCase()}`} className="inline-flex items-center gap-2 text-[#EF4444] text-sm font-medium hover:text-red-700 transition-colors">
                    View Property <FaArrowRight className="text-xs" />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}

export default Locationsection;