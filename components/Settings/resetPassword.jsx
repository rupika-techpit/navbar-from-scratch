"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


export default function PasswordSettings() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOtpSubmit = () => {
    if (otp === "123456") {
      setIsOtpVerified(true);
      setShowOtpModal(false);
    } else {
      alert("Invalid OTP");
    }
  };

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password successfully reset!");
    setNewPassword("");
    setConfirmPassword("");
    setIsOtpVerified(false);
  };

  return (
  <div className="mt-8">
    <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--background)] shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Reset Password</h2>

      {/* Show Reset button only if OTP not verified */}
      {!isOtpVerified && (
        <button
          onClick={() => setShowOtpModal(true)}
          className="px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Edit
        </button>
      )}
    </div>

    {/* Show password fields ONLY if OTP is verified */}
    {isOtpVerified && (
      <div className="flex flex-col gap-3 ml-20 mr-20">
        <input
          type="password"
          placeholder="New Password"
          className="px-4 py-2 rounded-lg border border-[var(--border-all)] bg-background"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-2 rounded-lg border border-[var(--border-all)] bg-background"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handlePasswordReset}
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          Save Password
        </button>
      </div>
    )}

    {/* OTP Modal */}
    <AnimatePresence>
      {showOtpModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-background p-6 rounded-2xl shadow-lg w-full max-w-md relative"
          >
            <button
              onClick={() => setShowOtpModal(false)}
              className="absolute top-3 right-3 text-[var(--muted-foreground)] hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border-all)] bg-background mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleOtpSubmit}
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

}
