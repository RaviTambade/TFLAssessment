const express = require('express');

const RoleRoutes = (controller) => {
    
  const router = express.Router();
  //Route mapping for Role Management
  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post("/insert", controller.insert.bind(controller));
  router.put('/update/:id', controller.update.bind(controller));
  router.get('/getUserRolesByUserId/:userId',controller.getUserRolesByUserId.bind(controller));
  router.get('/getUsersByRoleId/:roleId', controller.getUsersByRoleId.bind(controller));
  router.post('/assignRole/:userId/role/:roleId', controller.assignRole.bind(controller));
  router.put('/unAssignRole/:userId/role/:roleId', controller.unAssignRole.bind(controller));
  
  return router;
};

module.exports = RoleRoutes;
