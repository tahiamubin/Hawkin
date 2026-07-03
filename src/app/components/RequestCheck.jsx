"use client";

import { Button, Modal, Badge } from "@heroui/react";
import React, { useState } from "react";
import {
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaUserCircle,
  FaEnvelope,
  FaCalendar,
  FaComment,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaPaw,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const RequestCheck = ({ petId, petName, requests = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [filter, setFilter] = useState("all"); // all, pending, approved, rejected

  // Sample requests - in real app, this comes from props
  const sampleRequests = [
    {
      id: "req_001",
      userName: "Rafi Ahmed",
      userEmail: "rafi@email.com",
      userImage: null,
      message: "I've been looking for a friendly dog to join our family. We have a big garden and two kids who love animals!",
      date: "2024-01-15",
      status: "pending",
      petInterest: "I've had dogs before and understand their needs."
    },
    {
      id: "req_002",
      userName: "Sadia Rahman",
      userEmail: "sadia@email.com",
      userImage: null,
      message: "This cat is adorable! I work from home and can give her all the attention she needs.",
      date: "2024-01-14",
      status: "pending",
      petInterest: "I have experience with cats and have all the supplies ready."
    },
    {
      id: "req_003",
      userName: "Nadia Khan",
      userEmail: "nadia@email.com",
      userImage: null,
      message: "Perfect companion for my elderly mother. She needs a gentle pet.",
      date: "2024-01-13",
      status: "approved",
      petInterest: "We already have a vet and are ready to adopt."
    },
  ];

  const allRequests = requests.length > 0 ? requests : sampleRequests;

  // Filter requests based on status
  const filteredRequests = filter === "all" 
    ? allRequests 
    : allRequests.filter(req => req.status === filter);

  const stats = {
    total: allRequests.length,
    pending: allRequests.filter(r => r.status === "pending").length,
    approved: allRequests.filter(r => r.status === "approved").length,
    rejected: allRequests.filter(r => r.status === "rejected").length,
  };

  const handleAction = async (requestId, action) => {
    setSelectedRequestId(requestId);
    setIsProcessing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (action === "approve") {
        toast.success(`Request approved! 🎉`);
      } else {
        toast.success(`Request rejected`);
      }
      
      setIsOpen(false);
    } catch (error) {
      toast.error(`Failed to ${action} request. Please try again.`);
    } finally {
      setIsProcessing(false);
      setSelectedRequestId(null);
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: { 
        color: "warning", 
        icon: <FaClock className="text-yellow-500" />,
        label: "Pending",
        bgClass: "bg-yellow-50 border-yellow-200"
      },
      approved: { 
        color: "success", 
        icon: <FaCheckCircle className="text-green-500" />,
        label: "Approved",
        bgClass: "bg-green-50 border-green-200"
      },
      rejected: { 
        color: "danger", 
        icon: <FaTimesCircle className="text-red-500" />,
        label: "Rejected",
        bgClass: "bg-red-50 border-red-200"
      },
    };
    return configs[status] || configs.pending;
  };

  return (
    <>
      {/* Trigger Button with Stats */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-full bg-gradient-to-r from-[#E07C3C] to-[#F59E0B] hover:from-[#C96B2E] hover:to-[#E07C3C] text-white rounded-xl px-4 py-2.5 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <FaEye className="text-sm group-hover:scale-110 transition-transform" />
        <span>View Requests</span>
        {stats.total > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {stats.pending}
          </span>
        )}
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="2xl">
        <Modal.Backdrop variant="blur" />
        <Modal.Container>
          <Modal.Dialog className="max-h-[90vh] overflow-hidden">
            {/* Header */}
            <Modal.Header className="border-b border-gray-200 pb-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <Modal.Heading className="text-2xl font-bold text-[#4A3728] flex items-center gap-2">
                      <FaPaw className="text-[#E07C3C]" />
                      Adoption Requests
                    </Modal.Heading>
                    <p className="text-sm text-gray-500 mt-1">
                      {petName ? `Requests for ${petName}` : 'Manage adoption requests'}
                    </p>
                  </div>
                  <Modal.CloseTrigger />
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="bg-blue-50 px-3 py-1 rounded-full text-xs">
                    Total: <span className="font-bold text-blue-600">{stats.total}</span>
                  </div>
                  <div className="bg-yellow-50 px-3 py-1 rounded-full text-xs">
                    Pending: <span className="font-bold text-yellow-600">{stats.pending}</span>
                  </div>
                  <div className="bg-green-50 px-3 py-1 rounded-full text-xs">
                    Approved: <span className="font-bold text-green-600">{stats.approved}</span>
                  </div>
                  <div className="bg-red-50 px-3 py-1 rounded-full text-xs">
                    Rejected: <span className="font-bold text-red-600">{stats.rejected}</span>
                  </div>
                </div>
              </div>
            </Modal.Header>

            {/* Filter Tabs */}
            <div className="px-6 pt-4 border-b border-gray-100">
              <div className="flex gap-2">
                {["all", "pending", "approved", "rejected"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize ${
                      filter === tab
                        ? "bg-[#E07C3C] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab === "all" ? "All" : tab}
                    {tab !== "all" && (
                      <span className="ml-1 text-xs opacity-70">
                        ({stats[tab] || 0})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Body */}
            <Modal.Body className="py-4 overflow-y-auto max-h-[50vh]">
              {filteredRequests.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-xl font-semibold text-[#4A3728]">No Requests Found</h3>
                  <p className="text-gray-500 mt-2">
                    {filter === "all" 
                      ? "No one has requested to adopt this pet yet" 
                      : `No ${filter} requests to show`}
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  <div className="space-y-4">
                    {filteredRequests.map((request, index) => {
                      const statusConfig = getStatusConfig(request.status);
                      return (
                        <motion.div
                          key={request.id || index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`rounded-xl border p-4 ${statusConfig.bgClass} hover:shadow-md transition-all duration-200`}
                        >
                          {/* User Info */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-[#E07C3C]/10 flex items-center justify-center flex-shrink-0">
                                {request.userImage ? (
                                  <img 
                                    src={request.userImage} 
                                    alt={request.userName} 
                                    className="w-full h-full rounded-full object-cover"
                                  />
                                ) : (
                                  <FaUserCircle className="text-3xl text-[#E07C3C]" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#4A3728]">
                                  {request.userName}
                                </h4>
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                  <FaEnvelope className="text-[10px]" />
                                  {request.userEmail}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {statusConfig.icon}
                              <span className={`text-xs font-medium capitalize`}>
                                {statusConfig.label}
                              </span>
                            </div>
                          </div>

                          {/* Message */}
                          {request.message && (
                            <div className="mt-3 bg-white rounded-lg p-3 border border-gray-100">
                              <div className="flex items-start gap-2">
                                <FaComment className="text-[#E07C3C] text-xs mt-0.5" />
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {request.message}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Additional Info */}
                          {request.petInterest && (
                            <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                              <FaPaw className="text-[10px] text-[#E07C3C]" />
                              {request.petInterest}
                            </p>
                          )}

                          {/* Date */}
                          <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                            <FaCalendar className="text-[10px]" />
                            <span>Requested: {request.date || new Date().toLocaleDateString()}</span>
                          </div>

                          {/* Action Buttons */}
                          {request.status === "pending" && (
                            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
                              <button
                                onClick={() => handleAction(request.id, "approve")}
                                disabled={isProcessing && selectedRequestId === request.id}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 disabled:opacity-50"
                              >
                                {isProcessing && selectedRequestId === request.id ? (
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <>
                                    <FaCheck className="text-xs" />
                                    Approve
                                  </>
                                )}
                              </button>
                              <button
                                onClick={() => handleAction(request.id, "reject")}
                                disabled={isProcessing && selectedRequestId === request.id}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 disabled:opacity-50"
                              >
                                {isProcessing && selectedRequestId === request.id ? (
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <>
                                    <FaTimes className="text-xs" />
                                    Reject
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </AnimatePresence>
              )}
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="border-t border-gray-200 pt-4">
              <Button
                className="w-full bg-[#E07C3C] hover:bg-[#C96B2E] text-white rounded-xl py-2.5 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                slot="close"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal>
    </>
  );
};

export default RequestCheck;