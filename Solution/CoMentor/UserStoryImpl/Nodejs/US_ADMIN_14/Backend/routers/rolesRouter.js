const express = require('express');
const { validateRoleAssignment } = require('../middlewares/rolesMiddleware');

module.exports = (controller) => {
  const router = express.Router();

  // Legacy route for compatibility with existing clients
  router.post('/roles/updateUserRoles', validateRoleAssignment, controller.updateUserRoles.bind(controller));
  // RESTful resource route for assigning roles to a user
  router.put('/users/:userId/roles', validateRoleAssignment, controller.updateUserRoles.bind(controller));

  return router;
};
