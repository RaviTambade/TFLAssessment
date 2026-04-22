const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");


const AuthRepository = require("./repositories/authrepository");
const ProfileRepository = require("./repositories/profilerepository");
const LoggerRepository = require("./repositories/loggerrepository");
const SessionRepository = require("./repositories/sessionrepository");
const UsersRepository = require('./repositories/userinformationrepository');
const UpdateRolesRepository = require('./repositories/updaterolesrepository');
const UserProfileRepository = require("./repositories/userProfile.repository");
const EmployerProfileRepository = require("./repositories/userProfileRepository");
const RoleRepository = require("./repositories/roleRepository");

const AuthService = require("./services/authservice");
const ProfileService = require("./services/profileservice");
const LoggerService = require("./services/loggerservices");
const SessionService = require("./services/sessionservice");
const UsersService = require('./services/userinformationservice');
const UpdateRolesService = require('./services/updaterolesservices');
const EmployerProfileService = require("./services/userProfileService");
const UserProfileService = require("./services/userProfile.service");
const RoleService = require("./services/roleservice");
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
const SessionController = require("./controllers/sessioncontroller_sai_samruddhi");
const RoleController = require("./controllers/roleController");


const LoggerRoutes = require("./routers/loggerroutes");
const SessionRoutes = require("./routers/sessionroutes");
const AuthRoutes = require("./routers/authroutes");
const userProfileRoutes = require("./routers/profileroutes");
const RoleRouterFactory = require("./routers/roleRouter");
const EmployerProfileRouter = require("./routers/userProfileRoutes");
const userProfileRouter = require("./routers/userProfile.routes");
const UpdateRolesRouter = require('./routers/updaterolesrouter');

const NotFoundHandler = require("./middlewares/notFoundHandler");
const ErrorHandler = require("./middlewares/errorHandler");


// Initialize repositories, services, and controllers for each module
const connection = require("./connectivity/db");


const authRepo = new AuthRepository(connection);  
const loginService = new userLoginService(authRepo);
const authController = new AuthenticationController(loginService);
const authRoutes = userLoginRoutes(authController);

const profileRepository=new ProfileRepository(connection);
const profileService=new ProfileService(profileRepository);
const profileController=new ProfileController(profileService);
const profileRoutes = userProfileRoutes(profileController);  

const loggerRepository=new LoggerRepository(connection);
const loggerService=new LoggerService(loggerRepository);
const loggerController=new LoggerController(loggerService);
const loggerRoutes = LoggerRoutes(loggerController);

const sessionRepo = new SessionRepository(connection);
const sessionService = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionService);
const sessionRoutes = SessionRoutes(sessionController);

const updaterolesrepo = new UpdateRolesRepository(connection);
const updaterolesservice = new UpdateRolesService(updaterolesrepo, connection);
const updaterolescontroller = new UpdateRolesController(updaterolesservice);
const updaterolesrouter = UpdateRolesRouter(updaterolescontroller);

const userProfileRepository = new UserProfileRepository(connection);
const userProfileService = new UserProfileService(userProfileRepository);
const userProfileController = new UserProfileController(userProfileService);
const router = userProfileRouter(userProfileController);

const employerRepo = new EmployerProfileRepository(connection);
const employerService = new EmployerProfileService(employerRepo);
const employerController = new EmployerProfileController(employerService);
const employerRoutes = EmployerProfileRouter(employerController);

const roleRepository = new RoleRepository(connection);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);
const roleRouter = RoleRouterFactory(roleController);

const userEditRepo = new UserProfileRepository();
const userEditService = new UserProfileService(userEditRepo);
const userEditController = new UserProfileController(userEditService); 

  
const userInformationRepo = new UsersRepository(connection);
const userInformationService = new UsersService(userInformationRepo);
const userInformationController = new UsersController(userInformationService);
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
app.use("/api/roles", roleRouter);

app.use("/api/profile/", profileRoutes);
app.use("/api/employerprofile", employerRoutes);
app.use("/api/userprofiles", router);
app.use("/api/userlog/", loggerRoutes);
app.use("/api/usersessions", sessionRoutes);

app.use(['/api', '/api/v1'], updaterolesrouter);
app.use("/api/v1/user-information", userInformationRouter);

module.exports = app;