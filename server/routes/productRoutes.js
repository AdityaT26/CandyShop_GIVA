// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware'); // Destructure here

// Define the routes
router.get('/products', productController.getProducts);
router.post('/products', authenticateToken, productController.addProduct);
router.put('/products/:id', authenticateToken, productController.updateProduct);
router.delete('/products/:id', authenticateToken, productController.deleteProduct);

module.exports = router;
