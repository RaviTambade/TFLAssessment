``

const express = require("express");
const cors = require("cors");

// Import connection
const connection = require("./config/db.config");

// Import layers (Repository → Service → Controller)
const UserProfileRepository = require("./repositories/userProfile.repository");
const UserProfileService = require("./services/userProfile.service");
const UserProfileController = require("./controllers/userProfile.controller");
const userProfileRouter = require("./routes/userProfile.routes");

const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const userProfileRepository = new UserProfileRepository(connection);
const userProfileService = new UserProfileService(userProfileRepository);
const userProfileController = new UserProfileController(userProfileService);
const router = userProfileRouter(userProfileController);

// ============================================
// EXPRESS APP SETUP
// ============================================

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ strict: false, limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
app.use("/api/v1/user-profiles", router);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "User Profile Service - US_ADMIN_13",
    timestamp: new Date().toISOString(),
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

// ============================================
// SERVER STARTUP
// ============================================

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
  console.log(`Server started at ${new Date().toISOString()}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API Base: http://localhost:${PORT}/api/v1/user-profiles`);
});
