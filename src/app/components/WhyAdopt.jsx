'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Home, PawPrint, Sparkles, Shield, Users, ArrowRight, Leaf, Award, Clock } from "lucide-react";

const WhyAdopt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Save a Life",
      description: "Millions of pets are waiting in shelters. Your adoption gives them a forever home and a new beginning.",
      color: "from-[#E07C3C] to-[#F59E0B]",
      stat: "2.7M+",
      statLabel: "Pets saved annually",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Unconditional Love",
      description: "Adopted pets form deep bonds with their owners, offering loyalty and companionship every single day.",
      color: "from-[#EC4899] to-[#F472B6]",
      stat: "94%",
      statLabel: "Report increased happiness",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Reduce Overpopulation",
      description: "Adopting helps control shelter overcrowding and supports a more humane community for all animals.",
      color: "from-[#8B5CF6] to-[#A78BFA]",
      stat: "6.5M+",
      statLabel: "Animals enter shelters yearly",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Studies show pet owners have lower blood pressure, reduced stress, and improved mental health.",
      color: "from-[#10B981] to-[#34D399]",
      stat: "60%",
      statLabel: "Lower risk of heart disease",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Support Community",
      description: "Every adoption supports local shelters, rescues, and helps build a compassionate community.",
      color: "from-[#3B82F6] to-[#60A5FA]",
      stat: "4,500+",
      statLabel: "Partner organizations",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FBF8F3] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E07C3C]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC4899]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07C3C]/10 to-[#F59E0B]/10 px-5 py-2 rounded-full border border-[#E07C3C]/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">Every Adoption Matters</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">Adoption?</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-[#E07C3C]" />
              <span className="text-sm text-[#4A3728]">Lifetime companionship</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-[#EC4899]" />
              <span className="text-sm text-[#4A3728]">Free vet check-up</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-sm text-[#4A3728]">Lifetime support</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Big Card */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-[#E07C3C] to-[#F59E0B] rounded-3xl p-8 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                <Leaf className="w-4 h-4" />
                <span>Change a life today</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Every 13 seconds</h3>
              <p className="text-lg font-light mb-6">a pet is adopted in Bangladesh. Be part of the movement.</p>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs opacity-80">Happy adopters</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-xs opacity-80">Pets available</div>
                </div>
              </div>
              <a href="/allpets" className="inline-flex items-center gap-2 mt-6 bg-white text-[#E07C3C] px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 group">
                Find Your Pet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Carousel */}
          <div className="lg:col-span-3">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 shadow-xl h-full border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${reasons[activeIndex].color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {reasons[activeIndex].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#4A3728]">
                        {reasons[activeIndex].title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-[#E07C3C]">
                          {reasons[activeIndex].stat}
                        </span>
                        <span className="text-sm text-[#7A6B5F]">
                          {reasons[activeIndex].statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#7A6B5F] text-lg leading-relaxed">
                    {reasons[activeIndex].description}
                  </p>

                  {/* Navigation Dots */}
                  <div className="flex gap-2 mt-6">
                    {reasons.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index 
                            ? `w-8 bg-gradient-to-r ${reasons[index].color}` 
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Horizontal Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E07C3C]">2500+</div>
            <div className="text-sm text-[#7A6B5F]">Pets waiting</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-[#E07C3C]">94%</div>
            <div className="text-sm text-[#7A6B5F]">Adoption success</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-[#E07C3C]">120+</div>
            <div className="text-sm text-[#7A6B5F]">Partner shelters</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-[#E07C3C]">4.9★</div>
            <div className="text-sm text-[#7A6B5F]">Adopter rating</div>
          </div>
        </motion.div>

        {/* Bottom CTA with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#E07C3C] rounded-full blur-2xl opacity-30 animate-ping"></div>
            <div className="relative bg-gradient-to-r from-[#E07C3C] to-[#F59E0B] rounded-full p-1 shadow-xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
                <p className="text-white font-medium">
                  <span className="opacity-80">Ready to change a life?</span>
                  <a href="/allpets" className="inline-flex items-center gap-2 ml-3 bg-white text-[#E07C3C] px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300 group">
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAdopt;