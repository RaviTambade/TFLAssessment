//http://localhost:5000/api/v1/users/profile

const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.put('/profile', controller.updateUserProfile);

  return router;
};
