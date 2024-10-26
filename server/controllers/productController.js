const pool = require('../config/db');

exports.getProducts = async (req, res) => {
  const { search } = req.query; // Get the search query parameter
  let query = 'SELECT * FROM products';
  const params = [];

  // If a search query is provided, modify the SQL query
  if (search) {
    query += ' WHERE name ILIKE $1'; // Use ILIKE for case-insensitive matching
    params.push(`%${search}%`); // Wildcards for partial matching
  }

  try {
    const result = await pool.query(query, params);
    res.json(result.rows); // Send the retrieved products as a JSON response
  } catch (error) {
    console.error('Error fetching products:', error); // Log the error for debugging
    res.status(500).send('Server error');
  }
};

exports.addProduct = async (req, res) => {
  const { name, price, quantity, category } = req.body; // Remove description
  try {
    const result = await pool.query(
      'INSERT INTO products (name, price, quantity, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, quantity, category] // Remove description from the query
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding product:', error); // Log the error for debugging
    res.status(500).send('Server error');
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
      [name, description, price, quantity, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating product:', error); // Log the error for debugging
    res.status(500).send('Server error');
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.send('Product deleted');
  } catch (error) {
    console.error('Error deleting product:', error); // Log the error for debugging
    res.status(500).send('Server error');
  }
};
