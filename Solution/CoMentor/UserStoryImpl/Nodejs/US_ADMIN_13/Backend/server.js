

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import connection
const connection = require("./config/db");

// Import layers (Repository → Service → Controller)
const UserProfileRepository = require("./Repositories/userProfileRepository");
const UserProfileService = require("./services/userProfileService");
const UserProfileController = require("./Controllers/userProfileController");
const userProfileRouter = require("./Routers/userProfileRouter");


const userProfileRepository = new UserProfileRepository(connection);

// Layer 2: Service (Business Logic) - depends on repository
const userProfileService = new UserProfileService(userProfileRepository);

// Layer 3: Controller (HTTP Handling) - depends on service
const userProfileController = new UserProfileController(userProfileService);

// Layer 4: Router (Route Definitions) - depends on controller
const router = userProfileRouter(userProfileController);

// ============================================
// EXPRESS APP SETUP
// ============================================

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/userprofile", router);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "User Profile Service - US_ADMIN_13",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    path: req.path,
    statusCode: 404,
  });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
    statusCode: 500,
  });
});

// ============================================
// SERVER STARTUP
// ============================================

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
  console.log(`Server started at ${new Date().toISOString()}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API Base: http://localhost:${PORT}/api/userprofile`);
});
