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
  
  router.get( "/smeprofile/:user_id",
    (req, res) => controller.getSMEProfile(req, res)
  );

  router.put("/update-status", (req, res) =>
    controller.updateUserStatus(req, res)
  );

  return router;
};