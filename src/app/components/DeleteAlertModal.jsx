"use client";
import { Button, Modal } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaExclamationTriangle, FaTimes, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const DeleteAlertModal = ({ pets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { _id, petName } = pets;

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to delete pet");
      }

      const data = await res.json();
      console.log(data);
      toast.success(`${petName || "Pet"} has been removed successfully! 🗑️`);
      setIsOpen(false);
      
      // Refresh the page to update the list
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete pet. Please try again.");
      console.error("Error deleting pet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white border-none rounded-xl text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1 py-2.5"
      >
        <RiDeleteBin6Line className="text-sm" />
        Delete
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40" variant="blur">
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[440px]">
              <Modal.Header className="border-b border-gray-100 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <Modal.Heading className="text-xl font-bold text-[#4A3728]">
                      Delete Permanently?
                    </Modal.Heading>
                    <p className="text-sm text-gray-500 mt-1">
                      This action cannot be undone
                    </p>
                  </div>
                </div>
              </Modal.Header>

              <Modal.Body className="py-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-800">
                    You are about to permanently delete <strong className="text-red-900">{petName || "this pet"}</strong> and all of its data.
                  </p>
                  <p className="text-sm text-red-700 mt-2 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    This action cannot be undone.
                  </p>
                </div>

                {/* Pet Preview */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#E07C3C]/10 flex items-center justify-center">
                      <RiDeleteBin6Line className="text-[#E07C3C] text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A3728]">{petName || "Unknown Pet"}</p>
                      <p className="text-xs text-gray-500">ID: {_id?.slice(0, 8) || "N/A"}...</p>
                    </div>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="border-t border-gray-100 pt-4">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
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
                    onClick={handleDelete}
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <FaTrash className="text-xs" />
                    {isLoading ? "Deleting..." : "Delete Permanently"}
                  </Button>
                </div>
              </Modal.Footer>

              <Modal.CloseTrigger />
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default DeleteAlertModal;