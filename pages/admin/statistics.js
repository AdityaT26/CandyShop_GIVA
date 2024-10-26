// pages/statistics.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Statistics() {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    // Fetch statistics from API
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
          <p>[Pie Chart Here]</p>
        </motion.div>
        <motion.div
          className="p-6 bg-card-light dark:bg-card-dark rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-xl font-bold mb-4">Sales Statistics</h2>
          <p>[Bar Chart Here]</p>
        </motion.div>
      </div>
    </div>
  );
}
