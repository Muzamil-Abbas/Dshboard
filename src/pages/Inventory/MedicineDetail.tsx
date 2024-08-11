import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import MedicineComponent from "../../components/statscomponent/MedicineComponent.tsx";
import SearchBar from "../../components/searchbar/SearchBar.tsx";

const medicinesList1 = [];

const medicinesList2 = [];

const MedicineDetail: React.FC = () => {
  const location = useLocation();
  const handleAddNew = () => alert("Add New Item Successfully");
  const handleSelect = () => alert("Select Group Successfully");

  const medicines = location.pathname.includes("list-of-inventory")
    ? medicinesList1
    : medicinesList2;

  const isAddNewPage = location.pathname.includes("add-new-medicine");

  return (
    <Fragment>
      {!isAddNewPage && (
        <div className="px-1 py-4 w-full flex flex-col gap-2 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-x-4 sm:space-y-0">
              <h3 className="text-lg sm:text-xl text-gray-400 font-semibold">
                Inventory
              </h3>
              <div className="flex flex-row flex-wrap space-x-2 sm:space-x-4">
                <Link
                  className="text-base sm:text-lg font-bold hover:underline flex items-center"
                  to="#"
                >
                  Azithral 500 Tablet
                  <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                </Link>
                <Link
                  className="text-base sm:text-lg font-bold text-gray-900 hover:underline flex items-center"
                  to="add-new-medicine"
                >
                  Add New Medicine
                </Link>
              </div>
            </div>
            <CustomButton
              onClick={handleAddNew}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Edit Details
            </CustomButton>
          </div>

          <p className="mb-2 text-sm hidden lg:block">
            List of medicines available for sales.
          </p>
          {/* Search Bar Section */}
          <div className="mb-4">
            <SearchBar
              placeholder="Search for Medicine"
              onSearchChange={(event) => console.log(event.target.value)}
            />
          </div>

          {/* Medicine Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
            <MedicineComponent
              title="Inventory Overview"
              configLink="/inventory"
              configText="View Inventory"
              totalMedicines={medicines.length}
              groups={24} // Replace with actual groups count if needed
              totalMedicinesLabel="Total Medicines"
              groupsLabel="Medicine Groups"
            />
            <MedicineComponent
              title="Inventory Overview"
              configLink="/inventory"
              configText="View Inventory"
              totalMedicines={medicines.length}
              groups={24} // Replace with actual groups count if needed
              totalMedicinesLabel="Total Medicines"
              groupsLabel="Medicine Groups"
            />
          </div>

          {/* Medicine Details Section */}
          <div className="flex flex-col">
            <div className="mt-6 border border-gray-300 rounded-md shadow-sm bg-white">
              <h4 className="text-lg py-2 px-4 font-semibold text-gray-800  border-b border-gray-300">
                How to Use
              </h4>
              <p className="text-gray-700 py-7 px-4">
                Take this medication by mouth with or without food as directed
                by your doctor, usually once daily.
              </p>
            </div>

            <div className="my-6 border border-gray-300 rounded-md shadow-sm bg-white">
              <h4 className="text-lg py-2 px-4 font-semibold text-gray-800  border-b border-gray-300">
                Side Effects
              </h4>
              <p className="text-gray-700 px-4 py-7">
                Dizziness, lightheadedness, drowsiness, nausea, vomiting,
                tiredness, excess saliva/drooling, blurred vision, weight gain,
                constipation, headache, and trouble sleeping may occur. If any
                of these effects persist or worsen, consult your doctor.
              </p>
            </div>
          </div>
        </div>
      )}
      <Outlet /> {/* This will render the nested routes */}
    </Fragment>
  );
};

export default MedicineDetail;
