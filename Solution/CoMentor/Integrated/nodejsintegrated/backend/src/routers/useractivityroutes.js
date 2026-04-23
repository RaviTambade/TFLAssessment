const express=require("express");

const UserActivityRoutes = (controller) => {  

  const router = express.Router();

    router.post("/login/:userId", controller.login);
    router.put("/logout/:userId", controller.logout);
    router.get("/logins-24h", controller.getTotalLogins24Hours);
    router.get("/average-time", controller.getRecentAverageSessionTime);
    router.get("/active-count", controller.getTotalActiveSessions);
    router.get("/active-users", controller.getCurrentActiveUsers);
    router.get("/logs", controller.getAllUserActivity);

  return router;
};

module.exports = UserActivityRoutes;