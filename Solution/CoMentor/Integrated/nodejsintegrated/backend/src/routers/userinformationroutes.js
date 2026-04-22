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


  // ✅ Personal Info
  router.put("/personal/:user_id/", (req, res) =>
    controller.updatePersonInformation(req, res)
  )

  // ✅ Professional Info
  router.put("/professional/:user_id/", (req, res) =>
    controller.updateProfessionalInformation(req, res)
  )

  // ✅ Academic Info
  router.put("/academic/:user_id/",  (req, res) =>
    controller.updateAcademicInformation(req, res)
  );

  // ✅ Full Profile Update
  router.put("/full/:user_id/",(req, res) =>
    controller.updateProfile(req, res)
  );
  return router;
};