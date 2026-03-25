class RolesRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  updateUserRoles(user_id, role_ids, callback) {
    this.connection.beginTransaction((err) => {
      if (err) return callback(err);

      // Remove roles not in new list
      const deleteSql = "DELETE FROM user_roles WHERE user_id = ?";
      this.connection.query(deleteSql, [user_id], (err) => {
        if (err) {
          return this.connection.rollback(() => callback(err));
        }

        // Insert new roles (ignore duplicates)
        if (role_ids.length > 0) {
          const placeholders = role_ids.map(() => "(?, ?, NOW())").join(", ");
          const insertSql = `INSERT INTO user_roles (user_id, role_id, assigned_at) VALUES ${placeholders} ON DUPLICATE KEY UPDATE assigned_at = NOW()`;
          const values = role_ids.flatMap(role_id => [user_id, role_id]);
          this.connection.query(insertSql, values, (err) => {
            if (err) {
              return this.connection.rollback(() => callback(err));
            }

            this.connection.commit((err) => {
              if (err) {
                return this.connection.rollback(() => callback(err));
              }
              callback(null, { message: 'User roles updated successfully' });
            });
          });
        } else {
          this.connection.commit((err) => {
            if (err) {
              return this.connection.rollback(() => callback(err));
            }
            callback(null, { message: 'User roles updated successfully' });
          });
        }
      });
    });
  }
}

module.exports = RolesRepository;