class RolesService {
  constructor(repo, connection) {
    this.repo = repo;
    this.connection = connection;
  }

  updateUserRoles(user_id, role_ids, callback) {
    if (!user_id) {
      return callback({ message: 'user_id is required' }, null);
    }

    if (!Array.isArray(role_ids)) {
      return callback({ message: 'role_ids must be an array' }, null);
    }

    this.connection.beginTransaction((err) => {
      if (err) return callback(err);

      this.repo.deleteUserRoles(user_id, (err) => {
        if (err) {
          return this.connection.rollback(() => callback(err));
        }

        this.repo.insertUserRoles(user_id, role_ids, (err) => {
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
      });
    });
  }
}

module.exports = RolesService;
