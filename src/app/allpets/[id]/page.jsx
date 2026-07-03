import Image from "next/image";
import { FaGem, FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { PiGenderMaleFill } from "react-icons/pi";
import { TbCoinTakaFilled, TbVaccine } from "react-icons/tb";
import { FaHeart, FaShare, FaCalendar, FaPaw } from "react-icons/fa";
import AdoptRequest from "./AdoptRequest";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
 
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const pet = await res.json();

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
    <div className="bg-gradient-to-b from-[#FBF8F3] to-white min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#E07C3C] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/allpets" className="hover:text-[#E07C3C] transition-colors">All Pets</Link>
          <span className="mx-2">/</span>
          <span className="text-[#E07C3C] font-medium">{petName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Pet Details */}
          <div className="space-y-6">
            {/* Image Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative w-full h-96 bg-[#EBF3EE]">
                <Image
                  src={imageUrl || "/images/default-pet.jpg"}
                  alt={petName || "Pet"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="badge bg-[#E07C3C] text-white border-none text-xs px-4 py-2 shadow-lg">
                    {species || "Pet"}
                  </div>
                  {health === "Healthy" && (
                    <div className="badge bg-green-500 text-white border-none text-xs px-4 py-2 shadow-lg">
                      ✓ Healthy
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <FaHeart className="text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <FaShare className="text-gray-600 hover:text-[#E07C3C] transition-colors" />
                  </button>
                </div>
              </div>

              {/* Pet Name & Description */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-3xl font-bold text-[#4A3728]">{petName}</h1>
                  <div className="flex items-center gap-1 bg-[#E07C3C]/10 px-3 py-1 rounded-full">
                    <FaPaw className="text-[#E07C3C] text-xs" />
                    <span className="text-sm font-medium text-[#E07C3C]">Available</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-medium text-[#4A3728]">{breed || "Unknown Breed"}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{age || "N/A"}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="capitalize">{gender || "N/A"}</span>
                </div>

                {description && (
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1">Species</h2>
                <p className="text-lg font-bold text-[#4A3728]">{species || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1">Breed</h2>
                <p className="text-lg font-bold text-[#4A3728]">{breed || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <FaCalendar className="text-[#E07C3C]" />
                  Age
                </h2>
                <p className="text-lg font-bold text-[#4A3728]">{age || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <PiGenderMaleFill className="text-[#E07C3C]" />
                  Gender
                </h2>
                <p className="text-lg font-bold text-[#4A3728] capitalize">{gender || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <FaLocationDot className="text-[#E07C3C]" />
                  Location
                </h2>
                <p className="text-lg font-bold text-[#4A3728]">{location || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <TbCoinTakaFilled className="text-[#E07C3C]" />
                  Fee
                </h2>
                <p className="text-lg font-bold text-[#E07C3C]">৳{fee || "0"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <MdHealthAndSafety className="text-[#E07C3C]" />
                  Health
                </h2>
                <p className="text-lg font-bold text-green-600">{health || "N/A"}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <TbVaccine className="text-[#E07C3C]" />
                  Vaccine
                </h2>
                <p className="text-lg font-bold text-[#4A3728]">{vaccine || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Adopt Request */}
          <div className="lg:sticky lg:top-24 h-fit">
            <AdoptRequest pet={pet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;