class UpdateUserRolesRequest {
  constructor(userId, roleIds) {
    this.userId = userId;
    this.roleIds = roleIds;
  }
}

module.exports = UpdateUserRolesRequest;