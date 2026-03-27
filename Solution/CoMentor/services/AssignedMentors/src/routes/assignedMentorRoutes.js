const express = require('express');
const router = express.Router();
const assignedMentorController = require('../controllers/AssignedMentorController');

router.get('/students/:studentId/mentor', assignedMentorController.getAssignedMentor.bind(assignedMentorController));

module.exports = router;
