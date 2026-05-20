"use client";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "@contentstack/react-toastify";

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
import { redirect } from "next/navigation";
import React from "react";

const signUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
    toast.error("Signup not successful"); 
  }
  };
  return (
    <div>
      <Card className="container mx-auto mt-20 mb-20">
        <Form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-4 items-center"
        >
          <TextField isRequired name="name" type="text" className={"w-96"}>
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="url"
            type="url"
            className={"w-96"}
            validate={(value) => {
              try {
                new URL(value);
                return null;
              } catch {
                return "Please enter a valid URL";
              }
            }}
          >
            <Label>URL</Label>
            <Input placeholder="https://example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className={"w-96"}
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className={"w-96"}
            validate={(value) => {
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
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              className={"border-[#3D6B4F] bg-[#EBF3EE] text-[#3D6B4F]"}
            >
              Create account
            </Button>
            <Button type="button" className={"bg-[#3D6B4F]"}>
              Sign in with Google
            </Button>
          </div>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default signUpPage;
