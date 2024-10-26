const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes'); // Ensure the path is correct

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', productRoutes); // Make sure '/api' is the correct base path for your API

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
