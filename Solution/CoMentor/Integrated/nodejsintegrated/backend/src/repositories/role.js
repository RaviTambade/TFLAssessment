class RoleRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  getAllRoles(callback) {
    const sql = "select * from roles";
    this.connection.query(sql, callback);
  }

  addNewRole(role, callback) {
    const sql = "insert into roles(role_name,description) values(?,?)";
    this.connection.query(sql, [role.roleName, role.description], callback);
  }

  deleteExistingRole(id, callback) {
    const sql = "DELETE FROM roles WHERE role_id=?";
    this.connection.query(sql, [id], callback);
  }

  updateExistingRole(id, role, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(sql, [role.roleName, role.description, id], callback);
  }

  getUserByRole(userId, callback) {
    const query = `SELECT r.role_name FROM user_roles ur
                  JOIN roles r ON ur.role_id = r.role_id
                  WHERE ur.user_id = ? `;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const userRole = results.length > 0 ? results[0].role_name : null;
      callback(null, userRole);
    });
  }

  getRoleByRoleId(id, callback) {
    const sql = "select * from roles where role_id =?";
    this.connection.query(sql, [id], callback);
  }


  unAssignRole(user_id, role_id, callback) {
    const deleteSql = "DELETE FROM user_roles WHERE user_id = ? AND role_id = ?";
    this.connection.query(deleteSql, [user_id, role_id], callback);
  }

  unAssignRoles(user_id, callback) {
    const deleteSql = "DELETE FROM user_roles WHERE user_id = ?";
    this.connection.query(deleteSql, [user_id], callback);
  }

  
  assignRole(user_id, role_id, callback) {
    const insertSql = `INSERT INTO user_roles (user_id, role_id, assigned_at) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE assigned_at = NOW()`;
    this.connection.query(insertSql, [user_id, role_id], callback);
  }

  assignRoles(user_id, role_ids, callback) {
    if (!Array.isArray(role_ids) || role_ids.length === 0) {
      return callback(null, { affectedRows: 0 });
    }

    const placeholders = role_ids.map(() => "(?, ?, NOW())").join(", ");
    const insertSql = `INSERT INTO user_roles (user_id, role_id, assigned_at) VALUES ${placeholders} ON DUPLICATE KEY UPDATE assigned_at = NOW()`;
    const values = role_ids.flatMap(role_id => [user_id, role_id]);
    this.connection.query(insertSql, values, callback);
  }
}

module.exports = RoleRepository;
