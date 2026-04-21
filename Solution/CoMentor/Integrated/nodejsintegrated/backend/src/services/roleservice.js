class RoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  getAllRoles(callback) {
    this.roleRepository.getAllRoles(callback);
  }

  addNewRole(role,callback) {
    this.roleRepository.addNewRole(role, callback);
  }

  deleteExistingRole(id, callback) {
    this.roleRepository.deleteExistingRole(id, callback);
  }

  updateExistingRole(id,role, callback) {
    this.roleRepository.updateExistingRole(
      id,
     role,
      callback,
    );
  }

  getRoleById(id, callback) {
    this.roleRepository.getRoleById(id, callback);
  }
}

module.exports = RoleService;
