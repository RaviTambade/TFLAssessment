const express = require("express");

module.exports = (controller) => {
  const router = express.Router();
  router.post("/login", (req, res) => {
        controller.userLogin(req, res);
    });
  return router;
};
