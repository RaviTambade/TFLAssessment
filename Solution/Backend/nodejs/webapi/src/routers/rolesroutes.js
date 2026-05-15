const express = require('express');

const RoleRoutes = (controller) => {
    
  const router = express.Router();
  //Route mapping for Role Management
  router.get('/getAllRoles', controller.getAllRoles.bind(controller));
  router.post("/insert", controller.insert.bind(controller));
  router.put('/update/:id', controller.update.bind(controller));
  router.get('/getUserRoleByUserId/:userId',controller.getUserRoleByUserId.bind(controller));

  // ------------------------------------------------------------------

  router.delete('/unAssignRole/:userId/role/:roleId', controller.unAssignRole.bind(controller));
  router.post('/assignRole/:userId/role/:roleId', controller.assignRole.bind(controller));
  router.delete('/unAssignRoles/:userId', controller.unAssignRoles.bind(controller));
  router.post('/assignRoles/:userId', controller.assignRoles.bind(controller));
  return router;
};

module.exports = RoleRoutes;
