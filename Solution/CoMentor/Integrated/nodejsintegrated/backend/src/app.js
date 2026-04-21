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

// Arnav Chaitrali
const UsersRepository = require('./repositories/userrepository');
const UsersService = require('./services/userservice');
const UsersController = require('./controllers/usercontroller');
const UsersRouterFactory = require('./routers/userrouter');

const UserProfileRepository = require("./repositories/userrepository");
const UserProfileService = require("./services/userservice");
const UserProfileController = require("./controllers/usercontroller");
const userProfileRouter = require("./routers/userrouter");

const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

//Ajay Kale
const EmployerProfileRepository = require("./repositories/userProfileRepository");
const EmployerProfileService = require("./services/userProfileService");
const EmployerProfileController = require("./controllers/userProfileControllers");
const EmployerProfileRouter = require("./routers/userProfileRoutes");


// Sanika
const RolesRepository = require("./repositories/rolesRepository");
const RolesService = require("./services/rolesservice");
const RolesController = require("./controllers/rolesController");
const RolesRouterFactory = require("./routers/rolesRouter");



//Nitish Kharat

//Rahul Gayke
const UserEditProfileRepository = require("./repositories/userProfileRepository");
const UserEditProfileService = require("./services/userProfileService");
const UserEditProfileController = require("./controllers/userProfileController");
const userEditRouterFactory = require("./routers/userProfileRoutes");



//SACHIN KHARAT 
const AdminProfileService = require("./services/adminProfileService");
const AdminProfileController = require("./controllers/adminProfileController");

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

// Arnav - Dependency Injection
const userRepo = new UsersRepository(Connection);
const service = new UsersService(userRepo);
const controller = new UsersController(service);
const userRouter = UsersRouterFactory(controller);

//Ajay Kale  - Dependency Injection
const employerRepo = new EmployerProfileRepository(Connection);
const employerService = new EmployerProfileService(employerRepo);
const employerController = new EmployerProfileController(employerService);
const employerRoutes = EmployerProfileRouter(employerController);

//Sanika - Dependency Injection
const rolerepo = new RolesRepository(Connection);
const roleservice = new RolesService(rolerepo);
const rolecontroller = new RolesController(roleservice);
const rolesRouter = RolesRouterFactory(rolecontroller);
//Rahul 
const userEditRepo = new UserProfileRepository();
const userEditService = new UserProfileService(userRepo);
const userEditController = new UserProfileController(userService);

//SACHIN KHARAT 






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

// Arnav Chaitrali - User Routes
app.use("/api/v1/users", userRouter);

//Ajay Kale - EmployerProfile Routes
app.use("/api/employer-profile", employerRoutes);

//Sanika  - role Routes
app.use("/api/roles", rolesRouter);
//rahul - edit profile
app.use("/api/v1/profile", userRouterFactory(userController));

//SACHIN KHARAT - ADMIN ROUTES 
app.use("/api", adminProfileRoutes);


module.exports = app;
