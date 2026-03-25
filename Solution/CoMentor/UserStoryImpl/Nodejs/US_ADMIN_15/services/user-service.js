class UserService {

  constructor(repo) {
    this.repo = repo;
  }

  inactivateUser(id, callback) {
    this.repo.inactivateUser(id, callback);
  }

  blockUser(id, callback) {
    this.repo.blockUser(id, callback);
  }
  activateUser(id, callback){
    this.repo.activateUser(id, callback);
  }
}

module.exports = UserService;