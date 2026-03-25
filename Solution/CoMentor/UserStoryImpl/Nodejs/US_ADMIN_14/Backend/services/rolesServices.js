class RolesService {


  constructor(repo) {
    this.repo = repo;
  }


  updateUserRoles(user_id, role_ids, callback) {
    this.repo.updateUserRoles(user_id, role_ids, callback);
  }
}

module.exports = RolesService;
