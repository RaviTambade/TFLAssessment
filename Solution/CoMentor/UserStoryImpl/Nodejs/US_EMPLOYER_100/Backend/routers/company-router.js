const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.get("/profile/:company_id",
    controller.getCompanyProfile.bind(controller)
  );

  return router;
};