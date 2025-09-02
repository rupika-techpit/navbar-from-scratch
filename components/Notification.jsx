import { Bell, Trash2 } from "lucide-react";
import { useState } from "react";

const mockNotifications = [
  { id: 1, message: "New report available", read: false },
  { id: 2, message: "Your request was approved", read: false },
  { id: 3, message: "System update completed", read: false },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-[var(--hover-bg)] transition"
      >
        <Bell className="h-5 w-5 text-foreground dark:text-foreground" />
        {notifications.filter((n) => !n.read).length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {notifications.filter((n) => !n.read).length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-80 bg-background rounded-xl py-2 z-50"
          style={{ boxShadow: "var(--dropdown-shadow)" }}
        >
          <div className="px-4 py-2 flex justify-between items-center border-b border-border-color">
            <span className="text-sm font-medium">Notifications</span>
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-red-500 hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="max-h-60 overflow-y-auto space-y-2">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => markAsRead(n.id)}
                  className={`flex justify-between items-start px-4 py-3 transition cursor-pointer ${
                    n.read
                      ? "bg-transparent"
                      : "bg-[var(--hover-bg)]"
                  }`}
                >
                  <div>
                    <p className="text-sm">{n.message}</p>
                    {n.time && (
                      <p className="text-xs text-gray-500">{n.time}</p>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent markAsRead when deleting
                      deleteNotification(n.id);
                    }}
                    className="text-gray-400 hover:text-red-500 ml-3"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500 py-6">
                No notifications
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
