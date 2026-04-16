const express = require("express");

module.exports = (controller) => {
  const router = express.Router();
  router.post("/login/", controller.userLogin.bind(controller));
  return router;
};
