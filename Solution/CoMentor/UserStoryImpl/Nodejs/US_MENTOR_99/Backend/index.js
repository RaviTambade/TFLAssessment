
// create server .js

const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');



const Connection = require('./connectivity/db');

const UserRepository = require('./repositories/updateUserProfile');
const UserService = require('./services/updateUserProfileService');
const UserController = require('./controllers/updateUserprofile');
const UserRouterFactory = require('./routers/user.router');


const userRepo = new UserRepository(Connection);
const userService = new UserService(userRepo);
const userController = new UserController(userService);
const userRouter = UserRouterFactory(userController);

// Express app setup
var app = express();

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

app.use('/api/v1/users', userRouter);

app.listen(3898);
console.log('Server is running on port 3898');