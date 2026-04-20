"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

function page() {
    const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap apna backend API call lagayenge form submit karne ke liye
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };


  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* --- 1. INNER PAGE HERO & BREADCRUMB --- */}
      <section className="relative w-full h-[250px] md:h-[350px] flex flex-col justify-center items-center text-center px-4 overflow-hidden mt-[70px] lg:mt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://propliners.in/assets/img/breadcrumb/01.webp" 
            alt="Contact Us Background"
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-[15px] font-medium">
            <Link href="/" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors">
              <FaHome className="text-lg pb-[2px]" /> Home
            </Link>
            <FaAngleDoubleRight className="text-white text-xs mt-[2px]" />
            <span className="text-[#EF4444]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* --- 2. CONTACT INFO & FORM SECTION --- */}
      <section className="py-16 md:py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: Contact Information */}
            <div className="w-full lg:w-1/3 bg-white p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="space-y-10">
                
                {/* Info Item 1 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-[#EF4444] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Propliners Realty</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      1215A, Tower-B Plot no A-40 I-Thum, Sector 62, Noida 201301
                    </p>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-[#EF4444] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      +91-9899920149<br />+91-9899920199
                    </p>
                  </div>
                </div>

                {/* Info Item 3 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-[#EF4444] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:sales@propliners.in" className="text-gray-500 text-sm hover:text-[#EF4444] transition-colors">
                      sales@propliners.in
                    </a>
                  </div>
                </div>

                {/* Info Item 4 */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-[#EF4444] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Office Open</h4>
                    <p className="text-gray-500 text-sm">24 x 7</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
              <p className="text-gray-500 text-sm mb-8">
                We'll get back to you as soon as we can. We look forward to hearing from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" placeholder="Your Name" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent transition-all text-sm"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" placeholder="Your Email" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent transition-all text-sm"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent transition-all text-sm"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Your Subject" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent transition-all text-sm"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                {/* Textarea */}
                <textarea 
                  placeholder="Write Your Message" rows={5} required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:border-transparent transition-all text-sm resize-y"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>

                {/* Dummy Recaptcha Box (Visual only for now) */}
                <div className="inline-flex items-center gap-4 p-2 pr-4 border border-gray-200 rounded-md bg-gray-50">
                   <input type="checkbox" className="w-5 h-5 ml-2 accent-[#EF4444] cursor-pointer" />
                   <span className="text-sm text-gray-600">I'm not a robot</span>
                   <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCaptcha" width={24} height={24} />
                </div>

                <br/>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="inline-flex bg-[#EF4444] hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold items-center gap-3 transition-transform hover:scale-105 shadow-md"
                >
                  <span className="text-sm tracking-wide">SEND MESSAGE</span>
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    <FaPaperPlane className="text-[#EF4444] text-xs" />
                  </div>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. GOOGLE MAP SECTION --- */}
      {/* Full width map container */}
      <section className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.9279880519193!2d77.3723967!3d28.627061400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5170aabeab5%3A0x338f32934534cb5b!2sPropliners%20Realty!5e1!3m2!1sen!2sin!4v1776247069738!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  )
}

export default page
