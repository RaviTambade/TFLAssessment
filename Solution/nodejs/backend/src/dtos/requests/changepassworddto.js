class ChangePasswordDto {
  constructor(id, oldPassword, newPassword) {
    this.id = id;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
  }
}

module.exports = ChangePasswordDto;