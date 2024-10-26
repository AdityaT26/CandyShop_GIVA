const request = require('supertest');
const express = require('express');
const productRoutes = require('../routes/productRoutes');
const pool = require('../config/db');

const app = express();
app.use(express.json());
app.use('/api', productRoutes);

beforeAll(async () => {
  await pool.query('DELETE FROM products');
});

afterAll(async () => {
  await pool.end();
});

describe('Product API Endpoints', () => {
  it('should add a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'A product for testing',
        price: 19.99,
        quantity: 5
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Test Product');
  });

  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a product', async () => {
    const addRes = await request(app)
      .post('/api/products')
      .send({ name: 'Product to Update', description: 'Update test', price: 9.99, quantity: 10 });
    const productId = addRes.body.id;
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({ name: 'Updated Product', description: 'Updated description', price: 29.99, quantity: 15 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Updated Product');
  });

  it('should delete a product', async () => {
    const addRes = await request(app)
      .post('/api/products')
      .send({ name: 'Product to Delete', description: 'Delete test', price: 5.99, quantity: 3 });
    const productId = addRes.body.id;
    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Product deleted');
  });
});
