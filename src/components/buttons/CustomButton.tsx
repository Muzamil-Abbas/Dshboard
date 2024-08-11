import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSave,
  faEdit,
  faTrashRestore,
  faChevronDown,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  add: faPlus,
  save: faSave,
  edit: faEdit,
  delete: faTrashRestore,
  download: faChevronDown,
};

type IconType = keyof typeof icons;

interface DropdownItem {
  label: string;
  icon: IconDefinition;
  onClick: () => void;
}

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  iconType?: IconType;
  disabled?: boolean;
  dropdownItems?: DropdownItem[];
  onDropdownClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
  iconType = "add",
  disabled = false,
  dropdownItems = [],
  onDropdownClick,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const icon = icons[iconType];

  const handleButtonClick = () => {
    if (dropdownItems.length > 0) {
      setShowDropdown(!showDropdown);
      if (onDropdownClick) onDropdownClick();
    } else {
      if (onClick) onClick();
    }
  };

  return (
    <div
      className={`relative inline-block ${
        dropdownItems.length ? "dropdown" : ""
      }`}
    >
      <button
        type={type}
        onClick={handleButtonClick}
        className={`flex justify-between items-center px-4 py-2 text-base font-medium rounded-md border-2 ${className} ${
          disabled ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
      >
        {icon && <FontAwesomeIcon icon={icon} className="mx-2" />}
        {children}
      </button>
      {dropdownItems.length > 0 && showDropdown && (
        <div className="absolute left-0 top-full mx-1 w-44 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center px-4 py-2 text-base text-gray-900 hover:bg-gray-100 w-full"
              onClick={item.onClick}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomButton;
