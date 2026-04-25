const express=require("express");

const UserActivityRoutes = (controller) => {  

  const router = express.Router();

    router.post("/login/:userId", controller.login.bind(controller));
    router.put("/logout/:userId", controller.logout.bind(controller));
    router.get("/logins-24h", controller.getTotalLogins24Hours.bind(controller).bind(controller));
    router.get("/average-time", controller.getRecentAverageSessionTime.bind(controller));
    router.get("/active-count", controller.getTotalActiveSessions.bind(controller));
    router.get("/active-users", controller.getCurrentActiveUsers.bind(controller));
    router.get("/logs", controller.getAllUserActivity.bind(controller));

  return router;
};

module.exports = UserActivityRoutes;