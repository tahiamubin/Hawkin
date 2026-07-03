"use client";

import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
} from "@heroui/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { 
  FaPaw, 
  FaDog, 
  FaCat, 
  FaUser, 
  FaCalendar, 
  FaHeart, 
  FaSyringe, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaImage, 
  FaEnvelope, 
  FaFileAlt,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import Link from "next/link";

const AddPetPage = () => {
  const { data: session } = authClient.useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const allPet = Object.fromEntries(formData.entries());
    allPet.email = session?.user?.email;

    try {
      const { data: tokenData } = await authClient.token();

      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      };

      // Post to both endpoints simultaneously
      const [allPetRes, listingRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet`, {
          method: "POST",
          headers,
          body: JSON.stringify(allPet),
        }),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/listings`, {
          method: "POST",
          headers,
          body: JSON.stringify({ ...allPet, userEmail: session?.user?.email }),
        }),
      ]);

      const allPetData = await allPetRes.json();
      const listingData = await listingRes.json();

      console.log(allPetData, listingData);
      toast.success(`${allPet.petName} has been added to My Listings! 🎉`);
      setIsSuccess(true);
      
      // Reset form after success
      e.currentTarget.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error("Failed to add pet. Please try again.");
      console.error("Error adding pet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#FBF8F3] to-white px-4"
      >
        <div className="text-center max-w-md">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-bounce">
            <FaCheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#4A3728] mb-2">
            Pet Added Successfully! 🎉
          </h2>
          <p className="text-gray-600 mb-6">
            Your pet has been added to your listings. You can manage it from your dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard/my-listings">
              <Button className="bg-[#E07C3C] text-white hover:bg-[#C96B2E] rounded-full px-6">
                View My Listings
              </Button>
            </Link>
            <Link href="/add-pet">
              <Button className="bg-transparent border-2 border-[#E07C3C] text-[#E07C3C] hover:bg-[#E07C3C]/10 rounded-full px-6">
                Add Another Pet
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#FBF8F3] to-white min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#E07C3C]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
            <FaPaw className="text-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">List a Pet</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A3728] mb-3">
            Add a Pet for <span className="text-[#E07C3C]">Adoption</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Fill in the details below to list your pet for adoption. 
            Help them find a loving forever home! 🏠
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#E07C3C]/5 to-[#F59E0B]/5 px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-[#4A3728] flex items-center gap-2">
              <FaPaw className="text-[#E07C3C]" />
              Pet Information
            </h2>
          </div>

          <form onSubmit={onSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pet Name */}
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaPaw className="text-[#E07C3C] text-xs" />
                  Pet Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="petName"
                  placeholder="e.g., Luna, Max, Charlie"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Breed */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaDog className="text-[#E07C3C] text-xs" />
                  Breed <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="breed"
                  placeholder="e.g., Persian, Golden Retriever"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Species */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaCat className="text-[#E07C3C] text-xs" />
                  Species <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="species"
                  isRequired
                  className="w-full mt-1"
                  placeholder="Select species"
                >
                  <Select.Trigger className="rounded-xl border-gray-200">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Cat" textValue="Cat">Cat</ListBox.Item>
                      <ListBox.Item id="Dog" textValue="Dog">Dog</ListBox.Item>
                      <ListBox.Item id="Bird" textValue="Bird">Bird</ListBox.Item>
                      <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit</ListBox.Item>
                      <ListBox.Item id="Others" textValue="Others">Others</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <FieldError />
              </div>

              {/* Gender */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaUser className="text-[#E07C3C] text-xs" />
                  Gender <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="gender"
                  placeholder="e.g., Male, Female"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Age */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaCalendar className="text-[#E07C3C] text-xs" />
                  Age <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="age"
                  placeholder="e.g., 2 years, 6 months"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Health Status */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaHeart className="text-[#E07C3C] text-xs" />
                  Health Status <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="health"
                  isRequired
                  className="w-full mt-1"
                  placeholder="Select health status"
                >
                  <Select.Trigger className="rounded-xl border-gray-200">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Good" textValue="Good">Good</ListBox.Item>
                      <ListBox.Item id="Bad" textValue="Bad">Bad</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <FieldError />
              </div>

              {/* Vaccination Status */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaSyringe className="text-[#E07C3C] text-xs" />
                  Vaccination Status <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="vaccine"
                  isRequired
                  className="w-full mt-1"
                  placeholder="Select vaccination status"
                >
                  <Select.Trigger className="rounded-xl border-gray-200">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Vaccinated" textValue="Vaccinated">Vaccinated</ListBox.Item>
                      <ListBox.Item id="Not vaccinated" textValue="Not vaccinated">Not vaccinated</ListBox.Item>
                      <ListBox.Item id="On process" textValue="On process">On process</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <FieldError />
              </div>

              {/* Location */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#E07C3C] text-xs" />
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="location"
                  placeholder="e.g., Dhaka, Chittagong"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Adoption Fee */}
              <div>
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <TbCoinTakaFilled className="text-[#E07C3C] text-xs" />
                  Adoption Fee (BDT) <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="fee"
                  type="number"
                  placeholder="e.g., 5000"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaImage className="text-[#E07C3C] text-xs" />
                  Image URL <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/pet-image.jpg"
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1 w-full"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaEnvelope className="text-[#E07C3C] text-xs" />
                  Contact Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  defaultValue={session?.user?.email || ""}
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1 bg-gray-50 w-full"
                  isRequired
                />
                <FieldError />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                  <FaFileAlt className="text-[#E07C3C] text-xs" />
                  Description <span className="text-red-500">*</span>
                </Label>
                <TextArea
                  name="description"
                  placeholder="Describe the pet's personality, behavior, and any special needs..."
                  className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 mt-1 min-h-[120px] w-full"
                  isRequired
                />
                <FieldError />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={isLoading}
              isDisabled={isLoading}
              className="w-full bg-[#E07C3C] hover:bg-[#C96B2E] text-white rounded-xl py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
              endContent={<FaArrowRight className="text-sm" />}
            >
              {isLoading ? "Adding Pet..." : "Add Pet for Adoption"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our terms and conditions. 
              Your pet will be visible to potential adopters.
            </p>
          </form>
        </motion.div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default AddPetPage;