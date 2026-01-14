const express = require("express");
const router = express.Router();
const controller = require("../controllers/skillHealth.controller");

router.get("/skill-health", controller.getSkillHealthSnapshot);

module.exports = router;
