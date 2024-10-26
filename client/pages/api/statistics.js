// pages/api/statistics.js
import pool from './db'; // Import the pool from db.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM products'); // Fetch data from your database
      const products = result.rows;

      // Prepare your statistics based on the fetched data
      const categories = {};
      const priceDistribution = { low: 0, medium: 0, high: 0 };
      const stockDistribution = { lowStock: 0, mediumStock: 0, highStock: 0 };

      products.forEach(product => {
        // Update categories
        categories[product.category] = (categories[product.category] || 0) + 1;

        // Update price distribution
        if (product.price < 10) {
          priceDistribution.low += 1;
        } else if (product.price >= 10 && product.price <= 20) {
          priceDistribution.medium += 1;
        } else {
          priceDistribution.high += 1;
        }

        // Update stock distribution
        if (product.quantity < 10) {
          stockDistribution.lowStock += 1;
        } else if (product.quantity >= 10 && product.quantity <= 50) {
          stockDistribution.mediumStock += 1;
        } else {
          stockDistribution.highStock += 1;
        }
      });

      // Send the statistics as a JSON response
      res.status(200).json({
        categories,
        priceDistribution,
        stockDistribution,
      });
    } catch (error) {
      console.error('Error fetching statistics:', error);
      res.status(500).json({ message: 'Error fetching statistics' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
