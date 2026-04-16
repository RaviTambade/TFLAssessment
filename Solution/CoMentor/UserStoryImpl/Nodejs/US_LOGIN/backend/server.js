const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");
const userLoginService = require("./services/userLoginService");
const userLoginController = require("./controllers/userLoginController");
const userLoginRoutes = require("./routers/userLoginRoutes");
const userLoginRepository = require("./repository/userLoginRepository");

var app=express();

const Connection = require("./connectivity/db");
const repo = new userLoginRepository(Connection);
const srv = new userLoginService(repo);
const controller = new userLoginController(srv);
const userLoginRouter = userLoginRoutes(controller);


app.use(cors());
app.use(bodyParser.json());

app.use("/api/authentication/", userLoginRouter);

app.listen(4000);
console.log("server listenin on port 4000");