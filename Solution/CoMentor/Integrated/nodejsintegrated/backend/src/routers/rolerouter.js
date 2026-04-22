const express = require('express');

module.exports = (controller) => {
    
  const router = express.Router();

  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post("/addNewRole", controller.addNewRole.bind(controller));
  router.delete('/deleteExistingRole/:id', controller.deleteExistingRole.bind(controller));
  router.put('/updateExistingRole/:id', controller.updateExistingRole.bind(controller));
  router.get('/getRoleById/:id', controller.getRoleById.bind(controller));

  return router;
};
