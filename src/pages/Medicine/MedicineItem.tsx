import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import SearchBar from "../../components/searchbar/SearchBar.tsx";
import { AppDispatch, RootState } from "../../store.ts";
import { fetchMedicines } from "../../medicineSlice.ts";
import AddMedicine from "../../components/medicine/AddMedicine.tsx";

const MedicineItem: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { medicines, status } = useSelector(
    (state: RootState) => state.medicines
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAddMedicineVisible, setAddMedicineVisible] =
    useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMedicines());
    }
  }, [status, dispatch]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isAddNewPage = location.pathname.includes("add-medicine-item");

  const handleAddMedicineClick = () => {
    setAddMedicineVisible(true);
  };

  const handleAdd = (medicine: { name: string; count: number }) => {
    console.log("Medicine added:", medicine);
  };

  return (
    <div className="relative px-1 sm:px-6 lg:px-8 py-4 w-full flex flex-col">
      {!isAddNewPage && !isAddMedicineVisible && (
        <>
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <nav className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 flex items-center">
                Inventory
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-600 ml-2"
                />
              </h3>
              <Link
                to="#"
                className="text-sm sm:text-lg font-bold text-gray-600 hover:underline flex items-center"
              >
                Medicine Groups
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-600 ml-2"
                />
              </Link>
              <Link
                to="#"
                className="text-sm sm:text-lg font-bold hover:underline"
              >
                Generic Medicine (03)
              </Link>
            </nav>
            <CustomButton
              onClick={handleAddMedicineClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              iconType="add"
            >
              Add Medicine
            </CustomButton>
          </header>

          <p className="text-gray-600 mb-2">
            Detailed view of a medicine group.
          </p>

          <SearchBar
            placeholder="Search for Medicine"
            onSearchChange={handleSearchChange}
          />

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="p-3 border-b border-gray-300">
                    Medicine Name
                  </th>
                  <th className="p-3 border-b border-gray-300">Medicine ID</th>
                  <th className="p-3 border-b border-gray-300">Group Name</th>
                  <th className="p-3 border-b border-gray-300">Stock in Qty</th>
                  <th className="p-3 border-b border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.map((medicine) => (
                  <tr key={medicine.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-300">
                      {medicine.name}
                    </td>
                    <td className="p-3 border-b border-gray-300">
                      {medicine.id}
                    </td>
                    <td className="p-3 border-b border-gray-300">
                      {medicine.group}
                    </td>
                    <td className="p-3 border-b border-gray-300">
                      {medicine.stock}
                    </td>
                    <td className="p-3 border-b border-gray-300 flex items-center space-x-2">
                      <button
                        onClick={() => alert(`Removing ${medicine.name}`)}
                        className="text-red-400 hover:text-red-500 flex items-center"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                        Remove from Group
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CustomButton
            onClick={() => alert("Remove Group")}
            iconType="delete"
            className="mb-2 text-red-500 border border-red-500 px-4 py-2 bg-white rounded-md shadow-sm hover:bg-red-50 transition duration-300"
          >
            Remove Group
          </CustomButton>
        </>
      )}

      {isAddMedicineVisible && (
        <AddMedicine
          onClose={() => setAddMedicineVisible(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default MedicineItem;
