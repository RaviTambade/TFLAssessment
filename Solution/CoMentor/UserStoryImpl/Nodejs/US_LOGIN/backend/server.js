const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");

const userLoginService = require("./services/authservice");
const AuthenticationController = require("./controllers/authenticationcontroller");
const userLoginRoutes = require("./routers/authroutes");
const userLoginRepository = require("./repository/authrepository");
const Connection = require("./connectivity/db");
var app=express();


const repo = new userLoginRepository(Connection);
const srv = new userLoginService(repo);
const authController = new AuthenticationController(srv);
const authRoutes = userLoginRoutes(authController);


//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/authentication/", authRoutes);

app.listen(4000,()=>{console.log("server listening on port 4000")});