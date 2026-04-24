const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");


const connection = require("./connectivity/db");

const AuthRepository = require("./repositories/authrepository");
const UserActivityRepository = require("./repositories/useractivityrepository");
const RolesRepository = require("./repositories/rolesrepository");
// const UpdateRolesRepository = require('./repositories/updaterole');


// const UserRepository = require("./repositories/users");
// const UserService = require("./services/users");
// const UserController = require("./controllers/users");
// const userRouter = require("./routers/users");


const AuthService = require("./services/authservice");
// const ProfileService = require("./services/profileservice");
const UserActivityService = require("./services/useractivityservice");
// const UsersService = require('./services/userinformationservice');
const RolesService = require("./services/rolesservice");
// const UpdateRolesService = require('./services/updaterolesservices');



// const UpdateRolesController = require('./controllers/updaterolescontroller');
const UserActivityController = require("./controllers/useractivitycontroller")
// const UsersController = require('./controllers/userinformationcontroller');
// const UsersRouterFactory = require('./routers/userinformationroutes');
// const AdminProfileController = require("./controllers/adminProfileController");
// const UserProfileController = require("./controllers/userProfile.controller");
// const EmployerProfileController = require("./controllers/userProfileControllers")
const AuthController = require("./controllers/authcontroller");
// const ProfileController = require("./controllers/profilecontroller_sanika");
const RolesController = require("./controllers/rolescontroller");


const AuthRoutes = require("./routers/authroutes");
// const userProfileRoutes = require("./routers/profileroutes");
const UserActivityRoutes = require("./routers/useractivityroutes");
const RolesRouter = require("./routers/rolesroutes");
// const EmployerProfileRouter = require("./routers/userProfileRoutes");
// const userProfileRouter = require("./routers/userProfile.routes");
// const UpdateRolesRouter = require('./routers/updaterolesrouter');

// const NotFoundHandler = require("./middlewares/notFoundHandler");
// const ErrorHandler = require("./middlewares/errorHandler"); 



// Initialize repositories, services, and controllers for each module

const authRepository = new AuthRepository(connection);  
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);
const authRoutes = AuthRoutes(authController);

// const userRepo = new UserRepository(connection);
// const userSvc = new UserService(userRepo);
// const userController = new UserController(userSvc);
// const userRoutes = userRouter(userController);


const userActivityRepository = new UserActivityRepository(connection);
const userActivityService = new UserActivityService(userActivityRepository);
const userActivityController = new UserActivityController(userActivityService);
const userActivityRoutes = UserActivityRoutes(userActivityController);

// const sessionRepo = new SessionRepository(connection);
// const sessionSvc = new SessionService(sessionRepo);
// const sessionController = new SessionController(sessionSvc);
// const sessionRoutes = SessionRoutes(sessionController);

// const updaterolesRepo = new UpdateRolesRepository(connection);
// const updaterolesSvc = new UpdateRolesService(updaterolesRepo, connection);
// const updaterolesController = new UpdateRolesController(updaterolesSvc);
// const updaterolesRouter = UpdateRolesRouter(updaterolesController);




const rolesRepository = new RolesRepository(connection);
const rolesService = new RolesService(rolesRepository);
const rolesController = new RolesController(rolesService);
const rolesRoutes = RolesRouter(rolesController);

// const userEditRepo = new UserProfileRepository();
// const userEditSvc = new UserProfileService(userEditRepo);
// const userEditController = new UserProfileController(userEditSvc); 







const app = express();

// Middleware configuration for logging, CORS, and JSON parsing

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});


// app.use(NotFoundHandler);
// app.use(ErrorHandler);
app.use("/api/auth/", authRoutes);
app.use("/api/roles/", rolesRoutes);
app.use("/api/useractivity/", userActivityRoutes);
// app.use("/api/usersessions", sessionRoutes);

// app.use("/api/users", userRoutes);

// app.use(['/api', '/api/v1'], updaterolesrouter);

module.exports = app;
