"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff, PawPrint } from "lucide-react";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    setIsLoading(false);

    if (data) {
      toast.success("Welcome back! 🐾");
      redirect("/");
    }
    if (error) {
      toast.error("Invalid email or password. Please try again.");
    }
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
              Welcome Back! 👋
            </h1>
            <p className="text-sm sm:text-base text-[#7A6B5F] mt-2">
              Sign in to find your new furry friend
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
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
              <Label className="text-[#4A3728] font-medium">Email Address</Label>
              <Input
                placeholder="john@example.com"
                className="w-full"
                startContent={
                  <svg
                    className="w-4 h-4 text-[#7A6B5F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type={isVisible ? "text" : "password"}
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
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeOff className="w-4 h-4 text-[#7A6B5F]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#7A6B5F]" />
                    )}
                  </button>
                }
                startContent={
                  <svg
                    className="w-4 h-4 text-[#7A6B5F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                }
              />
              <Description className="text-[#7A6B5F] text-xs">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-red-500 text-xs mt-1" />
            </TextField>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <Checkbox className="text-[#4A3728] text-sm">
                Remember me
              </Checkbox>
              <Link
                href="/forgot-password"
                className="text-sm text-[#E07C3C] hover:text-[#C96B2E] transition-colors font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button
                type="submit"
                className="flex-1 bg-[#E07C3C] text-white hover:bg-[#C96B2E] 
                         py-2.5 rounded-full text-sm font-medium
                         shadow-sm hover:shadow-md transition-all duration-300
                         disabled:opacity-70 disabled:cursor-not-allowed"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              <Button
                type="reset"
                variant="bordered"
                className="flex-1 border-[#E07C3C] text-[#E07C3C] hover:bg-[#E07C3C]/10 
                         py-2.5 rounded-full text-sm font-medium
                         transition-all duration-300"
              >
                Reset
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-4 pt-4 border-t border-[#E07C3C]/10">
              <p className="text-sm text-[#7A6B5F]">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#E07C3C] hover:text-[#C96B2E] font-medium transition-colors"
                >
                  Join Today
                </Link>
              </p>
            </div>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignInPage;