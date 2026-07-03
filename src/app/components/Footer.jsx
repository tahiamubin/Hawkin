import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Hawkin</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bangladesh's most trusted pet adoption platform. Every pet deserves a loving home.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E07C3C] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-sm hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E07C3C] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E07C3C] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sm hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E07C3C] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Adopt Column */}
          <div>
            <h6 className="text-white font-bold text-lg mb-4 relative">
              Adopt
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#E07C3C]"></span>
            </h6>
            <ul className="space-y-2.5">
              <li>
                <Link href="/allpets?species=dog" className="hover:text-[#E07C3C] transition-colors text-sm">
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="/allpets?species=cat" className="hover:text-[#E07C3C] transition-colors text-sm">
                  Cats
                </Link>
              </li>
              <li>
                <Link href="/allpets?species=bird" className="hover:text-[#E07C3C] transition-colors text-sm">
                  Birds & Rabbits
                </Link>
              </li>
              <li>
                <Link href="/allpets?age=senior" className="hover:text-[#E07C3C] transition-colors text-sm">
                  Senior Pets
                </Link>
              </li>
              <li>
                <Link href="/allpets" className="hover:text-[#E07C3C] transition-colors text-sm">
                  View All Pets
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard Column */}
          <div>
            <h6 className="text-white font-bold text-lg mb-4 relative">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#E07C3C]"></span>
            </h6>
            <ul className="space-y-2.5">
              <li>
                <Link href="/dashboard/my-request" className="hover:text-[#E07C3C] transition-colors text-sm">
                  My Requests
                </Link>
              </li>
              <li>
                <Link href="/dashboard/my-listings" className="hover:text-[#E07C3C] transition-colors text-sm">
                  My Listings
                </Link>
              </li>
              <li>
                <Link href="/dashboard/add-pet" className="hover:text-[#E07C3C] transition-colors text-sm">
                  Add a Pet
                </Link>
              </li>
              <li>
                <Link href="/dashboard/profile" className="hover:text-[#E07C3C] transition-colors text-sm">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h6 className="text-white font-bold text-lg mb-4 relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#E07C3C]"></span>
            </h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaLocationDot className="text-[#E07C3C] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-[#E07C3C] flex-shrink-0" />
                <a href="tel:+8801234567890" className="text-gray-400 hover:text-[#E07C3C] transition-colors">
                  +880 1234 567890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-[#E07C3C] flex-shrink-0" />
                <a href="mailto:info@pawfecthome.com" className="text-gray-400 hover:text-[#E07C3C] transition-colors">
                  info@pawfecthome.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E07C3C] transition-colors"
                />
                <button className="px-4 py-2 bg-[#E07C3C] hover:bg-[#C96B2E] rounded-full text-white text-sm font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {currentYear} Pawfect Home. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/terms" className="hover:text-[#E07C3C] transition-colors">
                Terms of Use
              </Link>
              <span className="w-px h-4 bg-gray-700"></span>
              <Link href="/privacy" className="hover:text-[#E07C3C] transition-colors">
                Privacy Policy
              </Link>
              <span className="w-px h-4 bg-gray-700"></span>
              <Link href="/cookies" className="hover:text-[#E07C3C] transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> for animals across Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;