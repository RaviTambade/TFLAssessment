class RolesRepository {
  constructor(connection) {
    this.connection = connection;
  }

  deleteUserRoles(user_id, callback) {
    const deleteSql = "DELETE FROM user_roles WHERE user_id = ?";
    this.connection.query(deleteSql, [user_id], callback);
  }

  insertUserRoles(user_id, role_ids, callback) {
    if (!Array.isArray(role_ids) || role_ids.length === 0) {
      return callback(null, { affectedRows: 0 });
    }

    const placeholders = role_ids.map(() => "(?, ?, NOW())").join(", ");
    const insertSql = `INSERT INTO user_roles (user_id, role_id, assigned_at) VALUES ${placeholders} ON DUPLICATE KEY UPDATE assigned_at = NOW()`;
    const values = role_ids.flatMap(role_id => [user_id, role_id]);
    this.connection.query(insertSql, values, callback);
  }
}

module.exports = RolesRepository;