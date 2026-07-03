"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  PawPrint,
  User,
  Mail,
  Lock,
  Link as LinkIcon,
} from "lucide-react";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.url,
    });

    setIsLoading(false);

    if (data) {
      toast.success("Account created successfully! 🎉 Welcome to Hawkin!");
      redirect("/");
    }
    if (error) {
      toast.error("Signup not successful. Please try again.");
    }
  };

  const handleSignIn = async () => {
    setIsGoogleLoading(true);
    await authClient.signIn.social({
      provider: "google",
    });
    setIsGoogleLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-[#FFF5F0] to-[#FFE8D6] px-4 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="w-full p-6 sm:p-8 md:p-10 shadow-xl border border-[#E07C3C]/10 bg-white/95 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E07C3C]/10 mb-4"
            >
              <PawPrint className="w-8 h-8 text-[#E07C3C]" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#4A3728]">
              Create Account 🐾
            </h1>
            <p className="text-sm sm:text-base text-[#7A6B5F] mt-2">
              Join our community and find your perfect companion
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
            {/* Name Field */}
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className="text-[#4A3728] font-medium">Full Name</Label>
              <Input
                placeholder="Enter your full name"
                className="w-full"
                startContent={<User className="w-4 h-4 text-[#7A6B5F]" />}
              />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* URL Field */}
            <TextField
              isRequired
              name="url"
              type="url"
              className="w-full"
              validate={(value) => {
                if (!value) return "URL is required";
                try {
                  new URL(value);
                  return null;
                } catch {
                  return "Please enter a valid URL";
                }
              }}
            >
              <Label className="text-[#4A3728] font-medium">
                Profile Image URL
              </Label>
              <Input
                placeholder="https://example.com/avatar.jpg"
                className="w-full"
                startContent={<LinkIcon className="w-4 h-4 text-[#7A6B5F]" />}
              />
              <Description className="text-[#7A6B5F] text-xs">
                Enter a valid image URL for your profile picture
              </Description>
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!value) return "Email is required";
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-[#4A3728] font-medium">
                Email Address
              </Label>
              <Input
                placeholder="john@example.com"
                className="w-full"
                startContent={<Mail className="w-4 h-4 text-[#7A6B5F]" />}
              />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              className="w-full"
              validate={(value) => {
                if (!value) return "Password is required";
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-[#4A3728] font-medium">Password</Label>
              <Input
                placeholder="Enter your password"
                className="w-full"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <EyeOff className="w-4 h-4 text-[#7A6B5F]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#7A6B5F]" />
                    )}
                  </button>
                }
                startContent={<Lock className="w-4 h-4 text-[#7A6B5F]" />}
              />
              <Description className="text-[#7A6B5F] text-xs">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <Button
                type="submit"
                className="w-full bg-[#E07C3C] text-white hover:bg-[#C96B2E] 
                         py-2.5 rounded-full text-sm font-medium
                         shadow-sm hover:shadow-md transition-all duration-300
                         disabled:opacity-70 disabled:cursor-not-allowed"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="relative flex items-center">
                <div className="flex-1 border-t border-[#E07C3C]/20"></div>
                <span className="px-4 text-xs text-[#7A6B5F] font-medium">
                  OR
                </span>
                <div className="flex-1 border-t border-[#E07C3C]/20"></div>
              </div>

              <Button
                onClick={handleSignIn}
                type="button"
                className="w-full bg-white text-[#4A3728] hover:bg-[#FFF5F0]
                         border-2 border-[#E07C3C]/30 hover:border-[#E07C3C]
                         py-2.5 rounded-full text-sm font-medium
                         transition-all duration-300
                         disabled:opacity-70 disabled:cursor-not-allowed"
                isLoading={isGoogleLoading}
                isDisabled={isGoogleLoading}
                startContent={
                  !isGoogleLoading && (
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      />
                      <path
                        fill="#4285F4"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  )
                }
              >
                {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-4 pt-4 border-t border-[#E07C3C]/10">
              <p className="text-sm text-[#7A6B5F]">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-[#E07C3C] hover:text-[#C96B2E] font-medium transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
