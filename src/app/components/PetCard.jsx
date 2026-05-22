"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { TbCoinTakaFilled } from "react-icons/tb";

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
  const notify = () => toast("Added to all pet.");

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm bg-[#EBF3EE] hover:border border-[#3D6B4F] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt="breed"
            fill
            className="object-cover"
          ></Image>
        </div>

        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {petName}
            <div className="badge border-[#C8714A] bg-[#FBF8F3] text-[#C8714A]">
              {species}
            </div>
          </h2>
          <div className="text-gray-500 flex ">
            <p>{breed}</p>
            <p className="items-center flex">
              <LuDot />
              {age}
            </p>
            <p className="items-center flex">
              <LuDot />
              {gender}
            </p>
          </div>

          <div>
            <p className="flex font-medium items-center gap-1">
              <FaLocationDot />
              {location}, Bangladesh
            </p>
            <p className="flex font-medium items-center gap-1">
              <TbCoinTakaFilled />
              {fee}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link href={`/allpets/${_id}`}>
              <Button className={"bg-[#3D6B4F]"}>
                Meet {petName} <FaArrowRight />
              </Button>
            </Link>
            <Button
              onClick={notify}
              className={
                " shadow-sm border-[#3D6B4F] bg-[#FBF8F3] text-[#3D6B4F]"
              }
            >
              Adopt Now
            </Button>
             <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
