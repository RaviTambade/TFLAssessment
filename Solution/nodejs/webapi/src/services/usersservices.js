const { json } = require("body-parser");

class UsersServices {
  constructor(usersRepository) {
    this.repository = usersRepository;
  }

  getUserInformationById(userId, callback) {
    this.repository.getUserInformationById(Number(userId), callback);
  }

  getUserCompleteInformation(userId, callback) {
    this.repository.getUserCompleteInformation(userId, callback);
  }

  getUserPersonalInformation(userId, callback) {
    this.repository.getUserPersonalInformation(userId, callback);
  }

  getUserAcademicInformation(userId, callback) {
    this.repository.getUserAcademicInformation(userId, callback);
  }

  getUserProfessionalInformation(userId, callback) {
    this.repository.getUserProfessionalInformation(userId, callback);
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

  updateUserPersonalInformation(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.repository.updateUserPersonalInformation(userId, filteredData, callback);
  }

  updateUserProfessionalInformation(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.getUserProfessionalInformation(userId, (err, result) => {
      if (err) return callback(err, null);
      if (result) {
        this.repository.updateUserProfessionalInformation(userId, filteredData, callback);
      }
      else {
        this.insertUserProfessionalInformation(userId, filteredData, callback);
      }
    })
  }

  updateUserAcademicInformation(userId, data, callback) {
    const filteredData = this.filterFields(data);
    this.getUserAcademicInformation(userId, (err, result) => {
      if (err) return callback(err, null);
      if (result) {
        this.repository.updateUserAcademicInformation(userId, filteredData, callback);
      }
      else {

        this.insertUserAcademicInformation(userId, filteredData, callback);
      }
    });
  }


  insertUserProfessionalInformation(userId, data, callback) {
    this.repository.insertUserProfessionalInformation(userId, data, callback);
  }

  insertUserAcademicInformation(userId, data, callback) {

    this.repository.insertUserAcademicInformation(userId, data, callback);
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