"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { TbCoinTakaFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const PetCard = ({ pet }) => {
  const {
    _id,
    petName,
    breed,
    species,
    gender,
    age,
    health,
    fee,
    location,
    imageUrl,
    description,
  } = pet;

  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const notify = () => toast.success(`Added ${petName} to favorites! ❤️`);

  const handleAdopt = () => {
    toast.success(`Adoption request sent for ${petName}! 🐾`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 hover:border-[#E07C3C]/30 group">
        {/* Image Container */}
        <div className="relative w-full h-56 overflow-hidden bg-[#EBF3EE]">
          <Image
            src={imageUrl || "/images/default-pet.jpg"}
            alt={petName || "Pet"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <div className="badge bg-[#E07C3C] text-white border-none text-xs px-3 py-1.5 shadow-md">
              {species || "Pet"}
            </div>
            {health && (
              <div className="badge bg-green-500 text-white border-none text-xs px-3 py-1.5 shadow-md">
                ✓ Healthy
              </div>
            )}
          </div>

          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {isLiked ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-gray-600 text-lg hover:text-red-500 transition-colors" />
            )}
          </button>

          {/* Fee Badge */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
            <TbCoinTakaFilled className="text-[#E07C3C] text-sm" />
            <span className="text-sm font-bold text-[#4A3728]">{fee || "0"}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body p-5 flex-1 flex flex-col">
          {/* Title & Species */}
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-xl font-bold text-[#4A3728] group-hover:text-[#E07C3C] transition-colors line-clamp-1">
              {petName || "Unknown Pet"}
            </h2>
          </div>

          {/* Breed, Age, Gender */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
            <span className="font-medium text-[#4A3728]">{breed || "Unknown Breed"}</span>
            <LuDot className="text-gray-400" />
            <span>{age || "N/A"}</span>
            <LuDot className="text-gray-400" />
            <span className="capitalize">{gender || "N/A"}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
            <FaLocationDot className="text-[#E07C3C] text-xs" />
            <span>{location || "Unknown"}, Bangladesh</span>
          </div>

          {/* Description Preview */}
          {description && (
            <p className="text-sm text-gray-500 line-clamp-2 mt-1 mb-3">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-3 border-t border-gray-100">
            <Link href={`/allpets/${_id}`} className="flex-1">
              <Button
                className="w-full bg-[#E07C3C] text-white hover:bg-[#C96B2E] rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 group/btn"
                endContent={<FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />}
              >
                Meet {petName || "Pet"}
              </Button>
            </Link>
            <Button
              onClick={handleAdopt}
              className="flex-1 bg-transparent border-2 border-[#E07C3C] text-[#E07C3C] hover:bg-[#E07C3C] hover:text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              Adopt Now
            </Button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </motion.div>
  );
};

export default PetCard;