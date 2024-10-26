
# React.JS, Node.JS and Next.JS simple website

This project has no node_modules uploaded on github as they were very large for git to store.


# CandyShop - GIVA

A candy shop web application with a fun, candy-themed design. The app allows users to browse and purchase products and includes an admin panel for product management and viewing sales statistics.


## Features

- **User**: Browse and view candy products with price and quantity information.
- **Admin**: Add, update, and delete products; view sales statistics.
- **Dark Mode**: Switch between light and dark themes for a smooth viewing experience.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Express, Node.js, PostgreSQL
- **Testing**: Jest, Supertest

## Project Structure

```plaintext
client
├── pages
│   ├── index.js           # Main page (Product listing page)
│   ├── login.js           # Login page
│   └── admin
│        ├── manage.js     # Admin product management page
│        └── statistics.js # Admin statistics page
├── components
│   ├── ProductForm.js     # Component for adding/editing products
│   ├── NavBar.js          # Navigation bar
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
    └── productRoutes.test.js  # Jest/Supertest tests for product routes
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

* Create a *.env* file in the *server* folder and add the following environment variables:

```bash
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=candyshop
JWT_SECRET=your_jwt_secret_key
```

* Database Setup - Open PostgreSQL and create a new database:

```bash
CREATE DATABASE candyshop;
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
