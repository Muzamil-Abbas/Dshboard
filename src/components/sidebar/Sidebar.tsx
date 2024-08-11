import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaFileAlt,
  FaCog,
  FaUserFriends,
  FaBell,
  FaTools,
  FaVirus,
  FaQuestionCircle,
  FaChevronDown,
  FaEllipsisV,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";
import Footer from "../Footer/Footer.tsx";
import logoImage from "../../assets/images/logo.png";
import profileImage from "../../assets/images/profile-image.png";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  const handleMenuClick = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleMenuItemClick = () => {
    setShowProfileMenu(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full md:w-1/5 overflow-y-auto bg-gray-800 z-50 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${isSidebarOpen ? "md:translate-x-0" : ""}`}
    >
      <NavLink
        to="/"
        className="flex items-center p-2.5 bg-black text-white sticky top-0 z-10 cursor-pointer"
        onClick={toggleSidebar}
      >
        <img src={logoImage} alt="Pharma One Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-2xl font-bold">Pharmacy</h1>
      </NavLink>
      <div className="flex items-center p-4 border-b border-gray-600 text-white">
        <img
          src={profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg mb-1">Subash</h3>
          <span className="text-sm text-yellow-400">Super Admin</span>
        </div>
        <FaEllipsisV
          className="text-xl cursor-pointer ml-auto"
          onClick={toggleProfileMenu}
        />
        {showProfileMenu && (
          <div className="absolute top-32 right-6 bg-white text-gray-800 shadow-md rounded w-48 py-2 flex flex-col z-50">
            <a
              href="#profile"
              className="flex items-center px-4 py-2 hover:bg-gray-200"
              onClick={handleMenuItemClick}
            >
              <FaUserFriends className="mr-2" /> Profile
            </a>
            <a
              href="#logout"
              className="flex items-center px-4 py-2 hover:bg-gray-200"
              onClick={handleMenuItemClick}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </div>
        )}
      </div>
      <nav className="mt-3.5">
        <ul className="list-none p-0 m-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="inventory"
              onClick={() => {
                handleMenuClick("inventory");
              }}
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  activeMenu === "inventory" ? "bg-teal-800" : ""
                } ${isActive ? "" : ""}`
              }
            >
              <FaBoxOpen className="mr-2" /> Inventory{" "}
              <FaChevronDown
                className={`ml-auto transition-transform ${
                  activeMenu === "inventory" ? "rotate-180" : ""
                }`}
              />
            </NavLink>
            {activeMenu === "inventory" && (
              <ul className="list-none p-0 m-0 bg-gray-700">
                <li>
                  <NavLink
                    to="/list-of-inventory"
                    className={({ isActive }) =>
                      `block p-4 text-white hover:bg-teal-800 ${
                        isActive ? "text-teal-400 bg-teal-800" : ""
                      }`
                    }
                    onClick={() => {
                      setActiveMenu("inventory");
                      toggleSidebar();
                    }}
                  >
                    List of Medicines
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/medicine-group"
                    className={({ isActive }) =>
                      `block p-4 text-white hover:bg-teal-800 ${
                        isActive ? "text-teal-400 bg-teal-800" : ""
                      }`
                    }
                    onClick={() => {
                      setActiveMenu("inventory");
                      toggleSidebar();
                    }}
                  >
                    Medicines Groups
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <NavLink
              to="reports"
              onClick={() => handleMenuClick("reports")}
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  activeMenu === "reports" ? "bg-teal-800" : ""
                } ${isActive}`
              }
            >
              <FaFileAlt className="mr-2" /> Reports{" "}
              <FaChevronDown
                className={`ml-auto transition-transform ${
                  activeMenu === "reports" ? "rotate-180" : ""
                }`}
              />
            </NavLink>
            {activeMenu === "reports" && (
              <ul className="list-none p-0 m-0 bg-gray-700">
                <li>
                  <NavLink
                    to="/salesreport"
                    className={({ isActive }) =>
                      `block p-4 text-white hover:bg-teal-800 ${
                        isActive ? "text-teal-400 bg-teal-800" : ""
                      }`
                    }
                    onClick={() => {
                      setActiveMenu("reports");
                      toggleSidebar();
                    }}
                  >
                    Sales Report
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/paymentsreport"
                    className={({ isActive }) =>
                      `block p-4 text-white hover:bg-teal-800 ${
                        isActive ? "text-teal-400 bg-teal-800" : ""
                      }`
                    }
                    onClick={() => {
                      setActiveMenu("reports");
                      toggleSidebar();
                    }}
                  >
                    Payments Report
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/configurations"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaCog className="mr-2" /> Configurations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-management"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaUserFriends className="mr-2" /> Contact Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaBell className="mr-2" /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat-with-visitors"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaComments className="mr-2" /> Chat with Visitors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/application-settings"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaTools className="mr-2" /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/covid-19"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaVirus className="mr-2" /> Coved - 19
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/get-technical-help"
              className={({ isActive }) =>
                `flex items-center p-2.5 text-white text-base hover:bg-teal-800 ${
                  isActive ? "text-teal-400 bg-teal-800" : ""
                }`
              }
              onClick={() => {
                setActiveMenu(null);
                toggleSidebar();
              }}
            >
              <FaQuestionCircle className="mr-2" /> Get Technical Help
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default Sidebar;
