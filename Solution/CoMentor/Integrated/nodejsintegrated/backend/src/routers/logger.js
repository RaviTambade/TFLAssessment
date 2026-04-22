const express=require("express");

const Logger = (Logger) => {  
  const router = express.Router();

  router.post("/login/:userid", Logger.LoginEntry);
  router.put("/logout/:userid", Logger.LogoutEntry);
  router.get("/logins-24h", Logger.getLoginsLast24Hrs);
  router.get("/average-time", Logger.getAvgSessionTime);
  router.get("/active-count", Logger.getActiveSessions);
  router.get("/active-users", Logger.getActiveUsers);
  router.get("/logs", Logger.getSessionLogs)

  return router;
};

module.exports = Logger;