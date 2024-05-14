import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Overview from "../../components/overview/Overview";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="column_1">
          <Sidebar />
        </div>
        <div className="column_2">
          <Header pageTitle="Dashboard" />
          <div className="row_1">
            <Overview
              textTop="Total Bookings"
              textBottom="501 Bookings"
              iconSrc="assets/icons/bookings.png"
            />
            <Overview
              textTop="Bookings Utilized"
              textBottom="501 Bookings"
              iconSrc="assets/icons/utilized.png"
            />
            <Overview
              textTop="Booking Cancelled"
              textBottom="0 Bookings"
              iconSrc="assets/icons/cancelled.png"
            />
            <Overview
              textTop="Utilization"
              textBottom="100%"
              iconSrc="assets/icons/utilization.png"
            />
          </div>
          <div className="row_2">
            <img src="/assets/icons/map.png" alt="Google Maps" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
