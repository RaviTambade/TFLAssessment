const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.put('/updateUserRoles', controller.updateUserRoles.bind(controller));

  return router;
};
