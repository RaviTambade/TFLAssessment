class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  validate(credential, callback) {
    this.authRepository.validate(credential, callback);
  }

  register(user, callback) {
    this.authRepository.register(user, callback);
  }
}

module.exports = AuthService;