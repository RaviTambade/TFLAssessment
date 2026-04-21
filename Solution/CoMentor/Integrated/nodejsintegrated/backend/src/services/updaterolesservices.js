const UpdateUserRolesResponse = require('../dtos/responses/UpdateUserRolesResponse');

class RolesService {
  constructor(repo, connection) {
    this.repo = repo;
    this.connection = connection;
  }

  updateUserRoles(requestDto, callback) {
    const { userId, roleIds } = requestDto;

    if (!Number.isInteger(userId) || userId <= 0) {
      return callback({ status: 400, message: 'userId must be a positive integer' });
    }

    if (!Array.isArray(roleIds)) {
      return callback({ status: 400, message: 'role_ids must be an array' });
    }

    if (roleIds.length === 0) {
      return callback({ status: 400, message: 'role_ids must contain at least one role id' });
    }

    this.connection.beginTransaction((err) => {
      if (err) return callback(err);

      this.repo.deleteUserRoles(userId, (err) => {
        if (err) {
          return this.connection.rollback(() => callback(err));
        }

        this.repo.insertUserRoles(userId, roleIds, (err) => {
          if (err) {
            return this.connection.rollback(() => callback(err));
          }

          this.connection.commit((err) => {
            if (err) {
              return this.connection.rollback(() => callback(err));
            }
            callback(null, new UpdateUserRolesResponse('User roles updated successfully'));
          });
        });
      });
    });
  }
}

module.exports = RolesService;
