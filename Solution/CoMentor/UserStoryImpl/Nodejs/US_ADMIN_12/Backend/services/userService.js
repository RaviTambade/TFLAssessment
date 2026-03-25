
class UserService {
    constructor(repo) {
        this.repo = repo;
    }

    getAllUsers(callback) {
        this.repo.getAllUsers(callback);
    }

}

module.exports = UserService;
