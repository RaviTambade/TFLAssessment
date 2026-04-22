const express=require("express");

const LoggerRoutes = (loggerController) => {  // ✅ FIXED
  const router = express.Router();

  router.post("/login/:userid", controller.logUserLogin);
  router.put("/logout/:userid", controller.logUserLogout);

 // US_ADMIN_09

  router.get("/logins-24h", loggerController.getLoginsLast24Hrs);
  router.get("/average-time", loggerController.getAvgSessionTime);
  router.get("/active-count", loggerController.getActiveSessions);
  router.get("/active-users", loggerController.getActiveUsers);

  return router;
};

module.exports = LoggerRoutes;