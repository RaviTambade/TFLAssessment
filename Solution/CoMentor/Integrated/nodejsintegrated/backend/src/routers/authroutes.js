const express = require("express");
const authroutes = (controller) => {

  const router = express.Router();
  
  router.get("/login", controller.validate.bind(controller));
  router.post("/register", controller.register.bind(controller));
  router.put("/changepassword", controller.changePassword.bind(controller));
  return router;
};

module.exports = authroutes;