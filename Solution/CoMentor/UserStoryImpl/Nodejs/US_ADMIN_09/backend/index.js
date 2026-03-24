const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');







// Create Express app
var app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.listen(3000);
console.log("Server is running on port 3000");

