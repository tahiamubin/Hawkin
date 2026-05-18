import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiDogFill } from "react-icons/pi";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#FBF8F3] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <Image
            src={"/images/pet.png"}
            alt="pet image"
            width={700}
            height={700}
          ></Image>

          <div>
            <div className="badge badge-soft p-3 bg-[#fcf3ef] text-[#C8714A] text-xl rounded-4xl border-[#C8714A]">
              <PiDogFill />
              Bangladesh's #1 Adoption Platform
            </div>
            <h1 className="text-6xl font-bold">
              Find a <span className="text-[#3D6B4F]">loving home</span> for
              every paw
            </h1>
            <p className="py-6 text-xl">
              Thousands of cats, dogs, birds & rabbits are waiting for their
              forever family. Adopt, don't shop — and change a life today
            </p>

            <div className="grid grid-cols-3 gap-4 container mx-auto mt-5">
              <div className="card-body shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <h2 className="card-title text-5xl font-bold text-[#3D6B4F] ">
                  2500+
                </h2>
                <p>Pets available</p>
              </div>
              <div className="card-body shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <h2 className="card-title text-5xl font-bold text-[#3D6B4F]">
                  940
                </h2>
                <p>Adopted this month</p>
              </div>
              <div className="card-body shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <h2 className="card-title text-5xl font-bold text-[#3D6B4F]">
                  120+
                </h2>
                <p>Partner shelters</p>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <button className="btn  rounded-4xl px-4 py-5 bg-[#3D6B4F] text-xl font-medium text-white">
                Browse Pet <FaArrowRight />
              </button>
              <button className="btn text-xl font-medium  rounded-4xl px-4 py-5">
                How it works
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* <div className="justify-center items-center  badge badge-soft badge-success bg-[#EBF3EE]">Why Pawfeet Home</div> */}
        <h1 className="text-5xl font-bold text-center">
          Everything you need to adopt with confidence
        </h1>
        <p className="text-center mt-10 text-xl text-gray-500">We make the adoption journey simple, <br /> transparent, and joyful — from first browse to forever home.</p>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-4 mt-10">
        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl mb-4">
              🔍
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              Smart Pet Matching
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Tell us your lifestyle, home size & preferences. Our algorithm
              finds pets that truly fit your life.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Explore matching →
              </span>
            </div>
          </div>
        </div>
        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-xl mb-4">
              📋
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              One-Click Applications
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Apply to multiple shelters with a single profile. Track all your
              requests from one dashboard.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                See dashboard →
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-xl mb-4">
              🏥
            </div>
            <h2 className="card-title text-lg font-bold text-[#3D6B4F] mb-2">
              Vet-Verified Profiles
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every pet listing includes health records, vaccination status, and
              a behaviour assessment.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Learn more →
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-4">
              💬
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              Post-Adoption Care
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access expert guides, a 24/7 vet helpline, and a community of new
              pet owners for free.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Join community →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
