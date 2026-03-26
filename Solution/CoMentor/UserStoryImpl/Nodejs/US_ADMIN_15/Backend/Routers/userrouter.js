const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.put('/changeUserStatus', controller.changeUserStatus.bind(controller));


  return router;
};