const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');



const Connection = require('./connectivity/db');
const RolesRepository = require('./repositories/roles-repository');
const RolesService = require('./services/roles-services');
const RolesController = require('./controllers/roles-controller');
const RolesRouterFactory = require('./routers/roles-router');


// Dependency injection setup

const repo = new RolesRepository(Connection);
const service = new RolesService(repo);
const controller = new RolesController(service);
const rolesRouter = RolesRouterFactory(controller);

// Express app setup
var app = express();

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

app.use("/api/roles", rolesRouter);

app.listen(3898);
console.log("Server is running on port 3898");