import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return; // Avoid empty search
    try {
      const res = await axios.get(`http://localhost:5000/api/products?search=${query}`);
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Handle pressing the Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Trigger the search
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      <h1 className="text-4xl font-bold mb-8 text-textPrimary">Product Search</h1>
      <div className="flex flex-col items-center w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full p-4 rounded-lg bg-white text-textPrimary shadow-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state
          onKeyDown={handleKeyDown} // Call handleKeyDown on key press
        />
        <button
          className="px-6 py-3 bg-accent text-textPrimary rounded-full shadow-lg hover:bg-highlight transition-all duration-200"
          onClick={handleSearch} // Trigger search on button click
        >
          Search
        </button>
      </div>

      {/* Display search results */}
      <div className="mt-8">
        {results.length > 0 ? (
          <ul className="list-disc">
            {results.map((product) => (
              <li key={product.id} className="text-textPrimary">
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-textPrimary">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
