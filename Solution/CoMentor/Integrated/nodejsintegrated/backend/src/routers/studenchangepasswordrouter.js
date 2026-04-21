const express = require("express");

module.exports = (controller) => {
  const router = express.Router();
  

  router.put("/changepassword", (req, res) =>controller.changePassword(req, res)
  );

  return router;
};