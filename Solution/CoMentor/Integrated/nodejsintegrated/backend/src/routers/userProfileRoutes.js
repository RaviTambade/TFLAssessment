const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  // Employer Profile Route
  router.get("/employerprofile/:id",
    (req, res) => controller.getEmployerProfile(req, res)

  );


    router.get("/adminprofile/:userId", (req, res) =>
    controller.getAdminProfile(req, res)
  );
  // SME Profile Route
  // router.get(
  //   "/smeprofile/:user_id",
  //   (req, res) => controller.getSMEProfile(req, res)
  // );

  return router;
};