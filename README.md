
# React.JS, Node.JS and Next.JS simple website

This project has no node_modules uploaded on github as they were very large for git to store, use npm install as instructed below.


# CandyShop - GIVA

A candy shop web application with a fun, candy-themed design. The app allows users to browse and purchase products and includes an admin panel for product management and viewing sales statistics.


## Features

- **Search**: Browse and view candy products with price and quantity information.
- **Manage**: Add, update, and delete products.
- **Statistics**: View statistics of available products.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Express, Node.js, PostgreSQL
- **Testing**: Jest, Supertest

## Project Structure

```plaintext
client
├── pages
│   ├── index.js           # Main page (Product listing page)
│   ├── _app.js            
│   ├── login.js           # Login page
│   ├── admin
│   │    ├── manage.js     # Admin product management page
│   │    └── statistics.js # Admin statistics page
│   └── api
│        ├── db.js         # Database connection file
│        └── statistics.js 
├── components
│   ├── ProductForm.js     # Component for adding/editing products
│   ├── NavBar.js          # Navigation bar
│   ├── CategoryChart.js   # Category chart for the statistics page
│   ├── PriceChart.js      # Price chart for the statistics page
│   └── StockChart.js      # Stock chart for the statistics page
├── styles
│   └── globals.css        # Global styles
└── tailwind.config.js

server
├── app.js                     # Main server file
├── config
│   └── db.js                  # Database connection file
├── routes
│   ├── productRoutes.js       # Product routes for CRUD operations
│   └── authRoutes.js          # Authentication routes
├── controllers
│   ├── productController.js   # Product controller logic
│   └── authController.js      # Authentication controller logic
├── middleware
│   └── authMiddleware.js      # JWT authentication middleware
└── tests
    └── productRoutes.test.js  # Jest/Supertest tests for product 
```

## Installing and Running

```bash
git clone https://github.com/AdityaT26/CandyShop_GIVA.git
cd CandyShop_GIVA
```

* Installing dependencies

```bash
# In the client folder
cd client
npm install

# In the server folder
cd ../server
npm install
```

You can use
```bash
--legacy-peer-deps
```
as a parameter if there is a compatibility issue with the packages.

* Create a *.env* file in the *server* and *client* folder and add the following environment variables:

```bash
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=candyshop
```
Furthermore to make sure everything works, you can update the password field in the db.js files in *client* and *server* folders

* Database Setup - Open PostgreSQL and create a new database and the products table:

```bash
CREATE DATABASE candyshop;
\c candyshop;
CREATE TABLE public.products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price DOUBLE PRECISION,
    quantity INTEGER,
    category TEXT
);
```
Set up the tables in the database by running migrations or using SQL statements if provided in any setup files.


### Running the Application
* Start the Server - Navigate to the server folder and run:

```bash
npm app.js
```
The server should start on http://localhost:5000.

* Start the Client - In a new terminal window, navigate to the client folder and run:
```bash
npm run dev
```

The client should start on http://localhost:3000

### Example data
* You can add the following example data through SQL queries:
```bash
INSERT INTO products (name, price, quantity, category) VALUES
('Chocolate Bliss', 9.99, 50, 'Chocolate'),
('Sweet Strawberry Chews', 2.50, 20, 'Sweet Candy'),
('Tangy Lemon Drops', 3.75, 35, 'Sour Candy'),
('Classic Caramel', 5.00, 40, 'Caramel and Toffee'),
('Retro Gumballs', 4.25, 25, 'Nostalgic Candies'),
('Fancy Lollipop', 6.50, 15, 'Gourmet Lollipops'),
('Milk Chocolate Squares', 10.50, 30, 'Chocolate'),
('Cherry Pops', 2.75, 20, 'Sweet Candy'),
('Sour Apple Rings', 3.25, 35, 'Sour Candy'),
('Caramel Toffee Delight', 4.75, 50, 'Caramel and Toffee'),
('Bubblegum Nostalgia', 1.99, 100, 'Nostalgic Candies'),
('Rainbow Swirl Lollipop', 7.00, 10, 'Gourmet Lollipops'),
('Dark Chocolate Bites', 12.99, 40, 'Chocolate'),
('Mango Candies', 3.00, 25, 'Sweet Candy'),
('Sour Cherry Bombs', 2.99, 45, 'Sour Candy'),
('Crunchy Toffee', 6.75, 30, 'Caramel and Toffee'),
('Old-Timey Jawbreakers', 2.50, 50, 'Nostalgic Candies'),
('Giant Lollipop', 8.25, 5, 'Gourmet Lollipops'),
('Mint Chocolate Bars', 9.00, 40, 'Chocolate'),
('Strawberry Candy Drops', 3.50, 60, 'Sweet Candy'),
('Blue Raspberry Sours', 3.25, 50, 'Sour Candy'),
('Golden Caramel Cubes', 4.50, 45, 'Caramel and Toffee'),
('Peppermint Classics', 2.00, 70, 'Nostalgic Candies'),
('Mini Lollipops', 4.00, 35, 'Gourmet Lollipops'),
('Hazelnut Chocolate', 11.99, 40, 'Chocolate'),
('Sweet Orange Chews', 3.75, 50, 'Sweet Candy'),
('Sour Lemon Zings', 2.85, 55, 'Sour Candy'),
('Soft Caramel Bites', 5.25, 45, 'Caramel and Toffee'),
('Chewy Nougat Bars', 4.99, 30, 'Nostalgic Candies'),
('Fruit-Flavored Lollipops', 5.50, 25, 'Gourmet Lollipops'),
('Dark Chocolate Almond', 13.25, 40, 'Chocolate'),
('Pineapple Rings', 3.10, 45, 'Sweet Candy'),
('Sour Grapefruit Gums', 2.75, 30, 'Sour Candy'),
('Classic Toffee Brittle', 6.99, 25, 'Caramel and Toffee'),
('Fizzy Rock Candy', 2.25, 80, 'Nostalgic Candies'),
('Large Swirl Lollipops', 7.50, 15, 'Gourmet Lollipops'),
('White Chocolate Bars', 9.99, 40, 'Chocolate'),
('Banana Candies', 2.95, 35, 'Sweet Candy'),
('Sour Patch Watermelons', 3.50, 50, 'Sour Candy'),
('Sea Salt Caramel', 6.25, 40, 'Caramel and Toffee'),
('Classic Taffy', 2.50, 65, 'Nostalgic Candies'),
('Mini Heart Lollipops', 3.75, 30, 'Gourmet Lollipops'),
('Chocolate-Covered Raisins', 8.50, 45, 'Chocolate'),
('Sweet Peach Rings', 2.75, 40, 'Sweet Candy'),
('Sour Apple Chews', 3.99, 30, 'Sour Candy'),
('Buttery Caramel Squares', 5.75, 35, 'Caramel and Toffee'),
('Sugar-Free Mints', 2.00, 75, 'Nostalgic Candies'),
('Rainbow Lollipop', 6.50, 20, 'Gourmet Lollipops'),
('Milk Chocolate Hazelnut', 10.75, 40, 'Chocolate'),
('Sweet Lime Slices', 3.00, 55, 'Sweet Candy'),
('Sour Raspberry Gummies', 2.85, 30, 'Sour Candy'),
('Salted Caramel', 6.99, 25, 'Caramel and Toffee'),
('Old-Fashioned Hard Candy', 2.50, 80, 'Nostalgic Candies'),
('Cherry Flavored Lollipop', 7.25, 15, 'Gourmet Lollipops'),
('Crunchy Chocolate Bark', 9.75, 40, 'Chocolate'),
('Sweet Grape Chews', 3.25, 35, 'Sweet Candy'),
('Sour Strawberry Fizz', 2.99, 50, 'Sour Candy'),
('Soft Caramel Fudge', 5.50, 30, 'Caramel and Toffee'),
('Assorted Jawbreakers', 3.00, 60, 'Nostalgic Candies'),
('Classic Spiral Lollipop', 8.00, 10, 'Gourmet Lollipops'),
('Chocolate-Covered Almonds', 12.25, 30, 'Chocolate'),
('Sweet Citrus Mix', 2.80, 40, 'Sweet Candy'),
('Sour Blueberry Rings', 3.50, 45, 'Sour Candy'),
('Rich Caramel Bites', 6.75, 25, 'Caramel and Toffee'),
('Retro Hard Candy', 2.30, 85, 'Nostalgic Candies'),
('Mini Star Lollipops', 4.75, 25, 'Gourmet Lollipops'),
('Orange Chocolate', 10.99, 40, 'Chocolate'),
('Sweet Melon Rings', 3.00, 50, 'Sweet Candy'),
('Sour Pineapple Bites', 3.25, 30, 'Sour Candy'),
('Butter Caramel Cubes', 6.00, 40, 'Caramel and Toffee'),
('Vintage Candy Sticks', 2.50, 65, 'Nostalgic Candies'),
('Heart-Shaped Lollipop', 7.50, 20, 'Gourmet Lollipops'),
('Crispy Chocolate Wafers', 9.25, 35, 'Chocolate'),
('Sweet Pear Drops', 3.20, 25, 'Sweet Candy'),
('Sour Cranberry Chews', 3.00, 50, 'Sour Candy'),
('Caramel Popcorn Mix', 5.99, 45, 'Caramel and Toffee'),
('Minty Hard Candy', 2.15, 70, 'Nostalgic Candies'),
('Swirled Fruit Lollipops', 4.00, 30, 'Gourmet Lollipops'),
('Chocolate Peanut Clusters', 11.50, 40, 'Chocolate'),
('Sweet Apple Gummies', 2.95, 40, 'Sweet Candy'),
('Sour Mango Bites', 3.25, 35, 'Sour Candy'),
('Caramel Corn Balls', 5.25, 50, 'Caramel and Toffee'),
('Old-Time Rock Candy', 2.35, 60, 'Nostalgic Candies'),
('Large Heart Lollipops', 8.75, 15, 'Gourmet Lollipops'),
('Chocolate-Covered Pretzels', 9.00, 30, 'Chocolate'),
('Sweet Pineapple Pops', 2.65, 50, 'Sweet Candy'),
('Sour Blackberry Rings', 3.50, 35, 'Sour Candy'),
('Classic Caramel Roll', 5.50, 45, 'Caramel and Toffee'),
('Retro Candy Canes', 2.80, 75, 'Nostalgic Candies'),
('Strawberry Swirl Lollipops', 6.50, 20, 'Gourmet Lollipops'),
('Mint Chocolate Mint', 10.25, 40, 'Chocolate'),
('Sweet Tutti Frutti', 3.20, 45, 'Sweet Candy'),
('Sour Pear Rings', 3.00, 55, 'Sour Candy'),
('Caramel Pretzels', 6.75, 30, 'Caramel and Toffee'),
('Assorted Licorice', 3.25, 65, 'Nostalgic Candies'),
('Sparkle Lollipops', 7.99, 10, 'Gourmet Lollipops');
```
