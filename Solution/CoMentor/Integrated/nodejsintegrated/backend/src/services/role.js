class Role{
  constructor(role) {
    this.role = role;
  }

  getAllRoles(callback) {
    this.role.getAllRoles(callback);
  }

  addNewRole(role,callback) {
    this.role.addNewRole(role, callback);
  }

  updateExistingRole(id,role, callback) {
    this.role.updateExistingRole(
      id,
     role,
      callback,
    );
  }

  getRoleById(id, callback) {
    this.role.getRoleById(id, callback);
  }
}

module.exports = Role;
