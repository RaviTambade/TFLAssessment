const express=require('express');

const MentorController = require('../controllers/mentorController');
var routes=express.Router();


routes.get("/api/publish-assessment",MentorController);
routes.get("/api/learnerskill",MentorController);


module.exports = routes;