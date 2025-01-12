import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering the necessary chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ expenses }) => {
  // Calculate the total amount per category
  const categories = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare the chart data
  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12, // Adjust legend font size
          },
        },
      },
    },
  };

  // Cleanup logic on component unmount
  useEffect(() => {
    return () => {
      if (window.Chart) {
        Object.values(window.Chart.instances).forEach((chart) => chart.destroy());
      }
    };
  }, []);

  // Align styles with ExpenseList
  const chartContainerStyle = {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(238, 16, 16, 0.94)",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  };

  return (
    <div style={chartContainerStyle} className="category-pie-chart">
      <h2 style={{ marginBottom: "1px" }}>Statistics</h2>
      <hr style={{ width: "100%", marginBottom: "20px" }} />
      <div
        style={{
          width: "300px", // Adjust width for consistency
          height: "300px",
        }}
      >
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryPieChart;
