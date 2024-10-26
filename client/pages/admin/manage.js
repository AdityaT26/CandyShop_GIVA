import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      // Update product
      try {
        await axios.put(`http://localhost:5000/api/products/${editId}`, {
          name,
          price,
          quantity,
          category,
        });
        setEditMode(false);
        setEditId(null);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      // Add new product
      try {
        await axios.post('http://localhost:5000/api/products', {
          name,
          price,
          quantity,
          category,
        });
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
    fetchProducts();
    clearForm();
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setCategory(product.category);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setPrice('');
    setQuantity('');
    setCategory('');
    setEditMode(false);
    setEditId(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-md text-highlight dark:text-highlight-dark">
      <h1 className="text-3xl font-bold mb-4 text-center">Manage Products</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-4 rounded-lg bg-white text-textPrimary shadow-md"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="p-4 rounded-lg bg-white text-textPrimary shadow-md"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="p-4 rounded-lg bg-white text-textPrimary shadow-md"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-4 rounded-lg bg-white text-textPrimary shadow-md"
          >
            <option value="" disabled>Select Category</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Sweet Candy">Sweet Candy</option>
            <option value="Sour Candy">Sour Candy</option>
            <option value="Caramel and Toffee">Caramel and Toffee</option>
            <option value="Nostalgic Candies">Nostalgic Candies</option>
            <option value="Gourmet Lollipops">Gourmet Lollipops</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-highlight transition-all duration-200"
        >
          {editMode ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-5 text-textPrimary flex flex-col">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm font-light text-gray-500 mt-1">{product.category}</p>
            <p className="text-sm font-light text-gray-500 mt-1">
              Available: {product.quantity} in stock
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                className="px-4 py-2 bg-accent text-white rounded-full shadow-md hover:bg-highlight transition-all duration-200"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
