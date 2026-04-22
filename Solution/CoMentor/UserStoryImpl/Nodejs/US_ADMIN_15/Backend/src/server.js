const express = require("express");
const cors = require("cors");

const Connection = require('./Connectivity/db');
const UsersRepository = require('./Repositories/userrepository');
const UsersService = require('./Services/userservice');
const UsersController = require('./Controllers/usercontroller');
const UsersRouterFactory = require('./Routers/userrouter');

const API_PREFIX = "/api/v1/users";

// Dependency injection setup
const repo = new UsersRepository(Connection);
const service = new UsersService(repo);
const controller = new UsersController(service);
const userRouter = UsersRouterFactory(controller);

// Express app setup
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter); // backward compatibility
app.use(API_PREFIX, userRouter);

app.listen(3899, () => {
  console.log("Server is running on port 3899");
});