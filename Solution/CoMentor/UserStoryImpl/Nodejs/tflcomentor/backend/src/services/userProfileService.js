class EmployerProfileService {
  constructor(repo) {
    this.repo = repo;
  }

  getEmployerProfile(userId, callback) {
    this.repo.checkEmployerRole(userId, (err, isEmployer) => {
      if (err) return callback(err, null);

      if (!isEmployer) {
        return callback(
          new Error("Access denied: User is not an Employer"),
          null
        );
      }

      this.repo.getProfile(userId, (err, data) => {
        if (err) return callback(err, null);

        if (!data || data.length === 0) {
          return callback(new Error("Profile not found"), null);
        }

        callback(null, data);
      });
    });
  }
}

module.exports = EmployerProfileService;