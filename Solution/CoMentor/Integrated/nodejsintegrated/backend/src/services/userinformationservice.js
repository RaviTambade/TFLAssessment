class UserInformationService {
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

  getAdminProfile(userId, callback) {
    this.repo.checkAdminRole(userId, (err, isAdmin) => {
      if (err) return callback(err, null);

      if (!isAdmin) {
        return callback(
          new Error("Access denied: User is not an Admin "),
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


  getSMEProfile(userId, callback) {
    this.repo.checkSMERole(userId, (err, isSME) => {
      if (err) return callback(err, null);

      if (!isSME) {
        return callback(
          new Error("Access denied: User is not an SME "),
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

  // ✅ Update User Status
  updateUserStatus(userId, status, callback) {
    const ALLOWED_STATUSES = ["ACTIVE", "INACTIVE", "BLOCKED"];

    if (!userId || Number.isNaN(Number(userId))) {
      return callback(new Error("Invalid user ID"), null);
    }

    const normalizedStatus = typeof status === "string" ? status.trim().toUpperCase() : "";

    if (!normalizedStatus) {
      return callback(new Error("Status is required"), null);
    }

    if (!ALLOWED_STATUSES.includes(normalizedStatus)) {
      return callback(
        new Error("Status must be one of: ACTIVE, INACTIVE, or BLOCKED"),
        null
      );
    }

    this.repo.deleteUser(userId, normalizedStatus, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

// ✅ Update User Profile
   updateProfile(userId, data, callback) {
    this.repo.updateFullProfile(userId, data, callback);
  }

  update(userId, data, callback) {
    this.repo.updateFullProfile(userId, data, callback);
  }

  updateUser(userId, data, callback) {
    this.repo.updateFullProfile(userId, data, callback);
  }

  updatePersonInformation(userId, data, callback) {
    this.repo.updatePersonInformation(userId, data, callback);
  }

  updateProfessionalInformation(userId, data, callback) {
    this.repo.updateProfessionalInformation(userId, data, callback);
  }

  updateAcademicInformation(userId, data, callback) {
    this.repo.updateAcademicInformation(userId, data, callback);
  }

  updateProfessinalInformation(userId, data, callback) {
    this.repo.updateProfessionalInformation(userId, data, callback);
  }
}


module.exports = UserInformationService;