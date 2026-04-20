class UserProfileService {
  constructor(profileRepository) {
    this.profileRepository = profileRepository;
  }

  updateProfile(userId, data, callback) {
    this.profileRepository.updateFullProfile(userId, data, callback);
  }

  update(userId, data, callback) {
    this.profileRepository.updateFullProfile(userId, data, callback);
  }

  updateUser(userId, data, callback) {
    this.profileRepository.updateFullProfile(userId, data, callback);
  }

  updatePersonInformation(userId, data, callback) {
    this.profileRepository.updatePersonInformation(userId, data, callback);
  }

  updateProfessionalInformation(userId, data, callback) {
    this.profileRepository.updateProfessionalInformation(userId, data, callback);
  }

  updateAcademicInformation(userId, data, callback) {
    this.profileRepository.updateAcademicInformation(userId, data, callback);
  }

  updateProfessinalInformation(userId, data, callback) {
    this.profileRepository.updateProfessionalInformation(userId, data, callback);
  }
}

module.exports = UserProfileService;