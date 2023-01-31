import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const GameChart = (props) => {
  let data = {
    labels: ["23.01.01", "23.01.02", "23.01.03", "23.01.04", "23.01.05"],
    datasets: [
      {
        type: "line",
        label: "정확도",
        backgroundColor: props.color,
        data: props.data,
        borderColor: props.color,
        borderWidth: 2,
      },
    ],
  };

  let options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      // aspectRatio: 1000,
      // maintainAspectRatio: false,
    },
  };

  return (
    <div style={{ width: "366px", height: "165px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GameChart;
