const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const connection = require('./Connectivity/db');
const SessionRepository = require('./Repositories/sessionRepository');
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

app.listen(3000);
console.log("Server running on port 3000");