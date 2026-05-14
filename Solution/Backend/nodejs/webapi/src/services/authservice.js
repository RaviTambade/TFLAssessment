class AuthService{
  constructor(authRepository) {
    this.repository = authRepository;
  }

  validateUser(credential, callback) {
    this.repository.validateUser(credential, callback);
  }

  register(user, callback) {
    this.repository.register(user, callback);
  }

  changePassword(changePassword, callback) {
      this.repository.changePassword(changePassword, callback);
  }
 
}

module.exports = AuthService;