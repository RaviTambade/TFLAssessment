const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post('/insertRoles', controller.insertRoles.bind(controller));
  router.delete('/deleteRoles/:id', controller.deleteRoles.bind(controller));
  router.put('/updateRoles/:id', controller.updateRoles.bind(controller));
  router.get('/getRoleByID/:id', controller.getRoleByID.bind(controller));

  return router;
};
