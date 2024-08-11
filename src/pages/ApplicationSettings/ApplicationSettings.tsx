import React, { useState } from "react";
import {
  FaCog,
  FaUsers,
  FaLock,
  FaDollarSign,
  FaBell,
  FaBox,
  FaInfoCircle,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

interface SettingsData {
  settingName: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

interface ApplicationSettingsProps {
  settings: SettingsData[];
}

const ApplicationSettings: React.FC<ApplicationSettingsProps> = ({
  settings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSetting, setCurrentSetting] = useState<SettingsData | null>(
    null
  );
  const [feedback, setFeedback] = useState<string>("");

  const openModal = (setting: SettingsData) => {
    setCurrentSetting(setting);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentSetting(null);
  };

  const handleSave = () => {
    if (currentSetting) {
      alert(`You have edited the ${currentSetting.settingName}`);
      console.log(`Edited setting: ${currentSetting.settingName}`);
      setFeedback(
        `Changes to ${currentSetting.settingName} saved successfully.`
      );
      closeModal();
    }
  };

  return (
    <section className="lg:px-6 space-y-6 overflow-y-auto">
      <header className="mb-4">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Application Settings
        </h2>
        <p className="text-base text-gray-600">
          Configure and manage various aspects of your pharmacy application,
          including system settings, user management, security, and more.
        </p>
      </header>

      <div className="space-y-4">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          >
            <div className="flex-shrink-0 text-blue-600 text-2xl mr-4">
              {setting.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700">
                {setting.settingName}
              </h3>
              <p className="text-sm text-gray-600">{setting.description}</p>
              <p className="text-gray-700 mt-2">{setting.details}</p>
              <button
                onClick={() => openModal(setting)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                Edit {setting.settingName}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed setting edit */}
      <Dialog open={isOpen} onClose={closeModal}>
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-gray-800">
              Edit {currentSetting?.settingName}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-gray-600">
              {currentSetting?.description}
            </Dialog.Description>
            <div className="mt-4">
              <p className="font-medium text-gray-800">Details:</p>
              <p>{currentSetting?.details}</p>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </div>
            {feedback && <p className="mt-4 text-green-600">{feedback}</p>}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

const sampleSettings: SettingsData[] = [
  {
    settingName: "General Settings",
    description: "Manage the overall settings of your application.",
    details:
      "Adjust application-wide settings such as time zone, language preferences, and default configurations. Ensure these settings reflect your operational needs and user preferences.",
    icon: <FaCog />,
  },
  {
    settingName: "User Management",
    description: "Control user accounts and roles.",
    details:
      "Add, modify, or remove user accounts and manage their roles and permissions. This section helps in overseeing who has access to different parts of the application and their respective roles.",
    icon: <FaUsers />,
  },
  {
    settingName: "Security Settings",
    description: "Configure security protocols and protections.",
    details:
      "Change passwords, enable two-factor authentication, and set other security measures to protect user data and application integrity. These settings help safeguard against unauthorized access and breaches.",
    icon: <FaLock />,
  },
  {
    settingName: "Billing Settings",
    description: "Handle billing and subscription details.",
    details:
      "Update your billing information, view and manage invoices, and handle subscription plans. This section is crucial for maintaining financial records and ensuring proper billing processes.",
    icon: <FaDollarSign />,
  },
  {
    settingName: "Notifications",
    description: "Set up notification preferences for users.",
    details:
      "Manage how and when notifications are sent to users, including email, SMS, and push notifications. Configure preferences to ensure users receive timely updates and alerts.",
    icon: <FaBell />,
  },
  {
    settingName: "Inventory Management",
    description: "Manage inventory and stock settings.",
    details:
      "Track and adjust stock levels, set reorder points, and oversee inventory management to ensure optimal stock levels and prevent shortages. This helps in efficient inventory control.",
    icon: <FaBox />,
  },
  {
    settingName: "System Information",
    description: "View system status and logs.",
    details:
      "Check the current system status, view version details, and review logs for any issues or performance metrics. This information is vital for maintaining system health and troubleshooting problems.",
    icon: <FaInfoCircle />,
  },
];

const App: React.FC = () => {
  return <ApplicationSettings settings={sampleSettings} />;
};

export default App;
