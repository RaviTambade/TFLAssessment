const EmployerProfileRepository = require("../repository/employerProfileRepository");

class EmployerProfileService {
  constructor(db) {
    this.repo = new EmployerProfileRepository(db);
  }

  getEmployerProfile(userId, callback) {
    this.repo.checkEmployerRole(userId)
      .then(isEmployer => {
        if (!isEmployer) {
          return callback(new Error("Access denied: User is not an Employer"), null);
        }
        return this.repo.getProfile(userId);
      })
      .then(data => {
        if (!data || data.length === 0) {
          return callback(new Error("Profile not found"), null);
        }

        callback(null, data);
      })
      .catch(err => callback(err, null));
  }
}

module.exports = EmployerProfileService;