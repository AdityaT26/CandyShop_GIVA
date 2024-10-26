// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

const authorizeAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send('Access forbidden');
  next();
};

module.exports.authenticateToken = authenticateToken; // Export individually
module.exports.authorizeAdmin = authorizeAdmin;
