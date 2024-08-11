import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../components/buttons/CustomButton.tsx";

const PaymentsReport: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDownloadDropdownToggle = () =>
    setDropdownVisible(!dropdownVisible);

  const downloadDropdownItems = [
    {
      label: "Excel",
      icon: faFileExcel,
      onClick: () => {
        alert("Download Excel");
        setDropdownVisible(false);
      },
    },
    {
      label: "PDF",
      icon: faFilePdf,
      onClick: () => {
        alert("Download PDF");
        setDropdownVisible(false);
      },
    },
  ];

  const paymentData = [
    {
      orderId: "P06ID232435451",
      date: "01 December 2021",
      amount: 150.75,
      status: "Completed",
    },
    {
      orderId: "P06ID232435452",
      date: "02 December 2021",
      amount: 200.0,
      status: "Pending",
    },
    {
      orderId: "P06ID232435453",
      date: "03 December 2021",
      amount: 175.25,
      status: "Completed",
    },
    {
      orderId: "P06ID232435454",
      date: "04 December 2021",
      amount: 120.5,
      status: "Completed",
    },
    {
      orderId: "P06ID232435455",
      date: "05 December 2021",
      amount: 250.0,
      status: "Pending",
    },
    {
      orderId: "P06ID232435456",
      date: "06 December 2021",
      amount: 300.0,
      status: "Completed",
    },
    {
      orderId: "P06ID232435457",
      date: "07 December 2021",
      amount: 225.75,
      status: "Completed",
    },
  ];

  return (
    <div className="relative h-full px-1 lg:px-6 lg:py-4 w-full flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Payments Report
          </h2>
        </div>
        <CustomButton
          onClick={handleDownloadDropdownToggle}
          className="bg-blue-500 text-white hover:bg-blue-600"
          iconType="download"
          dropdownItems={dropdownVisible ? downloadDropdownItems : []}
        >
          Download Report
        </CustomButton>
      </div>
      <p className="text-gray-600 mb-4">
        Sales related report of the pharmacy.
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Total Payments
          </h3>
          <p className="text-xl sm:text-2xl text-gray-600">$350.75</p>
        </div>
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Completed
          </h3>
          <p className="text-xl sm:text-2xl text-gray-600">$150.75</p>
        </div>
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            Pending
          </h3>
          <p className="text-xl sm:text-2xl text-gray-600">$200.00</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Order ID</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Date</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Amount</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-2 py-1 sm:px-4 sm:py-2">{payment.orderId}</td>
                <td className="px-2 py-1 sm:px-4 sm:py-2">{payment.date}</td>
                <td className="px-2 py-1 sm:px-4 sm:py-2">
                  ${payment.amount.toFixed(2)}
                </td>
                <td
                  className={`px-2 py-1 sm:px-4 sm:py-2 font-medium ${
                    payment.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsReport;
