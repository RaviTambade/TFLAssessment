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

  getUserByRole(userId, callback) {
   this.repository.getUserByRole(userId,callback)
  }
  
  unAssignRole(userId, roleId, callback) {
   this.repository.unAssignRole(userId, roleId,callback);
  }

  unAssignRoles(userId, callback) {
    this.repository.unAssignRoles(userId,callback);
  }

  assignRole(userId, roleId, callback) {
   this.repository.assignRole(userId,roleId,callback);
  }

  assignRoles(userId, roleIds, callback) {
   this.repository.assignRole(userId,roleIds,callback);
  }
}

module.exports = RolesService;
