const express = require('express');
const router = express.Router();

const mentorRepository = require('../repositories/mentorRepository')();
const mentorService = require('../services/mentorService')(mentorRepository);
const mentorController = require('../controllers/mentorController')(mentorService);

router.get('/api/publish-assessment', mentorController.publishAssessmentController);
router.get('/api/learnerskill', mentorController.learnerSkillController);
router.get('/api/mentordata', mentorController.mentorDataController);
router.get('/api/mentorrecommendation', mentorController.mentorRecommendationController);
router.get('/api/skillhealthsnapshot', mentorController.skillHealthController);
router.get('/api/test-data', mentorController.testDataController);

module.exports = router;
