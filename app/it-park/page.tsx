import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaAngleDoubleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

function page() {
  return (
    <div>
      {/* --- 1. INNER PAGE HERO & BREADCRUMB --- */}
      <section className="relative w-full h-[200px] md:h-[250px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[70px] lg:mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://propliners.in/assets/img/breadcrumb/01.webp"
            alt="Hot Links Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide uppercase">
            Office Space for Rent in IT Parks in Noida | Propliners
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors"
            >
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />
            <span className="text-[#EF4444]">Noida</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default page;
