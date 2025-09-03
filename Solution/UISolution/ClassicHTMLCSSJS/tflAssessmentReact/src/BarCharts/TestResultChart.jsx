// BarChart.js
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
const TestResultChart = ({ data, options }) => {
    return (
      <div className="w-full h-80 p-4 bg-white rounded-lg shadow-md">
        <Bar data={data} options={options} />
      </div>
    );
  };
export default TestResultChart;
