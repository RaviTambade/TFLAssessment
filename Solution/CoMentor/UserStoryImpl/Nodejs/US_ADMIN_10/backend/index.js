const express = require("express");
const cors = require("cors");

const createDbConnection = require("./Connectivity/db");
const SessionsRepository = require("./Repositories/sessionsrepository");
const SessionsService = require("./Services/sessionsservice");
const SessionsController = require("./Controllers/sessionscontrollers");
const SessionsRouter = require("./Routers/sessionsrouter");

const dbConfig = {
  host: "192.168.1.149",
  user: "root",
  password: "password",
  database: "tflcomentor_db",
};

function buildSessionsModule(connection) {
  // Compose the feature by wiring each layer with its dependency.
  const repository = new SessionsRepository(connection);
  const service = new SessionsService(repository);
  const controller = new SessionsController(service);

  return SessionsRouter(controller);
}

// Create infrastructure once and inject it into the feature module.
const connection = createDbConnection(dbConfig);
const sessionsRouter = buildSessionsModule(connection);

// Express app setup
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  // Some clients accidentally append encoded newlines to the URL.
  req.url = req.url.replace(/(?:(?:%0A)|(?:%0D)|\s)+$/gi, "");
  next();
});

app.use("/api/admin/sessions", sessionsRouter);

app.listen(3899, () => {
  console.log("Server is running on port 3899");
});
