import React, { useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";

interface AddMedicineProps {
  onClose: () => void;
  onAdd: (medicine: { name: string; count: number }) => void;
}

const AddMedicine: React.FC<AddMedicineProps> = ({ onClose, onAdd }) => {
  const [medicineName, setMedicineName] = useState<string>("");
  const [medicineCount, setMedicineCount] = useState<string>("");

  const handleAdd = () => {
    onAdd({ name: medicineName, count: parseInt(medicineCount, 10) });
    alert("Medicine Added Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="flex flex-col gap-4 bg-white p-6 rounded-md max-w-lg w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Add Medicine
        </h2>
        <div className="mb-4">
          <label className="block text-left text-gray-700 font-medium mb-2">
            Medicine
          </label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Medicine Name or Medicine ID"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition ease-in-out duration-150 flex items-center space-x-2"
          >
            <FaPlus size={16} />
            <span className="hidden sm:inline">Add Medicine to Group</span>
            <span className="inline sm:hidden">Add Medicine</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
