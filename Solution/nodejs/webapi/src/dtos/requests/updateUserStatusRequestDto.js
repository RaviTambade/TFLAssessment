const ALLOWED_STATUSES = ["ACTIVE", "INACTIVE", "BLOCKED"];

class UpdateUserStatusRequestDto {
  constructor(user_id, status) {
    this.user_id = user_id;
    this.status = status;
  }
}

module.exports = UpdateUserStatusRequestDto;
