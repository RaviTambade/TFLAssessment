const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.put('/inactivateUser', controller.inactivateUser.bind(controller));
  router.put('/blockUser', controller.blockUser.bind(controller));
  router.put('/activateUser', controller.activateUser.bind(controller));

  return router;
};