const { json } = require("body-parser");

class UsersServices {
  constructor(usersRepository) {
    this.repository = usersRepository;
  }

  getUserDetailsById(userId, callback) {
    this.repository.getUserDetailsById(Number(userId), callback);
  }



  getUserPersonalDetails(userId, callback) {
    this.repository.getUserPersonalDetails(userId, callback);
  }

  getUserAcademicDetails(userId, callback) {
    this.repository.getUserAcademicDetails(userId, callback);
  }

  getUserProfessionalDetails(userId, callback) {
    this.repository.getUserProfessionalDetails(userId, callback);
  }

  filterFields(data) {
    let filtered = {};

    for (let key in data) {
      if (data[key] !== undefined && data[key] !== "") {
        filtered[key] = data[key];
      }
    }

    return filtered;
  }

  updateUserPersonalDetails(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.repository.updateUserPersonalDetails(userId, filteredData, callback);
  }

  updateUserProfessionalDetails(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.getUserProfessionalDetails(userId, (err, result) => {
      if (err) return callback(err, null);
      if (result) {
        this.repository.updateUserProfessionalDetails(userId, filteredData, callback);
      }
      else {
        this.insertUserProfessionalDetails(userId, filteredData, callback);
      }
    })
  }

  updateUserAcademicDetails(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.getUserAcademicDetails(userId, (err, result) => {
      if (err) return callback(err, null);
      if (result) {
        this.repository.updateUserAcademicDetails(userId, filteredData, callback);
      }
      else {

        this.insertUserAcademicDetails(userId, filteredData, callback);
      }
    });
  }


  insertUserProfessionalDetails(userId, data, callback) {
    this.repository.insertUserProfessionalDetails(userId, data, callback);
  }

  insertUserAcademicDetails(userId, data, callback) {

    this.repository.insertUserAcademicDetails(userId, data, callback);
  }



  updateUserStatus(userId, status, callback) {
    const ALLOWED_STATUSES = ["ACTIVE", "INACTIVE", "BLOCKED"];

    if (!userId || Number.isNaN(Number(userId))) {
      return callback(new Error("Invalid user ID"), null);
    }

    const normalizedStatus =
      typeof status === "string" ? status.trim().toUpperCase() : "";

    if (!normalizedStatus) {
      return callback(new Error("Status is required"), null);
    }

    if (!ALLOWED_STATUSES.includes(normalizedStatus)) {
      return callback(
        new Error("Status must be one of: ACTIVE, INACTIVE, or BLOCKED"),
        null,
      );
    }

    this.repository.updateUserStatus(
      userId,
      normalizedStatus,
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      },
    );
  }

  getAllUsers(callback) {
    this.repository.getAllUsers(callback);
  }
}

module.exports = UsersServices;