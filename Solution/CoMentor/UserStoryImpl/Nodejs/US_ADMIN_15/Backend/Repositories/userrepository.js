class UserRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  changeUserStatus(id, status, callback) {
    const sql = "UPDATE Users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, id], callback);
  }

}

module.exports = UserRepository;