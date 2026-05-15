class RolesRepository {

  constructor(connection) {
    this.connection = connection;
  }

  // To get all roles
  getAllRoles(callback) {
    const sql = "SELECT * from roles";
    this.connection.query(sql, callback);
  }

  // To add new role
  insert(newRole, callback) {
    const sql = "INSERT INTO roles(role_name,description) VALUES(?,?)";
    this.connection.query(sql,[newRole.roleName, newRole.description],callback);
  }

  // To update role details
  update(roleId, role, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(
      sql,
      [role.roleName, role.description, roleId],
      callback,
    );
  }

  // Get role by User ID
  getUserRolesByUserId(userId, callback) {
    const sql = `SELECT r.role_id, r.role_name FROM user_roles ur JOIN roles r ON ur.role_id = r.role_id WHERE ur.user_id = ?`;
    this.connection.query(sql, [userId], callback);
  }

  unAssignRole(userId, roleId, callback) {
    const deleteSql =
      "DELETE FROM user_roles WHERE user_id = ? AND role_id = ?";
    this.connection.query(deleteSql, [userId, roleId], callback);
  }

  unAssignRoles(userId, roleIds, callback) {
    if (!roleIds || roleIds.length === 0) {
      return callback(null, { affectedRows: 0 });
    }

    const deleteSql = ` DELETE FROM user_roles WHERE user_id = ? AND role_id IN (?)`;
    this.connection.query(deleteSql, [userId, roleIds], callback);
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
    const values = roleIds.flatMap((roleId) => [userId, roleId]);

    this.connection.query(sql, values, callback);
  }
}

module.exports = RolesRepository;
