const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const connection = require('./Connectivity/db');
const SessionRepository = require('./Repositories/sessionrepository');
const SessionService = require('./Services/sessionservice');
const SessionController = require('./Controllers/Sessioncontroller');
const sessionRouterFactory = require('./Routers/sessionrouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionRepo = new SessionRepository(connection);
const sessionService = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionService);
const sessionRouter = sessionRouterFactory(sessionController);

app.use('/api/admin/logs', sessionRouter);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Try another port, for example: $env:PORT=3002; node index.js`
    );
    process.exit(1);
  }

  throw error;
});
