"use client";

import React, { useState } from "react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    information: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    zipCode: "",
    propertyType: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Thank you for your inquiry! Our experts will contact you soon.");
  };

  return (
    <section className="relative py-20 bg-[#1A1A1A] overflow-hidden">
  
  {/* --- 🖼️ BACKGROUND IMAGE LAYER --- */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1560184897-ae75f418493e"  
      alt="Propliners Realty Background" 
      className="w-full h-full object-cover" 
    />
    <div className="absolute inset-0 bg-black/70"></div> 
  </div>

  {/* --- CONTENT LAYER --- */}
  {/* z-10 ensure karta hai ki yeh content image ke upar rahe */}
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      
      {/* --- LEFT SIDE: TEXT CONTENT --- */}
      <div className="w-full lg:w-1/2 text-white">
        {/* <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Why <span className="text-[#EF4444]">Propliners Realty</span> Is The Perfect Choice?
        </h2>
        <p className="text-gray-400 text-sm mb-12">
          15+ Years of Trusted Real Estate Expertise
        </p> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 relative">

           {/* Feature 01 */}
          <div className="sm:col-start-1 text-5xl lg:text-3xl font-bold leading-tight mb-4">
             Why <span className="text-[#EF4444]">Propliners Realty</span> Is The Perfect Choice?
            {/* <h3 className="text-xl font-semibold mb-2">Real Estate Experts</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our experienced team is here to guide you through every step of your real estate journey, offering expert advice and support.
            </p> */}
          </div>
          
          {/* Feature 01 */}
          <div className="sm:col-start-2">
            <span className="block text-4xl font-light text-white border-b border-gray-700 pb-2 mb-4">
              01.
            </span>
            <h3 className="text-xl font-semibold mb-2">Real Estate Experts</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our experienced team is here to guide you through every step of your real estate journey, offering expert advice and support.
            </p>
          </div>

          {/* Feature 02 */}
          <div className="sm:col-start-1">
            <span className="block text-4xl font-light text-white border-b border-gray-700 pb-2 mb-4">
              02.
            </span>
            <h3 className="text-xl font-semibold mb-2">The Latest And Best Projects</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get access to the newest and most exciting projects, all in one place, stay ahead and find your next opportunity.
            </p>
          </div>

          {/* Feature 03 */}
          <div className="sm:col-start-2">
            <span className="block text-4xl font-light text-white border-b border-gray-700 pb-2 mb-4">
              03.
            </span>
            <h3 className="text-xl font-semibold mb-2">Find The Right Project For Your Budget</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We help you find the best projects that match your needs and budget, ensuring a perfect fit for your lifestyle or investment goals.
            </p>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: INQUIRY FORM --- */}
      <div className="w-full lg:w-1/2">
        {/* Form container maintains its bg-white */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 text-gray-900 border-t-4 border-[#EF4444]">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Inquiry Form</h3>
            <p className="text-gray-500 text-sm">
              Connect with trusted real estate experts. Complete the form to begin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Row 1: Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Inquiry Type</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  required
                >
                  <option value="">Select</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                  <option value="sell">Sell</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Information</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, information: e.target.value})}
                  required
                >
                  <option value="">I'm a...</option>
                  <option value="investor">Investor</option>
                  <option value="company">Corporate Entity</option>
                  <option value="broker">Broker</option>
                </select>
              </div>
            </div>

            {/* Row 2: Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" placeholder="First Name" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" placeholder="Last Name" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Row 3: Email & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" placeholder="Email Address" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Location</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="noida">Noida</option>
                  <option value="gurugram">Gurugram</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>

            {/* Row 4: Zip Code & Property */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Zip Code</label>
                <input 
                  type="text" placeholder="Zip Code" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                  onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-700 mb-1">Property</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                  required
                >
                  <option value="">Select type</option>
                  <option value="office">Office Space</option>
                  <option value="industrial">Industrial Property</option>
                  <option value="coworking">Co-working</option>
                </select>
              </div>
            </div>

            {/* GDPR Agreement */}
            <div className="pt-2">
              <label className="text-xs font-bold text-gray-700 mb-2 block">GDPR Agreement</label>
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="gdpr"
                  className="mt-1 w-4 h-4 accent-[#EF4444] cursor-pointer border-gray-300 rounded"
                  onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
                  required
                />
                <label htmlFor="gdpr" className="text-sm text-gray-600 leading-tight cursor-pointer">
                  I Authorize Propliners Realty to send notifications via SMS/RCS/Call/Email/Whatsapp.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#EF4444] hover:bg-red-600 text-white py-3.5 rounded-md font-bold text-sm tracking-wide transition-colors shadow-md"
              >
                Submit Inquiry
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}