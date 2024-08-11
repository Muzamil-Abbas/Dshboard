import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines } from "../../medicineSlice.ts";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import SearchBar from "../../components/searchbar/SearchBar.tsx";
import { Outlet } from "react-router-dom";
import { RootState } from "../../store.ts";

const InventoryList: React.FC = () => {
  const dispatch = useDispatch();
  const { medicines, loading, error } = useSelector(
    (state: RootState) => state.medicines
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const location = useLocation();
  const isDetailsPage = location.pathname.includes("medicine-details");

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  const handleAddNew = () => alert("Add New Item Successfully");
  const handleSelect = () => alert("Select Group Successfully");

  const indexOfLastMedicine = currentPage * itemsPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - itemsPerPage;
  const currentMedicines = medicines.slice(
    indexOfFirstMedicine,
    indexOfLastMedicine
  );

  const totalPages = Math.ceil(medicines.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Fragment>
      {!isDetailsPage && (
        <div className="p-1 w-full flex flex-col lg:px-6 lg:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex sm:flex-row gap-2 items-start sm:items-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-600 flex items-center">
                Inventory
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-600 ml-2 text-sm sm:text-md"
                />
              </h3>
              <Link
                className="text-sm sm:text-lg font-bold text-gray-900 hover:underline flex items-center"
                to="medicine-details"
              >
                List of Medicines ({medicines.length})
              </Link>
            </div>
            <CustomButton
              onClick={handleAddNew}
              className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded"
              iconType="add"
            >
              Add New Item
            </CustomButton>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-2">
            <SearchBar
              placeholder="Search for Medicine"
              onSearchChange={function (
                event: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <CustomButton
              onClick={handleSelect}
              className="bg-gray-300 text-black py-2 px-3 sm:px-4 rounded hidden lg:block"
              iconType="download"
            >
              - Select Group -
            </CustomButton>
          </div>
          {/* Inventory Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-2 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="p-3 text-left border-b">Medicine Name</th>
                  <th className="p-3 text-left border-b">Medicine ID</th>
                  <th className="p-3 text-left border-b">Group Name</th>
                  <th className="p-3 text-left border-b">Stock in Qty</th>
                  <th className="p-3 text-left border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-3 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={5} className="p-3 text-center text-red-600">
                      {error}
                    </td>
                  </tr>
                ) : (
                  currentMedicines.map((medicine) => (
                    <tr key={medicine.id} className="hover:bg-gray-100">
                      <td className="p-3 border-b">{medicine.name}</td>
                      <td className="p-3 border-b">{medicine.id}</td>
                      <td className="p-3 border-b">{medicine.group}</td>
                      <td className="p-3 border-b">{medicine.stock}</td>
                      <td className="p-3 border-b">
                        <Link
                          to="details"
                          className="text-blue-600 hover:underline"
                        >
                          {medicine.link}
                        </Link>
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          className="text-gray-500 ml-2"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-2 text-sm sm:text-base">
            <p className="text-gray-600">
              Showing {indexOfFirstMedicine + 1} -{" "}
              {Math.min(indexOfLastMedicine, medicines.length)} results of{" "}
              {medicines.length}
            </p>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-gray-600 cursor-pointer hover:text-gray-800"
                onClick={handlePrevPage}
              />
              <p className="text-gray-600">
                Page {currentPage}{" "}
                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
              </p>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-600 cursor-pointer hover:text-gray-800"
                onClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      )}
      <Outlet /> {/* This will render the nested routes */}
    </Fragment>
  );
};

export default InventoryList;
