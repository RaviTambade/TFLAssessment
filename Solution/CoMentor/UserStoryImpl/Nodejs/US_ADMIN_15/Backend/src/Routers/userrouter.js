const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  // Standardized REST route for updating user status
  router.put('/status', controller.deleteUser.bind(controller));
  // Backward compatibility for existing clients
  router.put('/deleteUser', controller.deleteUser.bind(controller));

  return router;
};