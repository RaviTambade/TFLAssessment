class UsersService {

  constructor(repo) {
    this.repo = repo;
  }

  deleteUser(id, status, callback) {
    this.repo.deleteUser(id, status, callback);
  }
}

module.exports = UsersService;