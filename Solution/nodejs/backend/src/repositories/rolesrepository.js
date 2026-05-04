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
