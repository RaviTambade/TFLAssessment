const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connection = require('./connectivity/db');
const AuthRepository = require('./repository/authrepository');
const AuthenticationService = require('./services/authservice');
const AuthenticationController = require('./controllers/authcontroller');
const authRouteFactory = require('./routers/authroutes');

const repo = new AuthRepository(connection);
const service = new AuthenticationService(repo);
const controller = new AuthenticationController(service);
const userRouter = authRouteFactory(controller);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/authentication/', userRouter);

app.listen(4000);
console.log("Server is running on port 4000");