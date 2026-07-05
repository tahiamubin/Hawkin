"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/allpets", label: "All Pet" },
    { href: "/dashboard/my-listings", label: "My Listings" },
    { href: "/dashboard/add-pet", label: "Add Pet" },
    { href: "/dashboard/my-request", label: "My Request" },
  ];

  const DesktopLinks = (
    <>
      {navLinks.map((link) => (
        <motion.li
          key={link.href}
          whileHover={{ y: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href={link.href}
            className="relative text-[#4A3728] text-sm font-medium hover:text-[#E07C3C] transition-colors duration-200
                       px-3 py-1.5 rounded-lg hover:bg-[#E07C3C]/10"
          >
            {link.label}
          </Link>
        </motion.li>
      ))}
    </>
  );

  const MobileLinks = (
    <>
      {navLinks.map((link) => (
        <motion.li
          key={link.href}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={link.href}
            className="block px-4 py-2.5 text-[#4A3728] hover:bg-[#E07C3C]/10 rounded-lg transition-colors text-sm"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        </motion.li>
      ))}
    </>
  );

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="navbar-start gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center 
                       rounded-lg hover:bg-[#E07C3C]/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-5 gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-[#4A3728] rounded-full transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                className="block h-0.5 w-5 bg-[#4A3728] rounded-full transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-[#4A3728] rounded-full transition-all duration-300"
              />
            </div>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ml-1 lg:ml-0">
            <span className="text-2xl sm:text-3xl font-bold text-[#E07C3C]">
              Hawkin
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-0.5 px-0">
            {DesktopLinks}
          </ul>
        </div>

        {/* Right Side - Auth Buttons */}
        <div className="navbar-end gap-1 sm:gap-2 md:gap-3">
          {user ? (
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:block"
              >
                <Avatar
                  className="ring-2 ring-[#E07C3C]/30 hover:ring-[#E07C3C]/50 transition-all"
                  src={user?.image || undefined}
                  fallback={user?.name?.[0] || "U"}
                  alt={user?.name || "User"}
                  size="sm"
                />
              </motion.div>
              <span className="hidden md:block text-sm font-medium text-[#4A3728]">
                {user?.name?.split(" ")[0]}
              </span>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleSignout}
                  className="bg-[#E07C3C] text-white hover:bg-[#C96B2E] 
                             px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                             shadow-sm hover:shadow-md transition-all duration-300
                             min-w-[60px] sm:min-w-[80px]"
                >
                  <span className="hidden xs:inline">Sign Out</span>
                  <span className="xs:hidden">→</span>
                </Button>
              </motion.div>
            </div>
          ) : (
            <div className="flex gap-1 sm:gap-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/signin">
                  <Button
                    className="bg-transparent text-[#E07C3C] hover:bg-[#E07C3C]/10 
                               px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                               border border-[#E07C3C] transition-all duration-300
                               min-w-[60px] sm:min-w-[80px]"
                  >
                    <span className="hidden xs:inline">Sign In</span>
                    <span className="xs:hidden">→</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/signup">
                  <Button
                    className="bg-[#E07C3C] text-white hover:bg-[#C96B2E] 
                               px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                               shadow-sm hover:shadow-md transition-all duration-300
                               min-w-[60px] sm:min-w-[80px]"
                  >
                    <span className="hidden xs:inline">Join Today</span>
                    <span className="xs:hidden">Join</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E07C3C]/10"
          >
            <ul className="px-4 py-3 space-y-0.5">
              {MobileLinks}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;