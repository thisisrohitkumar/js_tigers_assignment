import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Overview from "../../components/overview/Overview";
import AnnounceIcon from "../../assets/icons/announcement.png";
import PdfIcon from "../../assets/icons/Pdf.png";

import PieChart from "../../components/PieChart";
import "./dashboard.css";

const Dashboard = () => {

  const [docList, setDocList] = useState(null);

  useEffect(() => {
    const fetchLatestDocuments = async () => {
      try {
        const response = await fetch("/data/documents.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDocList(data);
      } catch (error) {
        console.log("Error fetching latest documents", error);
      }
    };

    fetchLatestDocuments();
  }, []);

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
          <div className="row_3">
            <PieChart />
          </div>
          <div className="row_4">
            <div className="inner_column_1">
              <h4>Latest Documents</h4>
              <div className="document__list">
                {docList && (
                  <ul>
                    {docList.map((item) => (
                      <li className="document__list__item" key={item.id}>
                      <div className="doc_details">
                        <img src={PdfIcon} alt="Pdf Icon" />
                        <span className="title__and__desc">
                          <span className="doc__title">{item.title}</span>
                          <span className="doc__desc">{item.description}</span>
                        </span>
                      </div>
                      <div className="date__and__time">
                        <span className="date">{item.date}</span>
                        <span className="time">{item.time}</span>
                      </div>
                    </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="inner_column_2">
              <h4>Announcements</h4>
              <div className="announce__soon">
                <p>
                  Soon you will see latest announcements/new in this section.
                </p>
                <div>
                  <img src={AnnounceIcon} alt="Announcement" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
