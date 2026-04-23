const express=require("express");

const Logger = (controller) => {  

  const router = express.Router();

    router.post("/login/:userid", controller.LoginEntry);
    router.put("/logout/:userid", controller.LogoutEntry);
    router.get("/logins-24h", controller.getLoginsLast24Hrs);
    router.get("/average-time", controller.getAvgSessionTime);
    router.get("/active-count", controller.getActiveSessions);
    router.get("/active-users", controller.getActiveUsers);
    router.get("/logs", controller.getSessionLogs)

  return router;
};

module.exports = Logger;