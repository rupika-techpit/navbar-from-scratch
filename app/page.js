"use client"
import React from 'react'
import { useState } from "react";

const Page = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-2">
      {/* Top Navbar */}
      <nav className="w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-8 items-center">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-gray-800">MyApp</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Reports
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Settings
              </a>
            </div>

            {/* Search */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative">
                <span className="material-icons text-gray-600">
                  notifications
                </span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <img
                    src="https://via.placeholder.com/32"
                    className="w-8 h-8 rounded-full"
                    alt="profile"
                  />
                  <span className="hidden md:block text-gray-700">
                    ABC..
                  </span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-icons">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Reports
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Menu Bar (Modules Navigation) */}
      <div className="bg-gray-100 border-b p-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex space-x-6 h-2 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Modules
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Reports
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Settings
            </a>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-0 py-2">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          Content Area / Workspace
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 border-t p-4 text-center text-gray-600 text-sm">
        Footer (Optional)
      </footer>
    </div>
  );
};

export default Page;

