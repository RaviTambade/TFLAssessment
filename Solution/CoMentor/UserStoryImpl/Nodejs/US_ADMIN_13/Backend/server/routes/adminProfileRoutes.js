const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/adminprofile/:userId", (req, res) =>
    controller.getAdminProfile(req, res)
  );

  return router;
};
