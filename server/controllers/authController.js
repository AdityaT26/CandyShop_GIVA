const pool = require('../config/db');

// Get products with optional search functionality
exports.getProducts = async (req, res) => {
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
  console.log("Received data:", req.body);
  const { name, price, quantity, category } = req.body; 
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
