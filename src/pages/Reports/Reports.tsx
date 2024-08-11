import React, { Fragment } from "react";
import {
  faMoneyCheckDollar,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import BoxContainer from "../../components/boxcomponent/BoxContainer.tsx";

const Reports: React.FC = () => {
  return (
    <Fragment>
      <div className="w-full p-1 sm:p-6 lg:p-8 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Reports
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Overall reports related to the pharmacy.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap gap-5  ">
          <BoxContainer
            icon={faMoneyCheckDollar}
            mainHeading="Rs. 8,55,875"
            subHeading="Total Sales Report"
            paragraphText="View Detailed Report"
            variant="yellow"
          />
          <BoxContainer
            icon={faHeartCirclePlus}
            mainHeading="523"
            subHeading="Payment Report"
            paragraphText="View Detailed Report"
            variant="green"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Reports;
