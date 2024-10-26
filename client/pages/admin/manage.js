import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const categories = [
    'Chocolate',
    'Sweet Candy',
    'Sour Candy',
    'Caramel and Toffee',
    'Nostalgic Candies',
    'Gourmet Lollipops',
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity, 10),
      category: productCategory,
    };

    if (!newProduct.name || !newProduct.price || !newProduct.quantity || !newProduct.category) {
      alert("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem('token');

    try {
      const res = await axios.post('http://localhost:5000/api/products', newProduct, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setProducts([...products, res.data]);
      setProductName('');
      setProductPrice('');
      setProductQuantity('');
      setProductCategory('');
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response && error.response.status === 400) {
        alert("Bad Request! Please check your input data.");
      } else if (error.response && error.response.status === 401) {
        alert("Unauthorized! Please log in.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-md text-highlight dark:text-highlight-dark">
      <h1 className="text-3xl font-bold mb-4 text-center">Manage Products</h1>
      <form onSubmit={handleAddProduct} className="bg-lightBlue p-6 rounded-lg mb-8 shadow">
        <div className="mb-4">
          <label className="block text-highlight mb-2" htmlFor="productName">Product Name</label>
          <input 
            type="text" 
            id="productName" 
            className="input-style" 
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-highlight mb-2" htmlFor="productPrice">Product Price</label>
          <input 
            type="number" 
            id="productPrice" 
            className="input-style" 
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-highlight mb-2" htmlFor="productQuantity">Product Quantity</label>
          <input 
            type="number" 
            id="productQuantity" 
            className="input-style" 
            placeholder="Enter product quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-highlight mb-2" htmlFor="productCategory">Product Category</label>
          <select 
            id="productCategory" 
            className="input-style"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="candy-button">Add Product</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <motion.div 
            key={product.id} 
            className="p-4 bg-card-light dark:bg-card-dark rounded-lg shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg">Price: ${product.price}</p>
            <p className="text-lg">Category: {product.category}</p>
            <p className="text-lg">Quantity: {product.quantity}</p>
            <button className="candy-button mt-2">Delete</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
