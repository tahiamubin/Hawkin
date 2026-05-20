


import Image from "next/image";

import { FaGem, FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { PiGenderMaleFill } from "react-icons/pi";
import { TbCoinTakaFilled, TbVaccine } from "react-icons/tb";
import AdoptRequest from "./AdoptRequest";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/all-pet/${id}`);
  const pet = await res.json();

  //console.log(pet)
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
    vaccine,
    description,
  } = pet;

  return (
    <div>
      <div className="container mx-auto mt-20 mb-10 grid sm:grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="card  w-full= shadow-xl border-[#3D6B4F] border-2">
          <div className="relative  h-48 overflow-hidden rounded-t-lg">
            <Image
              src={imageUrl}
              alt="breed"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{petName}</h2>
            <div className="text-gray-500 flex ">
              <p>{breed}</p>
              <p className="items-center flex">{age}</p>
              <p className="items-center flex">{gender}</p>
            </div>
            {/* species and breed */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">Species</h2>
                <p className="text-xl font-bold">{species}</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">{breed}</h2>
                <p className="text-xl font-bold">{species}</p>
              </div>
            </div>
            {/* age and gender */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">Age</h2>
                <p className="text-xl font-bold">{age}</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <PiGenderMaleFill />
                  Gender
                </h2>
                <p className="text-xl font-bold flex items-center gap-1">
                  <FaGem />
                  {gender}
                </p>
              </div>
            </div>
            {/* location and fee */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <FaLocationDot />
                  Location
                </h2>
                <p className="text-xl font-bold">{location}</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <TbCoinTakaFilled />
                  Adoption fee
                </h2>
                <p className="text-xl font-bold">{fee}</p>
              </div>
            </div>
            {/* health and vaccine */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <MdHealthAndSafety />
                  Health status
                </h2>
                <p className="text-xl font-bold">{health}</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <TbVaccine />
                  Vaccine
                </h2>
                <p className="text-xl font-bold">{vaccine}</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <AdoptRequest pet={pet}></AdoptRequest>
      </div>
    </div>
  );
};

export default PetDetailsPage;
