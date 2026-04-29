const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");


const connection = require("./connectivity/db");

const AuthRepository = require("./repositories/authrepository");
const UserActivityRepository = require("./repositories/useractivityrepository");
const RolesRepository = require("./repositories/rolesrepository");
const UsersRepository = require("./repositories/usersrepository");



const AuthService = require("./services/authservice");
const UsersService = require("./services/usersservices");
const UserActivityService = require("./services/useractivityservice");
const RolesService = require("./services/rolesservice");



const UserActivityController = require("./controllers/useractivitycontroller")
const UsersController = require("./controllers/userscontroller");
const AuthController = require("./controllers/authcontroller");
const RolesController = require("./controllers/rolescontroller");


const AuthRoutes = require("./routers/authroutes");
const UserActivityRoutes = require("./routers/useractivityroutes");
const RolesRouter = require("./routers/rolesroutes");
const UsersRoutes = require("./routers/usersroutes");


const authRepository = new AuthRepository(connection);  
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);
const authRoutes = AuthRoutes(authController);

const usersRepository = new UsersRepository(connection);
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);
const usersRoutes = UsersRoutes(usersController);

const userActivityRepository = new UserActivityRepository(connection);
const userActivityService = new UserActivityService(userActivityRepository);
const userActivityController = new UserActivityController(userActivityService);
const userActivityRoutes = UserActivityRoutes(userActivityController);

const rolesRepository = new RolesRepository(connection);
const rolesService = new RolesService(rolesRepository);
const rolesController = new RolesController(rolesService);
const rolesRoutes = RolesRouter(rolesController);



const app = express();

// Middleware configuration for logging, CORS, and JSON parsing

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});


app.use("/api/auth/", authRoutes);
app.use("/api/roles/", rolesRoutes);
app.use("/api/useractivity/", userActivityRoutes);
app.use("/api/users", usersRoutes);


module.exports = app;
