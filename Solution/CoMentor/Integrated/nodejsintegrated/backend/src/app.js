const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");


const AuthRepository = require("./repositories/auth");
const LoggerRepository = require("./repositories/logger");
const RoleRepository = require("./repositories/role");
const UpdateRolesRepository = require('./repositories/updaterole');


const UserRepository = require("./repositories/users");
const UserService = require("./services/users");
const UserController = require("./controllers/users");
const userRouter = require("./routers/users");


const AuthService = require("./services/auth");
const ProfileService = require("./services/profileservice");
const LoggerService = require("./services/logger");
const UsersService = require('./services/userinformationservice');
const RoleService = require("./services/role");
const UpdateRolesService = require('./services/updaterolesservices');



const UpdateRolesController = require('./controllers/updaterolescontroller');
const LoggerController = require("./controllers/logger")
const UsersController = require('./controllers/userinformationcontroller');
const UsersRouterFactory = require('./routers/userinformationroutes');
const AdminProfileController = require("./controllers/adminProfileController");
const UserProfileController = require("./controllers/userProfile.controller");
const EmployerProfileController = require("./controllers/userProfileControllers")
const AuthController = require("./controllers/auth");
const ProfileController = require("./controllers/profilecontroller_sanika");
const RoleController = require("./controllers/roleController");


const AuthRoutes = require("./routers/auth");
const userProfileRoutes = require("./routers/profileroutes");
const LoggerRoutes = require("./routers/logger");
const RoleRouter = require("./routers/role");
const EmployerProfileRouter = require("./routers/userProfileRoutes");
const userProfileRouter = require("./routers/userProfile.routes");
const UpdateRolesRouter = require('./routers/updaterolesrouter');

const NotFoundHandler = require("./middlewares/notFoundHandler");
const ErrorHandler = require("./middlewares/errorHandler"); 


// Initialize repositories, services, and controllers for each module
const connection = require("./connectivity/db");

const authRepo = new AuthRepository(connection);  
const authSvc = new AuthService(authRepo);
const authController = new AuthController(authSvc);
const authRoutes = AuthRoutes(authController);

const userRepo = new UserRepository(connection);
const userSvc = new UserService(userRepo);
const userController = new UserController(userSvc);
const userRoutes = userRouter(userController);


const loggerRepo=new LoggerRepository(connection);
const loggerSvc=new LoggerService(loggerRepo);
const loggerController=new LoggerController(loggerSvc);
const loggerRoutes =  LoggerRoutes(loggerController);

const sessionRepo = new SessionRepository(connection);
const sessionSvc = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionSvc);
const sessionRoutes = SessionRoutes(sessionController);

const updaterolesRepo = new UpdateRolesRepository(connection);
const updaterolesSvc = new UpdateRolesService(updaterolesRepo, connection);
const updaterolesController = new UpdateRolesController(updaterolesSvc);
const updaterolesRouter = UpdateRolesRouter(updaterolesController);




const roleRepo = new RoleRepository(connection);
const roleSvc = new RoleService(roleRepo);
const roleController = new RoleController(roleSvc);
const roleRouter = RoleRouter(roleController);

const userEditRepo = new UserProfileRepository();
const userEditSvc = new UserProfileService(userEditRepo);
const userEditController = new UserProfileController(userEditSvc); 







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
app.use("/api/userlog/", loggerRoutes);
app.use("/api/usersessions", sessionRoutes);

app.use("/api/users", userRoutes);

app.use(['/api', '/api/v1'], updaterolesrouter);

module.exports = app;
