import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import DownloadBtn from "../../components/downloadBtn/DownloadBtn";
import PieChart from "../../components/PieChart";
import "./analytics.css";

const Analytics = () => {
  const [list, setList] = useState([]);
  const [dataCount, setDataCount] = useState(10);

  useEffect(() => {
    const fetchLatestDocuments = async () => {
      try {
        const response = await fetch("/data/analytics.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setList(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching latest documents", error);
      }
    };

    fetchLatestDocuments();
  }, []);

  const milestoneData = {
    labels: [
      "BOOKED (19)",
      "DISCHARGED (29)",
      "ARRIVED (22)",
      "DELIVERED (393)",
      "RETURNED (149)",
    ],
    datasets: [
      {
        data: [19, 29, 22, 393, 149],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
        ],
      },
    ],
  };

  const timelineData = {
    labels: ["ON TIME (681)", "LATE (1)"],
    datasets: [
      {
        data: [681, 1],
        backgroundColor: ["#7BB896", "#F7A668"],
      },
    ],
  };

  return (
    <>
      <div className="page__wrapper">
        <div className="column_1">
          <Sidebar />
        </div>
        <div className="column_2">
          <Header pageTitle="Analytics" />
          <div className="row_1_analytics">
            <button className="active">
              <i className="fa-solid fa-ship"></i> Sea
            </button>
            <button>
              <i className="fa-solid fa-plane"></i> Air
            </button>
            <button>
              <i className="fa-solid fa-truck-fast"></i> Land
            </button>
          </div>
          <div className="row_2_analytics">
            <button>Shipments</button>
            <button>Containers</button>
          </div>
          <div className="row_3_analytics">
            <form>
              <span>
                <label htmlFor="type">Type</label>
                <select name="type">
                  <option value="0" selected disabled>
                    Select
                  </option>
                  <option value="1">Type 1</option>
                  <option value="2">Type 2</option>
                </select>
              </span>
              <span>
                <label htmlFor="date">Date</label>
                <select name="date">
                  <option value="0" selected disabled>
                    Select
                  </option>
                  <option value="1">Date 1</option>
                  <option value="2">Date 2</option>
                </select>
              </span>
              <span>
                <label htmlFor="period">Period</label>
                <select name="period">
                  <option value="0" selected disabled>
                    Select
                  </option>
                  <option value="1">Period 1</option>
                  <option value="2">Period 2</option>
                </select>
              </span>
              <span>
                <button type="reset">Cancel</button>
                <button type="submit">Go</button>
              </span>
            </form>
          </div>
          <div className="row_4_analytics">
            <div className="inner_col_1_analytics">
              <h4>Milestones</h4>
              <PieChart
                labels={milestoneData.labels}
                data={milestoneData.datasets[0].data}
                backgroundColor={milestoneData.datasets[0].backgroundColor}
                position={"right"}
              />
            </div>
            <div className="inner_col_2_analytics">
              <h4>Timelines</h4>
              <PieChart
                labels={timelineData.labels}
                data={timelineData.datasets[0].data}
                backgroundColor={timelineData.datasets[0].backgroundColor}
                position={"right"}
              />
            </div>
          </div>
          <div className="row_5_analytics">
            <div>
              <h4>Loading</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <h4>Discharge</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <h4>Delivery</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <h4>Shipper</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <h4>Consignee</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <h4>Carrier</h4>
              <section className="dataList">
                <ul>
                  <li>
                    <span>NHAVA SHEVA, INDIA</span>
                    <span>378</span>
                  </li>
                  <li>
                    <span>HONG KONG, HONG KONG</span>
                    <span>70</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>YANTIAN, CHINA</span>
                    <span>48</span>
                  </li>
                  <li>
                    <span>DALIAN, CHINA</span>
                    <span>29</span>
                  </li>
                  <li>
                    <span>SHANGHAI, 31, CHINA</span>
                    <span>26</span>
                  </li>
                  <li>
                    <span>LONDON, GATEWAY PORT, UK</span>
                    <span>26</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="row_6_analytics">
            <div className="inner_row_1_analytics">
              <DownloadBtn />
            </div>
            <div className="inner_row_2_analytics">
              <table>
                <thead>
                  <tr>
                    <th>HBL#</th>
                    <th>MBL#</th>
                    <th>PO# / REF#</th>
                    <th>Receipt</th>
                    <th>Loading</th>
                    <th>Discharge</th>
                    <th>Delivery</th>
                    <th>Booking#</th>
                    <th>Size Type</th>
                    <th>Carrier</th>
                    <th>Commodity</th>
                    <th>Milestone</th>
                    <th>Milestone Group</th>
                  </tr>
                </thead>
                <tbody>
                  {list &&
                    list.slice(0, dataCount).map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.HBL}</td>
                          <td>{item.MBL}</td>
                          <td>{item.PO}</td>
                          <td>{item.Receipt}</td>
                          <td>{item.Loading}</td>
                          <td>{item.Discharge}</td>
                          <td>{item.Delivery}</td>
                          <td>{item.Booking}</td>
                          <td>{item.SizeType}</td>
                          <td>{item.Carrier}</td>
                          <td>{item.Commodity}</td>
                          <td>{item.Milestone}</td>
                          <td>{item.MilestoneGroup}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="inner_row_3_analytics">
              <div className="data__count">
                <select
                  defaultValue={10}
                  onChange={(e) => setDataCount(e.target.value)}
                >
                  <option value={10}>10</option>
                  <option value={list.length / 2}>{list.length / 2}</option>
                  <option value={list.length}>All</option>
                </select>
                <small>
                  1 - {dataCount} of {list.length}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
