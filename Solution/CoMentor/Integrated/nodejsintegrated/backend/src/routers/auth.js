const express = require("express");
const authModule = (controller) => {
  const router = express.Router();
  router.post("/login", (req, res) => { controller.validate(req, res); });
  router.post("/register", (req, res) => {controller.register(req, res); });
  router.put("/changepassword", (req, res) =>{controller.changePassword(req, res); });
  return router;
};

module.exports = authModule;