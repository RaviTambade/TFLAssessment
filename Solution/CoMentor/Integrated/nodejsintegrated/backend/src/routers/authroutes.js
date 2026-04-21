const express = require("express");

module.exports = (controller) => {
  const router = express.Router();
  router.post("/login", (req, res) => {
    controller.validate(req, res);
  });

  router.post("/register", (req, res) => {
    controller.register(req, res);
  });
  return router;
};
