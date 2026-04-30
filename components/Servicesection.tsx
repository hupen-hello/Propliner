"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaLaptop, FaWifi, FaCubes, FaClock } from "react-icons/fa";

function Servicesection() {
  const services = [
    {
      id: 1,
      icon: FaLaptop,
      title: "Creative Space",
      desc: "Modern and inspiring workspaces designed to boost creativity and collaboration. Perfect for dynamic and growing businesses.",
    },
    {
      id: 2,
      icon: FaWifi,
      title: "High Speed Wifi",
      desc: "Stay connected with fast and reliable internet connectivity. Ideal for seamless operations and global communication.",
    },
    {
      id: 3,
      icon: FaCubes,
      title: "Customize Space",
      desc: "Get workspaces tailored to your business needs and brand identity. We design spaces that grow with your goals.",
    },
    {
      id: 4,
      icon: FaClock,
      title: "24/7 Access",
      desc: "Access your workspace anytime with full security. Work flexibly—day or night, as per your convenience.",
    },
  ];

  // 1. Header ke liye simple Fade-down animation
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // 2. Grid Container ke liye Stagger Effect (Ek ke baad ek card aane ke liye)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card 0.15s ke gap par aayega
      },
    },
  };

  // 3. Cards ke liye Fade-up animation (Niche se upar)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* --- Animated Header --- */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Scroll karne par ek baar chalega
            className="text-center mb-16"
          >
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              OUR SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Main <span className="text-[#EF4444]">Focus</span>
            </h2>
          </motion.div>

          {/* --- Animated Normal Grid --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants} // Fade-up animation apply ki hai
                className="group bg-white p-8 text-center rounded-xl shadow-sm hover:shadow-lg border-b-4 border-transparent hover:border-[#EF4444] transition-all duration-500 flex flex-col h-full"
              >
                <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-red-100/50 rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                  <item.icon className="text-4xl text-[#EF4444] z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default Servicesection;