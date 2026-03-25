class UserRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  inactivateUser(id, callback) {
    const sql = "UPDATE Users SET status = 'INACTIVE' WHERE id = ?";
    this.connection.query(sql, [ id], callback);
  }

  blockUser(id, callback) {
    const sql = "UPDATE Users SET status = 'BLOCKED' WHERE id = ?";
    this.connection.query(sql, [ id], callback);
  }

  activateUser(id, callback) {
    const sql = "UPDATE Users SET status = 'ACTIVE' WHERE id = ?";
    this.connection.query(sql, [ id], callback);
  }
}

module.exports = UserRepository;