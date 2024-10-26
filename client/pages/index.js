import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    try {
      const res = await axios.get(`http://localhost:5000/api/products?search=${query}`);
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary px-4">
      <h1 className="text-4xl font-bold mb-8 text-textPrimary">Product Search</h1>
      <div className="flex flex-col items-center w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full p-4 rounded-lg bg-white text-textPrimary shadow-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-highlight transition-all duration-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Display search results */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {results.length > 0 ? (
          results.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-5 text-textPrimary flex flex-col items-center transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-sm font-light text-gray-500 mt-1">{product.category}</p>
              <p className="text-sm font-light text-gray-500 mt-1">
                Available: {product.quantity} in stock
              </p>
              <button
                className="mt-4 px-4 py-2 bg-accent text-white rounded-full shadow-md hover:bg-highlight transition-all duration-200"
                onClick={() => alert(`Viewing details for ${product.name}`)}
              >
                View Details
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-textPrimary col-span-full">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
