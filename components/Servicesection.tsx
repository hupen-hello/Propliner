"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // FIX 1: Values correct kar di hain. Ab ye thoda right se shuru hokar left me smooth slide hoga
  const x = useTransform(scrollYProgress, [0, 1], ["-65%", "-1%"]);

  return (
    <div>
      {/* h-[250vh] rakha hai taaki lamba scroll ho par bohot zyada lamba bhi na lage */}
      <section ref={targetRef} className="relative h-[250vh] bg-gray-50">
        
        {/* FIX 2: flex-col aur justify-center lagaya hai. Isse Header aur Cards hamesha screen ke center mein ek sath rahenge */}
        <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
          
          {/* --- Header --- */}
          {/* FIX 3: absolute position hata di. Ab ye cards ke theek upar respectfully set hoga */}
          <div className="w-full text-center mb-16 px-4">
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              OUR SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Main <span className="text-[#EF4444]">Focus</span>
            </h2>
          </div>

          {/* --- Scrolling Track --- */}
          <motion.div 
            style={{ x }} 
            // Pl-[5vw] se left me thodi saans lene ki jagah (breathing room) milegi
            className="flex gap-6 lg:gap-8 pl-[5vw] lg:pl-[10vw] w-max"
          >
            {services.map((item) => (
              <div
                key={item.id}
                // Cards ki width perfect set ki hai taaki na zyada chote lagein na zyada bade (320px - 350px)
                className="w-[85vw] md:w-[320px] lg:w-[300px] flex-shrink-0 group bg-white p-8 text-center rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] border-b-4 border-transparent hover:border-[#EF4444] transition-all duration-500 flex flex-col"
              >
                <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-red-100/50 rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                  <item.icon className="text-4xl text-[#EF4444] z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default Servicesection;