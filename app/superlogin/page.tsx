"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi"; 
import logo from "@/public/logo-300.webp"; 



export default function SuperLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@gmail.com"); 
  const [password, setPassword] = useState("1234567890");

  const [errorMsg, setErrorMsg] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Backend API ko call kar rahe hain
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        // Invalid credentials
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      
      <div className="hidden lg:flex w-1/2 bg-[#F8FAFF] items-center justify-center relative">
        <div className="relative w-[80%] h-[80%]">
          <Image 
            src="/login-illustration.png" 
            alt="Login Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ========================================== */}
      {/* RIGHT SIDE: Login Form */}
      {/* ========================================== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          
          {/* Logo Area */}
          <div className="flex justify-center mb-10">
            {/* Yahan apni asli logo image lagayein */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
              {/* 1. Logo Section */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Propliners Logo" width={180} height={50} />
          </Link>
        </div>
            </div>
          </div>

          {/* Headings */}
          <h2 className="text-3xl font-bold text-[#1E293B] mb-2">
            Sign In to your Account
          </h2>
          <p className="text-gray-500 mb-8">
            Welcome back! please enter your detail
          </p>

          {errorMsg && (
      <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm font-medium mb-6 transition-all">
        {errorMsg}
      </div>
    )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Input */}
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <FiMail className="text-xl" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-[#F4F7FE] border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none py-3.5 pl-12 pr-4 transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <FiLock className="text-xl" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#F4F7FE] border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none py-3.5 pl-12 pr-12 transition-all tracking-wider"
                required
              />
              {/* Eye Icon for Show/Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-500/30 mt-4"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}