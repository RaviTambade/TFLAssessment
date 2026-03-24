const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


// Express app setup
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

app.use("/api/admin/sessions", sessionsRouter);

app.listen(3899, () => {
  console.log("Server is running on port 3899");
});
