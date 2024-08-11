import React, { useState } from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";

interface Page {
  name: string;
}

const Configuration: React.FC = () => {
  const [pharmacyName, setPharmacyName] = useState("Pharmacy Name");
  const [pharmacyID, setPharmacyID] = useState("Pharmacy ID");
  const [ownerName, setOwnerName] = useState("Owner Name"); // Added ownerName state
  const [ownerEmail, setOwnerEmail] = useState("Email@.com"); // Added ownerEmail state
  const [errors, setErrors] = useState<{ pharmacyID?: string }>({});

  const pages: Page[] = [
    { name: "Dashboard" },
    { name: "Inventory" },
    { name: "Reports" },
    { name: "Configuration" },
    { name: "Contact Management" },
    { name: "Notification" },
  ];

  const pharmacyIDPattern = /^[A-Z]{2}\d{6}[A-Z]{2}$/;

  const handlePharmacyIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPharmacyID(value);

    if (!pharmacyIDPattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pharmacyID: "Invalid Pharmacy ID format. Example: PH349TY228",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, pharmacyID: undefined }));
    }
  };

  return (
    <section className="lg:p-6 w-full flex flex-col gap-8 overflow-y-auto max-h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-gray-800">Configurations</h2>
        <p>Configure your pharmacy application.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Box 1 */}
        <div className="bg-white border rounded-md shadow-sm">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <p className="font-semibold text-gray-800">Branding</p>
            <FaPen className="text-blue-500 cursor-pointer hover:text-blue-700" />
          </div>
          <div className="flex justify-between px-4 py-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-bold text-gray-700">Enter Name</h4>
              <p className="text-gray-600">{pharmacyName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-bold text-gray-700">{pharmacyID}</h4>
              <p className="text-gray-600">PH349TY228</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white border rounded-md shadow-sm">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <p className="font-semibold text-gray-800">Owner</p>
            <FaPen className="text-blue-500 cursor-pointer hover:text-blue-700" />
          </div>
          <div className="flex justify-between px-4 py-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-bold text-gray-700">Owner Name</h4>
              <p className="text-gray-600">{ownerName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-bold text-gray-700">{ownerEmail}</h4>
              <p className="text-gray-600">Email ID</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className="bg-white w-full lg:w-[48.5%] rounded-md border shadow-sm">
        <div className="border-b p-4 bg-gray-100">
          <div className="flex justify-between font-medium text-gray-700">
            <span>Pages</span>
            <span>Actions</span>
          </div>
        </div>

        {pages.map((page, index) => (
          <div
            key={index}
            className="border-b p-4 flex justify-between items-center hover:bg-gray-50"
          >
            <span className="text-gray-800">{page.name}</span>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-blue-400 hover:text-blue-600">
                <FaPlus className="mr-2" /> Add Sub Page
              </button>
              <button className="text-blue-400 hover:text-blue-600">
                <FaPen />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="p-4">
          <button className="flex items-center text-blue-500 hover:text-blue-700">
            <FaPlus className="mr-2" /> Add a New Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Configuration;
