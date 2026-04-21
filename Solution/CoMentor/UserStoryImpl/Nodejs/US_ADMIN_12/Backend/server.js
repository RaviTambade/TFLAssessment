const express = require('express');
const cors = require('cors');
const bodyparser =require('body-parser');

const connection = require('./config/db');
const userRepository = require('./repositories/userRepository');
const UserService = require('./services/userService');
const userController = require('./controllers/userController');
const userRouterfactory = require('./routers/userRouter');

const repo = new userRepository(connection);
const service = new UserService(repo);
const controller = new userController(service);
const userRouter =userRouterfactory(controller);

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/api/users', userRouter);

app.listen(4001);
console.log("Server is running on port 4001");