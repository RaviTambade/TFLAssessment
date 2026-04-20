const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const Connection = require("./connectivity/db");
const StudentRepository = require("./repositories/studentRepository");
const StudentService = require("./services/studentService");
const StudentController = require("./controllers/studentController");
const StudentRoutes = require("./routes/studentRouter");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(__dirname));


const repo = new StudentRepository(Connection);
const service = new StudentService(repo);
const controller = new StudentController(service);
const studentRouter = StudentRoutes(controller);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/changePassword.html");
});

app.use("/api/student", studentRouter);

app.listen(3898)
  
  console.log("Server running on port 3898");
