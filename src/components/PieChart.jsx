import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [121, 12, 32, 44, 44, 45],
      backgroundColor: ['#6B120A', '#856562', '#1073E6', '#7BB896', '#F7A668', '#EB5D50'],
      hoverBackgroundColor: ['#6B120A', '#856562', '#1073E6', '#7BB896', '#F7A668', '#EB5D50'],
    },
  ],
};

const PieChart = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <h2>Pie Chart Example</h2>
    <Pie data={data} style={{ width: '200px', height: '200px' }}/>
  </div>
);

export default PieChart;
