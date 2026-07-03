'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Stethoscope, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Shield,
  Heart,
  Clock,
  CheckCircle
} from 'lucide-react';

const BannerCard = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Pet Matching",
      description: "Tell us your lifestyle, home size & preferences. Our algorithm finds pets that truly fit your life.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      link: "Explore matching",
      stats: "95% match accuracy"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "One-Click Applications",
      description: "Apply to multiple shelters with a single profile. Track all your requests from one dashboard.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      link: "See dashboard",
      stats: "24hr response time"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Vet-Verified Profiles",
      description: "Every pet listing includes health records, vaccination status, and a behaviour assessment.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      link: "Learn more",
      stats: "100% verified"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Post-Adoption Care",
      description: "Access expert guides, a 24/7 vet helpline, and a community of new pet owners for free.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      link: "Join community",
      stats: "24/7 support"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#FBF8F3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#E07C3C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#EC4899]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07C3C]/10 to-[#F59E0B]/10 px-4 py-2 rounded-full border border-[#E07C3C]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#E07C3C]" />
            <span className="text-sm font-medium text-[#E07C3C]">Why Choose Us</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07C3C] animate-pulse"></span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A3728] mb-4">
            Everything you need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E07C3C] to-[#F59E0B]">
              adopt with confidence
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#7A6B5F] max-w-2xl mx-auto">
            We make the adoption journey simple, transparent, and joyful — 
            from first browse to forever home.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm text-[#4A3728]">Verified Shelters</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#EC4899]" />
              <span className="text-sm text-[#4A3728]">1,200+ Adoptions</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E07C3C]" />
              <span className="text-sm text-[#4A3728]">24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E07C3C] to-[#F59E0B] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E07C3C]/20 h-full flex flex-col relative overflow-hidden">
                {/* Animated gradient line at top */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E07C3C] to-[#F59E0B] group-hover:w-full transition-all duration-500"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 text-[#E07C3C] group-hover:shadow-md transition-all duration-300`}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#4A3728] mb-2 group-hover:text-[#E07C3C] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#7A6B5F] leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 bg-[#E07C3C]/5 px-3 py-1 rounded-full text-xs font-medium text-[#E07C3C]">
                  <CheckCircle className="w-3 h-3" />
                  {feature.stats}
                </div>

                {/* Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E07C3C] group-hover:text-[#C96B2E] cursor-pointer transition-all duration-300">
                    {feature.link}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#FFF5F0] to-[#FFE8D6] rounded-full p-1.5 shadow-lg border border-[#E07C3C]/10">
            <span className="px-6 py-2 text-[#4A3728] font-medium flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#E07C3C]" />
              Ready to find your perfect companion?
            </span>
            <a
              href="/allpets"
              className="inline-flex items-center gap-2 bg-[#E07C3C] text-white hover:bg-[#C96B2E] px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerCard;