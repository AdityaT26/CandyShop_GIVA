// authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user; // Attach user info to request
    next();
  });
}

function authorizeAdmin(req, res, next) {
  if (req.user.role !== 'admin') return res.sendStatus(403); // Forbidden
  next();
}

module.exports = { authenticateToken, authorizeAdmin };
