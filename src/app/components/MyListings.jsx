"use client";

import React, { useState } from "react";
import { GrFormView } from "react-icons/gr";

import { TbCoinTakaFilled } from "react-icons/tb";
import DeleteAlertModal from "./DeleteAlertModal";
import RequestCheck from "./RequestCheck";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import EditPetInfo from "./EditPetInfo";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaCalendar, FaHeart, FaPaw } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const MyListings = ({ pets }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isHovered, setIsHovered] = useState(false);

  const {
    _id: petId,
    petName,
    breed,
    species,
    gender,
    age,
    health,
    fee,
    location,
    imageUrl,
    vaccine,
    description,
    status = "available",
  } = pets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-56 bg-[#EBF3EE] overflow-hidden">
        <Image
          src={imageUrl || "/images/default-pet.jpg"}
          alt={petName || "Pet"}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <div
            className={`badge px-3 py-1.5 text-xs font-medium border-none shadow-md ${
              status === "available"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {status === "available" ? "Available" : "Adopted"}
          </div>
        </div>

        {/* Species Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="badge bg-[#E07C3C] text-white border-none px-3 py-1.5 text-xs shadow-md">
            <FaPaw className="inline mr-1 text-xs" />
            {species || "Pet"}
          </div>
        </div>

        {/* Fee Badge */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
          <TbCoinTakaFilled className="text-[#E07C3C] text-sm" />
          <span className="text-sm font-bold text-[#4A3728]">
            ৳{fee || "0"}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Pet Name & Requests */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="text-lg font-bold text-[#4A3728] hover:text-[#E07C3C] transition-colors line-clamp-1">
              {petName || "Unknown Pet"}
            </h3>
            <p className="text-sm text-gray-500">
              {species || "Unknown"} • {breed || "Unknown Breed"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#E07C3C] font-bold text-base">৳{fee || "0"}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 justify-end">
              <FaHeart className="text-[#E07C3C] text-xs" />1 request
            </p>
          </div>
        </div>

        {/* Location & Age */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-[#E07C3C] text-xs" />
            <span>{location || "Unknown"}, Bangladesh</span>
          </div>
          <div className="w-px h-4 bg-gray-200"></div>
          <div className="flex items-center gap-1">
            <FaCalendar className="text-[#E07C3C] text-xs" />
            <span>{age || "N/A"}</span>
          </div>
        </div>

        {/* Health Status */}
        {health && (
          <div className="mt-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                health === "Good"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {health}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-gray-100">
          {/* View Button */}
          <Link href={`/allpets/${petId}`} className="w-full">
            <button className="w-full btn btn-sm bg-[#E07C3C] hover:bg-[#C96B2E] text-white border-none rounded-xl text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 py-2.5">
              <GrFormView className="text-base" />
              View Details
            </button>
          </Link>

          {/* Action Buttons Row */}
          <div className="flex gap-2 w-full">
            <div className="flex-1">
              <RequestCheck petId={petId} />
            </div>
            <div>
              <EditPetInfo pets={pets} />
            </div>
            <div>
              <DeleteAlertModal pets={pets} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyListings;
