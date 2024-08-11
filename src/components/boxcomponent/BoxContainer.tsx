import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface BoxContainerProps {
  icon: IconDefinition;
  mainHeading: string;
  subHeading: string;
  paragraphText: string;
  variant?: "green" | "yellow" | "blue" | "red";
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  icon,
  mainHeading,
  subHeading,
  paragraphText,
  variant = "blue",
}) => {
  const borderColors = {
    green: "border-green-500",
    yellow: "border-yellow-500",
    blue: "border-blue-500",
    red: "border-red-500",
  };

  const backgroundColors = {
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    blue: "bg-blue-100",
    red: "bg-red-100",
  };

  return (
    <div
      className={`flex flex-col w-full items-center bg-white border ${borderColors[variant]} rounded-lg shadow-md`}
    >
      <FontAwesomeIcon icon={icon} className="text-4xl pt-4  text-blue-500" />
      <h3 className="text-xl font-semibold my-2">{mainHeading}</h3>
      <h5 className="text-lg text-gray-600 mb-2">{subHeading}</h5>
      <div
        className={`flex w-full justify-center px-7 items-center ${backgroundColors[variant]} border-t-2 ${borderColors[variant]} `}
      >
        <p className="text-base text-gray-800 ">{paragraphText}</p>
        <span className="text-xl text-gray-500 ml-5">&raquo;</span>
      </div>
    </div>
  );
};

export default BoxContainer;
