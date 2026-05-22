import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteAlertModal from "./DeleteAlertModal";
import RequestCheck from "./RequestCheck";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";

const MyListings = ({ listing }) => {
  return (
    <div className="card bg-white w-80 shadow-lg rounded-2xl overflow-hidden border border-[#3D6B4F]">
      <figure className="relative">
        <Image src={listing.imageUrl} height={500} weigth={500} alt={listing.species}>
          
        </Image>
        <span className="absolute top-3 right-3 bg-[#3D6B4F] text-white text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
      </figure>

      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="card-title text-[#1A1A1A] text-lg font-bold">
              {listing.petName}
            </h2>
            <p className="text-[#5C5C5C] text-xs mt-0.5">
              {listing.species} • {listing.breed}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#C8714A] font-bold text-base">{listing.fee}</p>
            <p className="text-[#5C5C5C] text-xs">1 requests</p>
          </div>
        </div>

        <div className="card-actions mt-4 flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-[#3a3a3a] rounded-xl gap-1">
              <GrFormView />
              View
            </button>
            <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-none rounded-xl gap-1">
              <FaEdit /> Edit
            </button>
          </div>

          <div className="flex gap-2 w-full">
            <div>
              <RequestCheck></RequestCheck>
            </div>
            {/* <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white  rounded-xl gap-1">
             <RequestCheck></RequestCheck>
            </button> */}

            {/* delete button */}
            <div>
              <DeleteAlertModal></DeleteAlertModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
