class MentorsService {
  constructor(mentorRepository) {
    this.repository = mentorRepository;
  }

  getMenteeCount(id, callback) {
    this.repository.getMenteeCount(id, callback);
  }

  getMentees(id, callback) {
    this.repository.getMentees(id, callback);
  }
}

module.exports = MentorsService;
