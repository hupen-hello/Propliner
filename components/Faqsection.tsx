"use client"; // Animation ke liye zaroori hai

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, Variants } from "framer-motion"; // Framer motion import karein

function Faqsection() {
  // State for FAQ Section
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "What types of properties do you deal with?",
      answer:
        "We primarily deal in commercial real estate including Office Spaces, Co-working spaces, Retail Shops, and Industrial Warehouses across Delhi NCR.",
    },
    {
      id: 2,
      question: "Do you charge any brokerage fees?",
      answer:
        "Our consulting fees vary depending on the property type and transaction size. However, we ensure complete transparency before initiating any process.",
    },
    {
      id: 3,
      question: "How do you help with lease documentation?",
      answer:
        "Our legal experts handle end-to-end lease documentation ensuring compliance with local authorities and securing your interests to mitigate future risks.",
    },
    {
      id: 4,
      question: "Can you help with office interior setup?",
      answer:
        "Yes! Apart from property leasing, we partner with top interior designers to provide a fully furnished, plug-and-play workspace setup tailored to your brand.",
    },
  ];

  // ==============================
  // Animations Variants Definition
  // ==============================

  // 1. Heading Animation (Fade in and slide down)
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // 2. Container for Faq Cards (Handles staggering)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card 0.15s ke gap par aayega
      },
    },
  };

  // 3. Individual Faq Card Animation (Fade in and slide up)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* SECTION: Background image logic yahan lagayi hai */}
      <section 
        className="relative py-10 lg:py-5 bg-gray-50 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          // UPDATE THIS PATH: Apni asli background image ka path yahan dalein
          backgroundImage: "url('/faq-')" 
        }}
      >
        {/* White Overlay: Taaki image ke upar text saaf dikhe */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

        <div className="relative max-w-4xl mx-auto px-4 z-10">
          
          {/* --- Animated Heading --- */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Jab heading 50% dikhe tab animate ho
            variants={headingVariants}
          >
            <span className="inline-block bg-red-50 text-[#EF4444] text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-red-100">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
              Frequently Asked <span className="text-[#EF4444]">Questions</span>
            </h2>
          </motion.div>

          {/* --- Animated FAQ Cards List --- */}
          <motion.div 
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Jab cards list 20% dikhe tab shuru ho
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={cardVariants} // Entry animation for each card
                className={`border rounded-xl transition-all duration-300 shadow-sm hover:shadow-md ${activeFaq === index ? "border-[#EF4444] bg-red-50/40" : "border-gray-100 bg-white"}`}
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span
                    className={`font-bold text-lg ${activeFaq === index ? "text-[#EF4444]" : "text-gray-900"}`}
                  >
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${activeFaq === index ? 'bg-white' : 'bg-gray-100'}`}>
                    <FaChevronDown
                      className={`text-gray-500 transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-[#EF4444]" : ""}`}
                    />
                  </div>
                </button>

                {/* Answer Box (Conditionally Rendered) */}
                <div
                  className={`overflow-hidden transition-all duration-300 px-6 md:px-8 ${activeFaq === index ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-600 leading-relaxed text-[15px] border-t border-gray-100 pt-5">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}

export default Faqsection;