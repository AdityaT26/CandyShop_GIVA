import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'; // Import directly from chart.js

// Register the necessary components
Chart.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const [categoryChartData, setCategoryChartData] = useState(null);
  const [priceChartData, setPriceChartData] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);

  // Hardcoded data
  useEffect(() => {
    const categories = {
      "Chocolate": 16,
      "Sour Candy": 16,
      "Caramel and Toffee": 16,
      "Gourmet Lollipops": 16,
      "Sweet Candy": 17,
      "Nostalgic Candies": 15
    };
    const categoryLabels = Object.keys(categories);
    const categoryValues = Object.values(categories);

    setCategoryChartData({
      labels: categoryLabels,
      datasets: [{
        data: categoryValues,
        backgroundColor: [
          '#FF6384', // Chocolate
          '#36A2EB', // Sour Candy
          '#FFCE56', // Caramel and Toffee
          '#4BC0C0', // Gourmet Lollipops
          '#9966FF', // Sweet Candy
          '#FF9F40', // Nostalgic Candies
        ],
      }],
    });

    setPriceChartData({
      labels: ['Low', 'Medium', 'High'],
      datasets: [{
        data: [87, 9, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }],
    });

    setStockChartData({
      labels: ['Low Stock', 'Medium Stock', 'High Stock'],
      datasets: [{
        data: [1, 78, 17],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }],
    });
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-[#C4D7FF] to-[#FFF4B5] min-h-screen">
      <h1 className="text-4xl font-bold text-[#87A2FF] mb-8">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-center text-[#87A2FF]">Category Distribution</h2>
          <div className="flex justify-center">
            {categoryChartData ? <Pie data={categoryChartData} height={200} width={200} /> : <p>Loading...</p>}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-center text-[#87A2FF]">Price Distribution</h2>
          <div className="flex justify-center">
            {priceChartData ? <Pie data={priceChartData} height={200} width={200} /> : <p>Loading...</p>}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-center text-[#87A2FF]">Stock Distribution</h2>
          <div className="flex justify-center">
            {stockChartData ? <Pie data={stockChartData} height={200} width={200} /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
