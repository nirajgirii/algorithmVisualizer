"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { SimpleLinearRegression } from "ml-regression-simple-linear";
import "chart.js/auto";

const InventoryForecast = () => {
  const [data, setData] = useState({
    quantities: [30, 42, 51, 62, 75, 89, 105, 50, 110],
    forecast: [],
  });

  const performRegression = () => {
    const { quantities } = data;
    const x = quantities.map((_, index) => index + 1);
    const y = quantities;

    // Perform Linear Regression
    const regression = new SimpleLinearRegression(x, y);
    const forecast = x.map((val) => regression.predict(val));

    setData({
      ...data,
      forecast,
    });
  };

  // Perform the regression when component mounts
  useEffect(() => {
    performRegression();
  }, []);

  // Chart.js data configuration
  const chartData = {
    labels: data.quantities.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Actual Quantities",
        data: data.quantities,
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Forecasted Quantities",
        data: data.forecast,
        fill: false,
        backgroundColor: "rgba(153,102,255,1)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Days)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantity",
        },
      },
    },
  };

  return (
    <div>
      <h2>Inventory Quantity Forecast</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default InventoryForecast;
