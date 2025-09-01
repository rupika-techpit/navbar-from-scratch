"use client";
import React, { useState } from "react";
import profile from "../public/profileavatar.png";
import Image from "next/image";
import Link from "next/link";
import { Search, Bell, Menu, X, ChevronRight, Moon, Settings } from "lucide-react";

const Page = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      subItems: [
        { name: "Marketing", path: "/dashboard/marketing" },
        { name: "Sales", path: "/dashboard/sales" },
        { name: "Operations", path: "/report/security" },
      ],
    },
    {
      name: "Reports",
      path: "/report",
      subItems: [
        { name: "Analytics", path: "/report/#" },
        { name: "Integration", path: "/report/#" },
        { name: "Security", path: "/report/#" },
      ],
    },
    {
      name: "Analytics",
      path: "#",
      subItems: [
        { name: "Basic", path: "" },
        { name: "Pro", path: "" },
        { name: "Enterprise", path: "" },
      ],
    },
    {
      name: "Forms",
      path: "#",
      subItems: [
        { name: "Case Study 1", path: "" },
        { name: "Case Study 2", path: "" },
      ],
    },
    {
      name: "Analytics",
      path: "#",
      subItems: [
        { name: "Company", path: "" },
        { name: "Team", path: "" },
        { name: "Careers", path: "" },
      ],
    },
  ];


  return (
    <div className="bg-gray-100">
      <nav className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* === Top Row === */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 flex items-center justify-center bg-gray-200 text-gray-700 rounded-lg font-bold">
              Ⓢ
            </div>
            <span className="text-lg font-semibold text-gray-800">Symbol</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="relative w-80">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>

            {/* Theme toggler */}
            <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <Moon className="h-5 w-5" />
            </button>
            {/* Notifications */}
            <button className="relative hidden md:block p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                3
              </span>
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center"
              >
                <Image
                  src={profile}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full border border-gray-300"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-md py-2 z-50">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* === Bottom Nav === */}
        <div className="hidden md:flex items-center justify-between px-10 py-2 border-t border-gray-200 bg-white text-sm font-medium">
          {/* Left Nav */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {/* Main link with dropdown arrow */}
                <button
                  onClick={() => setActive(item.name)}
                  className={`flex items-center transition-colors ${
                    active === item.name
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {item.subItems && (
                  <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 shadow-md rounded-lg mt-2 min-w-[180px] z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side: Moon */}
          <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
            <Settings className="h-5 w-5" />
          </button>
        </div>


        {/* === Mobile Menu === */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm font-medium">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
            </div>

            {/* Mobile links */}
            {navItems.map((item) => (
              <Link
                key={item.path} // ✅ dynamic unique key
                href={item.path}
                onClick={() => {
                  setActive(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  active === item.name
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <button className="p-2 text-gray-700 hover:bg-gray-100 transition">
              <Moon className="h-5 w-5" />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Page;
