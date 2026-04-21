const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");

const userLoginService = require("./services/authservice");
const AuthenticationController = require("./controllers/authcontroller");
const userLoginRoutes = require("./routers/authroutes");
const userLoginRepository = require("./repository/authrepository");
const Connection = require("./connectivity/db");
const ProfileRepository = require("./repository/profilerepository");
const ProfileService = require("./services/profileservice");
const ProfileController = require("./controllers/profilecontroller");
const userProfileRoutes = require("./routers/profileroutes");
const UserLogRepository = require("./repository/userlogrepository");
const UserLogService = require("./services/userlogservice");
const UserLogController = require("./controllers/userlogcontroller");
const UserLogRoutes = require("./routers/userlogroutes");


var app = express();


const repo = new userLoginRepository(Connection);
const srv = new userLoginService(repo);
const authController = new AuthenticationController(srv);
const authRoutes = userLoginRoutes(authController);


const profileRepository=new ProfileRepository(Connection);
const profileService=new ProfileService(profileRepository);
const profileController=new ProfileController(profileService);
const profileRoutes = userProfileRoutes(profileController);


const userLogRepository=new UserLogRepository(Connection);
const userLogService=new UserLogService(userLogRepository);
const userLogController=new UserLogController(userLogService);
const userLogRoutes = UserLogRoutes(userLogController);

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/authentication/", authRoutes);
app.use("/api/profile/", profileRoutes);
app.use("/api/userlog/", userLogRoutes);

app.listen(4000,()=>{console.log("server listening on port 4000")});