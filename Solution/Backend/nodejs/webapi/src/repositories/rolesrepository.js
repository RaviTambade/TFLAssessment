class RolesRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getAllRoles(callback) {
    const sql = "select * from roles";
    this.connection.query(sql, callback);
  }

  insert(newRole, callback) {
    const sql = "insert into roles(role_name,description) values(?,?)";
    this.connection.query(sql,[newRole.roleName, newRole.description],callback);
  }

  update(roleId, role, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(sql, [role.roleName, role.description, roleId],callback);
  }

  getRoleById(roleId, callback) {
    const sql = "select * from roles where role_id =?";
    this.connection.query(sql,[roleId], callback);
  }

  /**************** changes expected node js team for getting roleid, rolename*********** */
  getRoleByUserId(userId, callback) {
    const query = `SELECT  ur.role_id, r.role_name 
                  FROM user_roles ur join roles r  
                  ON ur.role_id = r.role_id
                  WHERE user_id = ?; `;

    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const userRole = results.length > 0 ? results : null;
      callback(null, userRole);
    });
  }

  getUserRoleIdsByUserId(userId, callback) {
    const query = `SELECT role_id FROM user_roles WHERE user_id = ?`;
    this.connection.query(query, [userId], callback);
  }
  unAssignRole(userId, roleId, callback) {
    const deleteSql =
      "DELETE FROM user_roles WHERE user_id = ? AND role_id = ?";
    this.connection.query(deleteSql, [userId, roleId], callback);
  }

  unAssignAllRolesToUserId(userId, callback) {
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
    const values = roleIds.flatMap((roleId) => [userId, roleId]);

    this.connection.query(sql, values, callback);
  }
}

module.exports = RolesRepository;
