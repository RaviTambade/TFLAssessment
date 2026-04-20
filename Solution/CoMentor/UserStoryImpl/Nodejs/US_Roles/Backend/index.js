const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');



const Connection = require('./connectivity/db');
const RolesRepository = require('./repositories/rolesRepository');
const RolesService = require('./services/rolesservice');
const RolesController = require('./controllers/rolesController');
const RolesRouterFactory = require('./routers/rolesRouter');


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