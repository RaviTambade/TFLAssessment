const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/employerprofile/:id", (req, res) => controller.getEmployerProfile(req, res));

  return router;
};
