const testDataController = require("../controllers/testDataController");
const express=require('express');
var routes=express.Router();

routes.get("/testdata",testDataController);

module.exports=routes;