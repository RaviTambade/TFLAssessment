const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  // Backward compatibility for existing clients
  router.put('/deleteUser', controller.deleteUser.bind(controller));

  return router;
};