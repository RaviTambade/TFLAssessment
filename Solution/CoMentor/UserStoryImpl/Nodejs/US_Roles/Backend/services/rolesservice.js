class RolesService {


  constructor(repo) {
    this.repo = repo;
  }

  getAllRoles(callback) {
    this.repo.getAllRoles(callback);
  }

  insertRoles(role_name, description, callback) {
    this.repo.insertRoles(role_name, description, callback);
  }

  deleteRoles(id, callback) {
    this.repo.deleteRoles(id, callback);
  }

  updateRoles(id, role_name, description, callback) {
    this.repo.updateRoles(id, role_name, description, callback);
  }

  getRoleByID(id, callback) {
    this.repo.getRoleByID(id, callback);
  }
}

module.exports = RolesService;
