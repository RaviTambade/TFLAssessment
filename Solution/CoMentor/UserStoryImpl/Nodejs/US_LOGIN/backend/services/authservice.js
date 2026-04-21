class AuthenticationService {
  constructor(authenticationRepository) {
    this.authenticationRepository = authenticationRepository;
  }

  validate(credential, callback) {
    this.authenticationRepository.userLogin(credential, callback);
  }
}

module.exports = AuthenticationService;