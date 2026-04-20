const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  // ✅ Personal Info
  router.put("/:user_id/personal", controller.updatePersonInformation);

  // ✅ Professional Info
  router.put("/:user_id/professional", controller.updateProfessionalInformation);

  // ✅ Academic Info
  router.put("/:user_id/academic", controller.updateAcademicInformation);

  // ✅ Full Profile Update
  router.put("/:user_id/full", controller.updateProfile);

  return router;
};