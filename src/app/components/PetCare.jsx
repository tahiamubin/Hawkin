'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Utensils, 
  Dumbbell, 
  Stethoscope, 
  Heart, 
  Shield, 
  Smile,
  ArrowRight,
  Sparkles,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const PetCare = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Balanced Nutrition",
      description: "Feed your pet high-quality food suited to their species, age, and size. Fresh water should always be available.",
      color: "from-[#E07C3C] to-[#F59E0B]",
      badge: "Nutrition",
      badgeColor: "bg-[#E07C3C]/10 text-[#E07C3C]",
      tips: [
        "Choose age-appropriate food",
        "Measure portions carefully",
        "Avoid table scraps",
        "Provide fresh water daily"
      ]
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Daily Exercise",
      description: "Regular walks and playtime keep pets physically fit and mentally stimulated. Even 20 minutes makes a big difference.",
      color: "from-[#EC4899] to-[#F472B6]",
      badge: "Fitness",
      badgeColor: "bg-[#EC4899]/10 text-[#EC4899]",
      tips: [
        "Walk twice daily",
        "Interactive toys",
        "Play fetch or chase",
        "Socialize with other pets"
      ]
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "Regular Vet Visits",
      description: "Schedule routine checkups and keep vaccinations up to date. Early detection saves lives.",
      color: "from-[#8B5CF6] to-[#A78BFA]",
      badge: "Health",
      badgeColor: "bg-[#8B5CF6]/10 text-[#8B5CF6]",
      tips: [
        "Annual check-ups",
        "Stay up-to-date on vaccines",
        "Dental care",
        "Parasite prevention"
      ]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Mental Wellness",
      description: "Pets need emotional care too. Spend quality time, provide enrichment, and watch for signs of stress.",
      color: "from-[#10B981] to-[#34D399]",
      badge: "Wellness",
      badgeColor: "bg-[#10B981]/10 text-[#10B981]",
      tips: [
        "Quality time daily",
        "Puzzle toys",
        "Training sessions",
        "Comfortable resting space"
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Grooming & Hygiene",
      description: "Regular grooming keeps your pet clean and healthy. It's also a great way to bond with your furry friend.",
      color: "from-[#3B82F6] to-[#60A5FA]",
      badge: "Grooming",
      badgeColor: "bg-[#3B82F6]/10 text-[#3B82F6]",
      tips: [
        "Brush coat regularly",
        "Nail trimming",
        "Ear cleaning",
        "Bathe as needed"
      ]
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: "Socialization",
      description: "Help your pet become well-adjusted by exposing them to different people, animals, and environments safely.",
      color: "from-[#F59E0B] to-[#FBBF24]",
      badge: "Social",
      badgeColor: "bg-[#F59E0B]/10 text-[#F59E0B]",
      tips: [
        "Puppy/dog classes",
        "Regular walks",
        "Pet-friendly cafes",
        "Playdates"
      ]
    }
  ];

  const nextTip = () => {
    setActiveTip((prev) => (prev + 1) % tips.length);
  };

  const prevTip = () => {
    setActiveTip((prev) => (prev - 1 + tips.length) % tips.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFF5F0]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#FFE8D6]/30 to-transparent rounded-tr-full"></div>

      {/* Floating Decorations */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <Heart className="w-24 h-24 text-[#E07C3C] rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
        <Sparkles className="w-20 h-20 text-[#E07C3C]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E07C3C]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
            <Award className="w-4 h-4 text-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">Expert Care Tips</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3728] mb-4">
            Pet Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">Essentials</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#7A6B5F] max-w-2xl mx-auto">
            Keep your furry friends healthy, happy, and loved with these expert-approved tips.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${tips[activeTip].color} rounded-3xl p-8 text-white shadow-2xl h-full`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    {React.cloneElement(tips[activeTip].icon, { className: "w-12 h-12" })}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm`}>
                    {tips[activeTip].badge}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-3">{tips[activeTip].title}</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {tips[activeTip].description}
                </p>

                {/* Tips List */}
                <div className="space-y-2">
                  {tips[activeTip].tips.map((tip, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="text-sm">{tip}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    {tips.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTip(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeTip === idx 
                            ? 'w-8 bg-white' 
                            : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTip}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTip}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tips Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
          >
            {tips.map((tip, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setActiveTip(idx)}
                className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 ${
                  activeTip === idx 
                    ? `border-${tip.color.split(' ')[0].replace('from-', '')} bg-gradient-to-br ${tip.color} text-white shadow-lg`
                    : 'border-gray-100 bg-white hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  activeTip === idx 
                    ? 'bg-white/20' 
                    : `bg-gradient-to-br ${tip.color} bg-opacity-10`
                }`}>
                  {React.cloneElement(tip.icon, { 
                    className: `w-6 h-6 ${activeTip === idx ? 'text-white' : 'text-[#E07C3C]'}` 
                  })}
                </div>
                <h4 className={`font-bold ${activeTip === idx ? 'text-white' : 'text-[#4A3728]'}`}>
                  {tip.title}
                </h4>
                <p className={`text-sm mt-1 ${activeTip === idx ? 'text-white/80' : 'text-[#7A6B5F]'}`}>
                  {tip.badge}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-gradient-to-r from-[#FFF5F0] to-[#FFE8D6] p-4 rounded-2xl text-center">
            <Clock className="w-8 h-8 text-[#E07C3C] mx-auto mb-2" />
            <div className="text-sm font-medium text-[#4A3728]">24/7 Vet Support</div>
            <div className="text-xs text-[#7A6B5F]">Always available</div>
          </div>
          <div className="bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] p-4 rounded-2xl text-center">
            <Heart className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
            <div className="text-sm font-medium text-[#4A3728]">Free Health Check</div>
            <div className="text-xs text-[#7A6B5F]">For adopted pets</div>
          </div>
          <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] p-4 rounded-2xl text-center">
            <Award className="w-8 h-8 text-[#3B82F6] mx-auto mb-2" />
            <div className="text-sm font-medium text-[#4A3728]">Expert Training</div>
            <div className="text-xs text-[#7A6B5F]">Online & in-person</div>
          </div>
          <div className="bg-gradient-to-r from-[#FDF4FF] to-[#FAE8FF] p-4 rounded-2xl text-center">
            <Smile className="w-8 h-8 text-[#8B5CF6] mx-auto mb-2" />
            <div className="text-sm font-medium text-[#4A3728]">Happy Pets</div>
            <div className="text-xs text-[#7A6B5F]">Satisfaction guaranteed</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FBF8F3] to-[#FFF5F0] rounded-full p-1.5 shadow-lg border border-[#E07C3C]/10">
            <span className="px-6 py-2 text-[#4A3728] font-medium">
              Need personalized advice?
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PetCare;