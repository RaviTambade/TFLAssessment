const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");

const userLoginService = require("./services/authservice");
const AuthenticationController = require("./controllers/authenticationcontroller");
const userLoginRoutes = require("./routers/authroutes");
const userLoginRepository = require("./repository/authrepository");
const Connection = require("./connectivity/db");
const ProfileRepository = require("./repository/profilerepository");
const ProfileService = require("./services/profileservice");
const ProfileController = require("./controllers/profilecontroller");
const userProfileRoutes = require("./routers/profileroutes");
var app=express();


const repo = new userLoginRepository(Connection);
const srv = new userLoginService(repo);
const authController = new AuthenticationController(srv);
const authRoutes = userLoginRoutes(authController);


const profileRepository=new ProfileRepository(Connection);
const profileService=new ProfileService(profileRepository);
const profileController=new ProfileController(profileService);
const profileRoutes = userProfileRoutes(profileController);

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/authentication/", authRoutes);
app.use("/api/profile/", profileRoutes);

app.listen(4000,()=>{console.log("server listening on port 4000")});