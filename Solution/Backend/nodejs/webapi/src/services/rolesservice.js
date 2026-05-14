class RolesService {
  constructor(roleRepository) {
    this.repository = roleRepository;
  }

  getAllRoles(callback) {
    this.repository.getAllRoles(callback);
  }

  addNewRole(newrole, callback) {
    this.repository.addNewRole(newrole, callback);
  }

  updateExistingRole(roleId, role, callback) {
    this.repository.updateExistingRole(roleId, role, callback);
  }

  getRoleById(roleId, callback) {
    this.repository.getRoleById(roleId, callback);
  }

  getUserRoleIdsByUserId(userId, callback) {
    this.repository.getUserRoleIdsByUserId(userId, callback);
  }

  unAssignRole(userId, roleId, callback) {
    this.repository.unAssignRole(userId, roleId, callback);
  }

  unAssignRoles(userId, roleIds, callback) {
    this.repository.getUserRoleIdsByUserId(userId, (err, currentRoles) => {
      if (err) {
        return callback(err, null);
      }

      const currentRoleIds = currentRoles.map((r) => r.role_id);

      const rolesToRemove = roleIds.filter((roleId) =>
        currentRoleIds.includes(roleId),
      );

      if (rolesToRemove.length === 0) {
        return callback(null, {
          affectedRows: 0,
          message: "No matching roles to unassign",
        });
      }

      this.repository.unAssignRoles(userId, rolesToRemove, callback);
    });
  }

  assignRole(userId, roleId, callback) {
    this.repository.assignRole(userId, roleId, callback);
  }

  assignRoles(userId, roleIds, callback) {
    // Get current role IDs for the user
    this.repository.getUserRoleIdsByUserId(userId, (err, currentRoles) => {
      if (err) {
        return callback(err, null);
      }

      // Extract role IDs from current roles
      const currentRoleIds = currentRoles.map((role) => role.role_id);

      // Filter out roles that already exist
      const newRolesToAdd = roleIds.filter(
        (roleId) => !currentRoleIds.includes(roleId),
      );

      // If no new roles to add, return success
      if (newRolesToAdd.length === 0) {
        return callback(null, {
          affectedRows: 0,
          message: "All roles already assigned",
        });
      }

      // Assign only the new roles
      this.repository.assignRoles(userId, newRolesToAdd, callback);
    });
  }
}

module.exports = RolesService;
