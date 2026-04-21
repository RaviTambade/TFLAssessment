class StudentRepository {
  constructor(connection) {
    this.connection = connection; // ✔ FIXED
  }

  getStudentById(id, callback) {
    this.connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (err, result) => {
        if (err) return callback(err);
        callback(null, result);
      }
    );
  }

  updatePassword(id, password, callback) {
    this.connection.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [password, id],
      (err, result) => {
        if (err) return callback(err);
        callback(null, result);
      }
    );
  }
}

module.exports = StudentRepository;