const express = require("express");
const cors = require("cors");

// ================= DB =================
require("./connectivity/db"); // just initialize

// ================= USER MODULE =================
const UserProfileRepository = require("./repositories/userProfileRepository");
const UserProfileService = require("./services/userProfileService");
const UserProfileController = require("./controllers/userProfileController");
const userRouterFactory = require("./routers/userProfileRoutes");

// ✅ Dependency Injection (Correct Way)
const userRepo = new UserProfileRepository();
const userService = new UserProfileService(userRepo);
const userController = new UserProfileController(userService);

// ================= EXPRESS APP =================
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/profile", userRouterFactory(userController));

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = 3898;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});