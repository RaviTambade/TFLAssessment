const express = require('express');

const UsersRoutes = (controller) => {
  const router = express.Router();
  router.get("/getAllUsers", controller.getAllUsers.bind(controller));
  
  router.get("/:userId", controller.getUserDetailsById.bind(controller));
 
  router.get("/:userId/personal", controller.getUserPersonalDetails.bind(controller));
  router.get("/:userId/academic", controller.getUserAcademicDetails.bind(controller));
  router.get("/:userId/professional", controller.getUserProfessionalDetails.bind(controller));
  
  router.patch("/:userId/personal-info", controller.updateUserPersonalDetails.bind(controller));
  router.patch("/:userId/professional-info", controller.updateUserProfessionalDetails.bind(controller));
  router.patch("/:userId/academic-info", controller.updateUserAcademicDetails.bind(controller));
  router.patch("/:userId/status", controller.updateUserStatus.bind(controller));
  return router;
};

module.exports = UsersRoutes;
