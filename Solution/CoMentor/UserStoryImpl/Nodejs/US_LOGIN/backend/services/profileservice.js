class ProfileService {
  constructor(profilerepository) {
    this.profilerepository = profilerepository;
  }

  getProfileName(userNameRequest, callback) {
    this.profilerepository.getProfileName(userNameRequest, callback);
  }
}

module.exports = ProfileService;