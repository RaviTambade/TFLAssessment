const express = require("express");

function sessionRoutes(controller) {
  const router = express.Router();

  router.get("/", controller.getSessionLogs);
  router.get("/logs", controller.getSessionLogs);

  return router;
}

module.exports = sessionRoutes;
