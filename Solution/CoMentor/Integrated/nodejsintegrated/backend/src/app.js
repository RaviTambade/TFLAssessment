const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");


const AuthRepository = require("./repositories/auth");
const UsersRepository = require('./repositories/users');

const LoggerRepository = require("./repositories/logger");
const SessionRepository = require("./repositories/session");

const RoleRepository = require("./repositories/role");
const UpdateRolesRepository = require('./repositories/updaterole');

const ProfileRepository = require("./repositories/profile")
const UserProfileRepository = require("./repositories/userProfile");
const EmployerProfileRepository = require("./repositories/userProfile");


const AuthService = require("./services/authservice");
const ProfileService = require("./services/profileservice");
const LoggerService = require("./services/loggerservices");
const SessionService = require("./services/sessionservice");
const UsersService = require('./services/userinformationservice');
const RoleService = require("./services/role");
const UpdateRolesService = require('./services/updaterolesservices');
const EmployerProfileService = require("./services/userProfileService");
const UserProfileService = require("./services/userProfile.service");

const AdminProfileService = require("./services/adminProfileService");
const UpdateRolesController = require('./controllers/updaterolescontroller');
const UsersController = require('./controllers/userinformationcontroller');
const UsersRouterFactory = require('./routers/userinformationroutes');
const AdminProfileController = require("./controllers/adminProfileController");
const UserProfileController = require("./controllers/userProfile.controller");
const EmployerProfileController = require("./controllers/userProfileControllers")
const AuthController = require("./controllers/authcontroller_sanika_yash");
const ProfileController = require("./controllers/profilecontroller_sanika");
const LoggerController = require("./controllers/loggercontroller");
const SessionController = require("./controllers/sessioncontroller_sai_samruddhi");*/

const RoleController = require("./controllers/role");


const LoggerRoutes = require("./routers/loggerroutes");
const SessionRoutes = require("./routers/sessionroutes");
const AuthRoutes = require("./routers/authroutes");
const userProfileRoutes = require("./routers/profileroutes");
const RoleRouterFactory = require("./routers/role");
const EmployerProfileRouter = require("./routers/userProfileRoutes");
const userProfileRouter = require("./routers/userProfile.routes");
const UpdateRolesRouter = require('./routers/updaterolesrouter');

const NotFoundHandler = require("./middlewares/notFoundHandler");
const ErrorHandler = require("./middlewares/errorHandler");


// Initialize repositories, services, and controllers for each module
const connection = require("./connectivity/db");


const authRepo = new AuthRepository(connection);  
const loginsvc = new userLoginService(authRepo);
const authcontroller = new AuthenticationController(loginService);
const authRoutes = userLoginRoutes(authController);

const profileRepo=new ProfileRepository(connection);
const profileSvc=new ProfileService(profileRepo);
const profileController=new ProfileController(profileSvc);
const profileRoutes = userProfileRoutes(profileController);  

const loggerRepo=new LoggerRepository(connection);
const loggerSvc=new LoggerService(loggerRepo);
const loggerController=new LoggerController(loggerSvc);
const loggerRoutes = LoggerRoutes(loggerController);

const sessionRepo = new SessionRepository(connection);
const sessionSvc = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionSvc);
const sessionRoutes = SessionRoutes(sessionController);

const updaterolesRepo = new UpdateRolesRepository(connection);
const updaterolesSvc = new UpdateRolesService(updaterolesRepo, connection);
const updaterolesController = new UpdateRolesController(updaterolesSvc);
const updaterolesRouter = UpdateRolesRouter(updaterolesController);

const userProfileRepo = new UserProfileRepository(connection);
const userProfileSvc = new UserProfileService(userProfileRepo);
const userProfileController = new UserProfileController(userProfileSvc);
const router = userProfileRouter(userProfileController);

const employerRepo = new EmployerProfileRepository(connection);
const employerSvc = new EmployerProfileService(employerRepo);
const employerController = new EmployerProfileController(employerSvc);
const employerRoutes = EmployerProfileRouter(employerController);

const roleRepo = new RoleRepository(connection);
const roleSvc = new RoleService(roleRepo);
const roleController = new RoleController(roleSvc);
const roleRouter = RoleRouterFactory(roleController);

const userEditRepo = new UserProfileRepository();
const userEditSvc = new UserProfileService(userEditRepo);
const userEditController = new UserProfileController(userEditSvc); 

  
const userInformationRepo = new UsersRepository(connection);
const userInformationSvc = new UsersService(userInformationRepo);
const userInformationController = new UsersController(userInformationSvc);
const userInformationRouter = UsersRouterFactory(userInformationController);

const app = express();

// Middleware configuration for logging, CORS, and JSON parsing

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});


app.use(NotFoundHandler);
app.use(ErrorHandler);
app.use("/api/auth/", authRoutes);
app.use("/api/roles", role)



app.use("/api/profile/", profileRoutes);
app.use("/api/employerprofile", employerRoutes);
app.use("/api/userprofiles", router);
app.use("/api/userlog/", loggerRoutes);
app.use("/api/usersessions", sessionRoutes);

app.use(['/api', '/api/v1'], updaterolesrouter);
app.use("/api/v1/user-information", userInformationRouter);

module.exports = app;
