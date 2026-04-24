"use client"; // Next.js mein hooks use karne ke liye ye zaroori hai

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { motion } from "framer-motion";

function Herosection() {
  // Saare states ab direct Herosection ke andar hain
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Multiple words
  const words = ["Work Space", "Innovation", "Success"];

  // useEffect ka syntax theek kar diya gaya hai
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      // Agar delete kar rahe hain toh ek letter kum karo, warna ek badao
      setText(
        isDeleting
          ? fullWord.substring(0, text.length - 1)
          : fullWord.substring(0, text.length + 1),
      );

      // Speed adjust karein (mitaate waqt thoda fast rakhte hain)
      setTypingSpeed(isDeleting ? 75 : 150);

      // Agar pura word likh liya toh wait karo phir delete shuru karo
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000); // 2 sec pause at end
      }
      // Agar pura word mit gaya toh agle word par jao
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      {/* ========================================== */}
      {/* 1. HERO SECTION (Dark/Image Base) */}
      {/* ========================================== */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">  
          <Image
            src="/bg-img.jpeg"
            alt="Background"
            fill 
            className="object-contain object-bottom" 
            priority
          />

        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-lg">
            Creative Environment For <br />
            <span className="text-[#ef4444] inline-flex items-center">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto drop-shadow-md">
            The Best Workspace Provider In Delhi/NCR
          </p>
          <Link
            href="#enquiry-section"
            className="inline-block bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-colors shadow-md"
          >
            Talk to An Expert
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
