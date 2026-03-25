const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get(
    "/failed-students",
    controller.getFailedStudents.bind(controller)
  );

  return router;
};  