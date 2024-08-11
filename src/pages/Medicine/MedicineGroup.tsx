import React, { ChangeEvent, useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store.ts";
import { fetchMedicines } from "../../medicineSlice.ts";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import SearchBar from "../../components/searchbar/SearchBar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MedicineGroup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { medicines, status } = useSelector(
    (state: RootState) => state.medicines
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const location = useLocation();
  const isMedicineItem = location.pathname.includes("medicine-item");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMedicines());
    }
  }, [status, dispatch]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleAddGroup = (): void => {
    alert("Add Medicine Group Successfully");
  };

  const handleDelete = (): void => alert("Delete Medicine Successfully");

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
      {!isMedicineItem && (
        <div className="px-1 sm:px-6 lg:px-8 py-4 w-full flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 flex items-center">
                Inventory
                <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
              </h3>
              <Link
                className="text-sm sm:text-lg font-bold text-slate-700 hover:underline flex items-center"
                to="medicine-item"
              >
                Medicine Groups (02)
              </Link>
            </div>
            <CustomButton
              onClick={handleAddGroup}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              iconType="add"
            >
              Add New Group
            </CustomButton>
          </div>
          <p className="text-gray-600 mb-4 hidden lg:block">
            List of medicines available for sales.
          </p>
          <div className="mb-4">
            <SearchBar
              placeholder="Search for Medicine"
              onSearchChange={handleSearchChange}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-xs sm:text-sm">
                  <th className="p-3 text-left border-b border-gray-300">
                    Medicine Name
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    Medicine ID
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    Group Name
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    Stock in Qty
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.map((medicine) => (
                  <tr
                    key={medicine.id}
                    className="hover:bg-gray-50 text-xs sm:text-sm"
                  >
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
                      <Link
                        to="details"
                        className="text-blue-500 hover:underline"
                      >
                        {medicine.link}
                      </Link>
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        className="text-gray-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CustomButton
            onClick={handleDelete}
            className="my-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            iconType="delete"
          >
            Delete Medicine
          </CustomButton>
        </div>
      )}
      <Outlet />
    </Fragment>
  );
};

export default MedicineGroup;
