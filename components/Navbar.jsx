"use client"
import React from 'react'
import { useState } from 'react';
import profile from "../public/cm logo-edited.png";
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
        {/* Top Navbar */}
              <nav className="w-full bg-neutral-900 border-b border-neutral-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-8 items-center">
                    {/* Left: Logo */}
                    <div className="text-xl font-bold text-white">MyApp</div>
        
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                      <a
                        href="/home"
                        className="relative text-white font-medium px-2 py-1 transition-colors duration-200 
                                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white 
                                  after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200"
                      >
                        Home
                      </a>
                      <a
                        href="/about"
                        className="relative text-white font-medium px-2 py-1 transition-colors duration-200 
                                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white 
                                  after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200"
                      >
                        About
                      </a>
                      <Link href="#" className="relative text-white font-medium px-2 py-1 transition-colors duration-200 
                                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white 
                                  after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200">
                        Reports
                      </Link>
                      <a href="#" className="relative text-white font-medium px-2 py-1 transition-colors duration-200 
                                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white 
                                  after:transition-all after:duration-300 hover:after:w-full hover:text-gray-200">
                        Settings
                      </a>
                    </div>
        
                    {/* Search */}
                    <div className="hidden md:block">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-1 text-sm text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
        
                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                      {/* Notifications */}
                      <button className="relative">
                        <span className="material-icons text-white hover:text-gray-300 transition-colors">
                          notifications
                        </span>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                          3
                        </span>
                      </button>

        
                      {/* Profile Dropdown */}
                      <div className="relative">
                        <button
                          className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                          <Image
                            src={profile}
                            alt="Profile"
                            width={32}
                            height={32}
                            className="rounded-full border border-neutral-700 hover:border-blue-500 transition-all"
                          />
                          <span className="hidden md:block">ABC..</span>
                        </button>

                        {isProfileOpen && (
                          <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg py-2">
                            <a
                              href="#"
                              className="block px-4 py-2 text-white hover:bg-neutral-800"
                            >
                              Profile
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-white hover:bg-neutral-800"
                            >
                              Settings
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-white hover:bg-neutral-800"
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
                      href="/home"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
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
    </div>
  )
}

export default page;