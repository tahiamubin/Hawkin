import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiDogFill } from "react-icons/pi";
import BannerCard from "./BannerCard";
import WhyAdopt from "./WhyAdopt";
import SuccessStories from "./SuccessStories";
import PetCare from "./PetCare";
import AdoptionSteps from "./AdoptionSteps";
import Link from "next/link";
import AvailablePets from "./AvailablePets";

const Banner = async () => {
  try {
    return (
      <div>
        {/* Hero Section */}
        <div className="hero bg-gradient-to-br from-[#FBF8F3] to-[#FFF5F0] min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-4 sm:px-6 lg:px-8 py-12">
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/pet2.png"
                alt="Happy pets waiting for adoption"
                width={600}
                height={600}
                className="max-w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              {/* Badge */}
              <div className="badge badge-soft badge-sm p-3 bg-[#fcf3ef] text-[#C8714A] text-sm rounded-full border border-[#C8714A]/30 inline-flex items-center gap-2">
                <PiDogFill className="w-4 h-4" />
                Bangladesh's #1 Adoption Platform
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Find a{" "}
                <span className="text-[#E07C3C] italic font-serif">
                  loving home
                </span>{" "}
                for every pet
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Thousands of cats, dogs, birds & rabbits are waiting for their
                forever family. Adopt, don't shop — and change a life today
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="card bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group p-4 rounded-xl border border-[#E07C3C]/10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#E07C3C] italic font-serif">
                    2500+
                  </h2>
                  <p className="text-sm text-gray-600">Pets available</p>
                </div>
                <div className="card bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group p-4 rounded-xl border border-[#E07C3C]/10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#E07C3C] italic font-serif">
                    940
                  </h2>
                  <p className="text-sm text-gray-600">Adopted this month</p>
                </div>
                <div className="card bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group p-4 rounded-xl border border-[#E07C3C]/10 col-span-2 lg:col-span-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#E07C3C] italic font-serif">
                    120+
                  </h2>
                  <p className="text-sm text-gray-600">Partner shelters</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/allpets" className="w-full sm:w-auto">
                  <button className="btn w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 bg-[#E07C3C] hover:bg-[#C96B2E] text-white text-base sm:text-lg font-medium border-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Browse Pets <FaArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="#how-it-works" className="w-full sm:w-auto">
                  <button className="btn w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 bg-white hover:bg-gray-50 text-[#4A3728] text-base sm:text-lg font-medium border-2 border-[#E07C3C]/30 hover:border-[#E07C3C] shadow-sm hover:shadow-md transition-all duration-300">
                    How it works
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Cards Section */}
        <BannerCard />

        {/* Available Pets Section */}
        <AvailablePets />

        {/* Why Adopt Section */}
        <WhyAdopt />

        {/* Success Stories Section */}
        <SuccessStories />

        {/* Pet Care Section */}
        <PetCare />

        {/* Adoption Steps Section */}
        <AdoptionSteps />
      </div>
    );
  } catch (error) {
    console.error("Error in Banner component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF8F3]">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-[#E07C3C] mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We're having trouble loading the pets. Please try again later.
          </p>
          <Link href="/">
            <button className="btn rounded-full px-8 py-3 bg-[#E07C3C] text-white hover:bg-[#C96B2E] transition-all duration-300">
              Refresh Page
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Banner;