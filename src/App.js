import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Login from "./pages";
import Home from "./pages/Dashboard/Home";
import CardDetail from "./pages/Dashboard/CardDetails";
import ProfessionalPage from "./pages/Dashboard/ProfessionalSection";
import SimilarAnnounce from "./pages/Dashboard/SimilarAnnounce";
import ProfessionalCardDetails from "./pages/Dashboard/ProfessionalCardDetails";
import HiddenAdsSection from "./pages/Dashboard/HiddenAdsSection";
import SavedSearches from "./pages/Dashboard/SavedSearches";
import SavedCardLists from "./pages/Dashboard/SavedCardsList";
import EditFilter from "./pages/Dashboard/Filter";
import { Estimations } from "./pages/Dashboard/Estimations";
import { EstimationProperty } from "./pages/Dashboard/EstimationProperty";
import OptionProspect from "./pages/Dashboard/OptionProspect";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReminders from "./pages/Dashboard/MyReminders";
import TodoList from "./pages/Dashboard/TodoList";
import EditProfile from "./pages/Dashboard/EditProfile";
import UserManagement from "./pages/Dashboard/UserManagement";
import Statistics from "./pages/Dashboard/Statistics";
import { Invoices } from "./pages/Dashboard/Invoices";
import MyAccount from "./pages/Dashboard/MyAccount";
import AgencySetup from "./pages/Dashboard/AgencySetup";
import Disponsibilities from "./pages/Dashboard/Disponsibilites";
import MapSearch from "./pages/Dashboard/MapSearch";
import ContactPage from "./pages/Dashboard/ContactPage";
import { checkSession } from "./apiService";

// Define an array of components with their associated route paths
const privateRoutes = [
  { path: "home", component: Home },
  { path: "card-detail", component: CardDetail },
  { path: "option-prospect", component: OptionProspect },
  { path: "professional-section", component: ProfessionalPage },
  { path: "professional-card", component: ProfessionalCardDetails },
  { path: "similar-announce", component: SimilarAnnounce },
  { path: "hidden-ads-section", component: HiddenAdsSection },
  { path: "saved-searches", component: SavedSearches },
  { path: "saved-cards-list", component: SavedCardLists },
  { path: "edit-filters", component: EditFilter },
  { path: "estimations", component: Estimations },
  { path: "estimations-property", component: EstimationProperty },
  { path: "my-appointments", component: MyAppointments },
  { path: "my-reminders", component: MyReminders },
  { path: "todo-list", component: TodoList },
  { path: "edit-profile", component: EditProfile },
  { path: "user-management", component: UserManagement },
  { path: "statistics", component: Statistics },
  { path: "invoices", component: Invoices },
  { path: "my-account", component: MyAccount },
  { path: "agency-setup", component: AgencySetup },
  { path: "disponsibilities", component: Disponsibilities },
  { path: "map-search", component: MapSearch },
  { path: "contact-page", component: ContactPage },
];

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("ses");
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === "/";

  // Apply authentication check only if the current page is not the login page
  if (!isLoginPage) {
    return isAuthenticated !== 'undefined' ? <Component {...rest} /> : <Navigate to="/" />;
  }

  // If the current page is the login page, render the component without authentication check
  return <Component {...rest} />;
};

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forget" element={<ForgetPassword />} />
        {/* Dynamically generate private routes from the privateRoutes array */}
        {privateRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute component={component} />}
          />
        ))}
      </Routes >
    </>
  );
};

export default App;
