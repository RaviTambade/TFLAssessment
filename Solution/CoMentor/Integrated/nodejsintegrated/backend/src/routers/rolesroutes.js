const express = require('express');

const RoleRoutes = (controller) => {
    
  const router = express.Router();
  //Route mapping for Role Management
  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post("/addNewRole", controller.addNewRole.bind(controller));
  router.put('/updateExistingRole/:id', controller.updateExistingRole.bind(controller));
  router.get('/getRoleById/:id', controller.getRoleById.bind(controller));
  router.get('/getUserByRole/:userId',controller.getUserByRole.bind(controller));
  router.delete('/unAssignRole/:userId/role/:roleId', controller.unAssignRole.bind(controller));
  router.post('/assignRole/:userId/role/:roleId', controller.assignRole.bind(controller));
  router.delete('/unAssignRoles/:userId', controller.unAssignRoles.bind(controller));
  router.post('/assignRoles/:userId', controller.assignRoles.bind(controller));
  return router;
};

module.exports = RoleRoutes;
