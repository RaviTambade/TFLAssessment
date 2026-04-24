const express = require('express');

const RoleRoutes = (controller) => {
    
  const router = express.Router();
  //Route mapping for Role Management
  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post("/addNewRole", controller.addNewRole.bind(controller));
  router.put('/updateExistingRole/:id', controller.updateExistingRole.bind(controller));
  router.get('/getRoleById/:id', controller.getRoleById.bind(controller));

  return router;
};

module.exports = RoleRoutes;
