const express = require("express");
const cors = require("cors");

const bodyparser = require('body-parser');

const rolesRouter = require("./Routers/rolesrouter");

var app = express();

app.use(cors())

app.use(bodyparser.json())

app.use("/api/roles",rolesRouter);
app.listen(3898);