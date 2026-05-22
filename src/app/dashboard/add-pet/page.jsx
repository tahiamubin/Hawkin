"use client";

import {
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";
import { Toaster } from "react-hot-toast";

const AddPetPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allPet = Object.fromEntries(formData.entries());
    console.log(allPet);

    const res = await fetch("http://localhost:5000/all-pet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allPet),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-[#FBF8F3]">
      <form onSubmit={onSubmit} className="p-10 space-y-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pet Name */}
          <div className="md:col-span-2">
            <TextField name="petName" isRequired>
              <Label>Pet Name</Label>
              <Input placeholder="Luna" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Breed */}
          <TextField name="breed" isRequired>
            <Label>Breed</Label>
            <Input placeholder="Persian" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Species */}
          <Select
            name="species"
            isRequired
            className="w-full"
            placeholder="Select category"
          >
            <Label>Species</Label>
            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Cat" textValue="Cat">
                  Cat
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Dog" textValue="Dog">
                  Dog
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Bird" textValue="Bird">
                  Bird
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Rabbit" textValue="Rabbit">
                  Rabbit
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="Others" textValue="Others">
                  Others
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Gender */}
          <TextField name="gender" isRequired>
            <Label>Gender</Label>
            <Input type="text" placeholder="male" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Age */}
          <TextField name="age" isRequired>
            <Label>Age</Label>
            <Input placeholder="3 years" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Health Status  */}
          <Select
            name="health"
            isRequired
            className="w-full"
            placeholder="Select health status"
          >
            <Label>Health Status</Label>
            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="good" textValue="good">
                  Good
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="bad" textValue="bad">
                  Bad
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Vaccination Status */}
          <Select
            name="vaccine"
            isRequired
            className="w-full"
            placeholder="Select vaccination status"
          >
            <Label>Vaccination Status</Label>
            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="vaccinated" textValue="vaccinated">
                  Vaccinated
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="not-vaccinated" textValue="not-vaccinated">
                  Not vaccinated
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="on-process" textValue="on-process">
                  On process
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Location */}
          <TextField name="location" isRequired>
            <Label>Location</Label>
            <Input placeholder="Dhaka" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Adoption Fee */}
          <TextField name="fee" isRequired>
            <Label>Adoption Fee (TAKA)</Label>
            <Input type="number" placeholder="fee" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField name="imageUrl" isRequired>
            <Label>Image URL</Label>
            <Input
              type="url"
              placeholder="https://example.com/pet.jpg"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>

          {/* Email*/}
          <TextField name="email" isRequired>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="admin@gmail.com"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the pet..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#3D6B4F]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPetPage;
