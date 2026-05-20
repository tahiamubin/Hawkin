"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { useState } from "react";

const AdoptRequest = ({ pet }) => {
  const [adopt, setAdopt] = useState(false);
  const {
    _id,
    petName,
    breed,
    species,
    gender,
    age,
    health,
    fee,
    location,
    imageUrl,
    vaccine,
    description,
  } = pet;
  return (
    <div>
      {adopt ? (
        <div className="ml-15">
            <div className="card bg-green-50 border border-green-700 shadow-xl max-w-sm ">
          <div className="card-body flex-row items-start gap-4 p-5">
            <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h2 className="card-title text-green-800 text-xl font-bold">
                Request Sent!
              </h2>
              <p className="text-neutral-900 text-sm mt-1">
                Your adoption request for{" "}
                <span className="font-semibold">{petName}</span> has been sent to the
                owner. You can track its status in the{" "}
                <a
                  href="/my-request"
                  className="text-orange-600 underline font-medium"
                >
                  My Request
                </a>{" "}
                page.
              </p>
            </div>

            <button className="text-green-600 shrink-0 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
        
      ) : (
        <form className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* pet Name */}
            <div className="md:col-span-2">
              <TextField name="petName" isRequired>
                <Label>pet Name</Label>
                <Input
                  placeholder={petName}
                  className="rounded-2xl bg-gray-100 cursor-default"
                  readOnly
                />
                <FieldError />
              </TextField>
            </div>
            {/* after adding session */}
            {/* NAME */}
            <div className="md:col-span-2">
              <TextField name="name" type="text" isRequired>
                <Label>Name</Label>
                <Input placeholder="name" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>
            {/* email */}
            <div className="md:col-span-2">
              <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input
                  placeholder="admin12@gmail.com"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>
            {/* pickup Date */}
            <div className="md:col-span-2">
              <TextField name="Pickup-date" type="date" isRequired>
                <Label>Preferred Pickup Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea placeholder="Describe ...." className="rounded-3xl" />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            onClick={() => setAdopt(true)}
            className={"bg-[#3D6B4F] w-full shadow-sm"}
          >
            Adopt Now
          </Button>
        </form>
      )}
    </div>
  );
};

export default AdoptRequest;
