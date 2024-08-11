import React from "react";

const Notifications: React.FC = () => {
  const notifications = [
    {
      type: "System Alert",
      message:
        "Your password will expire in 5 days. Please update it to maintain account security.",
      date: "2024-07-31",
    },
    {
      type: "Update",
      message:
        "New features have been added to the inventory management system. Check out the latest updates in the release notes.",
      date: "2024-07-30",
    },
    {
      type: "Message",
      message:
        "You have a new message from the admin. Please check your inbox for more details.",
      date: "2024-07-29",
    },
    {
      type: "Reminder",
      message:
        "Monthly report submission is due by the end of this week. Ensure all data is updated.",
      date: "2024-07-28",
    },
    {
      type: "Promotion",
      message:
        "Get 20% off on your next purchase of medical supplies. Offer valid till the end of the month.",
      date: "2024-07-27",
    },
  ];

  const getBorderColor = (type: string) => {
    switch (type) {
      case "System Alert":
        return "border-red-400";
      case "Update":
        return "border-blue-400";
      case "Message":
        return "border-green-400";
      case "Reminder":
        return "border-yellow-400";
      case "Promotion":
        return "border-pink-400";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="relative lg:px-4 sm:px-6 md:px-8 py-4 w-full flex flex-col overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Notifications</h2>
      <div className="flex flex-col gap-4 sm:gap-6">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md ${getBorderColor(
              notification.type
            )} border-l-4`}
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              {notification.type}
            </h3>
            <p className="text-sm sm:text-base">{notification.message}</p>
            <span className="block text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              {notification.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
