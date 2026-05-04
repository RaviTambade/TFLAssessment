class RolesRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getAllRoles(callback) {
    const sql = "select * from roles";
    this.connection.query(sql, callback);
  }

  addNewRole(newrole, callback) {
    const sql = "insert into roles(role_name,description) values(?,?)";
    this.connection.query(sql, [newrole.roleName, newrole.description], callback);
  }

  updateExistingRole(roleId, role, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(sql, [role.roleName, role.description, roleId], callback);
  }

  getRoleById(roleId, callback) {
    const sql = "select * from roles where role_id =?";
    this.connection.query(sql, [roleId], callback);
  }

  getUserByRole(userId, callback) {
    const query = `SELECT r.role_name FROM user_roles ur
                  JOIN roles r ON ur.role_id = r.role_id
                  WHERE ur.user_id = ? `;

    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const userRole = results.length > 0 ? results : null;
      callback(null, userRole);
    });
  }

  getUserRoleIds(userId, callback) {
    const query = `SELECT role_id FROM user_roles WHERE user_id = ?`;
    this.connection.query(query, [userId], callback);
  }
  unAssignRole(userId, roleId, callback) {
    const deleteSql =
      "DELETE FROM user_roles WHERE user_id = ? AND role_id = ?";
    this.connection.query(deleteSql, [userId, roleId], callback);
  }

  unAssignRoles(userId, callback) {
    const deleteSql = "DELETE FROM user_roles WHERE user_id = ?";
    this.connection.query(deleteSql, [userId], callback);
  }

assignRoles(userId, roleIds, callback) {
  // validation
  if (!Array.isArray(roleIds) || roleIds.length === 0) {
    return callback(null, { affectedRows: 0 });
  }

  // create placeholders for each role
  const placeholders = roleIds.map(() => "(?, ?, NOW())").join(", ");

  const sql = `
    INSERT INTO user_roles (user_id, role_id, assigned_at)
    VALUES ${placeholders}
    ON DUPLICATE KEY UPDATE assigned_at = NOW()
  `;

  // flatten values: [userId, roleId, userId, roleId, ...]
  const values = roleIds.flatMap(roleId => [userId, roleId]);


  this.connection.query(sql, values, callback);
}
}

module.exports = RolesRepository;
