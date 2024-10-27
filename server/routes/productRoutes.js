const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 

// Define the routes without authentication
router.get('/products', productController.getProducts);
router.post('/products', productController.addProduct); // Allow adding products without authentication
router.put('/products/:id', productController.updateProduct); // Allow updating products without authentication
router.delete('/products/:id', productController.deleteProduct); // Allow deleting products without authentication

module.exports = router;
