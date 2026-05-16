"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

function Clientsection() {
    const clientLogos = [
        { id: 1, name: "Homeopathy", src: "/1.webp" },
        { id: 2, name: "Paree", src: "/2.webp" },
        { id: 3, name: "Prakash Books", src: "/3.webp" },
        { id: 4, name: "T-Series", src: "/4.webp" },
        { id: 5, name: "GIIS", src: "/5.webp" },
        { id: 6, name: "Lin Scan", src: "/6.webp" },
        { id: 7, name: "Stellar", src: "/7.webp" },
        { id: 8, name: "Stellar", src: "/8.webp" },
        { id: 9, name: "Stellar", src: "/9.webp" },
      ];

  return (
    <section className="py-5 bg-gray-50 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-8">
            OUR CLIENTS
          </span>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="flex items-center"
          >
            {clientLogos.map((client, index) => (
              <SwiperSlide
                key={`${client.id}-${index}`}
                className="flex justify-center items-center py-2"
              >
                <div className="w-36 h-20 bg-white flex items-center justify-center p-3 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer mx-auto grayscale hover:grayscale-0">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={100}
                    height={50}
                    className="object-contain max-h-full opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  )
}

export default Clientsection