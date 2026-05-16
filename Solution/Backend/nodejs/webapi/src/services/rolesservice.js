class RolesService {
  constructor(roleRepository) {
    this.repository = roleRepository;
  }

  getAllRoles(callback) {
    this.repository.getAllRoles(callback);
  }

  insert(newRole, callback) {
    this.repository.insert(newRole, callback);
  }

  update(roleId, role, callback) {
    this.repository.update(roleId, role, callback);
  }

  getUserRolesByUserId(userId, callback) {
   this.repository.getUserRolesByUserId(userId,callback)
  }

  getUsersByRoleId(roleId, callback) {
   this.repository.getUsersByRoleId(roleId,callback)
  }

  assignRole(userId, roleId, callback) {
    this.repository.assignRole(userId, roleId, callback);
  }
  
  unAssignRole(userId, roleId, callback) {
   this.repository.unAssignRole(userId, roleId,callback);
  }

}

module.exports = RolesService;
