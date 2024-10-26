import React from 'react';
import { Bar } from 'react-chartjs-2';

const PriceChart = ({ data }) => {
  const chartData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        label: 'Price Distribution',
        data: [data.low, data.medium, data.high],
        backgroundColor: ['#87A2FF', '#C4D7FF', '#FFD7C4'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default PriceChart;
