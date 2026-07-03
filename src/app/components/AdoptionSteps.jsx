"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Users,
  Home,
  PawPrint,
  ArrowRight,
  Sparkles,
  Heart,
  Clock,
  CheckCircle,
  MapPin,
  Calendar,
  Gift,
} from "lucide-react";

const AdoptionSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Browse & Filter",
      description:
        "Search by species, age, size, and temperament to find pets that match your lifestyle.",
      color: "from-[#E07C3C] to-[#F59E0B]",
      details: [
        "Filter by species (dog, cat, bird, rabbit)",
        "Filter by age, size, and temperament",
        "View detailed pet profiles with photos",
        "Save favorites for later",
      ],
      time: "5-10 minutes",
      action: "Start Browsing",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Request",
      description:
        "Fill out your adoption profile once and apply to any pet with a single click.",
      color: "from-[#EC4899] to-[#F472B6]",
      details: [
        "Create your adoption profile",
        "Upload required documents",
        "Submit application with one click",
        "Track application status",
      ],
      time: "10-15 minutes",
      action: "Submit Request",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meet the Pet",
      description:
        "Schedule a visit at the shelter or arrange a virtual introduction with the caretaker.",
      color: "from-[#8B5CF6] to-[#A78BFA]",
      details: [
        "Schedule in-person or virtual meet",
        "Get to know the pet's personality",
        "Ask questions to the caretaker",
        "Family introduction session",
      ],
      time: "30-60 minutes",
      action: "Schedule Meeting",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Bring Home",
      description:
        "Complete paperwork digitally and take your new companion home with a welcome kit.",
      color: "from-[#10B981] to-[#34D399]",
      details: [
        "Digital paperwork completion",
        "Welcome kit with essentials",
        "Post-adoption support",
        "Vet check-up appointment",
      ],
      time: "15-20 minutes",
      action: "Start Journey",
    },
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#FBF8F3] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#E07C3C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#EC4899]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 opacity-10 hidden lg:block">
        <PawPrint className="w-20 h-20 text-[#E07C3C] rotate-12" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-10 hidden lg:block">
        <Heart className="w-20 h-20 text-[#EC4899] -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07C3C]/10 to-[#F59E0B]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">
              Simple & Transparent
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] mb-4">
            Adopt in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">
              4 Easy Steps
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#7A6B5F] max-w-2xl mx-auto">
            From browsing to bringing them home — we guide you every step of the
            way.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-between mb-2">
              {steps.map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`text-xs font-medium ${idx <= activeStep ? "text-[#E07C3C]" : "text-[#7A6B5F]"}`}
                  >
                    Step {idx + 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E07C3C] to-[#F59E0B] rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Steps Navigation */}
          <div className="lg:col-span-2 space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === idx
                    ? `border-[#E07C3C] bg-gradient-to-r ${step.color} text-white shadow-lg`
                    : "border-gray-100 bg-white hover:shadow-md hover:border-[#E07C3C]/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeStep === idx
                        ? "bg-white/20"
                        : `bg-gradient-to-br ${step.color} bg-opacity-10`
                    }`}
                  >
                    {React.cloneElement(step.icon, {
                      className: `w-6 h-6 ${activeStep === idx ? "text-white" : "text-[#E07C3C]"}`,
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-bold ${activeStep === idx ? "text-white" : "text-[#4A3728]"}`}
                      >
                        {step.title}
                      </h3>
                      <div
                        className={`text-xs ${activeStep === idx ? "text-white/80" : "text-[#7A6B5F]"}`}
                      >
                        {step.time}
                      </div>
                    </div>
                    <p
                      className={`text-sm ${activeStep === idx ? "text-white/80" : "text-[#7A6B5F]"}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className={`bg-gradient-to-br ${steps[activeStep].color} rounded-3xl p-8 text-white shadow-2xl h-full`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20"></div>

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      {React.cloneElement(steps[activeStep].icon, {
                        className: "w-10 h-10",
                      })}
                    </div>
                    <div>
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        Step {activeStep + 1} of {steps.length}
                      </span>
                      <h3 className="text-3xl font-bold mt-1">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {steps[activeStep].description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3 mb-8">
                    {steps[activeStep].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                      >
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">
                          Time: {steps[activeStep].time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Online & In-person</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={prevStep}
                        className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        className="px-6 py-2 rounded-full bg-white text-[#E07C3C] hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 text-sm"
                      >
                        {steps[activeStep].action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center border border-gray-100">
            <div className="text-2xl font-bold text-[#E07C3C]">2,500+</div>
            <div className="text-xs text-[#7A6B5F]">Pets adopted</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center border border-gray-100">
            <div className="text-2xl font-bold text-[#E07C3C]">98%</div>
            <div className="text-xs text-[#7A6B5F]">Happy adopters</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center border border-gray-100">
            <div className="text-2xl font-bold text-[#E07C3C]">24/7</div>
            <div className="text-xs text-[#7A6B5F]">Support available</div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center border border-gray-100">
            <div className="text-2xl font-bold text-[#E07C3C]">120+</div>
            <div className="text-xs text-[#7A6B5F]">Partner shelters</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-1.5 shadow-lg border border-[#E07C3C]/10">
            <span className="px-6 py-2 text-[#4A3728] font-medium flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#E07C3C]" />
              Ready to start your adoption journey?
            </span>
            <a
              href="/allpets"
              className="inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Find Your Perfect Match
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdoptionSteps;
