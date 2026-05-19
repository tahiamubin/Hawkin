import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiDogFill } from "react-icons/pi";
import BannerCard from "./BannerCard";
import PetCard from "./PetCard";
import WhyAdopt from "./WhyAdopt";
import { SuccessIcon } from "@heroui/react";
import SuccessStories from "./SuccessStories";
import PetCare from "./PetCare";

const Banner = async () => {
  const res = await fetch("http://localhost:5000/all-pet");
  const pets = await res.json();
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

      {/* available pet     */}
      <div className="bg-[#EBF3EE] pt-5 pb-10">
        <div className="container mx-auto mt-20">
          {/* Features pets */}
          <div className="mb-5">
            <div className="badge badge-soft mb-5 bg-[#bbcec2] text-[#3D6B4F] ">
              Available now
            </div>
            <h1 className="text-5xl font-bold">
              Meet your future <span className="text-[#3D6B4F]">companion</span>
            </h1>
            <p className="text-xl pt-4 pb-4 text-gray-500">
              Browse pets from verified shelters and rescue centres across{" "}
              <br /> Bangladesh.
            </p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-20">
            {pets.slice(3, 10).map((pet) => (
              <PetCard key={pet._id} pet={pet}></PetCard>
            ))}
          </div>
        </div>
      </div>

      {/* why adopt */}
      <WhyAdopt></WhyAdopt>

      {/* success */}
      <SuccessStories></SuccessStories>

      {/* pet care */}
      <PetCare></PetCare>
      <BannerCard></BannerCard>
    </div>
  );
};

export default Banner;
