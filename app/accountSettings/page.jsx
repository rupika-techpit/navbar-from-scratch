"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PasswordSettings from "@/components/Settings/resetPassword";
import profile2 from "../../public/profileImage.png"

// Custom Select Component (reuse the same one)
const CustomSelect = ({ options, placeholder, value, onChange }) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-full px-3 py-2 rounded-lg border cursor-pointer flex justify-between items-center"
        style={{
          borderColor: "var(--border-color)",
          color: "var(--foreground)",
          backgroundColor: "var(--background)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || placeholder}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 rounded-lg border max-h-60 overflow-y-auto"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--background)",
            boxShadow: "var(--dropdown-shadow)",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 cursor-pointer hover:bg-[var(--hover-bg)] transition-colors"
              style={{ color: "var(--foreground)" }}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ProfileSettingsPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    profile: "",
    country: "",
    state: "",
    city: "",
    pincode: ""
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field.toLowerCase().replace(/\s+/g, '')]: value
    }));
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--background)] text-[var(--foreground)]">
      <div
        className="w-full rounded-2xl p-8 m-5 mt-1 shadow-lg"
        style={{
          boxShadow: "0 4px 6px var(--shadow-color)",
          background: "var(--background)",
        }}
      >
        {/* ================= Profile Header ================= */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-30 h-30 rounded-full border-2 overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
              <Image
                src={profile2}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={() => setIsEditingProfile(true)}
              className="px-4 py-1 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Edit
            </button>
          </div>
          
          {/* Profile Info Grid - No outside border, 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "First Name", value: "Sophia" },
              { label: "Last", value: "Patel" },
              { label: "Phone", value: "1234567890" },
              { label: "Profile", value: "Admin" },
              { label: "Country", value: "India" },
              { label: "State", value: "New Delhi" },
              { label: "city", value: "New Delhi" },
              { label: "Postal Code", value: "110059" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-1 rounded-lg border"
                style={{ 
                  borderColor: "var(--border-all)",
                  backgroundColor: "var(--background)",
                  boxShadow: "0 1px 3px var(--shadow-color)"
                }}
              >
                <div className="text-sm font-medium uppercase tracking-wide mb-1" style={{ color: "var(--muted-foreground)" }}>
                  {item.label}
                </div>
                <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Edit Modal */}
        <AnimatePresence>
          {isEditingProfile && (
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
                className="bg-background p-6 rounded-2xl shadow-lg w-full max-w-2xl mx-4 relative max-h-[90vh] overflow-y-auto"
                style={{
                  backgroundColor: "var(--background)",
                  boxShadow: "0 10px 25px var(--shadow-color)"
                }}
              >
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="absolute top-4 right-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <h2 className="text-lg font-semibold mb-6" style={{ color: "var(--foreground)" }}>
                  Edit Profile
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", placeholder: "Your First Name", key: "firstName" },
                    { label: "Last Name", placeholder: "Your Last Name", key: "lastName" },
                    { label: "Phone", placeholder: "Phone", key: "phone" },
                    {
                      label: "Profile",
                      type: "select",
                      options: ["Admin", "Donar", "Faculty"],
                      key: "profile"
                    },
                    {
                      label: "Country",
                      type: "select",
                      options: ["India", "U.S.A", "Japan"],
                      key: "country"
                    },
                    {
                      label: "State",
                      type: "select",
                      options: ["Delhi", "U.P.", "Maharashtra"],
                      key: "state"
                    },
                    {
                      label: "City",
                      type: "select",
                      options: ["New Delhi", "Mathura", "Pune"],
                      key: "city"
                    },
                    { label: "PinCode", placeholder: "PinCode", key: "pincode" },
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm text-[var(--muted-foreground)] mb-2 font-medium">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <CustomSelect
                          options={field.options}
                          placeholder={`Select ${field.label}`}
                          value={profileData[field.key]}
                          onChange={(value) => handleInputChange(field.key, value)}
                        />
                      ) : (
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          value={profileData[field.key]}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border"
                          style={{
                            borderColor: "var(--border-color)",
                            color: "var(--foreground)",
                            backgroundColor: "var(--background)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </form>

                <div className="mt-6 flex justify-end space-x-3">
                  {/* <button
                    onClick={() => setIsEditingProfile(false)}
                    className="px-4 py-2 rounded-lg border transition-colors"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    Cancel
                  </button> */}
                  <button
                    onClick={() => setIsEditingProfile(false)}
                    className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    

        {/* ================= Email Section ================= */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Email Address</h2>
            <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--background)] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--hover-bg)]">
                  <Mail className="w-5 h-5 text-[var(--foreground)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    sophia.patel@email.com
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    1 month ago
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditingEmail(true)}
                className="px-4 py-1 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Edit
              </button>
            </div>
        </div>

        {/* Email Edit Modal */}
        <AnimatePresence>
          {isEditingEmail && (
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
                  onClick={() => setIsEditingEmail(false)}
                  className="absolute top-3 right-3 text-[var(--muted-foreground)] hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-lg font-semibold mb-4">Edit Email</h2>

                <input
                  type="email"
                  placeholder="Enter new email"
                  className="w-full px-3 py-2 rounded-lg border mb-4"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--foreground)",
                  }}
                />

                <div className="flex justify-end">
                  <button
                    onClick={() => setIsEditingEmail(false)}
                    className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= Reset Password Section ================= */}
        <div>
          <PasswordSettings />
        </div>
      </div>
    </div>
  );
}
