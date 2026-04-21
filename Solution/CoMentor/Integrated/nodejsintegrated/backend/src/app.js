const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");
const connection = require("./connectivity/db");

//  Sanika Yash
const AuthService = require("./services/authservice");
const AuthController = require("./controllers/authcontroller_sanika_yash");
const AuthRoutes = require("./routers/authroutes");
const AuthRepository = require("./repositories/authrepository");
const Connection = require("./connectivity/db");

const ProfileRepository = require("./repositories/profilerepository");
const ProfileService = require("./services/profileservice");
const ProfileController = require("./controllers/profilecontroller_sanika");
const userProfileRoutes = require("./routers/profileroutes");

const LoggerRepository = require("./repositories/loggerrepository");
const LoggerService = require("./services/loggerservices");
const LoggerController = require("./controllers/loggercontroller");
const LoggerRoutes = require("./routers/loggerroutes");


//  Sai Samruddhi nantar kadhun tak
const SessionRepository = require("./repositories/sessionrepository");
const SessionService = require("./services/sessionservice");
const SessionController = require("./controllers/sessioncontroller_sai_samruddhi");
const SessionRoutes = require("./routers/sessionroutes");

// Arnav 
const UsersRepository = require('./repositories/userrepository');
const UsersService = require('./services/userservice');
const UsersController = require('./controllers/usercontroller');
const UsersRouterFactory = require('./routers/userrouter');


//Tejas Naukudkar
const UpdateRolesRepository = require('./repositories/updaterolesrepository');
const UpdateRolesService = require('./services/updaterolesservices');
const UpdateRolesController = require('./controllers/updaterolescontroller');
const UpdateRolesRouter = require('./routers/updaterolesrouter');

//Chaitrali
const UserProfileRepository = require("./repositories/userProfile.repository");
const UserProfileService = require("./services/userProfile.service");
const UserProfileController = require("./controllers/userProfile.controller");
const userProfileRouter = require("./routers/userProfile.routes");

const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

//Ajay Kale
const EmployerProfileRepository = require("./repositories/userProfileRepository");
const EmployerProfileService = require("./services/userProfileService");
const EmployerProfileController = require("./controllers/userProfileControllers");
const EmployerProfileRouter = require("./routers/userProfileRoutes");


// Sanika
const RoleRepository = require("./repositories/roleRepository");
const RoleService = require("./services/roleservice");
const RoleController = require("./controllers/roleController");
const RoleRouterFactory = require("./routers/roleRouter");



//Nitish Kharat

//Rahul Gayke
const UserEditProfileRepository = require("./repositories/userProfileRepository");
const UserEditProfileService = require("./services/userProfileService");
const UserEditProfileController = require("./controllers/userProfileController");
const userEditRouterFactory = require("./routers/userProfileRoutes");



//SACHIN KHARAT 
const AdminProfileService = require("./services/adminProfileService");
const AdminProfileController = require("./controllers/adminProfileController");


// USER INFORMATION MODULE
const UserProfileRepository = require("./repositories/userinformationrepository");
const UserProfileService = require("./services/userinformationservice");
const UserProfileController = require("./controllers/userinformationcontroller");
const userProfileRouter = require("./routers/userinformationroutes");

//--------------------------------------  DEPENCENCY INJECTION  --------------------------------------


const repo = new userLoginRepository(Connection);
const srv = new userLoginService(repo);
const authController = new AuthenticationController(srv);
const authRoutes = userLoginRoutes(authController);

const profileRepository=new ProfileRepository(Connection);
const profileService=new ProfileService(profileRepository);
const profileController=new ProfileController(profileService);
const profileRoutes = userProfileRoutes(profileController);  

const loggerRepository=new LoggerRepository(Connection);
const loggerService=new LoggerService(loggerRepository);
const loggerController=new LoggerController(loggerService);
const loggerRoutes = LoggerRoutes(loggerController);



// Sai Samruddhi - Dependency Injection he pn kadhun tak
const sessionRepo = new SessionRepository(Connection);
const sessionService = new SessionService(sessionRepo);
const sessionController = new SessionController(sessionService);
const sessionRoutes = SessionRoutes(sessionController);

// Arnav - Dependency Injection
const userRepo = new UsersRepository(Connection);
const service = new UsersService(userRepo);
const controller = new UsersController(service);
const userRouter = UsersRouterFactory(controller);

// Tejas Naukudkar - Dependency injection 
const updaterolesrepo = new UpdateRolesRepository(Connection);
const updaterolesservice = new UpdateRolesService(updaterolesrepo, Connection);
const updaterolescontroller = new UpdateRolesController(updaterolesservice);
const updaterolesrouter = UpdateRolesRouter(updaterolescontroller);

//Chaitrali - Dependency Injection
const userProfileRepository = new UserProfileRepository(connection);
const userProfileService = new UserProfileService(userProfileRepository);
const userProfileController = new UserProfileController(userProfileService);
const router = userProfileRouter(userProfileController);


//Ajay Kale  - Dependency Injection
const employerRepo = new EmployerProfileRepository(Connection);
const employerService = new EmployerProfileService(employerRepo);
const employerController = new EmployerProfileController(employerService);
const employerRoutes = EmployerProfileRouter(employerController);

//Sanika - Dependency Injection
const roleRepository = new RoleRepository(Connection);
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);
const roleRouter = RoleRouterFactory(roleController);
//Rahul 
const userEditRepo = new UserProfileRepository();
const userEditService = new UserProfileService(userRepo);
const userEditController = new UserProfileController(userService); 

//NEW - USER INFORMATION MODULE Dependency Injection ARNAV
const userInformationRepo = new UserProfileRepository(connection);
const userInformationService = new UserProfileService(userInformationRepo);
const userInformationController = new UserProfileController(userInformationService);
const userInformationRouter = userProfileRouter(userInformationController);


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
app.use("/api/userlog/", loggerRoutes);

// Sai Samruddhi - Session Routes he pn kadhun tak 
app.use("/api/v1/sessions", sessionRoutes);

// Arnav  - User Routes
app.use("/api/v1/users", userRouter);

//Chaitrali - User Profile Routes
app.use("/api/v1/user-profiles", router);

//Ajay Kale - EmployerProfile Routes
app.use("/api/employer-profile", employerRoutes);

//Sanika  - role Routes
app.use("/api/roles", roleRouter);
//rahul - edit profile
app.use("/api/v1/profile", userRouterFactory(userController));

//Tejas Naukudkar - Update Roles Routes
app.use(['/api', '/api/v1'], updaterolesrouter);

// Error handling middleware  (User Profile handlers)
app.use(notFoundHandler);
app.use(errorHandler);

//NEW - USER INFORMATION MODULE Routes
app.use("/api/v1/user-information", userInformationRouter);


module.exports = app;
