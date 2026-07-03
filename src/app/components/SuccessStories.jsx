'use client'
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Heart, PawPrint, ChevronRight } from "lucide-react";
import Image from "next/image";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      quote: "Adopting Max was the best decision we ever made. He brought so much joy and energy into our home!",
      name: "Rafi & Family",
      location: "Dhaka, Bangladesh",
      initial: "R",
      rating: 5,
      petName: "Max",
      petType: "Golden Retriever",
      image: "/images/story1.jpg", // Add your image paths
    },
    {
      id: 2,
      quote: "Luna found us when we needed her most. She's not just a pet — she's family. We couldn't imagine life without her.",
      name: "Sadia & Ahmed",
      location: "Chittagong, Bangladesh",
      initial: "S",
      rating: 5,
      petName: "Luna",
      petType: "Persian Cat",
      image: "/images/story2.jpg",
    },
    {
      id: 3,
      quote: "Our kids grew up alongside Buddy. He taught them responsibility, empathy, and the meaning of true friendship.",
      name: "Nadia Islam",
      location: "Sylhet, Bangladesh",
      initial: "N",
      rating: 5,
      petName: "Buddy",
      petType: "German Shepherd",
      image: "/images/story3.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E07C3C] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E07C3C] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Floating Paw Prints */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <PawPrint className="w-16 h-16 text-[#E07C3C] rotate-12" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 hidden lg:block">
        <PawPrint className="w-12 h-12 text-[#E07C3C] -rotate-12" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 hidden lg:block">
        <PawPrint className="w-14 h-14 text-[#E07C3C] rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-[#E07C3C]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
            <Heart className="w-4 h-4 text-[#E07C3C] fill-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">Real Stories, Real Love</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] mb-4">
            Happy Tails
            <span className="block text-[#E07C3C] text-2xl sm:text-3xl mt-2 font-light">
              from our adoptive families
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#E07C3C] to-[#C96B2E] rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Featured Story - Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#FFF5F0] to-[#FFE8D6] rounded-3xl p-8 mb-12 shadow-xl border border-[#E07C3C]/10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/3">
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#E07C3C] to-[#C96B2E] flex items-center justify-center overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center text-white">
                  <PawPrint className="w-20 h-20 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Featured Story</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Quote className="w-8 h-8 text-[#E07C3C] opacity-60" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E07C3C] text-[#E07C3C]" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl sm:text-2xl text-[#4A3728] font-medium leading-relaxed mb-6">
                "{stories[0].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E07C3C] to-[#C96B2E] flex items-center justify-center text-white text-xl font-bold shadow-md">
                  {stories[0].initial}
                </div>
                <div>
                  <h3 className="font-bold text-[#4A3728] text-lg">{stories[0].name}</h3>
                  <p className="text-sm text-[#7A6B5F]">{stories[0].location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(1).map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E07C3C] to-[#C96B2E] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Pet Type Badge */}
                <div className="inline-flex items-center gap-1 bg-[#E07C3C]/10 px-3 py-1 rounded-full text-xs font-medium text-[#E07C3C] self-start mb-4">
                  <Heart className="w-3 h-3 fill-[#E07C3C]" />
                  {story.petType}
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote className="w-6 h-6 text-[#E07C3C] opacity-40 mb-3" />
                  <p className="text-[#4A3728] text-sm leading-relaxed line-clamp-4">
                    "{story.quote}"
                  </p>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-100"></div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E07C3C] to-[#C96B2E] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {story.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#4A3728] text-sm truncate">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#7A6B5F] truncate">{story.location}</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#E07C3C] text-[#E07C3C]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#FFF5F0] to-[#FFE8D6] rounded-full p-1 sm:p-1.5 shadow-lg">
            <span className="px-6 py-2 text-[#4A3728] font-medium">
              Share your story with us
            </span>
            <a
              href="/share-story"
              className="inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Share Your Journey
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;