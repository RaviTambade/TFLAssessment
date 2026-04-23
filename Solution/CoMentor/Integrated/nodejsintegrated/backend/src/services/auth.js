class Auth{
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  validate(credential, callback) {
    this.authRepository.validate(credential, callback);
  }

  register(user, callback) {
    this.authRepository.register(user, callback);
  }

  changePassword(changePassword, callback) {
      this.authRepository.changePassword(changePassword, callback);
  }
 

  
}

module.exports = Auth;