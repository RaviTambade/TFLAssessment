const express = require("express");
const AuthRoutes = (controller) => {

  const router = express.Router();
  
  router.post("/login", controller.validate.bind(controller));
  router.post("/register", controller.register.bind(controller));
  router.put("/changepassword", controller.changePassword.bind(controller));
  return router;
};

module.exports = AuthRoutes;