const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");

const app=express();

const Connection=require("./connectivity/db");
const UserLogService = require("./services/userLogService");
const UserLogController=require("./controllers/userLogController");
const UserLogRouter=require("./routers/userLogRouter");
const UserLogRepository = require("./repositories/userLogRepository");

const repo=new UserLogRepository(Connection);
const srv=new UserLogService(repo);
const controller=new UserLogController(srv);
const userLogRouter=UserLogRouter(controller);


app.use(cors());
app.use(bodyparser.json());

app.use("/api/userlog",userLogRouter);

app.listen(3898);
console.log("server is listening on 3898");


