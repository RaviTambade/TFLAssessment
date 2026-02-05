const publishAssessmentController = require("../controllers/publishAssessmentController");
const express=require('express');
var routes=express.Router();


routes.get("/api/publish-assessment",publishAssessmentController);


module.exports = routes;