const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes'); // Ensure the path is correct
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', productRoutes); // Make sure '/api' is the correct base path for your API
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
