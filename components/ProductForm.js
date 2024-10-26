import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ fetchProducts }) {
  const [product, setProduct] = useState({ name: '', description: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', product);
    fetchProducts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="description" onChange={handleChange} placeholder="Description" required />
      <input name="price" onChange={handleChange} placeholder="Price" required />
      <input name="quantity" onChange={handleChange} placeholder="Quantity" required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
