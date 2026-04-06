class UserService {

  constructor(repo) {
    this.repo = repo;
  }

  changeUserStatus(id, status, callback) {
    this.repo.changeUserStatus(id, status, callback);
  }
}

module.exports = UserService;