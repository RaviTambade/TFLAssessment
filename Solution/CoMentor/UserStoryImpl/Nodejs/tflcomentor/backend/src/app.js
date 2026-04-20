const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");

//  Sanika Yash
const userLoginService = require("./services/authservice");
const AuthenticationController = require("./controllers/authcontroller_sanika_yash");
const userLoginRoutes = require("./routers/authroutes");
const userLoginRepository = require("./repositories/authrepository");
const Connection = require("./connectivity/db");

const ProfileRepository = require("./repositories/profilerepository");
const ProfileService = require("./services/profileservice");
const ProfileController = require("./controllers/profilecontroller_sanika");
const userProfileRoutes = require("./routers/profileroutes");

const UserLogRepository = require("./repositories/userlogrepository");
const UserLogService = require("./services/userlogservice");
const UserLogController = require("./controllers/userlogcontroller_sanika");
const UserLogRoutes = require("./routers/userlogroutes");


// Sai Samruddhi
const SessionRepository = require("./repositories/sessionrepository");
const SessionService = require("./services/sessionservice");
const SessionController = require("./controllers/sessioncontroller_sai_samruddhi");
const SessionRoutes = require("./routers/sessionroutes");

//--------------------------------------  DEPENCENCY INJECTION  --------------------------------------

// Sanika Yash - Dependency Injection
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


// Sai Samruddhi - Dependency Injection
const sessionRepo = new SessionRepository(Connection);
const sessionService = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionService);
const sessionRoutes = SessionRoutes(sessionController);


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

//--------------------------------------  ROUTES  --------------------------------------


// Sanika Yash - Routes
app.use("/api/authentication/", authRoutes);
app.use("/api/profile/", profileRoutes);
app.use("/api/userlog/", userLogRoutes);

// Sai Samruddhi - Session Routes
app.use("/api/v1/sessions", sessionRoutes);

module.exports = app;
