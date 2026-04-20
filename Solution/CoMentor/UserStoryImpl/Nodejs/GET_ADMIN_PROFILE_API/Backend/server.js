const express = require("express");
const cors = require("cors");

const app = express();

// ============================================
// MIDDLEWARE SETUP
// ============================================
app.use(cors());

// Only parse JSON for requests with JSON content-type and non-GET methods.
app.use((req, res, next) => {
  if (req.method === "GET" || req.method === "HEAD") {
    return next();
  }

  if (req.is("application/json")) {
    express.json()(req, res, next);
  } else {
    next();
  }
});

app.use(express.urlencoded({ extended: true }));

// ============================================
// DEPENDENCY INJECTION & INITIALIZATION
// ============================================
const db = require("./config/db");
const AdminProfileRepository = require("./repository/adminProfileRepository");
const AdminProfileService = require("./services/adminProfileService");
const AdminProfileController = require("./controllers/adminProfileController");

// Layer-by-layer instantiation
const adminProfileRepository = new AdminProfileRepository(db);
const adminProfileService = new AdminProfileService(adminProfileRepository);
const adminProfileController = new AdminProfileController(adminProfileService);

// ============================================
// ROUTE SETUP (Versioned API)
// ============================================
const adminProfileRoutes = require("./routes/adminProfileRoutes")(adminProfileController);
app.use("/api/v1", adminProfileRoutes);

// ============================================
// GLOBAL ERROR HANDLING
// ============================================

// 404 handler
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.originalUrl,
    statusCode: 404,
  });
});

// Centralized error handler middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// ============================================
// SERVER STARTUP
// ============================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Admin Profile Service running on http://localhost:${PORT}`);
  console.log(`📍 API Base: http://localhost:${PORT}/api/v1`);
  console.log(`👤 Get Admin Profile: GET /api/v1/admin-profiles/:id\n`);
});
