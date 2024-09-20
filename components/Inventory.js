"use client";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Tooltip, Legend, ArcElement, ChartDataLabels);

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState({
    items: [
      { name: "Item A", price: 30, quantity: 10 },
      { name: "Item B", price: 20, quantity: 15 },
      { name: "Item C", price: 50, quantity: 5 },
      { name: "Item D", price: 40, quantity: 7 },
      { name: "Item E", price: 40, quantity: 5 },
      { name: "Item F", price: 140, quantity: 7 },
      { name: "Item G", price: 420, quantity: 9 },
      { name: "Item H", price: 410, quantity: 100 },
      { name: "Item I", price: 140, quantity: 70 },
      { name: "Item J", price: 440, quantity: 70 },
    ],
  });

  const data = {
    labels: inventoryData.items.map((item) => item.name),
    datasets: [
      {
        data: inventoryData.items.map((item) => item.quantity),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#4BC0C0",
          "#36A2EB",
          "#FF6384",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#4BC0C0",
          "#36A2EB",
          "#FF6384",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = inventoryData.items[context.dataIndex];
            return `${item.name}: $${item.price} (Qty: ${item.quantity})`;
          },
        },
      },
      datalabels: {
        display: true,
        formatter: (value, context) => {
          return inventoryData.items[context.dataIndex].quantity;
        },
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div style={{ width: "40%", margin: "0 auto", paddingTop: "50px" }}>
      <h2>Inventory Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Inventory;
