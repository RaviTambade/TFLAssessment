const express = require('express');


const usersModule = (controller) => {
  const router = express.Router();
  //Route mapping for User Management
  router.get("/:userId", controller.getUserInformationById.bind(controller));
  router.get("/:userId/name", controller.getUserName.bind(controller));
  router.get("/:userId/complete", controller.getUserCompleteInformation.bind(controller));
  router.get("/:userId/personal", controller.getUserPersonalInformation.bind(controller));
  router.get("/:userId/academic", controller.getUserAcademicInformation.bind(controller));
  router.get("/:userId/professional", controller.getUserProfessionalInformation.bind(controller));
  router.put("/:userId", controller.updateCompleteUserInformation.bind(controller));
  router.put("/:userId/personal-info", controller.updatePersonalInformation.bind(controller));
  router.put("/:userId/professional-info", controller.updateProfessionalInformation.bind(controller));
  router.put("/:userId/academic-info", controller.updateAcademicInformation.bind(controller));
  router.patch("/:userId/status", controller.updateUserStatus.bind(controller));

  return router;
};

module.exports = usersModule;
