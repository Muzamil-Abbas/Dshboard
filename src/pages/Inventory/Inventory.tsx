import React from "react";
import BoxContainer from "../../components/boxcomponent/BoxContainer.tsx"; // Adjust path as needed
import {
  faCapsules,
  faBandAid,
  faThermometer,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/buttons/CustomButton.tsx";

const Inventory: React.FC = () => {
  const handleAddNew = () => alert("Add New Item Successfully");

  return (
    <div className="flex w-full flex-col gap-5 sm:p-4 md:p-5 lg:p-6 xl:py-2 2xl:p-6 ">
      <div className="flex items-start justify-between flex-col md:items-center md:flex-row gap-2">
        <div className="text-black">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold">
            Inventory
          </h2>
          <p className="py-2 text-base sm:text-lg lg:text-lg xl:text-lg 2xl:text-lg leading-6">
            List of medicines available for sales.
          </p>
        </div>
        <CustomButton
          onClick={handleAddNew}
          className=" flex justify-between bg-blue-500 text-white rounded items-center hover:bg-blue-600"
          iconType="add"
        >
          Add New Item
        </CustomButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <BoxContainer
          icon={faBandAid}
          mainHeading="Stock Low"
          subHeading="Critical Inventory"
          paragraphText="Immediate Action Required"
        />
        <BoxContainer
          icon={faCapsules}
          mainHeading="Moderate"
          subHeading="Inventory Status"
          paragraphText="Check Stock Levels"
          variant="yellow"
        />
        <BoxContainer
          icon={faThermometer}
          mainHeading="High"
          subHeading="Inventory Status"
          paragraphText="Monitor Regularly"
          variant="blue"
        />
      </div>
    </div>
  );
};

export default Inventory;
