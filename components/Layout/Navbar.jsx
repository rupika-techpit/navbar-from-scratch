"use client";
import React, { useState, useRef, useEffect } from "react";
import profile from "../../public/profileavatar.png";
import logo from "../../public/truactlogo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Moon,
  Settings,
  LogOut,
} from "lucide-react";
import { useTheme } from "next-themes";
import Notifications from "../Header/Notification";
import SearchBar from "../Header/searchbar";
import { motion, AnimatePresence } from "framer-motion";


const Page = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, setTheme } = useTheme();

  const [openMoreDropdown, setOpenMoreDropdown] = useState(null);

  const profileRef = useRef(null);
  const settingsRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMoreDropdown = (name) => {
  setOpenMoreDropdown(openMoreDropdown === name ? null : name);
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      headings: [
        {
          title: "Team abc abc bac xyz xyz xyz",
          subItems: [
            { name: "Marketing", path: "/dashboard/subModule" },
            { name: "Sales", path: "/dashboard/sales" },
          ],
        },
        {
          title: "Operations",
          subItems: [
            { name: "Security", path: "/report/security" },
          ],
        },
      ],
    },
    {
      name: "Reports",
      path: "/report",
      headings: [
        {
          title: "System",
          subItems: [
            { name: "Analytics", path: "/report/analytics" },
            { name: "Integration", path: "/report/integration" },
            { name: "Security", path: "/report/security" },
          ],
        },
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
      headings: [
        {
          title: "parts",
          subItems: [
        { name: "About", path: "/analytic/about" },
        { name: "Team", path: "/analytic/team" },
        { name: "Careers", path: "/analytic/career" },
      ],
        }
      ]
    },
    {
      name: "Tech",
      path: "/tech",
      headings: [
        {
          title: "Knowledge",
          subItems: [
        { name: "About", path: "/tech/about" },
        { name: "Team", path: "/tech/team" },
        { name: "Careers", path: "/tech/career" },
      ],
        }
      ]
      
    },
  ];

  const visibleModules = navItems.slice(0, 5);
  const hiddenModules = navItems.slice(5);

  return (
    <div className="bg-background text-foreground">
      <nav
        className="w-full bg-background border rounded-xl shadow-sm"
        style={{
          borderColor: "var(--border-color)",
          boxShadow: "0 1px 2px var(--shadow-color)",
        }}
      >
        {/* === Top Row === */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <div className="h-10 w-20 flex items-center justify-center">
              <Image src={logo} alt="logo" width={100} height={50} />
            </div>
            <span className="font-normal">
              <span className="block lg:hidden">O.B.A</span> {/* Mobile */}
              <span className="hidden lg:block"> O.B.A - Our Business Application</span> {/* Desktop */}
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <SearchBar />
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[var(--hover-bg)]"
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
              className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition"
            >
              <Moon className="h-6 w-6" />
            </button>

            {/* Notifications */}
            <Notifications />

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center"
              >
                <Image
                  src={profile}
                  alt="Profile"
                  width={38}
                  height={38}
                  className="rounded-full border-2 border-gray-300 dark:border-gray-800"
                />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute right-0 top-12 mt-2 w-56 bg-background rounded-xl shadow-lg py-1 z-50"
                    style={{ boxShadow: "var(--dropdown-shadow)" }}
                  >
                    <div className="px-4 pb-1 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium py-1">Sophia Patel</p>
                        <p className="text-xs text-gray-500 py-1">
                          sophia.patel@email.com
                        </p>
                        <p className="text-xs text-gray-500 py-1">User ID: S3546</p>
                      </div>
                      <Link
                        href="/profile"
                        className="p-2 rounded hover:bg-[var(--hover-bg)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="mt-1">
                      <Link
                        href="#"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-[var(--hover-bg)] border-t rounded-b-md"
                        style={{ borderTopColor: "var(--border-top)" }}
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* === Bottom Nav === */}
        <div
          className="hidden md:flex items-center justify-between px-10 py-2 border-t bg-background text-sm font-medium"
          style={{ borderTopColor: "var(--border-top)" }}
        >
          <div className="flex space-x-8" ref={navRef}>
            {/* First 5 visible modules */}
            {navItems.slice(0, 4).map((item) => (
              <div key={item.path} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    active === item.name
                      ? "bg-[var(--hover-bg)]"
                      : "hover:bg-[var(--hover-bg)]"
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

                {/* Dropdown with Headings + SubItems */}
                <AnimatePresence>
                  {openDropdown === item.name && item.headings && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute left-0 mt-2 w-56 rounded-md bg-background z-50"
                      style={{ boxShadow: "var(--dropdown-shadow)" }}
                    >
                      <div className="py-2">
                        {item.headings.map((heading) => (
                          <div key={heading.title} className="px-4 py-2">
                            {/* Heading label */}
                            <p className="truncate overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                              {heading.title}
                            </p>

                            {/* SubItems under heading */}
                            <div className="space-y-1">
                              {heading.subItems.map((sub) => (
                                <Link
                                  key={sub.path}
                                  href={sub.path}
                                  onClick={() => {
                                    setActive(item.name);
                                    setOpenDropdown(null);
                                  }}
                                  className="block px-2 py-1 text-sm rounded hover:bg-[var(--hover-bg)] truncate"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

            {/* === More (...) Button === */}
            {navItems.length > 4 && (
            <div className="relative">
              <button
                onClick={() => toggleDropdown("more")}
                className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-[var(--hover-bg)]"
              >
                ...
              </button>

              {openDropdown === "more" && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md bg-background z-50"
                  style={{ boxShadow: "var(--dropdown-shadow)" }}
                >
                  <div className="py-2">
                    {navItems.slice(4).map((item) => (
                      <div key={item.path} className="px-2 py-1">
                        {/* === Module button with arrow === */}
                        <button
                          onClick={() =>
                            setOpenMoreDropdown(
                              openMoreDropdown === item.name ? null : item.name
                            )
                          }
                          className="w-full flex items-center justify-between text-sm font-medium hover:bg-[var(--hover-bg)] px-2 py-1 rounded truncate"
                        >
                          {item.name}
                          <svg
                            className={`ml-1 h-4 w-4 transition-transform ${
                              openMoreDropdown === item.name ? "rotate-180" : ""
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

                        {/* === Expanded dropdown for this module === */}
                        {openMoreDropdown === item.name && (
                          <div className="mt-2 pl-4">
                            {/* Headings */}
                            {item.headings &&
                              item.headings.map((heading) => (
                                <div key={heading.title} className="mb-2">
                                  <p className="truncate text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                    {heading.title}
                                  </p>
                                  <div className="space-y-1">
                                    {heading.subItems.map((sub) => (
                                      <Link
                                        key={sub.path}
                                        href={sub.path}
                                        onClick={() => {
                                          setActive(item.name);
                                          setOpenDropdown(null);
                                          setOpenMoreDropdown(null);
                                        }}
                                        className="block px-2 py-1 text-sm rounded hover:bg-[var(--hover-bg)] truncate"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}

                            {/* Plain subItems */}
                            {item.subItems &&
                              item.subItems.map((sub) => (
                                <Link
                                  key={sub.path}
                                  href={sub.path}
                                  onClick={() => {
                                    setActive(item.name);
                                    setOpenDropdown(null);
                                    setOpenMoreDropdown(null);
                                  }}
                                  className="block px-2 py-1 text-sm rounded hover:bg-[var(--hover-bg)] truncate"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}



          </div>


          {/* Settings */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition"
            >
              <Settings className="h-5 w-5" />
            </button>

            {isSettingsOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-background rounded-xl py-2 z-50"
                style={{ boxShadow: "var(--dropdown-shadow)" }}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
                >
                  Support
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
                >
                  Account Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
                >
                  App Settings
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* === Mobile Menu === */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-background px-6 py-4 space-y-4 text-sm font-medium"
            style={{ borderTopColor: "var(--border-top)" }}
          >
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
                    ? "bg-background"
                    : "hover:bg-[var(--hover-bg)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition"
            >
              <Settings className="h-5 w-5" />
            </button>

            {isSettingsOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-background rounded-xl py-2 z-50"
                style={{ boxShadow: "var(--dropdown-shadow)" }}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[var(--hover-bg)]"
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

