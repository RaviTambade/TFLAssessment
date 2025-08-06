// express server code
// configuration
// listen mode
const express = require('express');
app = express();
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./router');//importing route
routes(app); //register the route

var onListen = function() {
    console.log(" Server is listening on port 3000");
}
app.listen(3000,onListen);