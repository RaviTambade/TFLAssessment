const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const databaseConfig = require("./config/database.config");
const SessionRepository = require("./repositories/session.repository");
const SessionService = require("./services/session.service");
const SessionController = require("./controllers/session.controller");
const sessionRoutes = require("./routes/session.routes");

const app = express();

const connection = mysql.createConnection(databaseConfig);

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }

  console.log("MySQL connected");
});

const sessionRepository = new SessionRepository(connection);
const sessionService = new SessionService(sessionRepository);
const sessionController = new SessionController(sessionService);

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.url = req.url.replace(/(?:(?:%0A)|(?:%0D)|\s)+$/gi, "");
  next();
});

app.use("/api/v1/sessions", sessionRoutes(sessionController));

module.exports = app;
