"use client";
import React, { useState } from "react";
import profile from "../../public/profileavatar.png";
import logo from "../../public/truactlogo.png";
import Image from "next/image";
import Link from "next/link";
import { Search, Bell, Menu, X, Moon, Settings, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import Notifications from "../Header/Notification";
import SearchBar from "../Header/searchbar";

const Page = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      subItems: [
        { name: "Marketing", path: "/dashboard/subModule" },
        { name: "Sales", path: "/dashboard/sales" },
        { name: "Operations", path: "/report/security" },
      ],
    },
    {
      name: "Reports",
      path: "/report",
      subItems: [
        { name: "Analytics", path: "" },
        { name: "Integration", path: "" },
        { name: "Security", path: "" },
      ],
    },
    {
      name: "Analytics",
      path: "/analytics",
      subItems: [
        { name: "Basic", path: "/analytics/basic" },
        { name: "Pro", path: "/analytics/pro" },
        { name: "Enterprise", path: "/analytics/enterprise" },
      ],
    },
    {
      name: "Forms",
      path: "/forms",
      subItems: [
        { name: "Case Study 1", path: "/forms/case1" },
        { name: "Case Study 2", path: "/forms/case2" },
      ],
    },
    {
      name: "Analytic",
      path: "/analytic",
      subItems: [
        { name: "About", path: "/analytic/about" },
        { name: "Team", path: "/analytic/team" },
        { name: "Careers", path: "/analytic/career" },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <nav className="w-full bg-background border rounded-xl shadow-sm"style={{ borderColor: "var(--border-color)", boxShadow: "0 1px 2px var(--shadow-color)" }}>

        {/* === Top Row === */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <div className="h-10 w-20 flex items-center justify-center bg-transparent text-foreground rounded-lg font-bold">
              <Image
                  src={logo}
                  alt="Profile"
                  width={100}
                  height={50}
                  className=""
                />
            </div>
            <span className="font-stretch-90% font-semibold bg-transparent text-foreground w-9">TruAct</span>
          </Link>


          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <SearchBar />
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Theme toggler */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] transition"
            >
              <Moon className="h-7 w-7" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]">
              {/* <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                3
              </span> */}
              <Notifications/>
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
                  width={38}
                  height={38}
                  className="rounded-full border border-gray-300"
                />
              </button>

              {isProfileOpen && (
                <div
                  className="absolute right-0 top-12 mt-2 w-56 bg-background rounded-xl shadow-lg py-1 z-50"
                  style={{ boxShadow: "var(--dropdown-shadow)" }}
                >
                  {/* Profile Info */}
                  <div className="px-4 pb-1 flex items-center justify-between">
                    {/* Left: Name + Email */}
                    <div>
                      <p className="text-sm font-medium py-1">Sophia Patel</p>
                      <p className="text-xs text-gray-500 py-1">sophia.patel@email.com</p>
                      <p className="text-xs text-gray-500 py-1">User ID: S3546</p>
                    </div>

                    {/* Right: View button */}
                    <Link href="/profile" className="p-2 rounded hover:bg-[var(--hover-bg)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>


                  {/* Actions */}
                  <div className="mt-1">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] border-t rounded-b-md"
                      style={{ borderTopColor: "var(--border-top)" }}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Link>
                  </div>

                </div>

              )}
            </div>
          </div>
        </div>

        {/* === Bottom Nav === */}
        <div className="hidden md:flex items-center justify-between px-10 py-2 border-t bg-background text-sm font-medium"style={{ borderTopColor: "var(--border-top)" }}>

          {/* Left Nav with dropdowns */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    active === item.name
                      ? "bg-[var(--hover-bg)] dark:bg-[var(--hover-bg)]"
                      : "hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                  }`}
                >
                  {item.name}
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openDropdown === item.name && item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md bg-background z-50" style={{ boxShadow: "var(--dropdown-shadow)"}}>
                    <div className="py-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={() => {
                            setActive(item.name);
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-2 text-sm hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Settings */}
          <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-full hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] transition" 
            >
              <Settings className="h-5 w-5" />
            </button>

            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background rounded-xl py-2 z-50" style={{ boxShadow: "var(--dropdown-shadow)"}}>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* === Mobile Menu === */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background px-6 py-4 space-y-4 text-sm font-medium" style={{ borderTopColor: "var(--border-top)" }}>
            <SearchBar />

            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => {
                  setActive(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  active === item.name
                    ? "bg-background dark:bg-background"
                    : "hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-lg hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)] transition" 
            >
              <Settings className="h-5 w-5" />
            </button>

            {isSettingsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-background rounded-xl py-2 z-50" style={{ boxShadow: "var(--dropdown-shadow)"}}>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Page;
