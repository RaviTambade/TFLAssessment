const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.post('/updateUserRoles', controller.updateUserRoles.bind(controller));

  return router;
};
