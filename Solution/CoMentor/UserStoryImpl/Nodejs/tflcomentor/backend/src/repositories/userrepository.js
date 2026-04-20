class UsersRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  deleteUser(id, status, callback) {
    const sql = "UPDATE Users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, id], callback);
  }

}

module.exports = UsersRepository;