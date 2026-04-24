"use client"; // Animation ke liye ye lagana zaroori hai
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // 'Variants' type import kiya hai
import {
  FaPlay,
  FaBuilding,
  FaFileContract,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

function Aboutsection() {
  // 1. Right side ke elements ke liye Container Variant
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ek ke baad ek items aayenge
      },
    },
  };

  // 2. Individual items ke liye Variant
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          
          {/* ========================================== */}
          {/* LEFT SIDE (Images) - Infinite Scroll Trigger */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // CRITICAL: once: false karne se ye baar-baar animate hoga
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-1/2 flex justify-end pb-12 lg:pb-0"
          >
            {/* Dotted Background */}
            <div
              className="absolute top-0 left-0 lg:left-10 w-40 h-40 z-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(#EF4444 2px, transparent 2px)",
                backgroundSize: "15px 15px",
              }}
            ></div>
            
            {/* Main Big Image */}
            <div className="relative z-10 w-11/12 lg:w-[85%] h-[450px] md:h-[550px] rounded-sm overflow-hidden shadow-sm border-[10px] border-white">
              <img
                src="./about-us.webp"
                alt="Propliners Realty Office"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Small Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }} // Baar-baar hone ke liye
              className="absolute bottom-0 left-0 w-3/5 md:w-1/2 h-[200px] md:h-[250px] z-20 bg-white p-2 md:p-3 shadow-xl"
            >
              <div className="relative w-full h-full overflow-hidden group">
                <img
                  src="./about-us.webp"
                  alt="Office Interior"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#EF4444] shadow-lg hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================== */}
          {/* RIGHT SIDE (Text) - Infinite Staggered Trigger */}
          {/* ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // once: false taaki har baar scroll par reset hokar chale
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            {/* Badge */}
            <motion.span variants={itemVariants} className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ABOUT US
            </motion.span>
            
            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Propliners Realty - A 6 Sigma Following
              <span className="text-[#EF4444]"> Company.</span>
            </motion.h2>
            
            {/* Paragraph */}
            <motion.p variants={itemVariants} className="text-gray-500 text-[15px] leading-relaxed mb-8">
              <strong>Propliners Realty</strong> is a prominent Consultancy firm
              which provides all type of Commercial & Industrial Real-estate
              solutions.
            </motion.p>
            
            {/* Feature Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
              {[
                { icon: FaFileContract, text: "Proper Documentation" },
                { icon: FaMoneyBillWave, text: "Guaranteed Best Prices" },
                { icon: FaShieldAlt, text: "Complete Legal Check" },
                { icon: FaBuilding, text: "Updated Portfolio" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="bg-red-50 p-2.5 rounded-full text-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white transition-colors duration-300">
                    <item.icon className="text-lg" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/About-us"
                className="inline-block bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                DISCOVER MORE
              </Link>
            </motion.div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Aboutsection;