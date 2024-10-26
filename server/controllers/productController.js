const pool = require('../config/db'); // Ensure this path is correct

// Get products with optional search functionality
exports.getProducts = async (req, res) => {
  console.log("Getting products");
  const { search } = req.query;
  let query = 'SELECT * FROM products';
  const params = [];

  if (search) {
    query += ' WHERE name ILIKE $1';
    params.push(`%${search}%`);
  }

  try {
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server error');
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, price, quantity, category } = req.body;

  // Validate the input data
  if (!name || !price || !quantity || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO products (name, price, quantity, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, quantity, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Server error');
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, category } = req.body;

  // Validate the input data
  if (!name || !price || !quantity || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, quantity = $3, category = $4 WHERE id = $5 RETURNING *',
      [name, price, quantity, category, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Product not found');
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Server error');
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).send('Product not found');
    }

    res.send('Product deleted');
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Server error');
  }
};

// Get statistics for products
exports.getStatistics = async (req, res) => {
  res.status(200).json({
    categories: { "Candy": 5, "Chocolate": 3 },
    priceDistribution: { low: 2, medium: 4, high: 2 },
    stockDistribution: { lowStock: 1, mediumStock: 4, highStock: 5 },
  });
};

module.exports = { 
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getStatistics,
};
