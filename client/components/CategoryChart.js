import React from 'react';
import { Pie } from 'react-chartjs-2';

const CategoryChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Categories',
        data: Object.values(data),
        backgroundColor: ['#87A2FF', '#C4D7FF', '#FFD7C4', '#FFF4B5'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default CategoryChart;
