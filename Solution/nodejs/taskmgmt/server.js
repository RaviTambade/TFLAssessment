// import { TasksRepository } from "./repository/tasksrepo";
// import { TasksService } from "./service/tasksservice";
// import { TasksController } from "./controller/taskscontroller";
// import { TasksRoutes } from "./routes/tasksroutes";

// import{ TaskAllocationRepo } from "./repository/taskallocationrepo";
// import {TaskAllocationControllerconst} from "./controller/taskallocationcontroller";
// import {TaskAllocationRoutes} from "./routes/taskallocationroutes";
// const TasksRepository = require("./repository/tasksrepo")
// const TasksService = require("./service/tasksservice")
// const TasksController = require("./controller/tasksmastercontroller")
// // const TasksRoutes = require("./routes/tasksroutes")

const TaskAllocationRepo = require("./repository/taskallocationrepo")
const TaskAllocationControllerconst = require("./controller/taskallocationcontroller")
const TaskAllocationRoutes = require("./routes/taskallocationroutes")

const connection = require("./config/db");
const express= require("express");
const bodyParser = require("body-parser");
const { Connection } = require("mysql2");

// //Users module
// const usersRepo = require("./repository/usersrepo");
// const usersController = require("./controller/userscontroller");
// const usersRoutes = require("./routes/usersroutes");

// const usersRepoInstance = new usersRepo(connection);
// const usersControllerInstance = new usersController(usersRepoInstance);
// const usersRoutesInstance = usersRoutes(usersControllerInstance);


//Customers module
// const CustomersRepository = require("./repository/customersrepo");
// const CustomersController = require("./controller/customerscontroller");
// const CustomersRoutes = require("./routes/customersroutes");

// const customersRepo = new CustomersRepository(connection);
// const customersController = new CustomersController(customersRepo);
// const customersRoutes = CustomersRoutes(customersController);


//Tasks module

// const tasksRepo = new TasksRepository(connection);
// const tasksSvc = new TasksService(tasksRepo);
// const tasksController = new TasksController(tasksSvc);
// const taskRoutes = TasksRoutes(tasksController);
  
// const taskAllocationRepo = new TaskAllocationRepo(connection);
// const taskAllocationController = new TaskAllocationController(taskAllocationRepo);
// const taskAllocationRoutes = TaskAllocationRoutes(taskAllocationController);


// ✅ ADD THESE 3 LINES (do not remove comments above)
const taskAllocationRepo = new TaskAllocationRepo(connection);
const taskAllocationController = new TaskAllocationControllerconst(taskAllocationRepo);
const taskAllocationRoutes = TaskAllocationRoutes(taskAllocationController);

const app = express();

//Middleware configuration
app.use(bodyParser.json());
app.use(express.json());

//Route configuration
// app.use("/api/users", usersRoutesInstance);
// app.use("/api/customers", customersRoutes);
// app.use("/api/tasks",taskRoutes );
app.use("/api/taskallocation", taskAllocationRoutes);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});