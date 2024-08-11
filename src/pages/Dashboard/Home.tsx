import React, { useState } from "react";
import {
  faHeartCirclePlus,
  faSackDollar,
  faMagnifyingGlassPlus,
  faDiagnoses,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import BoxContainer from "../../components/boxcomponent/BoxContainer.tsx";
import MedicineComponent from "../../components/statscomponent/MedicineComponent.tsx";
import CustomButton from "../../components/buttons/CustomButton.tsx";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Import IconDefinition

const Home: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDownloadDropdownToggle = () =>
    setDropdownVisible((prev) => !prev);

  const downloadDropdownItems = [
    {
      label: "Excel",
      icon: faFileExcel as IconDefinition,
      onClick: () => {
        alert("Download Excel");
        setDropdownVisible(false);
      },
    },
    {
      label: "PDF",
      icon: faFilePdf as IconDefinition,
      onClick: () => {
        alert("Download PDF");
        setDropdownVisible(false);
      },
    },
  ];

  return (
    <>
      <div className="flex max-md:w-full flex-col gap-5 sm:p-4 md:p-5 lg:p-6 xl:py-2 2xl:p-6 ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-black">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Dashboard
            </h2>
            <p className="text-base md:text-lg leading-6">
              A quick data overview of the inventory.
            </p>
          </div>
          <CustomButton
            onClick={handleDownloadDropdownToggle}
            className=" flex-row-reverse py-2 px-4 rounded items-center hover:bg-gray-200"
            iconType="download"
            dropdownItems={dropdownVisible ? downloadDropdownItems : []}
          >
            Download Report
          </CustomButton>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap gap-5  ">
          <BoxContainer
            icon={faHeartCirclePlus}
            mainHeading="Good"
            subHeading="Inventory Status"
            paragraphText="View Detailed Report"
            variant="green"
          />
          <BoxContainer
            icon={faSackDollar}
            mainHeading="Rs. 8,55,875"
            subHeading="Revenue : Jan 2022"
            paragraphText="View Detailed Report"
            variant="yellow"
          />
          <BoxContainer
            icon={faMagnifyingGlassPlus}
            mainHeading="298"
            subHeading="Medicines Av  ailable"
            paragraphText="View Detailed Report"
            variant="blue"
          />
          <BoxContainer
            icon={faDiagnoses}
            mainHeading="01"
            subHeading="Medicine Shortage"
            paragraphText="View Detailed Report"
            variant="red"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          <MedicineComponent
            title="Inventory Overview"
            configLink="/inventory"
            configText="View Inventory"
            totalMedicines={298}
            groups={24}
            totalMedicinesLabel="Total Medicines"
            groupsLabel="Medicine Groups"
          />

          <MedicineComponent
            title="Quick Report"
            configLink="/report"
            configText="View Report"
            totalMedicines={70856}
            groups={5288}
            totalMedicinesLabel="Qty of Medicines Sold"
            groupsLabel="Invoices Generated"
          />
          <MedicineComponent
            title="Stock Analysis"
            configLink="/analysis"
            configText="View Analysis"
            totalMedicines={15}
            groups={30}
            totalMedicinesLabel="Total no of Suppliers"
            groupsLabel="Total no of Users"
          />
          <MedicineComponent
            title="Daily Overview"
            configLink="/overview"
            configText="View Daily Overview"
            totalMedicines={845}
            groups={35}
            totalMedicinesLabel="Total no of Customers"
            groupsLabel="Frequently bought Item"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
