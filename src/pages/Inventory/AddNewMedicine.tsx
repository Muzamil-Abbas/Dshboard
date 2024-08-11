import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AddNewMedicine: React.FC = () => {
  const [medicineName, setMedicineName] = useState("");
  const [medicineId, setMedicineId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [group, setGroup] = useState("");
  const [howToUse, setHowToUse] = useState("");
  const [sideEffects, setSideEffects] = useState("");

  const handleSave = () => {
    alert("Medicine Saved Successfully");
    console.log("Medicine Details:", {
      medicineName,
      medicineId,
      quantity,
      group,
      howToUse,
      sideEffects,
    });
  };

  return (
    <div className="container mx-auto px-1 lg:px-6 py-4 overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <h3 className="text-lg sm:text-xl text-gray-400 font-semibold">
          Inventory
        </h3>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
          <Link
            className="text-base sm:text-lg font-bold text-gray-400 hover:underline flex items-center"
            to="#"
          >
            List of Medicines
            <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
          </Link>
          <Link
            className="text-base sm:text-lg font-bold text-gray-900 hover:underline flex items-center"
            to="#"
          >
            Add New Medicine
          </Link>
        </div>
      </div>
      <p className="my-2 text-sm text-gray-600">
        *All fields are mandatory, except mentioned as (optional). List of
        medicines available for sales.
      </p>

      <form className=" sm:w-2/4 md:w-1/3 lg:w-full mx-auto space-y-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="medicineName"
              className="block text-gray-700 font-semibold mb-1.5"
            >
              Medicine Name <span className="text-red-500">*</span>
            </label>
            <input
              id="medicineName"
              type="text"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="medicineId"
              className="block text-gray-700 font-semibold mb-1.5"
            >
              Medicine ID <span className="text-red-500">*</span>
            </label>
            <input
              id="medicineId"
              type="text"
              value={medicineId}
              onChange={(e) => setMedicineId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Quantity and Medicine Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-semibold mb-1.5"
            >
              Quantity in Number <span className="text-red-500">*</span>
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="group"
              className="block text-gray-700 font-semibold mb-1.5"
            >
              Medicine Groups <span className="text-red-500">*</span>
            </label>
            <select
              id="group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">- Select Group -</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Generic Medicine">Generic Medicine</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* How to Use */}
        <div>
          <label
            htmlFor="howToUse"
            className="block text-gray-700 font-semibold mb-2"
          >
            How to Use <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="howToUse"
            value={howToUse}
            onChange={(e) => setHowToUse(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        {/* Side Effects */}
        <div>
          <label
            htmlFor="sideEffects"
            className="block text-gray-700 font-semibold mb-2"
          >
            Side Effects <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="sideEffects"
            value={sideEffects}
            onChange={(e) => setSideEffects(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        {/* Save Details Button */}
        <div className="flex justify-center lg:justify-start">
          <CustomButton
            iconType="save"
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
          >
            Save Details
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddNewMedicine;
