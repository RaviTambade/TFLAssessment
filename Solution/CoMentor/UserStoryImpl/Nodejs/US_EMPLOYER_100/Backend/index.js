const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// DB Connection
const Connection = require("./connectivity/db");

// ===== Company Module (User Story) =====
const CompanyRepository = require("./repositories/company-repository");
const CompanyService = require("./services/company-services");
const CompanyController = require("./controllers/company-controller");
const CompanyRouterFactory = require("./routers/company-router");

// Dependency Injection (Company)
const companyRepo = new CompanyRepository(Connection);
const companyService = new CompanyService(companyRepo);
const companyController = new CompanyController(companyService);
const companyRouter = CompanyRouterFactory(companyController);

// Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());

// Route (User Story API)
app.use("/api/company", companyRouter);

// Start server
app.listen(3898, () => {
  console.log("Server running on port 3898");
});