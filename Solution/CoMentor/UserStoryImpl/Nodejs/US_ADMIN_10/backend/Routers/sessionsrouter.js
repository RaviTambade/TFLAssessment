const express = require('express');

function SessionsRouter(controller) {
  const router = express.Router();

  // Route definitions stay isolated so the controller can focus on request handling.
  router.get('/logs', controller.getSessionLogs);
  router.get(/^\/logs(?:(?:%0A)|(?:%0D)|\s)+$/i, controller.getSessionLogs);

  return router;
}

module.exports = SessionsRouter;
