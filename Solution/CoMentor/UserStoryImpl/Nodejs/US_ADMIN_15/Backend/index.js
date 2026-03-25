const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');

const Connection = require('./Connectivity/db');
const UserRepository = require('./Repositories/userrepository');
const UserService = require('./Services/userservice');
const UserController = require('./Controllers/usercontroller');
const UserRouterFactory = require('./Routers/userrouter');

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