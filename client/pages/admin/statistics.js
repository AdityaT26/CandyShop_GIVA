import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

export default function Statistics() {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        const data = res.data;

        const categories = [...new Set(data.map(product => product.category))];
        const quantities = categories.map(category => {
          return data.filter(product => product.category === category).reduce((acc, curr) => acc + curr.quantity, 0);
        });

        setStatistics({
          labels: categories,
          datasets: [
            {
              data: quantities,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-md text-highlight dark:text-highlight-dark">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="p-6 bg-card-light dark:bg-card-dark rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-xl font-bold mb-4">Category Distribution</h2>
          <Pie data={statistics} />
        </motion.div>
      </div>
    </div>
  );
}
