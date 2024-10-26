const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'giva_products',
  password: '#Netgear338',
  port: 5432,
});
module.exports = pool;
