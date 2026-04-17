const express = require("express");
const cors = require("cors");

const db = require("./config/database.config");
const SessionRepository = require("./repositories/session.repository");
const SessionService = require("./services/session.service");
const SessionController = require("./controllers/session.controller");
const sessionRoutes = require("./routes/session.routes");

const app = express();

app.use(cors());
app.use(express.json());

// DI (same as before)
const repo = new SessionRepository(db);
const service = new SessionService(repo);
const controller = new SessionController(service);

app.use("/api/v1/sessions", sessionRoutes(controller));

module.exports = app;