import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { TbCoinTakaFilled } from "react-icons/tb";

const PetCard = ({ pet }) => {
  //   "_id": "6a0c0f4a27970a1b25e967e4",
  // "petName": "Bubby",
  // "breed": "Golden Retriever",
  // "species": "Dog",
  // "gender": "Male",
  // "age": "2 years",
  // "health": "good",
  // "vaccine": "vaccinated",
  // "location": "Dhaka",
  // "fee": "150",
  // "imageUrl": "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
  // "email": "amin12@gmail.com",
  // "description": "Buddy is a friendly and energet

  const {
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

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm bg-[#EBF3EE] hover:border border-[#3D6B4F] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
        {/* <Image src={imageUrl}
        alt="breed"
        width={500}
        height={500}>
        </Image> */}
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {petName}
            <div className="badge border-[#C8714A] bg-[#FBF8F3] text-[#C8714A]">{species}</div>
          </h2>
          <div className="text-gray-500 flex ">
           <p>{breed}</p>
           <p className="items-center flex"><LuDot />{age}</p>
           <p className="items-center flex"><LuDot />{gender}</p>      
          </div>

          <div>
            <p className="flex font-medium items-center gap-1"><FaLocationDot />{location}, Bangladesh</p>
            <p className="flex font-medium items-center gap-1"><TbCoinTakaFilled />{fee}</p>
          </div>
          <div className="card-actions justify-end">
          <Button className={"bg-[#3D6B4F]"}> Meet {petName} <FaArrowRight /></Button>
          <Button className={ " shadow-sm border-[#3D6B4F] bg-[#FBF8F3] text-[#3D6B4F]"}> Adopt {petName}</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PetCard;
