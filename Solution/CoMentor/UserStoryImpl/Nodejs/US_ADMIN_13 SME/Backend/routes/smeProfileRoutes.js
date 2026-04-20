
const express = require("express");
const router = express.Router();

// Log when SME profile routes are loaded
console.log("SME Profile Routes loaded");

// Check router object type
console.log("Router type:", typeof router);

// Import SME Profile Controller (contains business logic)

const smeProfileController = require("../controllers/smeProfileController");

// Check if controller function exists

console.log(
  "Controller function:",
  typeof smeProfileController.getSMEProfile
);



// Route to  get sme with user_id 

router.get("/smeprofile/:user_id", smeProfileController.getSMEProfile);

// Export router
module.exports = router;