"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";
import { PiDogFill } from "react-icons/pi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBF8F3] to-[#FFF5F0] flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 opacity-5 hidden lg:block">
        <PiDogFill className="w-64 h-64 text-[#E07C3C] rotate-12" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-5 hidden lg:block">
        <PiDogFill className="w-64 h-64 text-[#E07C3C] -rotate-12" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-10 animate-float">
        <FaPaw className="w-8 h-8 text-[#E07C3C]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 animate-float-delay">
        <FaPaw className="w-8 h-8 text-[#E07C3C]" />
      </div>
      <div className="absolute top-1/2 left-5 opacity-5 animate-float">
        <FaPaw className="w-12 h-12 text-[#E07C3C]" />
      </div>
      <div className="absolute bottom-1/3 right-5 opacity-5 animate-float-delay">
        <FaPaw className="w-12 h-12 text-[#E07C3C]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl"
      >
        {/* 404 Number with Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.2
          }}
          className="relative"
        >
          <h1 className="text-[120px] sm:text-[180px] lg:text-[220px] font-black leading-none tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">
              4
            </span>
            <span className="text-[#4A3728]">0</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#E07C3C]">
              4
            </span>
          </h1>
        </motion.div>

        {/* Paw Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            delay: 0.4
          }}
          className="flex justify-center -mt-10 sm:-mt-16"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#E07C3C]/10 flex items-center justify-center border-4 border-[#E07C3C]/20">
            <FaPaw className="w-10 h-10 sm:w-14 sm:h-14 text-[#E07C3C]" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A3728] mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-sm mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for pets..."
              className="w-full px-5 py-3 pl-12 rounded-full bg-white border-2 border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 transition-all duration-300 outline-none text-[#4A3728] text-sm"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E07C3C] hover:bg-[#C96B2E] text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors">
              Search
            </button>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <button className="inline-flex items-center gap-2 bg-[#E07C3C] hover:bg-[#C96B2E] text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <FaHome className="text-sm" />
              Go Back Home
            </button>
          </Link>
          <Link href="/allpets">
            <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#4A3728] px-8 py-3 rounded-full text-sm font-medium border-2 border-[#E07C3C]/30 hover:border-[#E07C3C] shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <FaArrowLeft className="text-sm" />
              Browse Pets
            </button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400"
        >
          <span>Quick links:</span>
          <Link href="/" className="hover:text-[#E07C3C] transition-colors">
            Home
          </Link>
          <span className="w-px h-4 bg-gray-300"></span>
          <Link href="/allpets" className="hover:text-[#E07C3C] transition-colors">
            All Pets
          </Link>
          <span className="w-px h-4 bg-gray-300"></span>
          <Link href="/dashboard/my-listings" className="hover:text-[#E07C3C] transition-colors">
            My Listings
          </Link>
          <span className="w-px h-4 bg-gray-300"></span>
          <Link href="/contact" className="hover:text-[#E07C3C] transition-colors">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;