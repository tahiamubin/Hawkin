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
  Modal,
  Surface,
} from "@heroui/react";
import React, { useState } from "react";
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaPaw,
  FaDog,
  FaCat,
  FaUser,
  FaCalendar,
  FaHeart,
  FaSyringe,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaImage,
  FaFileAlt,
} from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const EditPetInfo = ({ pets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  } = pets;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const info = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(info),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update pet");
      }

      const data = await res.json();
      console.log(data);
      toast.success(
        `${info.petName || petName} has been updated successfully! 🎉`,
      );
      setIsOpen(false);

      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update pet. Please try again.");
      console.error("Error updating pet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm w-full bg-blue-500 hover:bg-blue-600 text-white border-none rounded-xl text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1 py-2.5"
      >
        <FaEdit className="text-xs" />
        Edit
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop
          className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
          variant="blur"
        >
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
              <Modal.Header className="border-b border-gray-100 pb-4">
                <div>
                  <Modal.Heading className="text-xl font-bold text-[#4A3728] flex items-center gap-2">
                    <FaPaw className="text-[#E07C3C]" />
                    Edit Pet Information
                  </Modal.Heading>
                  <p className="text-sm text-gray-500 mt-1">
                    Update details for {petName || "your pet"}
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default" className="rounded-xl">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Pet Name */}
                    <TextField
                      className="w-full"
                      name="petName"
                      type="text"
                      variant="secondary"
                      defaultValue={petName || ""}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaPaw className="text-[#E07C3C] text-xs" />
                        Pet Name
                      </Label>
                      <Input
                        placeholder="Enter pet name"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={petName || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Breed */}
                    <TextField
                      className="w-full"
                      name="breed"
                      type="text"
                      variant="secondary"
                      defaultValue={breed || ""}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaDog className="text-[#E07C3C] text-xs" />
                        Breed
                      </Label>
                      <Input
                        placeholder="Enter breed"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={breed || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Species */}
                    <Select
                      name="species"
                      className="w-full"
                      placeholder="Select category"
                      defaultSelectedKeys={species ? [species] : []}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaCat className="text-[#E07C3C] text-xs" />
                        Species
                      </Label>
                      <Select.Trigger className="rounded-xl border-gray-200">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Cat" textValue="Cat">
                            Cat
                          </ListBox.Item>
                          <ListBox.Item id="Dog" textValue="Dog">
                            Dog
                          </ListBox.Item>
                          <ListBox.Item id="Bird" textValue="Bird">
                            Bird
                          </ListBox.Item>
                          <ListBox.Item id="Rabbit" textValue="Rabbit">
                            Rabbit
                          </ListBox.Item>
                          <ListBox.Item id="Others" textValue="Others">
                            Others
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Gender */}
                    <TextField name="gender" defaultValue={gender || ""}>
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaUser className="text-[#E07C3C] text-xs" />
                        Gender
                      </Label>
                      <Input
                        type="text"
                        placeholder="e.g., Male, Female"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={gender || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Age */}
                    <TextField name="age" defaultValue={age || ""}>
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaCalendar className="text-[#E07C3C] text-xs" />
                        Age
                      </Label>
                      <Input
                        placeholder="e.g., 2 years, 6 months"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={age || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Health Status */}
                    <Select
                      name="health"
                      className="w-full"
                      placeholder="Select health status"
                      defaultSelectedKeys={health ? [health] : []}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaHeart className="text-[#E07C3C] text-xs" />
                        Health Status
                      </Label>
                      <Select.Trigger className="rounded-xl border-gray-200">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Good" textValue="Good">
                            Good
                          </ListBox.Item>
                          <ListBox.Item id="Bad" textValue="Bad">
                            Bad
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Vaccination Status */}
                    <Select
                      name="vaccine"
                      className="w-full"
                      placeholder="Select vaccination status"
                      defaultSelectedKeys={vaccine ? [vaccine] : []}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaSyringe className="text-[#E07C3C] text-xs" />
                        Vaccination Status
                      </Label>
                      <Select.Trigger className="rounded-xl border-gray-200">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                            Vaccinated
                          </ListBox.Item>
                          <ListBox.Item
                            id="Not vaccinated"
                            textValue="Not vaccinated"
                          >
                            Not vaccinated
                          </ListBox.Item>
                          <ListBox.Item id="On process" textValue="On process">
                            On process
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Location */}
                    <TextField name="location" defaultValue={location || ""}>
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#E07C3C] text-xs" />
                        Location
                      </Label>
                      <Input
                        placeholder="e.g., Dhaka"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={location || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Adoption Fee */}
                    <TextField name="fee" defaultValue={fee || ""}>
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <TbCoinTakaFilled className="text-[#E07C3C] text-xs" />
                        Adoption Fee (BDT)
                      </Label>
                      <Input
                        type="number"
                        placeholder="e.g., 5000"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={fee || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField name="imageUrl" defaultValue={imageUrl || ""}>
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaImage className="text-[#E07C3C] text-xs" />
                        Image URL
                      </Label>
                      <Input
                        type="url"
                        placeholder="https://example.com/pet.jpg"
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20"
                        defaultValue={imageUrl || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Description */}
                    <TextField
                      name="description"
                      defaultValue={description || ""}
                    >
                      <Label className="text-sm font-medium text-[#4A3728] flex items-center gap-2">
                        <FaFileAlt className="text-[#E07C3C] text-xs" />
                        Description
                      </Label>
                      <TextArea
                        placeholder="Describe the pet's personality..."
                        className="rounded-xl border-gray-200 focus:border-[#E07C3C] focus:ring-2 focus:ring-[#E07C3C]/20 min-h-[100px]"
                        defaultValue={description || ""}
                      />
                      <FieldError />
                    </TextField>

                    {/* Footer Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-gray-100">
                      <Button
                        type="button"
                        variant="secondary"
                        onPress={() => setIsOpen(false)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#4A3728] rounded-xl text-sm font-medium transition-all duration-300"
                      >
                        <FaTimes className="text-xs" />
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                        className="flex-1 bg-[#E07C3C] hover:bg-[#C96B2E] text-white rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <FaSave className="text-xs" />
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>

              <Modal.CloseTrigger />
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default EditPetInfo;
