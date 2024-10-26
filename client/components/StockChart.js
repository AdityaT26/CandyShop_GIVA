import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const StockChart = ({ data }) => {
  const chartData = {
    labels: ['Low Stock', 'Medium Stock', 'High Stock'],
    datasets: [
      {
        label: 'Stock Levels',
        data: [data.lowStock, data.mediumStock, data.highStock],
        backgroundColor: ['#87A2FF', '#C4D7FF', '#FFD7C4'],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default StockChart;
