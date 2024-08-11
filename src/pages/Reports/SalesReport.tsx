import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faAngleRight,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import * as d3 from "d3";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../components/buttons/CustomButton.tsx";

// Define types for your data
interface SalesData {
  date: string;
  value: number;
}

interface SalesTableData {
  orderId: string;
  dateTime: string;
}

const SalesReport: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date("2021-12-01"));
  const [endDate, setEndDate] = useState<Date>(new Date("2021-12-31"));
  const [group, setGroup] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

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

  const salesData: SalesData[] = [
    { date: "1 Dec", value: 50 },
    { date: "12 Dec", value: 0 },
    { date: "22 Dec", value: 200 },
    { date: "31 Dec", value: 100 },
  ];

  const salesTableData: SalesTableData[] = [
    { orderId: "2485855848577", dateTime: "01 Dec 2021 10:25" },
    { orderId: "2485855848563", dateTime: "03 Dec 2021 18:25" },
    { orderId: "2485855848599", dateTime: "05 Dec 2021 18:25" },
    { orderId: "2485855848568", dateTime: "09 Dec 2021 18:25" },
    { orderId: "2485855848567", dateTime: "10 Dec 2021 18:25" },
    { orderId: "2485855848564", dateTime: "15 Dec 2021 18:25" },
    { orderId: "2485855848544", dateTime: "21 Dec 2021 18:25" },
    { orderId: "2485855848555", dateTime: "25 Dec 2021 18:25" },
  ];

  useEffect(() => {
    drawChart();
  }, [salesData]);

  const drawChart = () => {
    const width = 500;
    const height = 250;
    const margin = { top: 30, right: 20, bottom: 30, left: 50 };

    d3.select(".sales-graph-svg").selectAll("*").remove();

    const svg = d3
      .select(".sales-graph-svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scalePoint()
      .domain(salesData.map((d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(salesData, (d) => d.value) || 0])
      .nice()
      .range([height, 0]);

    const line = d3
      .line<SalesData>()
      .x((d) => x(d.date) || 0)
      .y((d) => y(d.value) || 0)
      .curve(d3.curveMonotoneX);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x as any)); // Type assertion to avoid TypeScript error

    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickSize(-width)
          .tickFormat((d) => `${d}`)
      )
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("stroke", "#ddd")
          .attr("stroke-dasharray", "4,2")
      )
      .call((g) => g.selectAll(".tick text").attr("x", -10).attr("dy", 4));

    svg
      .append("path")
      .datum(salesData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg
      .selectAll(".dot")
      .data(salesData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.date) || 0)
      .attr("cy", (d) => y(d.value) || 0)
      .attr("r", 4)
      .attr("fill", "steelblue");
  };

  return (
    <div className="relative h-full px-1 sm:px-6 py-4 w-full flex flex-col overflow-y-auto gap-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
        <div className="flex items-center gap-2 sm:mb-0">
          <h4 className="text-lg sm:text-xl font-bold text-gray-400">
            Reports
          </h4>
          <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
          <Link
            to="#"
            className="text-base sm:text-lg font-bold hover:underline"
          >
            Sales Report
          </Link>
        </div>
        <CustomButton
          onClick={handleDownloadDropdownToggle}
          className="bg-white border text-slate-600 border-slate-400"
          iconType="download"
          dropdownItems={dropdownVisible ? downloadDropdownItems : []}
        >
          Download Report
        </CustomButton>
      </div>
      <p className="text-gray-600 mb-2 hidden lg:block">
        Sales related report of the pharmacy.
      </p>

      <div className="w-full flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex flex-col gap-2 flex-1">
          <label className="font-medium">Date Range</label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => date && setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd MMMM yyyy"
              className="w-96 max-md:w-[23.85rem] p-2 border border-gray-300 rounded-sm bg-blue-50"
            />
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label className="font-medium">Medicine Group</label>
          <div className="relative">
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-sm bg-blue-50"
            >
              <option value="">Select Group</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label className="font-medium">User Name</label>
          <div className="relative">
            <select
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-sm bg-blue-50"
            >
              <option value="">Select User Name</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 lg:w-7/12 bg-white border border-gray-300 mb-4 rounded-lg shadow-md">
          <h3 className="p-4 border-b border-gray-300 font-semibold">
            Sales Made
          </h3>
          <svg className="sales-graph-svg w-full h-80"></svg>
        </div>

        <div className="flex-2 lg:w-[42%] bg-white border border-gray-300 mb-4 rounded-lg shadow-md">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-4 px-12 font-medium">Order ID</th>
                <th className="py-2 px-12 font-medium">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {salesTableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-2 px-6">{row.orderId}</td>
                  <td className="p-2 pl-8">{row.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
