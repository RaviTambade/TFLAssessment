class AuthService{
  constructor(authRepository) {
    this.repository = authRepository;
  }

  validate(credential, callback) {
    this.repository.validate(credential, callback);
  }

  register(user, callback) {
    this.repository.register(user, callback);
  }

  changePassword(changePassword, callback) {
      this.repository.changePassword(changePassword, callback);
  }
 
}

module.exports = AuthService;