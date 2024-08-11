import React from "react";
import logo from "../../assets/images/logo.png";

interface BrandingProps {
  branding: {
    pharmacyName: string;
    pharmacyID: string;
    address: string;
    phone: string;
    email: string;
    logoUrl?: string; // Made optional in case of fallback
  };
}

const Branding: React.FC<BrandingProps> = ({ branding }) => {
  const { pharmacyName, address, phone, email, logoUrl } = branding;

  const handleEditClick = () => {
    alert(`You're about to edit the details of ${pharmacyName}.`);
  };

  return (
    <section className="p-6 bg-gradient-to-r from-white to-white rounded-lg shadow-lg flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 mb-4 md:mb-0">
        <img
          src={logo} // Use local logo as fallback
          alt={`${pharmacyName} Logo`}
          className="w-20 h-20 object-cover rounded-full border-2 border-slate-400 shadow-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
        />
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {" "}
          {pharmacyName}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start text-gray-700 space-y-4 md:space-y-0">
        <div>
          <p className="text-lg font-semibold text-gray-800">Address:</p>
          <p className="text-gray-600">{address}</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800">Phone:</p>
          <p className="text-gray-600">{phone}</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800">Email:</p>
          <p className="text-gray-600">{email}</p>
        </div>
        <button
          onClick={handleEditClick}
          className="px-5 py-3 border bg-white text-slate-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Edit Brand's Details
        </button>
      </div>
    </section>
  );
};

export default Branding;
