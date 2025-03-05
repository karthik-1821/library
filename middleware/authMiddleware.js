const jwt = require('jsonwebtoken');

const authMiddleware = (roles) => {
  return (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
};

module.exports = authMiddleware;