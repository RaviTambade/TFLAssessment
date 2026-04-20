const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dependency Injection Setup
const db = require("./config/db");
const AdminProfileService = require("./services/adminProfileService");
const AdminProfileController = require("./controllers/adminProfileController");

const adminProfileService = new AdminProfileService(db);
const adminProfileController = new AdminProfileController(adminProfileService);

// Routes
const adminProfileRoutes = require("./routes/adminProfileRoutes")(adminProfileController);
app.use("/api", adminProfileRoutes);

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
