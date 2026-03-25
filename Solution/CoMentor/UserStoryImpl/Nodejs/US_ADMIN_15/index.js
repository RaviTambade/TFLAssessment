const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');

const Connection = require('./connectivity/db');
const UserRepository = require('./repositories/user-repository');
const UserService = require('./services/user-service');
const UserController = require('./controllers/user-controller');
const UserRouterFactory = require('./routers/user-router');

// Dependency injection setup
const repo = new UserRepository(Connection);
const service = new UserService(repo);
const controller = new UserController(service);
const userRouter = UserRouterFactory(controller);

// Express app setup
var app = express();

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

app.use("/api/users", userRouter);

app.listen(3899);
console.log("Server is running on port 3899");