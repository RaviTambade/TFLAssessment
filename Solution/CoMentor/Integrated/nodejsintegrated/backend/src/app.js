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

const UsersController = require('./controllers/userinformationcontroller');
const UsersRouterFactory = require('./routers/userinformationroutes');
const UpdateRolesController = require('./controllers/updaterolescontroller');
const UserProfileController = require("./controllers/userProfile.controller");
const EmployerProfileController = require("./controllers/userProfileControllers")
const AdminProfileController = require("./controllers/adminProfileController");
const AuthController = require("./controllers/authcontroller_sanika_yash");
const ProfileController = require("./controllers/profilecontroller_sanika");
const LoggerController = require("./controllers/loggercontroller");
const LoggerRoutes = require("./routers/loggerroutes");
const SessionController = require("./controllers/sessioncontroller_sai_samruddhi");
const RoleController = require("./controllers/roleController");


const SessionRoutes = require("./routers/sessionroutes");
const AuthRoutes = require("./routers/authroutes");
const userProfileRoutes = require("./routers/profileroutes");
const RoleRouterFactory = require("./routers/roleRouter");
const EmployerProfileRouter = require("./routers/userProfileRoutes");
const userProfileRouter = require("./routers/userProfile.routes");
const UpdateRolesRouter = require('./routers/updaterolesrouter');

const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");


// Initialize repositories, services, and controllers for each module
const connection = require("./connectivity/db");


const srv = new userLoginService(repo);
const authController = new AuthenticationController(srv);
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
const userEditService = new UserProfileService(userRepo);
const userEditController = new UserProfileController(userService); 

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


app.use(notFoundHandler);
app.use(errorHandler);
app.use("/api/authentication/", authRoutes);
app.use("/api/profile/", profileRoutes);
app.use("/api/userlog/", loggerRoutes);
app.use("/api/v1/sessions", sessionRoutes);
app.use("/api/v1/user-profiles", router);
app.use("/api/employer-profile", employerRoutes);
app.use("/api/roles", roleRouter);
app.use(['/api', '/api/v1'], updaterolesrouter);
app.use("/api/v1/user-information", userInformationRouter);

module.exports = app;