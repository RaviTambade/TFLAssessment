class StudentService {
  constructor(repo) {
    this.repo = repo;
  }

  changePassword(id, oldPassword, newPassword, callback) {
    this.repo.getStudentById(id, (err, result) => {
      if (err) return callback(err);

      if (!result || result.length === 0) {
        return callback(null, {
          status: 404,
          message: "Student not found",
        });
      }

      const student = result[0];

      if (student.password !== oldPassword) {
        return callback(null, {
          status: 400,
          message: "Old password is incorrect",
        });
      }

      this.repo.updatePassword(id, newPassword, (err) => {
        if (err) return callback(err);

        return callback(null, {
          status: 200,
          message: "Password updated successfully",
        });
      });
    });
  }
}

module.exports = StudentService;