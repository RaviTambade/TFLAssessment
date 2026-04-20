const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/logins-24h", controller.getLoginsLast24Hrs);
  router.get("/average-time", controller.getAvgSessionTime);
  router.get("/active-count", controller.getActiveSessions);
  router.get("/active-users", controller.getActiveUsers);

  //Samruddhi
  router.get("/logs", (req, res, next) => {
    return controller.getSessionLogs(req, res, next);
  });


  return router;
};
