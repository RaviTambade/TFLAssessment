const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.put("/changepassword", controller.changePassword.bind(controller));

  return router;
};