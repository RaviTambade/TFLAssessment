const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  

  //Samruddhi
  router.get("/logs", (req, res, next) => {
    return controller.getSessionLogs(req, res, next);
  });


  return router;
};
