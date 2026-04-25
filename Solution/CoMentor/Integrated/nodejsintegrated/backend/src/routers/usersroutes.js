const express = require('express');

const UsersRoutes = (controller) => {
  const router = express.Router();
  
  router.get("/:userId", controller.getUserInformationById.bind(controller));
  router.get("/:userId/complete", controller.getUserCompleteInformation.bind(controller));
  router.get("/:userId/personal", controller.getUserPersonalInformation.bind(controller));
  router.get("/:userId/academic", controller.getUserAcademicInformation.bind(controller));
  router.get("/:userId/professional", controller.getUserProfessionalInformation.bind(controller));
  router.patch("/:userId/personal-info", controller.updatePersonal.bind(controller));
  router.patch("/:userId/professional-info", controller.updateProfessional.bind(controller));
  router.patch("/:userId/academic-info", controller.updateAcademic.bind(controller));
  router.patch("/:userId/status", controller.updateUserStatus.bind(controller));

  return router;
};

module.exports = UsersRoutes;
