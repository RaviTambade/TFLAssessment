class UsersRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  deleteUser(id, status, callback) {
    const sql = "UPDATE Users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, id], callback);
  }

  async getUserProfileById(userId) {
    const query = "CALL GetUserProfile(?)";
    return this.connection.promise().query(query, [userId]);
  }

}

module.exports = UsersRepository;