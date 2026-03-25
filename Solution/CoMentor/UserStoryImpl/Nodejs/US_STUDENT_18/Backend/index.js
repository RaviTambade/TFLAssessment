const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const Connection = require("./connectivity/db");
const StudentRepository = require("./repositories/student-repository");
const StudentService = require("./services/student-service");
const StudentController = require("./controllers/studant-controllers");
const StudentRouterFactory = require("./routers/student-router");

// ✅ FIX HERE (use new)
const repo  = new StudentRepository(Connection);
const service = new StudentService(repo);
const controller =  new StudentController(service);
const studentRouter = StudentRouterFactory(controller);

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use("/api/student", studentRouter);

app.listen(3898, () => {
  console.log("Server running on port 3898");
});