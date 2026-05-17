const express = require("express");

const MentorRoutes = (controller) => {
  const router = express.Router();

  router.get("/:id/mentees/count", controller.getMenteeCount.bind(controller));

  router.get("/:id/mentees", controller.getMentees.bind(controller));

  return router;
};

module.exports = MentorRoutes;
