const express = require('express');
const asyncHandler = require("../middlewares/asyncHandler");


module.exports = (controller) => {
  const router = express.Router();

  // Backward compatibility for existing clients
  router.put('/deleteUser', controller.deleteUser.bind(controller));


  return router;
};