const express = require("express");
const cors = require("cors");

const testRouters = require("./router/testrouters");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/test", testRouters);

app.listen(3898, () => {
  console.log("Server is running on port 3898");
});