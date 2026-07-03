"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  PawPrint,
  Heart,
  ArrowRight,
  RefreshCw,
  Shield,
  Clock,
  Filter,
} from "lucide-react";
import Link from "next/link";
import PetCard from "./PetCard";
import { useState, useEffect } from "react";

const AvailablePets = () => {
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet`,
          {
            cache: "no-store",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch pets");
        }

        const pets = await res.json();
        const petData = Array.isArray(pets) ? pets : [];
        setPetList(petData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching pets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#FBF8F3]  pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E07C3C]/10 mb-4">
                <PawPrint className="w-8 h-8 text-[#E07C3C] animate-pulse" />
              </div>
              <p className="text-[#7A6B5F] text-lg">Loading amazing pets...</p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E07C3C] animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-[#E07C3C] animate-bounce delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-[#E07C3C] animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FBF8F3]  pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-4">
              <Heart className="w-10 h-10 text-red-500" />
            </div>
            <p className="text-xl font-medium text-[#4A3728]">
              Oops! Something went wrong
            </p>
            <p className="text-[#7A6B5F] mt-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF8F3]  pt-16 pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFF5F0]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#FFE8D6]/20 to-transparent rounded-tr-full"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <PawPrint className="w-24 h-24 text-[#E07C3C] rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
        <Heart className="w-24 h-24 text-[#EC4899] -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07C3C]/10 to-[#F59E0B]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
              <Sparkles className="w-4 h-4 text-[#E07C3C]" />
              <span className="text-sm font-medium text-[#E07C3C]">
                Available Now
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07C3C] animate-pulse"></span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728]">
              Meet your future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">
                companion
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#7A6B5F] mt-3 max-w-2xl">
              Browse pets from verified shelters and rescue centres across
              Bangladesh.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 mt-4 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-gray-100 text-center min-w-[80px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#E07C3C]">
                {petList?.length || 0}
              </div>
              <div className="text-xs text-[#7A6B5F]">Available</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-gray-100 text-center min-w-[80px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#E07C3C]">120+</div>
              <div className="text-xs text-[#7A6B5F]">Shelters</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-gray-100 text-center min-w-[80px] hidden sm:block hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#E07C3C]">4.9★</div>
              <div className="text-xs text-[#7A6B5F]">Rating</div>
            </div>
          </div>
        </div>

        {/* Filter/Sort Bar */}
        {/* <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-[#4A3728] flex items-center gap-1">
              <Filter className="w-4 h-4" />
              Filter:
            </span>
            <button className="px-3 py-1.5 rounded-full bg-[#E07C3C] text-white text-xs font-medium hover:bg-[#C96B2E] transition-all duration-300 shadow-sm hover:shadow-md">
              All
            </button>
            <button className="px-3 py-1.5 rounded-full bg-gray-100 text-[#4A3728] text-xs font-medium hover:bg-[#E07C3C]/10 transition-all duration-300 hover:border-[#E07C3C] border border-transparent">
              Dogs
            </button>
            <button className="px-3 py-1.5 rounded-full bg-gray-100 text-[#4A3728] text-xs font-medium hover:bg-[#E07C3C]/10 transition-all duration-300 hover:border-[#E07C3C] border border-transparent">
              Cats
            </button>
            <button className="px-3 py-1.5 rounded-full bg-gray-100 text-[#4A3728] text-xs font-medium hover:bg-[#E07C3C]/10 transition-all duration-300 hover:border-[#E07C3C] border border-transparent">
              Birds
            </button>
            <button className="px-3 py-1.5 rounded-full bg-gray-100 text-[#4A3728] text-xs font-medium hover:bg-[#E07C3C]/10 transition-all duration-300 hover:border-[#E07C3C] border border-transparent">
              Rabbits
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#7A6B5F]">Sort by:</span>
            <select className="text-sm border border-gray-200 rounded-full px-3 py-1.5 bg-white focus:outline-none focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 transition-all duration-300">
              <option>Newest</option>
              <option>Popular</option>
              <option>Age</option>
              <option>Name</option>
            </select>
          </div>
        </div> */}

        {/* Pet Cards Grid */}
        {petList?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {petList.slice(0, 6).map((pet, index) => (
                <motion.div
                  key={pet._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="h-full"
                >
                  <PetCard pet={pet} />
                </motion.div>
              ))}
            </div>

            {/* View All Button with Count */}
            {petList.length > 6 && (
              <div className="text-center mt-12">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#FFF5F0] to-[#FFE8D6] rounded-full p-1.5 shadow-lg border border-[#E07C3C]/10">
                  <span className="px-6 py-2 text-[#4A3728] font-medium text-sm flex items-center gap-2">
                    <span className="text-[#E07C3C] font-bold">
                      {petList.length}
                    </span>
                    amazing pets waiting
                  </span>
                  <Link href="/allpets">
                    <button className="inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group">
                      View All Pets
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E07C3C]/10 mb-4">
              <Heart className="w-10 h-10 text-[#E07C3C]" />
            </div>
            <p className="text-xl font-medium text-[#4A3728]">
              No pets available at the moment.
            </p>
            <p className="text-[#7A6B5F] mt-2">
              Check back soon for new arrivals!
            </p>
            <Link href="/">
              <button className="mt-6 inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </button>
            </Link>
          </motion.div>
        )}

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#10B981]" />
              <span className="text-xs text-[#4A3728]">Verified Shelters</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#EC4899]" />
              <span className="text-xs text-[#4A3728]">Health Checked</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E07C3C]" />
              <span className="text-xs text-[#4A3728]">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePets;
