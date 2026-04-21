class AuthenticationService {
  constructor(authenticationRepository) {
    this.authenticationRepository = authenticationRepository;
  }

  validate(credential, callback) {
    this.authenticationRepository.userLogin(credential, callback);
  }

  InsertUser(user, callback) {
    this.authenticationRepository.InsertUser(user, callback);
  }
}

module.exports = AuthenticationService;