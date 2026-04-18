class UserProfileService {
  constructor(profileRepository) {
    this.profileRepository = profileRepository
  }

  async updateProfile(userId, data) {
    return this.profileRepository.updateFullProfile(userId, data)
  }

  async update(userId, data) {
    return this.profileRepository.updateFullProfile(userId, data)
  }

  async updateUser(userId, data) {
    return this.profileRepository.updateFullProfile(userId, data)
  }

  async updatePersonInformation(userId, data) {
    return this.profileRepository.updatePersonInformation(userId, data)
  }

  async updateProfessionalInformation(userId, data) {
    return this.profileRepository.updateProfessionalInformation(userId, data)
  }

  async updateAcademicInformation(userId, data) {
    return this.profileRepository.updateAcademicInformation(userId, data)
  }

  async updateProfessinalInformation(userId, data) {
    return this.profileRepository.updateProfessionalInformation(userId, data)
  }
}

module.exports = UserProfileService