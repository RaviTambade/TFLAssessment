const cors = require('cors');

/**
 * CORS Middleware configuration
 * Allows requests from the frontend origin
 */
const corsMiddleware = cors({
  origin: 'http://localhost:8081', // Allow your React app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
});

module.exports = corsMiddleware;
