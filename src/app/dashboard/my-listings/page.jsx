// app/dashboard/my-listings/page.jsx
import MyListings from "@/app/components/MyListings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import Link from "next/link";
import { FaPaw, FaPlus, FaArrowRight } from "react-icons/fa";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  let pets = [];
  let error = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet?email=${userEmail}`,
      {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch listings");
    }
    pets = await res.json();
  } catch (err) {
    error = err.message;
    console.error("Error fetching listings:", err);
  }

  return (
    <div className="bg-gradient-to-b from-[#FBF8F3] to-white min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E07C3C]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-3">
              <FaPaw className="text-[#E07C3C]" />
              <span className="text-sm font-medium text-[#E07C3C]">My Listings</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728]">
              My <span className="text-[#E07C3C]">Listings</span>
            </h1>
            <p className="text-gray-500 mt-1">
              Manage all the pets you've listed for adoption
            </p>
          </div>
          
          <Link href="/dashboard/add-pet">
            <button className="inline-flex items-center gap-2 bg-[#E07C3C] hover:bg-[#C96B2E] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              <FaPlus className="text-sm" />
              Add New Pet
            </button>
          </Link>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <h3 className="text-red-600 font-semibold text-lg">Something went wrong</h3>
            <p className="text-red-500 mt-1">{error}</p>
            <a 
              href="/dashboard/my-listings"
              className="inline-block mt-3 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Try Again
            </a>
          </div>
        )}

        {/* Empty State */}
        {!error && pets.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#E07C3C]/10 mb-6">
              <FaPaw className="w-12 h-12 text-[#E07C3C]" />
            </div>
            <h2 className="text-2xl font-bold text-[#4A3728] mb-3">
              No Listings Yet
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              You haven't listed any pets for adoption yet. Start by adding your first pet!
            </p>
            <Link href="/dashboard/add-pet">
              <button className="inline-flex items-center gap-2 bg-[#E07C3C] hover:bg-[#C96B2E] text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
                <FaPlus className="text-sm" />
                Add Your First Pet
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
          </div>
        )}

        {/* Listings Grid */}
        {!error && pets.length > 0 && (
          <>
            {/* Stats Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-6 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Total Listings:</span>
                <span className="text-lg font-bold text-[#E07C3C]">{pets.length}</span>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Available:</span>
                <span className="text-lg font-bold text-green-600">
                  {pets.filter(pet => pet.status === "available").length || pets.length}
                </span>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Adopted:</span>
                <span className="text-lg font-bold text-blue-600">
                  {pets.filter(pet => pet.status === "adopted").length || 0}
                </span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pets.map((pet) => (
                <MyListings key={pet._id} pets={pet} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;