class SmeService {
  constructor(repository) {
    this.repository = repository;
  }

  getStudentsNeedingImprovement(callback) {
    const threshold = 60;

    this.repository.getFailedResults(threshold, callback);
  }
}

module.exports = SmeService;