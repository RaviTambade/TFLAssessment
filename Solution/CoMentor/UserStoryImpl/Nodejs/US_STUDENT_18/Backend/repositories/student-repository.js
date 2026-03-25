class StudentRepository {
  constructor(db) {
    this.db = db;
  }

  getStudentById(id, callback) {
    this.db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }

  updatePassword(id, password, callback) {
    this.db.query(
      'UPDATE users SET password = ? WHERE id = ?',
      [password, id],
      (err, result) => {
        if (err) return callback(err);
        callback(null, result);
      }
    );
  }
}

module.exports = StudentRepository;