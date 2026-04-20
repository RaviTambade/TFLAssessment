const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./config/db");
const EmployerProfileRepository = require("./repository/employerProfileRepository");
const EmployerProfileService = require("./services/employerProfileService");
const EmployerProfileController = require("./controllers/employerProfileController");
const EmployerProfileRouter = require("./routes/employerProfileRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Dependency Injection Setup


const employerProfileService = new EmployerProfileService(db);
const employerProfileController = new EmployerProfileController(employerProfileService);

// Routes
app.use("/api", EmployerProfileRouter);

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
