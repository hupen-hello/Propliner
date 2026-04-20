import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaCloud } from "react-icons/fa6";
import logo from "@/public/logo-300.webp";

const Footer = () => {
  return (
    <footer className="relative bg-[#1A1A1A] pt-20 pb-0 text-white mt-auto z-10">
      {/* Top Red Chevron (Triangle Shape) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-8 md:h-12 lg:h-16"
        >
          {/* Ye SVG code exact wahi red V-shape banayega */}
          <path d="M0,0 L1200,0 L600,120 Z" fill="#EF4444"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-6">
              {/* Dummy Logo setup, replace with your actual Image tag later */}
              <Image src={logo} alt="Logo" width={180} height={50} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Propliners Realty is a prominent Consultancy firm which provides
              all commercial & Industrial Real-estate solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#EF4444]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "IT/Corporate Parks",
                "Office Space",
                "Co-working",
                "Industrial Property",
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <FaAngleRight className="text-[#EF4444] text-xs" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Support & Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#EF4444]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Hot Links", href: "/Hot-links" },
                { name: "Contact Us", href: "/Contact-Us" },
                { name: "Terms Of Services", href: "/Term-Condition" },
                { name: "Privacy Policy", href: "/Policy" },
              ].map((item, idx) => (
                <li key={idx}>
                  {/* href={item.href} lagane se exact page open hoga */}
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <FaAngleRight className="text-[#EF4444] text-xs" />{" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#EF4444]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#EF4444] text-lg shrink-0 mt-1" />
                <span>
                  1215A, Tower-B Plot no A-40 I-Thum Sector 62 Noida 201301
                </span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm items-center">
                <FaPhoneAlt className="text-[#EF4444] shrink-0" />
                <span>+91-9899920199</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm items-center">
                <FaPhoneAlt className="text-[#EF4444] shrink-0" />
                <span>+91-9899920149</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm items-center">
                <FaEnvelope className="text-[#EF4444] shrink-0" />
                <a
                  href="mailto:sales@propliners.in"
                  className="hover:text-white"
                >
                  sales@propliners.in
                </a>
              </li>
            </ul>

            {/* Social Icons inside Red Circles */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                FaCloud,
                FaFacebookF,
                FaWhatsapp,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
                FaXTwitter,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#EF4444] text-white flex items-center justify-center hover:bg-white hover:text-[#EF4444] transition-colors shadow-sm"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="bg-black py-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            © Copyright Propliners Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
