"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLock, FaCheck, FaUser, FaEnvelope, FaCalendar, FaFileAlt, FaPaw } from "react-icons/fa";
import { TbCoinTakaFilled, TbVaccine } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import { PiGenderMaleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { email } from "better-auth";

const AdoptRequest = ({ pet }) => {
  const [adopt, setAdopt] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

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
    email: petOwnerEmail,
  } = pet;

  const isOwner = user?.email === petOwnerEmail;


  const handleListings = async () => {
    if (!pickupDate) {
      toast.error("Please select a pickup date");
      return;
    }

    setIsLoading(true);
    const listingData = {
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      userId: user?.id , 
      petId,
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
      status: 'pending',
      pickupDate,
      requestDate: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/listing`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(listingData),
      });
      const data = await res.json();
      console.log(data);
      toast.success(`Adoption request for ${petName} sent successfully! 🐾`);
      setAdopt(true);
    } catch (error) {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Owner can't adopt their own pet
  if (isOwner) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:sticky lg:top-24"
      >
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-xl border-2 border-yellow-200 max-w-lg mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
              <FaLock className="w-10 h-10 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">
              Can't Adopt Your Own Pet
            </h2>
            <p className="text-gray-600 mb-4">
              You listed <span className="font-semibold text-yellow-700">{petName}</span> for adoption.
              You can't adopt your own pet!
            </p>
            <div className="bg-white/80 rounded-xl p-4 w-full">
              <p className="text-sm text-gray-500">
                Manage your listing from
              </p>
              <Link
                href="/dashboard/my-listings"
                className="inline-flex items-center gap-2 mt-2 text-[#E07C3C] font-medium hover:text-[#C96B2E] transition-colors"
              >
                <FaPaw className="text-xs" />
                My Listings
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Success state after adoption request
  if (adopt) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:sticky lg:top-24"
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-green-200 max-w-lg mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
              <FaCheck className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Request Sent! 🎉
            </h2>
            <p className="text-gray-600 mb-4">
              Your adoption request for{" "}
              <span className="font-semibold text-green-700">{petName}</span> has been sent
              to the owner.
            </p>
            <div className="bg-white/80 rounded-xl p-4 w-full">
              <p className="text-sm text-gray-500">Track your request status</p>
              <Link
                href="/dashboard/my-request"
                className="inline-flex items-center gap-2 mt-2 text-[#E07C3C] font-medium hover:text-[#C96B2E] transition-colors"
              >
                <FaPaw className="text-xs" />
                My Requests
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Adoption Form
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:sticky lg:top-24"
    >
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#E07C3C]/10 to-[#F59E0B]/10 p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-[#4A3728] flex items-center gap-2">
            <FaPaw className="text-[#E07C3C]" />
            Adoption Request
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the details to adopt {petName}
          </p>
        </div>

        <form className="p-6 space-y-6">
          {/* Pet Name */}
          <div>
            <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
              <FaPaw className="text-[#E07C3C] text-xs" />
              Pet Name
            </Label>
            <Input
              placeholder={petName}
              className="rounded-xl bg-gray-50 border-gray-200 cursor-default mt-1"
              readOnly
              value={petName}
            />
          </div>

          {/* User Name */}
          <div>
            <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
              <FaUser className="text-[#E07C3C] text-xs" />
              Your Name
            </Label>
            <Input
              placeholder={user?.name}
              className="rounded-xl bg-gray-50 border-gray-200 cursor-default mt-1"
              readOnly
              value={user?.name}
            />
          </div>

          {/* Email */}
          <div>
            <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
              <FaEnvelope className="text-[#E07C3C] text-xs" />
              Email Address
            </Label>
            <Input
              placeholder={user?.email}
              className="rounded-xl bg-gray-50 border-gray-200 cursor-default mt-1"
              readOnly
              value={user?.email}
            />
          </div>

          {/* Pickup Date */}
          <div>
            <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
              <FaCalendar className="text-[#E07C3C] text-xs" />
              Preferred Pickup Date
            </Label>
            <Input
              type="date"
              className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <p className="text-xs text-gray-400 mt-1">Select a date to pick up your new companion</p>
          </div>

          {/* Message */}
          <div>
            <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2 w-full">
              <FaFileAlt className="text-[#E07C3C] text-xs" />
              Message to Owner
            </Label>
            <TextArea
              placeholder="Tell the owner why you'd love to adopt this pet..."
              className="w-full rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1 min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleListings}
            isLoading={isLoading}
            isDisabled={isLoading}
            className="w-full bg-[#E07C3C] hover:bg-[#C96B2E] text-white rounded-xl py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isLoading ? "Sending Request..." : "Send Adoption Request"}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            By submitting, you agree to our adoption terms and conditions
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default AdoptRequest;