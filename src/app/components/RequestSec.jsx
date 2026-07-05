"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { 
  FaTrash, 
  FaCheck, 
  FaClock, 
  FaTimes, 
  FaPaw,
  FaCalendar,
  FaCalendarCheck,
  FaInfoCircle
} from "react-icons/fa";
import { motion } from "framer-motion";

const RequestSec = ({ listing }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    imageUrl,
    petName,
    breed,
    species,
    age,
    fee,
    _id,
    requestDate,
    pickupDate,
    status,
  } = listing;

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to cancel your adoption request for ${petName}?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to delete request");
      }

      const data = await res.json();
      console.log(data);
      toast.success(`Request for ${petName} has been cancelled`);
      
      // Refresh the page to update the list
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      toast.error("Failed to cancel request. Please try again.");
      console.error("Error deleting request:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: {
        icon: <FaClock className="text-yellow-500" />,
        label: "pending",
        className: "bg-yellow-50 text-yellow-700 border-yellow-200"
      },
      approved: {
        icon: <FaCheck className="text-green-500" />,
        label: "approved",
        className: "bg-green-50 text-green-700 border-green-200"
      },
      rejected: {
        icon: <FaTimes className="text-red-500" />,
        label: "rejected",
        className: "bg-red-50 text-red-700 border-red-200"
      },
      completed: {
        icon: <FaCheck className="text-blue-500" />,
        label: "Completed",
        className: "bg-blue-50 text-blue-700 border-blue-200"
      }
    };
    return statusMap[status?.toLowerCase()] || statusMap.pending;
  };

  const statusConfig = getStatusBadge(status);
  const isPending = status?.toLowerCase() === "pending";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Pet Info */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Pet Image */}
            <div className="w-16 h-16 rounded-xl bg-[#EBF3EE] overflow-hidden flex-shrink-0">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={petName} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaPaw className="text-[#E07C3C] text-2xl opacity-50" />
                </div>
              )}
            </div>

            {/* Pet Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#4A3728] text-lg truncate">
                {petName || "Unknown Pet"}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span>{species || "N/A"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{breed || "N/A"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{age || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${statusConfig.className}`}>
            {statusConfig.icon}
            <span className="text-xs font-medium">{statusConfig.label}</span>
          </div>
        </div>

        {/* Request Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCalendar className="text-[#E07C3C] text-xs" />
            <span className="font-medium">Requested:</span>
            <span>
              {requestDate ? new Date(requestDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }) : "N/A"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCalendarCheck className="text-[#E07C3C] text-xs" />
            <span className="font-medium">Pickup:</span>
            <span>
              {pickupDate ? new Date(pickupDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }) : "Not set"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <FaInfoCircle className="text-[10px]" />
            <span>Request ID: {_id?.slice(0, 8) || "N/A"}</span>
          </div>

          {isPending && (
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Cancelling...
                </>
              ) : (
                <>
                  <FaTrash className="text-xs" />
                  Cancel Request
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RequestSec;