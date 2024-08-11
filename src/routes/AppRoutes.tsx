import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import Home from "../pages/Dashboard/Home.tsx";
import Inventory from "../pages/Inventory/Inventory.tsx";
import InventoryList from "../pages/Inventory/InventoryList.tsx";
import MedicineDetail from "../pages/Inventory/MedicineDetail.tsx";
import AddNewMedicine from "../pages/Inventory/AddNewMedicine.tsx";
import MedicineGroup from "../pages/Medicine/MedicineGroup.tsx";
import MedicineItem from "../pages/Medicine/MedicineItem.tsx";
import Reports from "../pages/Reports/Reports.tsx";
import SalesReport from "../pages/Reports/SalesReport.tsx";
import PaymentsReport from "../pages/Reports/PaymentsReport.tsx";
import Configurations from "../pages/Configuration/Configurations.tsx";
import ContactManagement from "../pages/ContactManagement/ContactManagement.tsx";
import Notifications from "../pages/Notifications/Notifications.tsx";
import ChatVisitors from "../pages/ChatVisitors/ChatVisitors.tsx";
import ApplicationSettings from "../pages/ApplicationSettings/ApplicationSettings.tsx";
import Covid from "../pages/Covid/Covid19.tsx";
import GetTechnicalHelp from "../pages/Help/GetTechnicalHelp.tsx";
import NotFound from "../pages/NotFound.tsx";

const AppRoutes = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="app flex flex-col md:flex-row">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/list-of-inventory" element={<InventoryList />}>
              <Route path="medicine-details" element={<MedicineDetail />}>
                <Route path="add-new-medicine" element={<AddNewMedicine />} />
              </Route>
            </Route>
            <Route path="/medicine-group" element={<MedicineGroup />}>
              <Route path="medicine-item" element={<MedicineItem />} />
            </Route>
            <Route path="/reports" element={<Reports />} />
            <Route path="/salesreport" element={<SalesReport />} />
            <Route path="/paymentsreport" element={<PaymentsReport />} />
            <Route path="/configurations" element={<Configurations />} />
            <Route path="/contact-management" element={<ContactManagement />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/chat-with-visitors" element={<ChatVisitors />} />
            <Route
              path="/application-settings"
              element={<ApplicationSettings />}
            />
            <Route path="/covid-19" element={<Covid />} />
            <Route path="/get-technical-help" element={<GetTechnicalHelp />} />
            {/* Fallback route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
