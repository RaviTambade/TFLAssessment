const AdminProfileRepository = require("../repository/adminProfileRepository");

class AdminProfileService {
  constructor(db) {
    this.repository = new AdminProfileRepository(db);
  }

  getAdminProfile(userId, callback) {
    return this.repository.getAdminProfile(userId, callback);
  }
}

module.exports = AdminProfileService;
