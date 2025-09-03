// import { Bell, Trash2 } from "lucide-react";
// import { useState } from "react";

// const mockNotifications = [
//   { id: 1, message: "New report available", read: false },
//   { id: 2, message: "Your request was approved", read: false },
//   { id: 3, message: "System update completed", read: false },
// ];

// const Notification = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState(mockNotifications);

//   const deleteNotification = (id) => {
//     setNotifications(notifications.filter((n) => n.id !== id));
//   };

//   const clearAll = () => {
//     setNotifications([]);
//   };

//   const markAsRead = (id) => {
//     setNotifications(
//       notifications.map((n) =>
//         n.id === id ? { ...n, read: true } : n
//       )
//     );
//   };

//   return (
//     <div className="relative">
//       {/* Bell Icon */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative p-2 rounded-full hover:bg-[var(--hover-bg)] transition"
//       >
//         <Bell className="h-5 w-5 text-foreground dark:text-foreground" />
//         {notifications.filter((n) => !n.read).length > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
//             {notifications.filter((n) => !n.read).length}
//           </span>
//         )}
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div
//           className="absolute right-0 mt-2 w-80 bg-background rounded-xl py-2 z-50"
//           style={{ boxShadow: "var(--dropdown-shadow)" }}
//         >
//           <div className="px-4 py-2 flex justify-between items-center border-b border-border-color">
//             <span className="text-sm font-medium">Notifications</span>
//             {notifications.length > 0 && (
//               <button
//                 onClick={clearAll}
//                 className="text-xs text-red-500 hover:underline"
//               >
//                 Clear All
//               </button>
//             )}
//           </div>

//           <div className="max-h-60 overflow-y-auto space-y-2">
//             {notifications.length > 0 ? (
//               notifications.map((n) => (
//                 <div
//                   key={n.id}
//                   onClick={() => markAsRead(n.id)}
//                   className={`flex justify-between items-start px-4 py-3 transition cursor-pointer ${
//                     n.read
//                       ? "bg-transparent"
//                       : "bg-[var(--hover-bg)]"
//                   }`}
//                 >
//                   <div>
//                     <p className="text-sm">{n.message}</p>
//                     {n.time && (
//                       <p className="text-xs text-gray-500">{n.time}</p>
//                     )}
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // prevent markAsRead when deleting
//                       deleteNotification(n.id);
//                     }}
//                     className="text-gray-400 hover:text-red-500 ml-3"
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-sm text-gray-500 py-6">
//                 No notifications
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../UI/dropdown/dropdown";
import { DropdownItem } from "../UI/dropdown/dropdownList";
import { X, Trash2 } from "lucide-react";
 
export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  // track if user has opened the dropdown once
  const [hasOpened, setHasOpened] = useState(false);
 
  // Mock notification data with "read" state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Terry Franci",
      message: "requested permission to change",
      project: "Project - Nganter App",
      type: "Project",
      time: "5 min ago",
      status: "online",
      read: false,
    },
    {
      id: 2,
      name: "Alena Franci",
      message: "added a new document",
      project: "Project - ResearchX",
      type: "Document",
      time: "8 min ago",
      status: "online",
      read: false,
    },
    {
      id: 3,
      name: "Brandon Philips",
      message: "commented on your task",
      project: "Project - DesignPro",
      type: "Task",
      time: "1 hr ago",
      status: "error",
      read: true,
    },
    {
      id: 4,
      name: "Sophia Loren",
      message: "assigned you a new task",
      project: "Project - AI Engine",
      type: "Task",
      time: "2 hrs ago",
      status: "online",
      read: false,
    },
    {
      id: 5,
      name: "David Warner",
      message: "uploaded new files",
      project: "Project - CloudHub",
      type: "File",
      time: "3 hrs ago",
      status: "online",
      read: false,
    },
  ]);
 
  const toggleDropdown = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      // when dropdown opens, clear count
      setHasOpened(true);
    }
  }
  const closeDropdown = () => setIsOpen(false);
 
  // unread count but hide if dropdown already opened
const unreadCount = hasOpened ? 0 : notifications.filter((n) => !n.read).length;
 
  // remove single notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };
 
  // clear all
  const clearAll = () => setNotifications([]);
 
  // mark one notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };
 
  // mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };
 
  return (
    <div className="relative">
      {/* Notification button with badge */}
      <button
        className="relative flex items-center justify-center text-foreground transition-colors bg-background border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-background dark:text-foreground dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={toggleDropdown}
      >
        {unreadCount > 0 && (
          <span className="absolute right-0 top-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white">
            {unreadCount}
          </span>
        )}
 
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
          />
        </svg>
      </button>
 
      {/* Dropdown */}
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="sm:absolute sm:-left-[300px] xsm:-left-[8vw] -left-[17vw] mt-[16px] flex sm:max-h-[480px] w-[340px]  max-h-[480px] sm:w-[390px] flex-col rounded-2xl bg-background p-3 dark:bg-background lg:right-0 shadow-2xl"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-color dark:border-color">
          <h5 className="text-lg font-semibold text-foreground dark:text-foreground">
            Notifications
          </h5>
          <div className="flex items-center gap-5">
            {notifications.length > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-blue-500 hover:text-blue-600"
              >
                Mark all read
              </button>
            )}
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" /> Clear All
              </button>
            )}
            <button
              onClick={toggleDropdown}
              className="ml-2 text-gray-500 transition dark:text-gray-400 hover:bg-[var(--hover-bg)] dark:hover:bg-[var(--hover-bg)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
 
        <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
          {notifications.length === 0 ? (
            <li className="p-4 text-center text-gray-500 dark:text-gray-400">
              No notifications yet
            </li>
          ) : (
            [...notifications]
              .sort((a, b) => (a.read === b.read ? 0 : a.read ? 1 : -1)) // 🔥 unread first
              .map((n) => (
                <li
                  key={n.id}
                  className={`flex items-start justify-between ${
                    !n.read ? "bg-[var(--unread-bg)] border-l-4 border-orange-400 dark:border-blue-400" : ""
                  }`}
                >
                  <DropdownItem
                    onItemClick={() => {
                      markAsRead(n.id);
                      // closeDropdown();
                    }}
                     className="flex flex-1 gap-3 rounded-lg border-b border-[var(--border-all)] p-3 hover:bg-[var(--hover-bg)]"
                  >
                    <span className="block">
                      <span className="block mb-1.5 space-x-1 text-sm">
                        <span className="font-medium text-[var(--foreground)]">{n.name}</span>
                        <span className="text-[var(--muted-foreground)]">{n.message}</span>
                        <span className="font-medium text-[var(--foreground)]">{n.project}</span>
                      </span>
                      <span className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                        <span>{n.type}</span>
                        <span className="w-1 h-1 bg-[var(--muted-foreground)] rounded-full"></span>
                        <span>{n.time}</span>
                      </span>
                    </span>
                  </DropdownItem>
 
                  <button
                    onClick={() => removeNotification(n.id)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))
          )}
        </ul>
 
        <Link
          href="/notifications"
          className="block px-4 py-2 mt-3 text-sm font-medium text-center text-foreground bg-background border border-gray-300 rounded-lg hover:bg-[var(--hover-bg)] dark:border-gray-700 dark:bg-background dark:text-foreground dark:hover:bg-[var(--hover-bg)]"
        >
          View All Notifications
        </Link>
      </Dropdown>
    </div>
  );
}
 
 
