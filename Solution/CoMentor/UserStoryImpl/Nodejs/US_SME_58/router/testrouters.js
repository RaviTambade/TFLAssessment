const express = require("express");
const router = express.Router();

const testController = require("../controller/testcontroller");

router.get("/tests", testController.getTests);

module.exports = router;