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

const signInPage = () => {
   const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIp.email({
      email: user.email, 
      password: user.password,
  
    });
    if (data) {
      redirect("/");
    }
    if (error) {
    toast.error("Signup not successful"); 
  }
  };
  
  return (
    <div className="mt-10 mb-10">
      <Card className="container mx-auto">
        <Form onSubmit={onSubmit} className="flex  flex-col gap-4 w-full">
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
            <Button type="submit" className={"bg-[#3D6B4F]"}>
              <Checkbox />
              Sign In
            </Button>
            <Button type="reset" variant="secondary" className={"text-[#3D6B4F]"}>
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default signInPage;
