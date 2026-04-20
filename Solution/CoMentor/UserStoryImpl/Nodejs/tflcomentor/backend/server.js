const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");

const userLoginService = require("./services/authservice");
const AuthenticationController = require("./controllers/authcontroller_sanika_yash");
const userLoginRoutes = require("./routers/authroutes");
const userLoginRepository = require("./repository/authrepository");
const Connection = require("./connectivity/db");


const ProfileRepository = require("./repository/profilerepository");
const ProfileService = require("./services/profileservice");
const ProfileController = require("./controllers/profilecontroller_sanika");
const userProfileRoutes = require("./routers/profileroutes");

const UserLogRepository = require("./repository/userlogrepository");
const UserLogService = require("./services/userlogservice");
const UserLogController = require("./controllers/userlogcontroller_sanika");
const UserLogRoutes = require("./routers/userlogroutes");





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

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/authentication/", authRoutes);
app.use("/api/profile/", profileRoutes);
app.use("/api/userlog/", userLogRoutes);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT,()=>{console.log(`server listening on port ${PORT}`)});
}

module.exports = app;
